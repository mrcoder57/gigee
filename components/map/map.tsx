"use client";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./leafletMap"), { ssr: false });


import React from "react";

import { Separator } from "@/components/ui/separator";

const Map = () => {
  return (
    <div id="map" className="flex lg:px-4 px-0 flex-col w-full lg:pt-2 lg:mt-2 py-2 my-2 justify-between lg:max-w-6xl z-10  h-full">
        <Separator className="mb-8" />
      <div className="flex flex-col gap-y-4  justify-center w-full h-full lg:px-0 px-2 py-4">
        <h1
          className={`font-semibold text-[22px]  text-[#222222]`}
        >
          Where You&#39; ll Be
        </h1>
        <p className=" text-[16px] font-[500]">Delhi,IN</p>
        <div className="flex lg:w-full w-[337px] justify-center items-center mx-auto lg:h-[397px] h-[257px] sm:w-[550px] sm:h-[266px] md:w-[833px] md:h-[310px] mt-2 rounded-lg">
          {/* <LeafletMap/> */}
        </div>
      </div>
      <Separator  className=" my-7" />
    </div>
  );
};

export default Map;