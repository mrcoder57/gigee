"use client";
import React, { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Bidcards from "./bidsgrp";
import Cookies from "js-cookie";

interface contentProps {
  location: string;
  userId: string;
  gigId: string;
  description: string;
  creatorName:string
}

const Content: React.FC<contentProps> = ({
  gigId,
  location,
  userId,
  creatorName,
  description,
}) => {
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const logUser = Cookies.get("userId");
    if (logUser === userId) {
      setIsOwner(true);
    }
  }, [userId]);

  return (
    <div className="flex flex-col justify-center lg:ml-5 max-w-[750px] mb-20">
      {/* Location */}
      <div className="flex flex-col justify-center ">
        <div>
          <p className="mt-10 text-2xl font-semibold">
            {location}
          </p>
        </div>
      </div>
      
      {/* User Portion */}
      <Separator orientation="horizontal" className="mt-8" />
      <div className="flex flex-row h-24 gap-4 items-center mt-2 mb-1">
        <div className="w-16 h-16 relative items-center justify-center">
          <Image
            src="/images/sample.jpg"
            alt="VIP with Kevin Hart"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-semibold">Hosted by {creatorName}</p>
          <p className="text-gray-600 text-sm">{creatorName}</p>
        </div>
      </div>
      
      <div>
        <Separator orientation="horizontal" />
        <p className="text-sm mt-8">{description}</p>
      </div>
      <div className="mt-5">
      {isOwner && <Bidcards gigId={gigId} />}
      </div>
    </div>
  );
};

export default Content;
