// components/Step2.tsx
import React from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Step2: React.FC<{
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: any;
}> = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div className="flex flex-col h-auto mt-16 mb-16 lg:w-[550px] md:w-64 w-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-center">Step 2</CardTitle>
        <CardDescription>Define price and location </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              price
            </Label>
            <Input
              id="price"
              type="number"
              name="price"
              className="col-span-3"
              
              value={values.price}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              location
            </Label>
            <Input
              id="location"
              name="location"
              className="col-span-3"
              type="text"
              value={values.location}
              onChange={handleChange}
            />
          </div>
        </div>
      </CardContent>
      <div className=" flex flex-row justify-between mx-6 mb-5">
        <Button variant="outline" onClick={prevStep}>
          Previous
        </Button>
        <Button onClick={nextStep} variant="ghost">Next</Button>
      </div>
    </div>
  );
};

export default Step2;
