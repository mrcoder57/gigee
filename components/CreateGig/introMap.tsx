"use client";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../map/leafletMap"), { ssr: false });

import React from "react";

import { Separator } from "@/components/ui/separator";

const IntroMap = () => {
  return (
    <div className="flex flex-col gap-y-4  justify-center w-full h-full lg:px-0 px-2 py-4">
      <div className="flex lg:w-full max-w-2xl w-[337px] justify-center items-center mx-auto lg:h-[597px] h-[257px] sm:w-[550px] sm:h-[266px] md:w-[833px] md:h-[310px] mt-2 rounded-lg shadow-lg z-10">
        <LeafletMap />
      </div>
    </div>
  );
};

export default IntroMap;
