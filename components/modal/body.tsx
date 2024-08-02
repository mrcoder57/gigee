"use client";
import React, { useEffect, useState } from "react";
import Cards from "../gigCards/Cards";
import { toast } from "sonner";
import { getGigs } from "@/utils/api-handler";
import Skeletons from "./skeletongrp";
interface Gig {
  _id: string;
  image: string;
  userId: string;
  title: string;
  price: number;
  creatorName:string
}
const Body = () => {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchGigs = async () => {
    try {
      const response = await getGigs();
      setGigs(response.data.gigs);
      setLoading(false);
    } catch (err: any) {
      toast.error("An error occurred while fetching the gigs.");
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []);

  if (loading) {
    return <Skeletons />;
  }
  return (
    <div className="my-12 py-1 bg-white overflow-x-hidden">
      {gigs.length === 0 ? (
        <div className="text-center">No gigs available at the moment.</div>
      ) : (
        <div className="grid mt-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 overflow-x-hidden">
          {gigs.map((gig) => (
            <Cards
              key={gig._id}
              gigId={gig._id}
              image={gig.image}
              userId={gig.userId}
              title={gig.title}
              price={gig.price}
              creatorName={gig.creatorName}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
