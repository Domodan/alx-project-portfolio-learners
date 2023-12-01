import Category from "@/models/category";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req: Request,) => {
    try {
        await connectToDB()

        const categories = await Category.find({})

        return NextResponse.json(categories, { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch categories", { status: 500 })
    }
} 

