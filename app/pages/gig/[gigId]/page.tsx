"use client";
import Hero from "@/components/hero/hero";
import Content from "@/components/hero/content";
import React, { useEffect, useState } from "react";
import Status from "@/components/hero/status-card";
import { useParams } from "next/navigation";
import { getGigbyId } from "@/utils/api-handler";
import { toast } from "sonner";
import Bidcards from "@/components/hero/bidsgrp";
import Gigskeleton from "@/components/skeleton/Gigskeleton";

interface Gig {
  image: string;
  title: string;
  description: string;
  statusActive: string;
  location: string;
  amount: number;
  userId: string;
  creatorName:string
}

const Page = () => {
  const params = useParams();
  const gigId = Array.isArray(params.gigId) ? params.gigId[0] : params.gigId;

  const [gig, setGig] = useState<Gig | null>(null);
  const [status, setStatus] = useState("");
  const [loading,setLoading]=useState(true)

  const getGig = async () => {
    try {
      const response = await getGigbyId(gigId);
      console.log(response.data);
      setGig(response.data.gig);
      setLoading(false)
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
    getGig();
  }, [gigId]);

  if (loading) {
    return <Gigskeleton />;
  }
  if (!gig) {
    return <div>Loading...</div>;
  }

 
  return (
    <div className="flex flex-col">
      <Hero gigId={gigId} image={gig.image} title={gig.title} />
      <div className="flex lg:flex-row flex-col-reverse justify-around lg:gap-20 gap-7 lg:mx-15 mx-5">
        <Content
          location={gig.location}
          gigId={gigId}
          userId={gig.userId}
          description={gig.description}
          creatorName={gig.creatorName}
        />
        <Status state="okk" isDisable={false} gigId={gigId} />
      </div>
    </div>
  );
};

export default Page;
