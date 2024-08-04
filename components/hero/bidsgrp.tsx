"use client";
import React, { useEffect, useState } from "react";
interface BidProps {
  gigId: string;
}
interface Ibids {
  _id: string;
  userId: string;
  amount: number;
  message: string;
  createdAt: string;
  biderName:string
}
import Bids from "./bids";
import { getBids } from "@/utils/api-handler";
import { toast } from "sonner";
import { Separator } from "../ui/separator";

const Bidcards: React.FC<BidProps> = ({ gigId }) => {
  const [bids, setBids] = useState<Ibids[]>([]);
  const fetchBids = async () => {
    try {
      const response = await getBids(gigId);
      console.log(response.data);
      setBids(response.data.data);
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
    fetchBids();
  }, [gigId]);
    if (bids.length === 0) {
      return (
        <div className="flex mt-10 flex-col h-full w-full">
          <h2 className=" text-slate-600 text-2xl mb-10 ">
            bids: 0
          </h2>
        </div>
      );
    }
 
  return (
    <div className="flex flex-col ">
        <Separator/>
      {bids.map((bid) => (
        <Bids
          key={bid._id}
          bidId={bid._id}
          userId={bid.userId}
          createdAt={bid.createdAt}
          amount={bid.amount}
          message={bid.message}
          biderName={bid.biderName}
        />
      ))}
    </div>
  );
};

export default Bidcards;
