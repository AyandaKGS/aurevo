import { prisma } from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { data } = await req.json();

    try {
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
                    id: data.id
                },
            });

            if (room) newRoom = await prisma.room.update({
                where: {
                    id: room.id
                },
                data: body
            });

        } else {
            newRoom = await prisma.room.create({
                data: body
            });
        }

        return new NextResponse(JSON.stringify(newRoom), { status: 200 });
    } catch (error: any) {
        console.error("Error creating or updating room", error.message);
        return new NextResponse(error.message, { status: 500 });
    }
}