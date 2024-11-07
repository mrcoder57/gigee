import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";
import connectToDb from "@/dbConfig/dbCon";
import User from "@/models/userModel";
import { generateToken } from "@/utils/jwtHandler";
import { generateOtp, sendOtpEmail } from "@/utils/otpHnadler";
import { use } from "react";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long").optional(),
});

export async function POST(req: Request) {
  try {
    const parsedBody = await req.json();
    const { email, password } = loginSchema.parse(parsedBody);
  
    await connectToDb();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    if (!password || user.password === undefined) {
      return NextResponse.json({ message: "Password required" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    if (!user.isVerified) {
      const otp = await generateOtp();
      user.otp = otp;
      await user.save();
      await sendOtpEmail(email, otp);

      return NextResponse.json(
        {
          message: "User not verified. OTP sent to email.",
          user: {
            email: user.email,
            isVerified: user.isVerified,
            otpSent: true,
          },
        },

        { status: 200 }
      );
    }

    const token = await generateToken(user);
      const userId=user._id
    return NextResponse.json(
      { message: "Login successful", token,userId },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors.map((err) => err.message).join(", ") },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Error logging in", error: error },
      { status: 500 }
    );
  }
}
