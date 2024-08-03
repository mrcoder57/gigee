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
import { Textarea } from "@/components/ui/textarea";

const Step1: React.FC<{
  nextStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  values: { title: string; description: string };
}> = ({ nextStep, handleChange, values }) => {
  return (
    <div className="flex flex-col h-auto mt-28 mb-16 lg:w-[50%] md:w-64 w-64 mx-auto bg-white shadow-lg shadow-slate-400 rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-center">Step 1</CardTitle>
        <CardDescription>Please describe your Work</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              type="text"
              className="col-span-3"
              value={values.title}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              className="col-span-3"
              value={values.description}
              onChange={handleChange}
            />
          </div>
        </div>
      </CardContent>
      <div className=" flex items-center justify-center mb-5">
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  );
};

export default Step1;
