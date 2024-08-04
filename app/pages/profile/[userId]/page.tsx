"use client";
import React, { useEffect, useState } from "react";
import ProfileBody from "@/components/profile/profilepic";
import { useParams } from "next/navigation";
import { getProfile } from "@/utils/api-handler";
import { toast } from "sonner";

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

const Profile = () => {
  const params = useParams();
  const userId = Array.isArray(params.userId)
    ? params.userId[0]
    : params.userId;
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const fetchProfile = async () => {
    try {
      const response = await getProfile(userId);
      setProfile(response.data.profile);
      console.log(response.data);
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
  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfileBody
        city={profile.city}
        education={profile.education}
        languages={profile.languages}
        email={profile.email}
        phone={profile.phone}
        profilePic={profile.profilePic}
        name={profile.name}
        socials={profile.socials}
        userId={userId}
        work={profile.work}
      />
    </div>
  );
};

export default Profile;
