"use client";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

const Intro = () => {
  const [sliderValue, setSliderValue] = useState([400]);

  const handleSliderChange = (value:any) => {
    setSliderValue([value]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="lg:mt-56 mt-32 lg:max-w-[50%] items-center">
        <h2 className="text-red-400 text-3xl font-semibold text-center">
          Create ur gig <br />
          <span className="text-black text-3xl font-semibold">
            You get the Job done for
          </span>
        </h2>
      </div>
      <div className="mt-10 mb-5 lg:mx-8">
        <Slider
          defaultValue={sliderValue}
          max={10000}
          step={1}
          className="lg:px-80 px-40 rounded-md bg-black"
          onValueChange={(value) => handleSliderChange(value)}
          value={sliderValue}
        />
        <h2 className=" text-3xl font-semibold text-center">
          {sliderValue}
          </h2>
      </div>
    </div>
  );
};

export default Intro;
