import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import UserModel from "@/models/user";
interface NewUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const { email, firstName, lastName, password } =
    (await req.json()) as NewUserRequest;
  try {
    await connectToDB();
    const oldUser = await UserModel.findOne({ email });

    if (oldUser) {
      return NextResponse.json(
        { error: "email is already in use!" },
        { status: 442 }
      );
    }

    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
};
