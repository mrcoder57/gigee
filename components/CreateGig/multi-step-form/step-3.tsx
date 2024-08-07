import React from 'react';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UploadComponent from '@/components/imageUpload/upload';

interface Step3Props {
  prevStep: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: any;
  onImageUpload: (url: string) => void;
}

const Step3: React.FC<Step3Props> = ({ prevStep, handleSubmit, handleChange, values, onImageUpload }) => {
  return (
    <div className="flex flex-col h-auto mt-16 mb-16 lg:w-[550px] md:w-64 w-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-center">Step 3</CardTitle>
        <CardDescription>Upload an image</CardDescription>
      </CardHeader>
      <CardContent>
        <UploadComponent onImageUpload={onImageUpload} />
      </CardContent>
      <div className='flex flex-row justify-between mx-6 mb-5'>
        <Button variant='outline' onClick={prevStep}>Back</Button>
        <Button onClick={handleSubmit} variant="ghost">Submit</Button>
      </div>
    </div>
  );
};

export default Step3;
