// components/Step1.tsx
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

const Step1: React.FC<{
  nextStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: { email: string; password: string };
}> = ({ nextStep, handleChange, values }) => {
  return (
    <div className="flex flex-col h-auto mt-16 mb-16 lg:w-[550px] md:w-64 w-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-center">Step 1</CardTitle>
        <CardDescription>Enter your email and password</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              className="col-span-3"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              className="col-span-3"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
        </div>
      </CardContent>
      <Button onClick={nextStep}>Next</Button>
    </div>
  );
};

export default Step1;
