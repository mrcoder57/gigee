"use client";
import React, { useState } from "react";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    location: "",
    price: 0,
    images: "",
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleImageUpload = (url: string) => {
    setFormValues({ ...formValues, images: url });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
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
