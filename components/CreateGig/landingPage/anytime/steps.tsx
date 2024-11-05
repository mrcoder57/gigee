import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <div className=" flex lg:flex flex-wrap justify-between w-full mx-auto max-w-5xl py-7">
      <div className=" flex flex-col gap-y-3 items-center justify-center max-w-[240px]">
        <div className=" w-16 h-16 rounded-full bg-[#f7f7f7] flex justify-center items-center ">
          <Image src="/register.svg" alt="1" width={30} height={30} />
        </div>
        <p className=" text-[18px] font-[500]">Register to get started</p>
      </div>
      <div className=" flex flex-col gap-y-3 items-center justify-center max-w-[240px]">
        <div className=" w-16 h-16 rounded-full bg-[#f7f7f7] flex justify-center items-center ">
          <Image src="/event.svg" alt="1" width={30} height={30} />
        </div>
        <p className=" text-[18px] font-[500]">Create ur event/ jobs</p>
      </div>
      <div className=" flex flex-col gap-y-3 items-center justify-center max-w-[240px]">
        <div className=" w-16 h-16 rounded-full bg-[#f7f7f7] flex justify-center items-center ">
          <Image src="/users.svg" alt="1" width={30} height={30} />
        </div>
        <p className=" text-[18px] font-[500]">Get Desired Public </p>
      </div>
    </div>
  );
};

export default Steps;
