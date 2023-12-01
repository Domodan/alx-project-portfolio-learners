import Course from "@/models/course";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const courses = await Course.find().populate({
      path: "tutorId",
      select: "name",
    });

    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch courses", { status: 500 });
  }
};
