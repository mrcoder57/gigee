"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loginuser, verifyOtp } from "@/utils/api-handler";
import { toast } from "sonner";
import Cookies from "js-cookie";
import Image from "next/image";
import { Signup } from "./sign-up";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(true);
  const [error, setError] = useState(null);

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      const response = await Loginuser(email, password);
      if (response.user && !response.user.isVerified) {
        setIsVerified(false);
        toast.success("OTP sent successfully, please verify");
      } else {
        toast.success("Login successful");
        Cookies.set("token", response.token, { expires: 30 });
        Cookies.set("userId", response.userId, { expires: 30 });
        window.location.reload();
        // console.log(response.userId)
      }
    } catch (error: any) {
      setError(error.message || "An error occurred during login");
      toast.error(error.message || "An error occurred during login");
    }
  };
  const handleOtp = async (event: any) => {
    event.preventDefault();

    try {
      const response = await verifyOtp(email, otp);

      // console.log(response.token);
      // console.log(response.userId);
      Cookies.set("token", response.token, { expires: 30 });
      Cookies.set("userId", response.userId, { expires: 30 });

      toast.success("user verified and Logged In ");
      window.location.reload();
    } catch (err: any) {
      if (err.message) {
        toast.error(err.message);
        console.log(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };
  return (
    <div className="lg:block bg-white ">
      <Dialog>
        <DialogTrigger asChild>
        <div className=' flex flex-row cursor-pointer items-center justify-center gap-x-2'>
            <Image src="/login.svg" alt="delete" width={23} height={23} /> 
           
              <span className=' text-center text-[16px] font-[500] '> Login</span>
           
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[350px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Please provide your login credentials
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="email" className="">
                Email
              </Label>

              <Input
                id="email"
                placeholder="example@gmail.com"
                className="col-span-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="password" className="">
                Password
              </Label>
              <Input
                id="password"
                placeholder="password"
                className="col-span-3"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {!isVerified && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="otp" className="text-right">
                  OTP
                </Label>
                <Input
                  id="otp"
                  placeholder="Enter OTP"
                  className="col-span-3"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className=" flex flex-row  items-center">
            <p>Do not have an Account</p>
            <Signup />
          </div>
          <DialogFooter>
            {!isVerified ? (
              <Button type="submit" variant="ghost" onClick={handleOtp}>
                Submit OTP
              </Button>
            ) : (
              <Button type="submit" variant="ghost" onClick={handleLogin}>
                Login
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
