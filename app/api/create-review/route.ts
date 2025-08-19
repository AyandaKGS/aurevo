import { prisma } from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

    try {

        const reviews = [{
            review: "Ngozi and Uzoma were great hosts. Always responsive and very helpful, they made sure my stay was as comfortable as possible. One of my best Airbnb experience. I will stay here again and again.",
            rating: 5,
        },
        {
            review: "The apartment is very clean and well-decorated. Host was very friendly and responsive. I would not hesitate to stay here again.",
            rating: 5,
        },
        {
            review: "Great space! Very clean and comfortable. The studio room is a bit small, I had to squeeze myself to enter into the shower, however it wasn’t a deal breaker for me. Something to consider for those with bigger builds as I am on the smaller side. The host and the staff and super helpful and responsive. I felt very welcomed and very at home. The location is very convenient as well. Would definitely rebook for a future stay.",
            rating: 5,
        },
        {
            review: "Very nice place with proximity to so many amenities, Good staff and great ambience. Definitely coming back!",
            rating: 5,
        },
        {
            review: "I have used this company a few times. They have great apartments and they’re very helpful. They make sure to follow-up quickly and be available for guests.",
            rating: 5,
        }
        ]


        for (const review of reviews) {

           const booking = await prisma.bookings.create({
                data: {
                    roomId: "6893d6ed73929110ed86f72d"
                }
            });

            await prisma.review.create({
                data: {
                    ...review,
                    bookingId: booking.id,
                    roomId: "6893d6ed73929110ed86f72d"
                }
            });
        }

        return new NextResponse("Review successfully created.", { status: 200 });

    } catch (error: any) {
        console.error("Error creating review", error.message);
        return new NextResponse(error.message, { status: 500 });
    }
}