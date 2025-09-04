import { booking, review, room } from "@/generated";

export type RoomWithReviews = room & { review: review[] };

export type BookingWithRoom = booking & { room: room };