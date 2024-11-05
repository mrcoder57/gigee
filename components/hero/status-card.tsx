"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Bid from "../bids/create-bid";
import Cookies from "js-cookie";
import { Login } from "../modal/login";

interface StatusProps {
  amount: number;
  isDisable: boolean;
  gigId: string;
}

const Status: React.FC<StatusProps> = ({ amount, isDisable, gigId }) => {
  const [status, setStatus] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!isDisable) {
      setStatus("Expired");
    } else {
      setStatus("Available");
    }

    const token = Cookies.get("token");
    if (token) {
      setLoggedIn(true);
    }
  }, [isDisable]);

  return (
    <div className="lg:flex md:flex hidden flex-col lg:w-[400px] w-[250px] h-[160px] items-center rounded-lg border shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] mt-10">
      <div className="mt-5 text-center">
        <p className="text-3xl font-semibold">{status}: </p>
        <span className="text-lg text-center">$ {amount}</span>
      </div>
      <div className="mt-6">
        {loggedIn ? (
          <Bid isDisable={!isDisable} gigId={gigId} />
        ) : (
          <Login/>
        )}
      </div>
    </div>
  );
};

export default Status;
