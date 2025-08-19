import { env } from '@/env';
import { prisma } from '@/lib/db/prisma';
import { redisClient } from '@/lib/redis';
import { rateLimit } from '@/lib/utils/rate-limit';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {

    const { isRateLimitReached, remaining } = await rateLimit(req, 1, 1);

    if (isRateLimitReached) new NextResponse("Too many requests", { status: 429 });

    try {
        const { data } = await req.json();
        const { checkIn, checkOut, guests, name, email, phone, notes, room, roomId, image, description, amount, userId, receiveMarketing, featured, page } = data;

        const cacheKey = `ngoziliving-rooms-${featured}-${page}`;

        const booking = await prisma.booking.create({
            data: {
                checkIn,
                checkOut,
                roomId,
                guests: parseInt(guests),
                name,
                email,
                phone,
                notes,
                status: "Pending"
            }
        });

        if (receiveMarketing) await prisma.user.update({
            where: {
                userId
            },
            data: {
                receiveMarketing
            },
        });

        const cachedData = await redisClient.get(cacheKey);

        if (cachedData) {
            const rooms = JSON.parse(cachedData);
            let newRoom;

            if (featured) {
                newRoom = await prisma.room.findUnique({
                    where: {
                        id: roomId
                    },
                    select: {
                        id: true,
                        name: true,
                        features: true,
                        amenities: true,
                        availability: true,
                        images: true,
                        bookings: true,
                    },
                });
            } else {
                newRoom = await prisma.room.findUnique({
                    where: {
                        id: roomId
                    },
                    include: {
                        review: true,
                        bookings: true
                    },
                });
            };

            const updatedRooms = rooms.map((room: any) => {
                if (room.id === roomId) {
                    return newRoom;
                }
                return room;
            });
            await redisClient.set(cacheKey, JSON.stringify(updatedRooms));
        }

        // 1. Create a Stripe Product
        const product = await stripe.products.create({
            name: room,
            images: [image],
            description,
            metadata: {
                bookingId: booking.id, // Store reference to your booking

            },
        });

        // 2. Create a Price for the Product
        const price = await stripe.prices.create({
            unit_amount: amount * 100, // amount in cents
            currency: 'usd',
            product: product.id,
        });

        // 3. Create a Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                },
            ],
            metadata: {
                userId,
                bookingId: booking.id,
            },
            mode: 'payment',
            success_url: `${env.NEXT_PUBLIC_BASE_URL}?success=true`,
            cancel_url: `${env.NEXT_PUBLIC_BASE_URL}/cancel`,
        });

        return new NextResponse(JSON.stringify({ url: session.url }), {
            status: 200, headers: {
                "X-RateLimit-Limit": "1",
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + 1000).toISOString(),
            }
        });

    } catch (error: any) {
        console.error("Error creating checkout", error.message);
        return new NextResponse(error.message, { status: 500 });
    }
}
