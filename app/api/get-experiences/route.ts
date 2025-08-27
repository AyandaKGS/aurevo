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
    const featured = searchParams.get("featured") || false;
    const cacheKey = `aurevo-experiences-${featured}-${page}`;

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

        let experiences;
        if (featured) {
            experiences = await prisma.experience.findMany({
                where: {
                    AND: [
                        {
                            featured: true,
                        },
                        {
                            status: "active"
                        }
                    ],
                },
                select: {
                    id: true,
                    name: true,
                    features: true,
                    amenities: true,
                    availability: true,
                    images: true,
                    price: true,
                    maxPax: true,
                    bookings: true,
                },
                take: parseInt(pageSize),
                orderBy: {
                    id: "desc"
                },
            });
        } else {
            experiences = await prisma.experience.findMany({
                take: parseInt(pageSize),
                skip: (parseInt(page!) - 1) * parseInt(pageSize),
                include: {
                    review: true,
                    bookings: true
                },
                orderBy: {
                    id: "desc"
                },
            });
        };

        const expiryDate = addDays(new Date(), 1);

        await redisClient.set(cacheKey, JSON.stringify(experiences), "EX", Math.floor(expiryDate.getTime() / 1000));

        return new NextResponse(JSON.stringify(experiences), {
            status: 200, headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });
    } catch (error: any) {
        console.error("Error getting experiences", error.message);
        return new NextResponse(error.message, { status: 500 });
    }
}