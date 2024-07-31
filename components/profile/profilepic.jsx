"use client";
import React, { useState, useRef } from "react";
//import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IoCamera } from "react-icons/io5";
import Image from "next/image";
import ProfileForm from "./profileio";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProfileBody = () => {
 

  return (
    <div className=" flex lg:gap-10 mt-20  justify-center lg:flex-row  flex-col ">
      <div className="relative  lg:mt-24 mb-11  justify-center  flex  ">
        <div className="lg:w-72 lg:h-72 h-64 w-64 relative items-center justify-center ">
          <Image
            src="/images/sample.jpg"
            alt="VIP with Kevin Hart"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className=" absolute  lg:top-64 top-52 rounded-full bg-slate-500 flex flex-col">
          <Badge
            variant="outline"
            className="w-16 cursor-pointer"
           
          >
            <IoCamera size={20} /> Add
          </Badge>
        </div>

        <hr></hr>
      </div>

      <div>
        <div className=" lg:mt-20 lg:ml-40 ml-10 mr-10  mb-10 gap-10 ">
          <div>
            <h1 className=" text-black font-bold text-4xl mb-6 ">
              Your Profile
            </h1>
          </div>
          <div>
            <h3 className="font-bold text-gray-500">
              The information you share will be used across Gigee to help other
              <br></br>
              Employers and clients get to know you.{" "}
  
            </h3>
          </div>
          <div className=" flex   mt-10">
           
            <ProfileForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
