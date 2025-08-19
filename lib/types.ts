import { review, room } from "@/prisma/generated/db1";

export type RoomWithReviews = room & { review: review[] }
