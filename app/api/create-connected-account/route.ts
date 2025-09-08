import { env } from "@/env";
import { prisma } from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
    const { userId, role, country } = await req.json();

    if (role !== "host") return new NextResponse("Unauthorized", { status: 401 });

    try {

        const account = await stripe.accounts.create({
            type: "express", // you can also use "standard" or "custom"
            country: "US",   // or detect dynamically
            email: "user@email.com",
            capabilities: {
                transfers: { requested: true },
            },
        });

        // Save account.id to your DB linked to the user
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                stripeAccountId: account.id
            },
        });

        const url = await stripe.accountLinks.create({
            account: account.id,
            refresh_url: "https://your-app.com/reauth",
            return_url: "https://your-app.com/settings",
            type: "account_onboarding",
        });

        return new NextResponse(JSON.stringify({ account, url }), { status: 200 });
    } catch (error: any) {
        console.error("Error creating stripe connect account", error.message);
        return new NextResponse(error.message, { status: 500 });
    }
};