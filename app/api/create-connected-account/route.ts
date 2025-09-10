import { env } from "@/env";
import { countries } from "@/lib/countries";
import { prisma } from "@/lib/db/prisma";
import { rateLimit } from "@/lib/utils/rate-limit";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
    const { data } = await req.json();
    const { userId, role, email, country } = data;
    
    if (role !== "host") return new NextResponse("Unauthorized", { status: 401 });
    
    const { isRateLimitReached, remaining } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) return new NextResponse("Too many requests.", { status: 429 });

    try {

        const account = await stripe.accounts.create({
            type: "express", // you can also use "standard" or "custom"
            country: countries.find((cntry) => cntry.name === country)!.code,   // or detect dynamically
            email,
            business_type: "individual",
            tos_acceptance: {
                service_agreement: "recipient",
            },
            capabilities: {
                transfers: { requested: true },
            },
        });

        // Save account.id to your DB linked to the user
        await prisma.user.update({
            where: {
                userId
            },
            data: {
                stripeAccountId: account.id
            },
        });

        const accountLink = await stripe.accountLinks.create({
            account: account.id,
            refresh_url: `${env.NEXT_PUBLIC_BASE_URL}/reauth`,
            return_url: `${env.NEXT_PUBLIC_BASE_URL}/cms`,
            type: "account_onboarding",
        });

        return new NextResponse(JSON.stringify({ url: accountLink.url }), {
            status: 200,
            headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            },
        });
    } catch (error: any) {
        console.error("Error creating stripe connect account", error.message);
        return new NextResponse(error.message, {
            status: 500,
            headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });
    }
};