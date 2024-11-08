import React from "react";
import UserHeader from "./userHeaader";
import ScrollableChats from "./scrollableChats";
import SendMessage from "./sendMessage";
type chatsProp = {
  recieverName: string | null;
  status: string;
};

const Chats: React.FC<chatsProp> = ({ recieverName, status }) => {
  return (
    <div className=" lg:flex hidden flex-col h-screen w-full overflow-y-hidden shadow-md  ml-2">
      <UserHeader status="active" recieverName={recieverName} />
      <ScrollableChats />
      <div className=" mx-5 relative">
        <SendMessage />
      </div>
    </div>
  );
};

export default Chats;
