import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    console.log("Req", req);

    try {

        return new NextResponse("Review successfully created.", { status: 200 });

    } catch (error: any) {
        console.error("Error creating review", error.message);
        return new NextResponse(error.message, { status: 500 });
    }
}