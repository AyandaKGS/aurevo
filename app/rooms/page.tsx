"use client"
import RoomsComp from "@/components/RoomPage"
import { Suspense } from "react"

export default function RoomsPage() {
    return (
        <Suspense>
            <RoomsComp />
        </Suspense>
    )
};