import nodemailer from "nodemailer";
import User, { IUser } from "@/models/userModel";
import { v4 as uuidv4 } from "uuid";

export const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

export const sendOtpEmail = async (email: string) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await transporter.sendMail({
    from: "gigbnbverifi@gmail.com",
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  });
  return otp;
};

export const verifyOtp = async (email: string, otp: string) => {
  const user: IUser | null = await User.findOne({ email });

  if (!user || !user.otp || !user.otpExpiry) {
    throw new Error("Invalid OTP");
  }

  if (user.otp !== otp || user.otpExpiry < new Date()) {
    throw new Error("OTP expired or incorrect");
  }

  user.otp = undefined;
  user.otpExpiry = undefined;
  await user.save();

  return user;
};
