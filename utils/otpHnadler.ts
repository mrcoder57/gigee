import nodemailer from "nodemailer";
import User, { IUser } from "@/models/userModel";
import { v4 as uuidv4 } from "uuid";

export const transporter = nodemailer.createTransport({
  service: "gmail", // or other services like 'yahoo', 'hotmail
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});
export const generateOtp=()=>{
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return otp
}
export const sendOtpEmail = async (email: string,otp:string) => {
  try {
   
    await transporter.sendMail({
      from: "gigbnbverifi@gmail.com",
      to: email,
      subject: "OTp for validation ",
      text: `Your OTP code is ${otp}`,
    });
    console.log("Email sent: ");
    return otp;
  } catch (error) {
    console.log(error);
  }
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

};
