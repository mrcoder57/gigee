"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ProfileForm from "./profileio";
import Profilecomp from "./showprofile";
import Cookies from "js-cookie";
import UploadDialog from "../imageUpload/upload-dialog";
import { config } from "@/utils/api-handler";
import { toast } from "sonner";
import { getSession } from "next-auth/react";

interface ProfileData {
  city: string;
  education: string;
  email: string;
  languages: string[];
  name: string;
  phone: string;
  profilePic: string;
  socials: string[];
  userId: string;
  work: string;
}

const ProfileBody: React.FC<ProfileData> = ({
  city,
  education,
  email,
  languages,
  name,
  phone,
  profilePic,
  socials,
  userId,
  work,
}) => {
  const [_profilePic, setProfilePic] = useState(profilePic || "");
  const [ruserId, setRuserId] = useState("");
  
  // Fetch session data on component mount
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session?.user?.id) {
        setRuserId(session.user.id);
      }
    };
    fetchSession();
  }, []);

  // Check if the current user is the owner of the profile
  const isOwner = userId === ruserId;

  const handleImageUpload = (url: string) => {
    setProfilePic(url);
    console.log(_profilePic);
  };

  return (
    <div className="flex justify-center lg:flex-row flex-col">
      <div className="mt-12 flex lg:flex-row flex-col">
        <div className="relative lg:mt-24 mb-11 justify-center flex">
          <div className="lg:w-72 lg:h-72 h-64 w-64 relative items-center justify-center">
            <Image
              src={_profilePic || "/images/sample.jpg"}
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {isOwner && (
            <div className="absolute lg:top-64 top-52 rounded-full bg-slate-500 flex flex-col">
              <UploadDialog onImageUpload={handleImageUpload} userId={userId} />
            </div>
          )}
          <hr />
        </div>

        <div>
          <div className="lg:mt-20 lg:ml-40 ml-10 mr-10 mb-10 gap-10">
            <div>
              <h1 className="text-black font-bold text-4xl mb-6 first-letter:capitalize">
                {name}
              </h1>
            </div>
            <div>
              <h3 className="font-bold text-gray-500">
                The information you share will be used across Gigee to help other
                <br />
                Employers and clients get to know you.
              </h3>
            </div>
            <div className="flex mt-10">
              {isOwner ? (
                <ProfileForm
                  _city={city}
                  _education={education}
                  _languages={languages}
                  _email={email}
                  _phone={phone}
                  _name={name}
                  _socials={socials}
                  _work={work}
                  userId={userId}
                />
              ) : (
                <Profilecomp
                  city={city}
                  education={education}
                  languages={languages}
                  email={email}
                  phone={phone}
                  name={name}
                  socials={socials}
                  work={work}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
