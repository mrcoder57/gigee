import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sampleMessages } from "@/utils/constants";


const ScrollableChats = () => {
  return (
    <div className="flex-grow w-full ">
      <ScrollArea className="w-full h-[640px] px-4 overflow-y-auto fixed top-2">
        {sampleMessages.map((message) => (
          <div key={message.id} className="mb-4 bg-green-100 rounded-lg max-w-80 w-80 h-auto items-center justify-center">
            <p className="text-gray-700 p-2">{message.text}</p>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default ScrollableChats;
