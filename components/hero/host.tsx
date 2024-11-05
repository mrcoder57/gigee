"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getProfile } from "@/utils/api-handler";
import { toast } from "sonner";
interface hostProps {
  userId: string;
  image: string;
  creatorName: string;
}
interface ProfileData {
  city: string;
  email: string;
  languages: string[];
  socials: string[];
  work: string;
}
const Host: React.FC<hostProps> = ({ userId, image, creatorName }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const response = await getProfile(userId);
      setProfile(response.data.profile);
      console.log(response.data);
      setLoading(false);
    } catch (err: any) {
      if (err.message) {
        toast.error(err.message);
        console.log(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [userId]);

  return (
    <div className=" flex flex-col items-start justify-start py-1 ">
      <p className=" font-[600] text-[#222222] text-[22px] pb-7">
        Meet your Host
      </p>
      <div className="flex flex-col h-[230px] lg:w-[380px] w-[340px] py-8 justify-center items-center rounded-lg shadow-[0_0_15px_5px_rgba(0,0,0,0.2)]">
        <Image
          src={image}
          alt="gigee"
          width={100}
          height={100}
          className="rounded-full shadow-black shadow-md w-[120px] h-[120px]"
        />
        <h3 className="text-[22px] font-[500] text-[#222222] mt-4 first-letter:capitalize">
          {creatorName} Kumar
        </h3>
      </div>
      <div className=" flex flex-col items-start justify-center pt-10 gap-y-7 px-4">
        <div className=" flex flex-row gap-x-5 justify-center items-center">
          <Image src={"/work-bag.svg"} alt="work" width={24} height={21} />
          <div className=" flex flex-col justify-start items-start">
            <p className=" font-[500] text-[#222222] text-[16px]">
              My work: {profile?.work}
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-x-5 justify-center items-center">
          <Image src={"/location.svg"} alt="work" width={26} height={22} />
          <div className=" flex flex-col justify-start items-start">
            <p className=" font-[500] text-[#222222] text-[16px]">
              City I live In: {profile?.city}
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-x-5 justify-center items-center">
          <Image src={"/language.svg"} alt="work" width={24} height={21} />
          <div className=" flex flex-col justify-start items-start">
            <p className="font-[500] text-[#222222] text-[16px]">
              <p className="font-[500] text-[#222222] text-[16px]">
                Languages i speak:{" "}
                {profile?.languages.map((language, index) => (
                  <span key={index}>
                    {language}
                    {index < profile.languages.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-x-5 justify-center items-center">
          <Image src={"/email.svg"} alt="work" width={24} height={21} />
          <div className=" flex flex-col justify-start items-start">
            <p className=" font-[500] text-[#222222] text-[16px]">
              Contact me:{" "}
              <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
            </p>
          </div>
        </div>
        <p className=" text-[16px] font-[500] text-[#222222] mt-4">
          Hey—it' s Wendy and Lisa. We're an award-winning music duo, childhood
          friends, and proud members of the legendary rock band The Revolution.
          Back in the '80s, we teamed up with our close friend and Revolution
          frontman, Prince, to bring the iconic “Purple Rain” song and film to
          life. We're psyched to go back in time at the scene of the crime and
          share even more incredible memories with u!
        </p>
      </div>
    </div>
  );
};

export default Host;
