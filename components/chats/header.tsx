import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { CiMenuKebab } from "react-icons/ci";
import { LuMessageSquarePlus } from "react-icons/lu";

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-y-5 w-full'>
      <div className='flex flex-row items-center justify-between w-full '> {/* Use justify-between for spacing */}
        <div className='flex flex-row gap-x-1 items-center'>
          <Link href={"/"}>
          <Image src={"/back.svg"} width={25} height={25} alt="back" />
          </Link>
          <h2 className='text-xl font-semibold'>Chats</h2>
        </div>
        <div className='flex flex-row gap-x-2 items-center'>
          <LuMessageSquarePlus size={24} />
          <CiMenuKebab size={24} />
        </div>
      </div>
      <div className='flex items-center bg-gray-200 w-full h-8 rounded-lg'>
        <BiSearch size={20} className='ml-3' />
        <input type="text" className='bg-gray-200 w-[88%] h-full outline-none focus:outline-none' placeholder=' search' />
      </div>
    </div>
  )
}

export default Header;
