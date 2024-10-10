import React from 'react'
import { IoSendOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
const SendMessage = () => {
  return (
    <div className=' flex items-center bg-gray-200 w-full rounded-full h-16 justify-between mb-2 '>
    <MdAdd size={26} className=' ml-5'/>
    <input type="text" className=' bg-gray-200 w-[80%] h-full outline-none focus:outline-none mr-1 ' placeholder='Type ' />
    <IoSendOutline size={26} className=' mr-5'/>
</div>
  )
}

export default SendMessage