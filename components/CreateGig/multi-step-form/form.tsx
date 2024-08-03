"use client";
import React, { useState } from "react";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import axios from "axios";
import { toast } from "sonner";
import { config } from "@/utils/api-handler";
import Cookies from "js-cookie";
const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    location: "",
    price: 0,
    image: "",
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: name === "price" ? Number(value) : value });
  };
  

  const handleImageUpload = (url: string) => {
    setFormValues({ ...formValues, image: url });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const Token = Cookies.get("token");
      const { title, description, location, price, image } = formValues;
      // console.log(Token)
      const response = await axios.post("/api/gigs/gig",{
        title,
        description,
        location,
        price,
        image
      },config)
      console.log(response);
      toast.success("gig created successfully");
    } catch (err: any) {
      if (err.message) {
        toast.error(err.message);
        console.log(err);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={formValues}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formValues}
        />
      );
    case 3:
      return (
        <Step3
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={formValues}
          onImageUpload={handleImageUpload}
        />
      );
    default:
      return <div>Form submission successful!</div>;
  }
};

export default MultiStepForm;
