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
import Cookies from "js-cookie";
import { toast } from "sonner";
import { Signupuser, verifyOtp } from "@/utils/api-handler";
import axios from "axios";
export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [userRole, setUserRole] = useState("");
  const [isDisable, setIsdisable] = useState(true);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      console.log(userRole);
      const response = await axios.post("/api/users/signup", {
        username: username,
        email: email,
        userRole: userRole,
        password: password,
      });
      console.log(response);
      toast.success("OTP sent successfully");
      setIsdisable(false);
    } catch (err: any) {
      if (err.message) {
        toast.error(err.message);
        console.log(err);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  const handleOtp = async (event: any) => {
    event.preventDefault();

    try {
      const response = await verifyOtp(email, otp);
      setIsdisable(false);
      Cookies.set("token", response.token);
      toast.success("user verified and Logged In ");
      Cookies.set("token", response.token, { expires: 30 });
      Cookies.set("userId", response.userId, { expires: 30 });
    } catch (err: any) {
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };
  return (
    <div className=" block bg-white ">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link">Signup</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Please provide with your login crendentials
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                defaultValue="example@gmail.com"
                className="col-span-3"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Username
              </Label>
              <Input
                id="name"
                defaultValue="example@gmail.com"
                className="col-span-3"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                defaultValue="@peduarte"
                className="col-span-3"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                User Role
              </Label>
              <select
                id="role"
                value={userRole}
                onChange={(e) => {
                  setUserRole(e.target.value);
                }}
                className="block appearance-none w-64 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>
                  Select a role
                </option>
                <option value="seller">Seller</option>
                <option value="consumer">Consumer</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="otp" className="text-right">
                One Time Password
              </Label>
              <Input
                id="otp"
                defaultValue="@peduarte"
                className="col-span-3"
                type="text"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                disabled={isDisable}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" type="submit" onClick={handleSubmit}>
              Send-otp
            </Button>
            <Button type="submit" disabled={isDisable} onClick={handleOtp}>
              Signup
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
