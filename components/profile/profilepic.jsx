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
  const [isAdding, setIsAdding] = useState(false);
  const fileInputRef = useRef(null); // Create a ref for the file input

 


  const handleBadgeClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      // Handle the selected file (e.g., upload it or preview)
      console.log("Selected file:", files[1]);
    }
  };

  return (
    <div className=" flex lg:gap-10 mt-20  justify-center lg:flex-row  flex-col ">
      <div className="relative  lg:mt-24 mb-11  justify-center  flex  ">
        <div className="w-48 h-48 relative items-center justify-center ">
          <Image
            src="/images/sample.jpg"
            alt="VIP with Kevin Hart"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className=" absolute  top-44 rounded-full bg-slate-500 flex flex-col">
          <Badge
            variant="outline"
            className="w-16 cursor-pointer"
            onClick={handleBadgeClick}
          >
            <IoCamera size={20} /> Add
          </Badge>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden" // Hide the default file input
            accept="image/*" // Optional: Restrict file types (e.g., images)
          />
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
              The information you share will be used across Airbnb to help other
              <br></br>
              guests and Hosts get to know you.{" "}
              <span>
                {" "}
                <a href="#">
                  {" "}
                  <u> Learn more</u>
                </a>{" "}
              </span>
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
