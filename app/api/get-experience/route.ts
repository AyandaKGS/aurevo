import { prisma } from "@/lib/db/prisma";
import { redisClient } from "@/lib/redis";
import { rateLimit } from "@/lib/utils/rate-limit";
import { addDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const cacheKey = `aurevo-experience-${id}`;

    if (!id) return new NextResponse("Missing Id", { status: 400 });

    const { isRateLimitReached, remaining } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) return new NextResponse("Too Many Requests", { status: 429 });

    try {
        const cachedData = await redisClient.get(cacheKey);
        if (cachedData) return new NextResponse(cachedData, {
            status: 200, headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });

        const experience = await prisma.experience.findUnique({
            where: {
                id: id!
            },
            include: {
                review: true,
                bookings: true,
            }
        });

        const expiryDate = addDays(new Date(), 1);

        await redisClient.set(cacheKey, JSON.stringify(experience), "EX", Math.floor(expiryDate.getTime() / 1000), "NX");

        return new NextResponse(JSON.stringify(experience), {
            status: 200, headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        })

    } catch (error: any) {
        console.error("Error getting experience", error.message);
        return new NextResponse(error.message, { status: 500 })
    }

}