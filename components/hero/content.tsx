"use client";

import React, { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Bidcards from "./bidsgrp";
import Cookies from "js-cookie";
import { getProfile } from "@/utils/api-handler";
import { toast } from "sonner";
import Link from "next/link";

interface ContentProps {
  location: string;
  userId: string;
  gigId: string;
  description: string;
  creatorName: string;
}

interface IProfile {
  profilePic: string;
}

const Content: React.FC<ContentProps> = ({
  gigId,
  location,
  userId,
  creatorName,
  description,
}) => {
  const [isOwner, setIsOwner] = useState(false);
  const [profile, setProfile] = useState<IProfile | null>(null);

  const fetchProfile = async () => {
    try {
      const response = await getProfile(userId);
      setProfile(response.data.profile);
      console.log(response.data);
    } catch (err: any) {
      const errorMessage = err.message || "An unknown error occurred";
      toast.error(errorMessage);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    const logUser = Cookies.get("userId");
    if (logUser === userId) {
      setIsOwner(true);
    }
    fetchProfile();
  }, [userId]);

  return (
    <div className="flex flex-col justify-center lg:ml-5 max-w-[750px] mb-20 ">
      {/* Location */}
      <div className="flex flex-col justify-center ">
        <div>
          <p className="mt-10 text-2xl font-semibold">{location}</p>
        </div>
      </div>

      {/* User Portion */}
      <Separator orientation="horizontal" className="mt-8" />
      <div className="flex flex-row h-24 gap-4 items-center mt-2 mb-1">
        <div className="w-16 h-16 relative items-center justify-center">
          {profile && (
            <Image
              src={profile.profilePic || "/images/sample.jpg"}
              alt={`Profile picture of ${creatorName}`}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          )}
        </div>
        <div className="flex flex-col">
          <Link href={`/pages/profile/${userId}`}>
            <p className="text-xl font-semibold">Hosted by {creatorName}</p>
          </Link>
          <p className="text-gray-600 text-sm">{creatorName}</p>
        </div>
      </div>

      <div>
        <Separator orientation="horizontal" />
        <p className="text-sm mt-8">{description}</p>
      </div>
      <div className="mt-5">{isOwner && <Bidcards gigId={gigId} />}</div>
    </div>
  );
};

export default Content;
