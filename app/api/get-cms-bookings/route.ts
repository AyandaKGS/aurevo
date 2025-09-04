import { prisma } from "@/lib/db/prisma";
import { redisClient } from "@/lib/redis";
import { rateLimit } from "@/lib/utils/rate-limit";
import { addDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const { searchParams } = url;
    const page = searchParams.get("page");
    const pageSize = searchParams.get("pageSize") || "12";
    const userId = searchParams.get("userId");
    const cacheKey = `aurevo-bookings-${userId}-${page}`;

    const { remaining, isRateLimitReached } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) return new NextResponse("Too many requests.", { status: 429 });

    try {
        const cachedData = await redisClient.get(cacheKey);
        if (cachedData) return new NextResponse(cachedData, {
            status: 200, headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });

        const bookings = await prisma.booking.findMany({
            where: {
                room: {
                    userId
                },
            },
            take: parseInt(pageSize),
            skip: (parseInt(page!) - 1) * parseInt(pageSize),
            include: {
                room: true
            },
        });


        const expiryDate = addDays(new Date(), 1);

        await redisClient.set(cacheKey, JSON.stringify(bookings), "EX", Math.floor(expiryDate.getTime() / 1000));


        return new NextResponse(JSON.stringify(bookings), {
            status: 200,
            headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            },
        });
    } catch (error: any) {
        console.error("Error getting cms bookins", error.message);
        return new NextResponse(error.message, { status: 500 });
    }

}