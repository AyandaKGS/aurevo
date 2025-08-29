import { NextResponse } from "next/server"
import axios from "axios"
import { env } from "@/env"

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const input = searchParams.get("input")

    if (!input) {
        return NextResponse.json({ predictions: [] })
    }

    try {
        const res = await axios.get(
            "https://maps.googleapis.com/maps/api/place/autocomplete/json",
            {
                params: {
                    input,
                    types: "address",
                    key: env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
                },
            }
        )

        return new NextResponse(JSON.stringify(res.data), { status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}
