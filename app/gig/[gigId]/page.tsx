"use client";
import Hero from "@/components/hero/hero";
import Content from "@/components/hero/content";
import React from "react";
import Status from "@/components/hero/status-card";
import { useParams } from "next/navigation";
import { getGigbyId } from "@/utils/api-handler";
import { toast } from "sonner";
import Bidcards from "@/components/hero/bidsgrp";
import Gigskeleton from "@/components/skeleton/Gigskeleton";
import Map from "@/components/map/map";
import { useQuery } from "@tanstack/react-query";

// Function to fetch gig by ID
const fetchGig = async (gigId: string) => {
  try {
    const response = await getGigbyId(gigId);
    return response.data.gig;  // Return the gig data directly
  } catch (err: any) {
    toast.error("An error occurred while fetching the gig.");
    throw new Error("Error fetching gig");
  }
};

interface Gig {
  image: string;
  title: string;
  description: string;
  statusActive: boolean;
  location: string;
  price: number;
  userId: string;
  creatorName: string;
}

const Page = () => {
  const params = useParams();
  const gigId = Array.isArray(params.gigId) ? params.gigId[0] : params.gigId;

  const { data: gig, isLoading, isError } = useQuery<Gig, Error>({
    queryKey: ["gig", gigId], // Unique query key with gigId to cache and refetch
    queryFn: () => fetchGig(gigId), // Use the fetch function defined earlier
    staleTime: Infinity, // Cache the data for infinity
  });

  // Handling loading and error states with React Query
  if (isLoading) {
    return <Gigskeleton />;
  }

  if (isError || !gig) {
    return <div>There was an error loading the gig.</div>;
  }

  return (
    <div className="flex flex-col lg:mt-10">
      <Hero gigId={gigId} image={gig.image} title={gig.title} />
      <div className="w-full mx-auto flex justify-center">
        <div className="flex lg:flex-row flex-col-reverse justify-center max-w-6xl w-full mx-4 lg:mx-0 md:mx-0">
          <Content
            location={gig.location}
            gigId={gigId}
            userId={gig.userId}
            description={gig.description}
            creatorName={gig.creatorName}
          />
          <div className="flex lg:ml-10 lg:justify-normal justify-center lg:w-auto w-full">
            <Status amount={gig.price} isDisable={gig.statusActive} gigId={gigId} />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto flex justify-center">
        <Map />
      </div>
    </div>
  );
};

export default Page;
