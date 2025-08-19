import { prisma } from "@/lib/db/prisma";
import { redisClient } from "@/lib/redis";
import { rateLimit } from "@/lib/utils/rate-limit";
import { addDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const from = new URL(req.url).searchParams.get("from");
    const cacheKey = `aurevo-${from}-stats`;

    const { isRateLimitReached, remaining } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) return new NextResponse("Too many requests.", { status: 429 });

    try {
        const rooms = await prisma.room.findMany({
            select: {
                price: true,
                availability: from === 'rooms' && true,
                status: from === "cms" && true,
                review: {
                    select: {
                        rating: true
                    }
                }
            }
        });

        const totalRating = rooms.reduce((roomAcc, room) => {
            const { review } = room;
            if (review.length > 0) {
                const roomTotal = review?.reduce((revAcc: number, review: any) => revAcc + review.rating, 0);
                const roomAvg = roomTotal / review.length;
                return roomAcc + roomAvg;
            } else {
                return roomAcc + 5
            }
        }, 0);

        let stats;
        if (from === "rooms") {
            stats = {
                totalRooms: rooms.length,
                totalAvailable: rooms.filter((room) => room.availability === "available").length,
                startingFrom: Math.min(...rooms.map((room) => room.price)),
                averageRating: (totalRating / rooms.length).toFixed(1)
            };
        } else {
            stats = {
                totalRooms: rooms.length,
                totalActive: rooms.filter((room) => room.status === "active").length,
                averagePrice: Math.round(rooms.reduce((acc, room) => acc + room.price, 0) / rooms.length),
                averageRating: (totalRating / rooms.length).toFixed(1)
            };
        }

        const expiryDate = addDays(new Date(), 1);

        await redisClient.set(cacheKey, JSON.stringify(stats), "EX", Math.floor(expiryDate.getTime() / 1000), "NX");

        return new NextResponse(JSON.stringify(stats), {
            status: 200, headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });

    } catch (error: any) {
        console.error("Error getting stats", error.message);
        return new NextResponse(error.message, { status: 500 })
    }

}