import { prisma } from "@/lib/db/prisma";
import { redisClient } from "@/lib/redis";
import { rateLimit } from "@/lib/utils/rate-limit";
import { addDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function PUT(req: NextRequest) {
    const { data } = await req.json();
    const { userId, ...rest } = data;
    const cacheKey = `auvero-rooms-1-${userId}`;

    const { remaining, isRateLimitReached } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) return new NextResponse("Too many requests.", { status: 429 });

    try {

        console.log("Data", data);

        if (data.roomIds) {
            const { roomIds, userId, pricePerNight, ...rest } = data;

            for (const id of roomIds) {
                if (pricePerNight) {
                    await prisma.room.update({
                        where: {
                            id_userId: {
                                id,
                                userId
                            },
                        },
                        data: {
                            price: pricePerNight,
                            availabilityStatus: {
                                push: rest,
                            },
                        },
                    });
                } else {
                    await prisma.room.update({
                        where: {
                            id_userId: {
                                id,
                                userId
                            },
                        },
                        data: {
                            availabilityStatus: {
                                push: rest,
                            },
                        },
                    });
                }
            }


            return new NextResponse("Successfully updated rooms", { status: 200 });
        };

        const body = {
            ...data,
            price: parseInt(data.price),
            originalPrice: parseInt(data.originalPrice),
            size: parseInt(data.size),
            maxGuests: parseInt(data.maxGuests),
        };


        let newRoom;

        if (body.id) {
            const room = await prisma.room.findUnique({
                where: {
                    id_userId: {
                        id: data.id,
                        userId
                    },
                },
            });

            if (room) {
                delete rest.id;
                newRoom = await prisma.room.update({
                    where: {
                        id_userId: {
                            id: room.id,
                            userId
                        },
                    },
                    data: rest
                });
            }

        } else {
            newRoom = await prisma.room.create({
                data: body
            });
        }

        const rooms = await redisClient.get(cacheKey);

        if (rooms) {
            const parsedRooms = JSON.parse(rooms);
            parsedRooms.unshift(newRoom);

            const expiryDate = addDays(new Date(), 1);

            await redisClient.set(cacheKey, JSON.stringify(parsedRooms), "EX", Math.floor(expiryDate.getTime() / 1000))
        }

        return new NextResponse(JSON.stringify(newRoom), {
            status: 200,
            headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });
    } catch (error: any) {
        console.error("Error creating or updating room", error.message);
        return new NextResponse(error.message, {
            status: 500, headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });
    }
}