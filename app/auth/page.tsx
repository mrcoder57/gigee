'use client';
import React, { useEffect, useState } from 'react';
import { testMessage } from '@/utils/socket'; // Import the socketInstance
import {io } from "socket.io-client";
import AuthForm from '@/components/authform/authForm';

const Page = () => {
  // Create a new Socket.IO instance
  const [data, setData] = useState<string>('');


  return (
    <div className='flex flex-col py-20 h-screen items-center justify-center w-full'>
      <p className=' text-3xl'>{data}</p> {/* This will display the message from the "test" event */}
      <AuthForm />
    </div>
  );
};

export default Page;
