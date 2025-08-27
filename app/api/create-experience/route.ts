import { prisma } from "@/lib/db/prisma";
import { Availability, Status } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {

        const experiences = [
            {
                name: "Personal Trainer",
                address: "",
                amenities: [
                    "Tailored workout programs",
                    "1-on-1 training sessions",
                    "State-of-the-art equipment",
                    "Wellness & nutrition coaching"
                ],
                featured: true,
                features: [
                    "Custom fitness assessments",
                    "Personalized nutrition plans",
                    "Flexible indoor/outdoor training",
                    "Goal-oriented progress tracking"
                ],
                maxPax: 10,
                location: "",
                popular: true,
                availability: "limited" as Availability,
                description: "Achieve your fitness goals with a certified personal trainer offering custom workouts, nutrition coaching, and one-on-one guidance.",
                images: [
                    "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1601646721773-8a73c6739bcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1517837414457-37b44cea4818?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ],
                price: 0,
                status: "active" as Status,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Wine Tasting",
                address: "",
                amenities: [
                    "Private sommelier-led tastings",
                    "Curated fine wine selection",
                    "Cheese & charcuterie pairing",
                    "Stunning ambience"
                ],
                featured: true,
                features: [
                    "Exclusive wine collections",
                    "Professional sommelier guidance",
                    "Food and wine pairing experiences",
                    "Elegant and intimate setting"
                ],
                maxPax: 10,
                location: "",
                popular: true,
                availability: "exclusive" as Availability,
                description: "Indulge in a refined wine tasting experience led by expert sommeliers, featuring curated selections and perfect pairings.",
                images: [
                    "https://images.unsplash.com/photo-1620455640440-2b506a0e7f6c?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1585775670896-96685229346a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1585775670896-96685229346a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1616240580835-85fec1c8188b?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ],
                price: 0,
                status: "active" as Status,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];

        for (const experience of experiences) {
            await prisma.experience.create({
                data: experience
            })
        };

        return new NextResponse("Success", { status: 200 });

    } catch (error: any) {
        console.error("Error creating experience", error);
        return new NextResponse(error.message, { status: 500 });
    }
}