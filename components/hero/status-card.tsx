import React from "react";
import { Button } from "@/components/ui/button";
import Bid from "../bids/create-bid";

interface StatusProps {
  state: string;
  isDisable: boolean;
  gigId: string;
}

const Status: React.FC<StatusProps> = ({ state, isDisable, gigId }) => {
  return (
    <div className="flex flex-col lg:w-[360px] w-[300px] h-[160px] items-center rounded-lg border shadow-md shadow-slate-400 mt-10">
      <div className="mt-10">
        <p className="text-3xl font-semibold">{state}</p>
      </div>
      <div className="mt-6">
        <Bid isDisable={isDisable} gigId={gigId} />
      </div>
    </div>
  );
};

export default Status;
