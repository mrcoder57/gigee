import React from "react";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
const UserHeader = () => {
  return (
    <div className=" bg-gray-100 rounded-b-md shadow-sm  ">
    <div className=" flex flex-row items-center justify-between  mx-5">
      <div className="flex flex-col justify-center h-[70px]">
        <div className="flex flex-row h-24 gap-x-4 items-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <RxAvatar size={34} />
          </div>
          <div className="flex flex-col">
            <Link href={`/pages/profile/`}>
              <p className="text-lg font-semibold">{"Aman kumar"}</p>
            </Link>
            <p className="text-gray-600 text-sm">{"Active"}</p>
          </div>
        </div>
      </div>
      <div className=' flex items-center justify-between '>
            <BiSearch size={24} className=' ml-3 hover:cursor-pointer'/>
        </div>
    </div>
    </div>
  );
};

export default UserHeader;
