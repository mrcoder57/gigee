"use client";
import React, { useState, useEffect } from "react";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import axios from "axios";
import { toast } from "sonner";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const MultiStepForm: React.FC = () => {
  const { data: session, status } = useSession();  // Call useSession at the top of the component
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    location: "",
    price: 0,
    image: "",
  });
  const [debouncedFormValues, setDebouncedFormValues] = useState(formValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: name === "price" ? Number(value) : value });
  };

  const handleImageUpload = (url: string) => {
    setFormValues({ ...formValues, image: url });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFormValues(formValues);
    }, 500); // Adjust the debounce delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [formValues]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if session is authenticated
      if (status !== "authenticated" || !session?.token) {
        toast.error("You must be logged in to create a gig.");
        setIsSubmitting(false);
        return;
      }

      const { title, description, location, price, image } = debouncedFormValues;

      // Send a POST request to create the gig
      const response = await axios.post(
        "/api/gigs/gig",
        {
          title,
          description,
          location,
          price,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${session.token}`,  // Make sure you're passing the correct token if available
          },
        }
      );

      console.log(response);
      const { gigId } = response.data.newGig._id;
      console.log("gigId", gigId);

      // You may want to handle successful gig creation here, e.g., by redirecting
      toast.success("Gig created successfully!");
      router.push(`/gigs/${gigId}`);  // Optionally navigate to the new gig page

    } catch (err: any) {
      toast.error(err?.message || "An unknown error occurred");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} />;
    case 3:
      return (
        <Step3
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={formValues}
          onImageUpload={handleImageUpload}
          isSubmitting={isSubmitting}
        />
      );
    default:
      return <div>Form submission successful!</div>;
  }
};

export default MultiStepForm;
