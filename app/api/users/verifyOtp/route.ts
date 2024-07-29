import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import User, { IUser } from "@/models/userModel";
import connectToDb from "@/dbConfig/dbCon";
import { generateToken } from "@/utils/jwtHandler";
const otpSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().min(6, "otp must be at least 6 characters long"),
});
export async function POST(req: NextRequest) {
  try {
    const parsedBody = await req.json();
    const { email, otp } = otpSchema.parse(parsedBody);
    await connectToDb();

    const user: IUser | null = await User.findOne({ email });

    if (!user || !user.otp) {
      return NextResponse.json(
        { message: "please provide with valid otp" },
        { status: 400 }
      );
    }

    if (user.otp !== otp) {
      return NextResponse.json(
        { message: "please provide with valid otp" },
        { status: 401 }
      );
    }
    user.otp = undefined;
    user.isVerified=true
    user.otpExpiry = undefined;
    await user.save();
    const token = await generateToken(user);
    const userId=user._id
    return NextResponse.json(
      { message: "otp verified successfully", token,userId },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "error verifying otp" },
      { status: 500 }
    );
  }
}
