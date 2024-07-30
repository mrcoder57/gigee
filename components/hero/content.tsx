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
}

const Content: React.FC<contentProps> = ({
  gigId,
  location,
  userId,
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
    <div className="flex flex-col max-w-[750px] mb-20">
      {/* Location */}
      <div className="flex flex-col">
        <div>
          <p className="mt-10 text-2xl font-semibold">
            Los Angeles, California, USA {location}
          </p>
        </div>
      </div>
      
      {/* User Portion */}
      <Separator orientation="horizontal" className="mt-8" />
      <div className="flex flex-row h-24 gap-4 items-center">
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
          <p className="text-xl font-semibold">Hosted by {userId}</p>
          <p className="text-gray-600 text-sm">{userId}</p>
        </div>
      </div>
      
      <div>
        <Separator orientation="horizontal" />
        <p className="text-sm mt-8">{description}</p>
      </div>
      
      {isOwner && <Bidcards gigId={gigId} />}
    </div>
  );
};

export default Content;
