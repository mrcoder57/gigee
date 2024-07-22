import React from "react";
import Intro from "@/components/CreateGig/intro";
import MultiStepForm from "@/components/CreateGig/multi-step-form/form";


const Creategig = () => {
  return (
    <div>
    <div className=" flex flex-col ">
      <Intro />
      <div className=" flex flex-row items-center justify-center">
      <MultiStepForm/>
      </div>
    </div>
    </div>
  );
};

export default Creategig;
