import Chats from '@/components/chats/chats';
import People from '@/components/chats/people';
import React from 'react';

const ChatsPage = () => {
  return (
    <div className="flex flex-row justify-between max-w-screen  items-center h-screen overflow-y-hidden">
      <People />
      <Chats />
    </div>
  );
};

export default ChatsPage;
