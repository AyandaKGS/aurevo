import { prisma } from "@/lib/db/prisma";
import { redisClient } from "@/lib/redis";
import { rateLimit } from "@/lib/utils/rate-limit";
import { addDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const { searchParams } = url;
    const userId = searchParams.get("userId");
    const cacheKey = `aurevo-rooms-${userId}`;

    const { remaining, isRateLimitReached } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) return new NextResponse("Too many requests.", { status: 429 });

    try {
        // const cachedData = await redisClient.get(cacheKey);
        // if (cachedData) return new NextResponse(cachedData, {
        //     status: 200, headers: {
        //         "X-RateLimit-Limit": "1",
        //         "X-RateLimit-Remaining": remaining.toString(),
        //         "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
        //     }
        // });

        const rooms = await prisma.room.findMany({
            where: {
                userId
            },
            include: {
                review: true,
                bookings: true
            },
            orderBy: {
                id: "desc"
            },
        });

        const expiryDate = addDays(new Date(), 1);

        await redisClient.set(cacheKey, JSON.stringify(rooms), "EX", Math.floor(expiryDate.getTime() / 1000));

        return new NextResponse(JSON.stringify(rooms), {
            status: 200, headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });
    } catch (error: any) {
        console.error("Error getting rooms", error.message);
        return new NextResponse(error.message, { status: 500 });
    }
}