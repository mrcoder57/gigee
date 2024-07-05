import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";
import connectToDb from "@/dbConfig/dbCon";
import User from "@/models/userModel";

import { sendOtpEmail } from "@/utils/otpHnadler";

// Define the Zod schema for request validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export async function POST(req: Request) {
  try {
    // Parse and validate the request body
    const parsedBody = await req.json();
    const { email, password } = loginSchema.parse(parsedBody);

    await connectToDb();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
    const otp=await sendOtpEmail(email);
    user.otp=otp
    await user.save()
    // Create a session or JWT token here for the user
    // This is a placeholder. You would typically use a library to handle sessions or JWT tokens.
    const token = "your_jwt_token_or_session_id";

    return NextResponse.json(
      { message: "Login successful", token },
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
