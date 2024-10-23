"use client"
import Chats from '@/components/chats/chats';
import People from '@/components/chats/people';
import React, { useState } from 'react';

const ChatsPage = () => {
  const [receiverName, setReceiverName] = useState<string | null>(null); // State for receiver name

  const handleReceiverNameChange = (name: string) => {
    setReceiverName(name); // Update receiver name
  };

  return (
    <div className="flex flex-row justify-between max-w-screen items-center h-screen overflow-y-hidden">
      <People onReceiverNameChange={handleReceiverNameChange} /> {/* Pass handler to People */}
      <Chats recieverName={receiverName} status='active' /> {/* Pass receiverName to Chats */}
    </div>
  );
};

export default ChatsPage;
