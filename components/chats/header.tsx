import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { CiMenuKebab } from "react-icons/ci";
import { LuMessageSquarePlus } from "react-icons/lu";


const Header = () => {
  return (
    <div className=' flex flex-col items-center justify-between gap-y-5'>
        <div className=' flex flex-row  items-center justify-between lg:gap-x-64 gap-x-52 w-full '>
            <h2 className=' text-xl font-semibold'>Chats</h2>
            <div className=' flex flex-row w-full gap-3'>
             <LuMessageSquarePlus size={24}/>
             <CiMenuKebab size={24}/>
             </div>
        </div>
        <div className=' flex items-center bg-gray-200 w-full h-8 rounded-lg justify-between '>
            <BiSearch size={20} className=' ml-3'/>
            <input type="text" className=' bg-gray-200 w-[88%] h-full outline-none focus:outline-none mr-1 ' placeholder=' search' />
        </div>
    </div>
  )
}

export default Header