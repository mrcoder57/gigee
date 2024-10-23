import React from 'react'
import { IoSendOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
const SendMessage = () => {
  return (
    <div className=' flex absolute bottom-[4px] items-center my-auto bg-white w-full h-[50px] justify-between mb-[4px] '>
    <MdAdd size={26} className=' ml-5 mt-[3px]'/>
    <input type="text" className=' mt-[2px] bg-gray-100 rounded-md p-2 w-[85%] h-[40px] outline-none focus:outline-none mr-1 ' placeholder='Type ' />
    <IoSendOutline size={26} className=' mr-5 mt-[3px]'/>
</div>
  )
}

export default SendMessage