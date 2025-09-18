import { prisma } from "@/lib/db/prisma";
import { redisClient } from "@/lib/redis";
import { rateLimit } from "@/lib/utils/rate-limit";
import { addDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId")!;
    const cacheKey = `user-${userId}`;

    const { isRateLimitReached, remaining } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) return new NextResponse("Too many requests.", {
        status: 429, headers: {
            "X-RateLimit-Limit": "1",
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
        }
    });

    try {
        const cachedData = await redisClient.get(cacheKey);
        if (cachedData) {
            return new NextResponse(cachedData, { status: 200 });
        };
        
        const user = await prisma.user.findUnique({
            where: {
                userId
            },
        });
        const expiryDate = addDays(new Date(), 1);

        await redisClient.set(cacheKey, JSON.stringify(user), "EX", Math.floor(expiryDate.getTime() / 1000));
        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (error: any) {
        console.error("Error getting user", error.message);
        return new NextResponse(error.message, { status: 500 });

    }
}