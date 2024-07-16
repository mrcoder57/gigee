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
import axios from "axios"

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [userRole, setUserRole] = useState("");
  const [isDisable,setIsdisable]=useState(true)
  const [error, setError] = useState(null);

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/users/signup', {
        email,
        password,
        username,
        userRole,
      });

     console.log(response.data)
        setIsdisable(false);
        setError(null);
      
    } catch (err:any) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };
  const handleOtp = async (event:any) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/users/verifyOtp', {
        email,
        otp
      });

     console.log(response.data)
        setIsdisable(false);
        setError(null);
      
    } catch (err:any) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };
  return (
    <div className=" hidden lg:block ">
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
              <Label htmlFor="name" className="text-right">
                Email
              </Label>
              <Input
                id="name"
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
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Email
              </Label>
              <Input
                id="name"
                defaultValue="example@gmail.com"
                className="col-span-3"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div> */}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Password
              </Label>
              <Input
                id="username"
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
              <Label htmlFor="username" className="text-right">
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
              <Label htmlFor="username" className="text-right">
                One Time Password
              </Label>
              <Input
                id="username"
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
            <Button variant='ghost' type="submit" onClick={handleSubmit}>Send-otp</Button>
            <Button type="submit" disabled={isDisable} onClick={handleOtp}>Signup</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
