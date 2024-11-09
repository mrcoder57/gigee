"use client";
import React from "react";
import Cards from "../gigCards/Cards";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import Skeletons from "./skeletongrp";
import { getGigs } from "@/utils/api-handler";

// Function to fetch gigs
const fetchGigs = async () => {
  try {
    const response = await getGigs();
    return response.data.gigs;  // Return only the gigs data from the response
  } catch (err: any) {
    toast.error("An error occurred while fetching the gigs.");
    throw new Error("Error fetching gigs");
  }
};

interface Gig {
  _id: string;
  image: string;
  userId: string;
  title: string;
  price: number;
  creatorName: string;
  description: string;
}

const Body = () => {
  const { data: gigs, isLoading, isError } = useQuery<Gig[], Error>({
    queryFn: fetchGigs,   // Use the fetch function
    queryKey: ["gigs"],    // The key for the query (use it for caching and invalidation)
    staleTime: Infinity,  // Cache the data for infinity
  });

  // Handle loading, error, and rendering
  if (isLoading) {
    return <Skeletons />;
  }

  if (isError || !gigs) {
    return <div className="text-center">Error loading gigs</div>;
  }

  return (
    <div className="py-[134px] bg-white overflow-x-hidden">
      {gigs.length === 0 ? (
        <div className="text-center">No gigs available at the moment.</div>
      ) : (
        <div className="grid lg:mt-24 mt-9 grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap items-center justify-between gap-x-8 lg:gap-y-5 gap-y-4 lg:mx-6 overflow-x-hidden">
          {gigs.map((gig) => (
            <Cards
              key={gig._id}
              gigId={gig._id}
              image={gig.image}
              userId={gig.userId}
              title={gig.title}
              price={gig.price}
              creatorName={gig.creatorName}
              description={gig.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
