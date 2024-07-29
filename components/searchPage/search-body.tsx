"use client"
import React, { useEffect, useState } from "react";
import Cards from "../gigCards/Cards";
import { toast } from "sonner";
import Skeletons from "../modal/skeletongrp";
import axios from "axios";

interface Gig {
  _id: string;
  image: string;
  userId: string;
  title: string;
  price: number;
}

interface SearchProps {
  query: string | null;
}

const Searchbody: React.FC<SearchProps> = ({ query }) => {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchGigs = async () => {
    setLoading(true);
    setHasError(false);

    try {
      console.log(query);
      const response = await axios.get(`/api/gigs/search?query=${query}`);
      setGigs(response.data.gigs);
      console.log(response.data);
    } catch (err: any) {
      toast.error("An error occurred while fetching the gigs.");
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchGigs();
    }
  }, [query]);

  if (loading) {
    return <Skeletons />;
  }

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h2 className="mt-72 text-center text-slate-600 text-2xl mb-52">
          An error occurred. Please try again later.
        </h2>
      </div>
    );
  }

  if (gigs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h2 className="mt-72 text-center text-slate-600 text-2xl mb-52">
          No results found.
        </h2>
      </div>
    );
  }

  return (
    <div className="my-12 p-2">
      <div className="grid mt-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 desktop:grid-cols-5 gap-10 justify-around lg:ml-5 lg:gap-y-16 gap-y-8">
        {gigs.map((gig) => (
          <Cards
            key={gig._id}
            gigId={gig._id}
            image={gig.image}
            userId={gig.userId}
            title={gig.title}
            price={gig.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Searchbody;
