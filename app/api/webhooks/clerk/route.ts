import { env } from "@/env";
import { prisma } from "@/lib/db/prisma";
import { clerkClient, WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";

export async function POST(req: NextRequest) {
    if (!env.CLERK_SIGNING_SECRET) throw new Error("Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local");

    const wh = new Webhook(env.CLERK_SIGNING_SECRET);

    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) return new NextResponse("Error: Missing Svix headers", { status: 400 });

    const payload = await req.json();
    const body = JSON.stringify(payload);

    let evt: WebhookEvent;

    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;

    } catch (error) {
        console.error("Error: Unable to verify webhook:", error);
        return new NextResponse("Error: Unable to verify webhook", { status: 400 });
    }

    const { id } = evt.data;
    const eventType = evt.type;
    console.log(`Received as webhook with an ID of ${id} and type of ${eventType}`);

    try {
        if (eventType === "user.created") {
            const { email_addresses, unsafe_metadata, first_name, last_name, image_url } = evt.data;
            const email = email_addresses[0]?.email_address || "";
            const { role } = unsafe_metadata;

            if (role === "guest") {

                (await clerkClient()).users.updateUser(id!, {
                    publicMetadata: {
                        role: "guest"
                    },
                });

                await prisma.user.create({
                    data: {
                        userId: id!,
                        email,
                        firstName: first_name || "",
                        lastName: last_name || "",
                        imageUrl: image_url,
                        role,
                    }
                });
                return new NextResponse("Successfully processed webhook", { status: 200 });
            };

            (await clerkClient()).users.updateUser(id!, {
                publicMetadata: {
                    role: "host"
                },
            });

            await prisma.user.create({
                data: {
                    userId: id!,
                    email,
                    firstName: first_name || "",
                    lastName: last_name || "",
                    imageUrl: image_url,
                    role: "host"
                }
            });
            return new NextResponse("Successfully processed webhook", { status: 200 });

        } else if (eventType === "user.updated") {
            const { image_url } = evt.data;

            await prisma.user.update({
                where: {
                    userId: id
                },
                data: {
                    imageUrl: image_url
                },
            });

            return new NextResponse("Webhook successfully processed.", { status: 200 });
        } else if (eventType === "user.deleted") {

            await prisma.user.delete({
                where: {
                    userId: id
                }
            });
            return new NextResponse("Webhook successfully processed.", { status: 200 });
        }
        return new NextResponse("Webhook successfully processed.", { status: 200 });

    } catch (error: any) {
        console.error("Error handling webhook:", error);
        return new NextResponse(error, { status: 500 })
    }

}