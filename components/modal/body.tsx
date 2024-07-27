"use client"
import React, { useEffect, useState } from "react";
import Cards from "../gigCards/Cards";
import { toast } from "sonner";
import { getGigs } from "@/utils/api-handler";
import Skeletons from "./skeletongrp";
interface Gig {
  _id:string
  image: string;
  userId: string;
  title: string;
  price: number;
}
const Body = () => {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchGigs = async () => {
    try {
      const response = await getGigs();
      setGigs(response.data.gigs);
      setLoading(false)
    } catch (err: any) {
      toast.error("An error occurred while fetching the gigs.");
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []);

  if (loading) {
    return (
     <Skeletons/>
    );
  }
  return (
    <div className="my-12 p-2">
      {gigs.length === 0 ? (
        <div className="text-center">No gigs available at the moment.</div>
      ) : (
        <div className="grid mt-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 desktop:grid-cols-5 gap-10 justify-around lg:ml-5 lg:gap-y-16 gap-y-8">
          {gigs.map((gig) => (
            <Cards
            key={gig._id}
              image={gig.image}
              userId={gig.userId}
              title={gig.title}
              price={gig.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
