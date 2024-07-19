"use client"
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

export function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  console.log(email)
  return (
    <div className="  lg:block ">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[350px]">
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
                onChange={((e)=>{setEmail(e.target.value)})}
              />
            </div>
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
                onChange={((e)=>{setPassword(e.target.value)})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
