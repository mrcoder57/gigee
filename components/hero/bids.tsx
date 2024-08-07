import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Singlebid from "../bids/singlebid";
interface Ibids {
  bidId: string;
  userId: string;
  amount: number;
  message: string;
  createdAt: string;
  biderName:string
}
const Bids: React.FC<Ibids> = ({ bidId, userId, message, createdAt,biderName }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();
  const slicedMessage = message.length > 100 ? `${message.slice(0, 100)}...` : message;
  return (
    <div className=" mt-5 w-[360px] h-[180px] shadow-md border-gray-400 rounded-lg ">
      <CardHeader className=" my-4">
        <CardTitle className=" first-letter:capitalize">{biderName}</CardTitle>
        <CardDescription>
          <Singlebid bidId={bidId} userId={userId} description={slicedMessage}/>
        </CardDescription>
      </CardHeader>
      <CardContent className=" mt-[-25px]">
        <p>Date: {formattedDate}</p>
      </CardContent>
    </div>
  );
};

export default Bids;
