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

interface BidProps {
  isDisable: boolean;
  gigId: string;
}

const Bid: React.FC<BidProps> = ({ isDisable, gigId }) => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  console.log(amount);
    console.log("gigid",gigId)
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
                onChange={(e) => setAmount(e.target.value)}
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
            <Button type="submit" disabled={isDisable}>Bid</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Bid;
