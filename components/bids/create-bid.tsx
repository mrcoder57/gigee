"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Fixed import path
import axios from "axios";
import { config } from "@/utils/api-handler";
import { toast } from "sonner";

interface BidProps {
  isDisable: boolean;
  gigId: string;
}

const Bid: React.FC<BidProps> = ({ isDisable, gigId }) => {
 
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState<number | "">('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value === '' ? '' : parseFloat(value));
  };
  console.log(amount);
    console.log("gigid",gigId)
    const createBid=async()=>{
      console.log(amount,message)
      try {
        const response = await axios.post(`/api/gigs/${gigId}/bids`,{
          amount,message
        },config)
        console.log(response);
        toast.success("Bid created successfully");
      } catch (err: any) {
        if (err.message) {
          toast.error(err.message);
          console.log(err);
        } else {
          toast.error("An unknown error occurred");
        }
      }
    }
  return (
    <div className="lg:block">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="Bid" disabled={isDisable}>Bid</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[350px]">
          <DialogHeader>
            <DialogTitle>Create Bid</DialogTitle>
            <DialogDescription>Place your bid for the selected Gig</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">Amount</Label>
              <Input
                id="amount"
                className="col-span-3"
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Message</Label>
              <Textarea
                id="Message"
                placeholder="Define your suitability for the job"
                className="col-span-3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isDisable} onClick={createBid}>Bid</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Bid;
