"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Bidcards from "./bidsgrp";
import Cookies from "js-cookie";
import { getProfile } from "@/utils/api-handler";
import { toast } from "sonner";
import Link from "next/link";
import Activities from "./activities";
import { Separator } from "../ui/separator";
import Host from "./host";

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
    <div className=" w-full">
      <div className="flex flex-col lg:justify-between max-w-6xl mx-auto mb-8 ">
        {/* Location */}
        <div className="flex flex-col lg:justify-center ">
          <div>
            <p className="lg:mt-10  mt-2 lg:text-[28px] text-[20px] font-[500]">
              {location}
            </p>
          </div>
        </div>

        {/* User Portion */}
        <div className=" flex flex-col justify-center my-auto max-w-2xl max-h-[75px] mt-2 ">
          <hr className=" w-full " />
          <div className="flex flex-row h-24 gap-x-4 items-center  my-auto">
            <div className="w-12 h-12 relative flex items-center justify-center">
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
              <Link href={`/profile/${userId}`}>
                <p className="text-lg font-[600] first-letter:capitalize">
                  Hosted by{" "}
                  <span className=" first-letter:capitalize">
                    {creatorName}
                  </span>{" "}
                </p>
              </Link>
              <p className="text-gray-600 text-sm">{creatorName}</p>
            </div>
          </div>
          <hr className="w-full" />
        </div>
        <div className=" max-w-2xl">
          <Activities />
          <Separator />
        </div>

        <div className=" max-w-2xl py-2 ">
          <p className="text-[15.9px] py-3 font-[500] max-w-[660px] ">
            {description}
          </p>
          <Separator className=" my-5" />
        </div>
        <div className=" max-w-2xl  ">
          {profile && (
            <Host
              image={profile.profilePic || "/images/sample.jpg"}
              creatorName={creatorName}
              userId={userId}
            />
          )}
        </div>
        {/* dashboard m jayega
         */}
        {/* <div className="flex flex-row items-center mt-5">
        {isOwner && <Bidcards gigId={gigId} />}
      </div> */}
      </div>
    </div>
  );
};

export default Content;
