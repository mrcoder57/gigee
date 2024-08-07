"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { getBid, getProfile } from "@/utils/api-handler";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

interface BidProps {
  userId: string;
  bidId: string;
  description: string;
}

interface Ibids {
  gigId: string;
  userId: string;
  amount: number;
  message: string;
  biderName: string;
  createdAt: string;
  updatedAt: string;
}

interface IProfile {
  email: string;
  phone: string;
}

const SingleBid: React.FC<BidProps> = ({ userId, bidId, description }) => {
  const [bid, setBid] = useState<Ibids | null>(null);
  const [profile, setProfile] = useState<IProfile | null>(null);

  const fetchBid = async () => {
    try {
      const response = await getBid(bidId);
      setBid(response.data.bid);
    } catch (err: any) {
      if (err.message) {
        toast.error(err.message);
        console.log(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  const fetchUser = async () => {
    try {
      const response = await getProfile(userId);
      setProfile(response.data.profile);
      console.log(response.data.profile)
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
    fetchBid();
    fetchUser();
  }, []);

  if (!bid) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(bid.createdAt).toLocaleDateString();

  const handleEmailClick = () => {
    if (profile && profile.email) {
      window.location.href = `mailto:${profile.email}`;
    } else {
      toast.error("Email not available");
    }
  };

  const handleCallClick = () => {
    if (profile && profile.phone) {
      window.location.href = `tel:${profile.phone}`;
    } else {
      toast.error("Phone number not available");
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="text-left">{description}...</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-[24px] first-letter:capitalize">
            {bid.biderName}
          </DialogTitle>
          <DialogDescription>{bid.message}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-full text-[16px]">
          <div className="flex flex-col gap-3">
            <p>Amount: ${bid.amount}</p>
            <p>Created: {formattedDate}</p>
          </div>
        </div>
        <DialogFooter className="flex-row justify-between gap-8">
          <Button variant="ghost" onClick={handleEmailClick}>
            <IoMailOutline size={20} />
          </Button>
          <Button variant="ghost" onClick={handleCallClick}>
            <IoCallOutline size={20} />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SingleBid;
