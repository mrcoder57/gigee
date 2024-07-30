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
interface Ibids {
  bidId: string;
  userId: string;
  amount: number;
  message: string;
  createdAt: string;
}
const Bids: React.FC<Ibids> = ({ bidId, userId, message, createdAt }) => {
  return (
    <div className=" mt-5 w-[360px] h-[200px] shadow-sm ">
      <CardHeader className=" my-4">
        <CardTitle>{userId}</CardTitle>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
      <CardContent className="">
        <p>{createdAt}</p>
      </CardContent>
    </div>
  );
};

export default Bids;
