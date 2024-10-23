"use client";
import React, { useState } from "react";
import Header from "./header";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import { sampleChatsUser } from "@/utils/constants";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface PeopleProps {
  onReceiverNameChange: (name: string) => void; // Prop for handling receiver name change
}

const People: React.FC<PeopleProps> = ({ onReceiverNameChange }) => {
  const [receiverName, setReceiverName] = useState<string | null>(null); // Local state (optional)

  const handleUserClick = (name: string) => {
    setReceiverName(name); // Optionally update local state
    onReceiverNameChange(name); // Call the handler to update parent state
  };

  return (
    <div className="flex flex-col lg:w-96  w-[320px] h-full my-5 py-5 lg:mx-6 mx-4 mb-7 pb-7">
      <div className=" w-full">
        <Header />
      </div>

      <div className="mt-2 flex-grow">
        <ScrollArea className="w-full h-screen mb-7 pb-7">
          {sampleChatsUser.map((user, index) => (
            <div key={index} className="flex flex-col justify-center h-[70px]">
              <hr />
              <div
                className="flex flex-row h-24 gap-x-4 items-center cursor-pointer"
                onClick={() => handleUserClick(user.name)} // Set receiver name on click
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={"/batman.svg"}
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{user.name}</p>

                  <p className="text-gray-600 text-sm">{user.name}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </ScrollArea>
      </div>
      {receiverName && (
        <div className="mt-4 p-2 border rounded-lg">
          <p className="font-semibold">Selected Receiver: {receiverName}</p>
        </div>
      )}
    </div>
  );
};

export default People;
