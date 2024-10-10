import React from "react";
import Header from "./header";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import { sampleChatsUser } from "@/utils/constants";
import { ScrollArea } from "@/components/ui/scroll-area";

const People = () => {
  return (
    <div className="flex flex-col lg:w-96 w-[280px] h-full mt-5 lg:mx-6 mx-4">
      <Header />
      <div className="mt-2 flex-grow">
        <ScrollArea className="w-full h-screen">
          {sampleChatsUser.map((user, index) => (
            <div key={index} className="flex flex-col justify-center h-[70px]">
              <hr />
              <div className="flex flex-row h-24 gap-x-4 items-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  <RxAvatar size={34} />
                </div>
                <div className="flex flex-col">
                  <Link href={`/pages/profile/`}>
                    <p className="text-lg font-semibold">{user.name}</p>
                  </Link>
                  <p className="text-gray-600 text-sm">{user.name}</p>
                </div>
              </div>
              <hr/>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default People;
