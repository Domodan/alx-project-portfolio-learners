
import Tutor from "@/models/tutor";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req: Request,) => {
    try {
        await connectToDB()

        const tutors = await Tutor.find({})

        return NextResponse.json(tutors, { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch tutors", { status: 500 })
    }
} 

