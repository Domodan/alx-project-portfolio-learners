import Course from "@/models/course";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: any) => {
  try {
    await connectToDB();

    const course = await Course.findById(params.id);
    // .populate({
    //   path: "tutorId",
    //   select: "name",
    // });
    if (!course) return new Response("Prompt Not Found", { status: 404 });

    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch courses", { status: 500 });
  }
};
