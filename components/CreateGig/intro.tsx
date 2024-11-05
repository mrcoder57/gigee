"use client";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Map from "../map/map";
import IntroMap from "./introMap";

const Intro = () => {
  const [sliderValue, setSliderValue] = useState([400]);

  const handleSliderChange = (value:any) => {
    setSliderValue([value]);
  };

  return (
    <div className=" flex lg:flex-row flex-col w-full max-w-7xl items-center justify-between mx-auto h-full lg:pt-36 pt-24 "> 
    <div className="flex flex-col items-center  ">
      <div className=" lg:max-w-sm items-center">
        <h2 className="text-red-400 lg:text-[34px] text-[24px] font-bold text-center">
           Host any Events, Create any Jobs anywhere and many more <br />
          <span className="text-black  font-bold">
            You get the Job done for
          </span>
        </h2>
      </div>
      <div className="mt-10 mb-5 lg:mx-8">
        <Slider
          defaultValue={sliderValue}
          max={10000}
          step={1}
          className="lg:px-60 px-40 mb-5 h-[4px] rounded-md bg-[#6e6e6e6e]"
          onValueChange={(value) => handleSliderChange(value)}
          value={sliderValue}
        />
        <h2 className=" text-3xl font-semibold text-center">
          {sliderValue}
          </h2>
      </div>
    </div>
   <IntroMap/>
    </div>
  );
};

export default Intro;
