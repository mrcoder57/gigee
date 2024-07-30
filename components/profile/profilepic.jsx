"use client";
import React, { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IoCamera } from "react-icons/io5";
import Image from "next/image";

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

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleAddComplete = () => {
    setIsAdding(false);
  };

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
    <div className=" flex gap-10 ml-10 ">
      <div className="relative h-screen mt-24 mb-11  justify-center  flex  ">
      <div className="w-16 h-16 relative items-center justify-center ">
          <Image
            src="/images/sample.jpg"
            alt="VIP with Kevin Hart"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className=" absolute   bottom-0 left-0 flex flex-col">
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
        <div className=" gap-10  mb-10">
          <div>
            <h1 className=" text-black gap-10   font-bold text-2xl ">
              Your Profile
            </h1>
          </div>
          <div>
            <h3>
              The information you share will be used across Airbnb to help other
              guests and Hosts get to know you.{" "}
              <span>
                {" "}
                <a href="#"> Learn more</a>{" "}
              </span>
            </h3>
          </div>
          <div className=" flex  col-span-2 mt-10">
          <div className="border border-gray-300 rounded-lg overflow-hidden h-40 w-40 mx-auto my-8 col-span-2 ">
            <Dialog>
              <DialogTrigger>Where I went to school</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div class="border border-gray-300 rounded-lg overflow-hidden h-20 w-20 mx-auto my-8 col-span-2 ">
            <Dialog>
              <DialogTrigger>Where I went to school</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
