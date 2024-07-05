import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectToDb from "@/dbConfig/dbCon";
import User from "@/models/userModel";
import { z } from "zod";
import { transporter } from "@/utils/otpHnadler";
import { sendOtpEmail } from "@/utils/otpHnadler";
// const signUpSchema = z.object({
//   username: z.string().min(3, "Username must be at least 3 characters long"),
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters long"),
// });

export async function POST(req: NextRequest) {
  const { username, email, password } = await req.json();

  if (!username || !email || !password) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  await connectToDb();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 401 }
    );
  }

  
  const otp=await sendOtpEmail(email)

 
  const hashedPassword = await bcrypt.hash(password, 10);
 
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    otp: otp,
  });

  try {
    await newUser.save();
    await sendOtpEmail(email);
    return NextResponse.json(
      { message: "User created successfully", newUser },
      { status: 201 }
    );
    
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error creating user ", error },
      { status: 500 }
    );
  }
}
