import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProfileSkel = () => {
  return (
    <div className="flex lg:gap-10 mt-20 justify-around lg:flex-row flex-col">
      <div className="relative lg:mt-24 mb-11 justify-center flex">
        <Skeleton className="lg:w-72 lg:h-72 h-64 w-64 relative items-center justify-center rounded-full" />
        <Skeleton />
      </div>
      
      <div className="relative lg:mt-24 mb-11 justify-center flex flex-col gap-5 ">
      <Skeleton className=" h-9 w-full "/>
      <Skeleton className=" h-5 w-full "/>
        <Skeleton className="lg:w-[500px] lg:h-72 h-64 w-64 relative items-center justify-center " />
        <Skeleton />
      </div>
    </div>
  );
};

export default ProfileSkel;
