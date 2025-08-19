import { prisma } from "@/lib/db/prisma";
import { redisClient } from "@/lib/redis";
import { rateLimit } from "@/lib/utils/rate-limit";
import { addDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") as string;
    const page = parseInt(searchParams.get("page")!);
    const cacheKey = `auvero-rooms-${page}`;

    const { isRateLimitReached, remaining } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) return new NextResponse("Too many requests.", { status: 429 });

    try {

        await prisma.room.delete({
            where: {
                id
            }
        });

        const cachedData = await redisClient.get(cacheKey);

        if (cachedData) {
            const rooms = JSON.parse(cachedData);
            const expiryDate = addDays(new Date(), 1);

            await redisClient.set(cacheKey, JSON.stringify(rooms.filter((room: any) => room.id !== id)), "EX", Math.floor(expiryDate.getTime() / 1000));
        };

        return new NextResponse("Room successfully deleted.", {
            status: 200,
            headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });

    }
    catch (error: any) {
        console.error("Error deleting room", error.message);
        return new NextResponse(error.message, { status: 500 })
    }

}