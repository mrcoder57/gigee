"use client";
import React from "react";
import Image from "next/image";
import Bidcards from "./bidsgrp";
import Cookies from "js-cookie";
import { toast } from "sonner";
import Link from "next/link";
import Activities from "./activities";
import { Separator } from "../ui/separator";
import Host from "./host";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/utils/api-handler";

// Function to fetch profile data by userId
const fetchProfile = async (userId: string) => {
  try {
    const response = await getProfile(userId);
    return response.data.profile; // Return the profile data directly
  } catch (err: any) {
    toast.error("An error occurred while fetching the profile.");
    throw new Error("Error fetching profile");
  }
};

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
  const { data: profile, isLoading, isError } = useQuery<IProfile, Error>({
    queryKey: ["profile", userId], // Unique query key with userId to cache and refetch
    queryFn: () => fetchProfile(userId), // Use the fetch function defined earlier
    staleTime: Infinity, // Cache the data for infinity
  });

  const logUser = Cookies.get("userId");


  if (isLoading) {
    return <div>Loading profile...</div>; // Add a loading state here
  }

  if (isError || !profile) {
    return <div>Error loading profile</div>; // Show error if there's an issue with the request
  }

  return (
    <div className=" w-full lg:px-4 ">
      <div className="flex flex-col lg:justify-between max-w-6xl lg:mx-auto mb-8 sm:px-4 md:px-5 px-3 lg:px-0 ">
        {/* Location */}
        <div className="flex flex-col lg:justify-center ">
          <div>
            <p className="lg:mt-10 lg:text-[28px] text-[18px] font-[600]">
              {location}
            </p>
          </div>
        </div>

        {/* User Portion */}
        <div className="flex flex-col justify-center my-auto max-w-2xl max-h-[75px] mt-2">
          <hr className="w-full" />
          <div className="flex flex-row h-24 gap-x-4 items-center my-auto">
            <div className="w-12 h-12 relative flex items-center justify-center">
              <Image
                src={profile.profilePic || "/images/sample.jpg"}
                alt={`Profile picture of ${creatorName}`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <Link href={`/profile/${userId}`}>
                <p className="text-lg font-[600] first-letter:capitalize">
                  Hosted by{" "}
                  <span className="first-letter:capitalize">{creatorName}</span>{" "}
                </p>
              </Link>
              <p className="text-gray-600 text-sm">{creatorName}</p>
            </div>
          </div>
          <hr className="w-full" />
        </div>
        <div className="max-w-2xl">
          <Activities />
          <Separator />
        </div>

        <div className="max-w-2xl py-2">
          <p className="text-[15.9px] py-3 font-[500] max-w-[660px] ">
            {description}
          </p>
          <Separator className="my-5" />
        </div>
        <div className="max-w-2xl">
          <Host
            image={profile.profilePic || "/images/sample.jpg"}
            creatorName={creatorName}
            userId={userId}
          />
        </div>
        {/* Dashboard */}
        {/* <div className="flex flex-row items-center mt-5">
          {isOwner && <Bidcards gigId={gigId} />}
        </div> */}
      </div>
    </div>
  );
};

export default Content;
