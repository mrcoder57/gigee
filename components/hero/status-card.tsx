"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Bid from "../bids/create-bid";

interface StatusProps {
  amount: number;
  isDisable: boolean;
  gigId: string;
}

const Status: React.FC<StatusProps> = ({ amount, isDisable, gigId }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!isDisable) {
      setStatus("Expired");
    } else {
      setStatus("Available");
    }
  }, [isDisable]);

  return (
    <div className="flex flex-col lg:w-[360px] w-[300px] h-[160px] items-center rounded-lg border shadow-md shadow-slate-400 mt-10">
      <div className="mt-5 text-center">
        <p className="text-3xl font-semibold">{status}: </p>
        <span className=" text-lg text-center">$ {amount}</span>
      </div>
      <div className="mt-6">
        <Bid isDisable={!isDisable} gigId={gigId} />
      </div>
    </div>
  );
};

export default Status;
