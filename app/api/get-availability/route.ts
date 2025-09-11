import { prisma } from "@/lib/db/prisma";
import { rateLimit } from "@/lib/utils/rate-limit";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const { remaining, isRateLimitReached } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) return new NextResponse("Too many requests", { status: 429 });

    try {
        const availability = await prisma.availability.findFirst();

        return new NextResponse(JSON.stringify(availability), {
            status: 200, headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        })

    } catch (error: any) {
        console.error("Error getting availability", error.message);
        return new NextResponse(error.message, { status: 500 });
    }
}