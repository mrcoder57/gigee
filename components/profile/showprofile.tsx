"use client";
import React from "react";
import { Separator } from "../ui/separator";
interface ProfileData {
  city: string;
  education: string;
  email: string;
  languages: string[];
  name: string;
  phone: string;
  socials: string[];
  work: string;
}
const Profilecomp: React.FC<ProfileData> = ({
  city,
  education,
  email,
  languages,
  name,
  phone,
  socials,
  work,
}) => {
  return (
    <div className="grid  mx-auto p-4 bg-white shadow-md w-[300px] md:w-[450px] lg:w-full rounded-lg gap-4">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="col-span-1">
          <p className="block text-[16px] font-medium text-gray-700">
            Name :{name}
          </p>
          <Separator orientation="horizontal" className=" mt-3 w-[70%]" />
        </div>
        <div className="col-span-1">
          <p className="block text-[16px] font-medium text-gray-700">
            Phone :{phone}
          </p>
          <Separator orientation="horizontal" className=" mt-3 w-[70%]" />
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3 ">
        <div className="col-span-1">
          <p className="block text-[16px] font-medium text-gray-700">
            Where I went to school? : {education}
          </p>
          <Separator orientation="horizontal" className=" mt-3 w-[70%]" />
        </div>
        <div className="col-span-1">
          <p className="block text-[16px] font-medium text-gray-700">
            Where I live? : {city}
          </p>
          <Separator orientation="horizontal" className=" mt-3 w-[70%]" />
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="col-span-1">
          <p className="block text-[16px] font-medium text-gray-700">
            email : {email}
          </p>
          <Separator orientation="horizontal" className=" mt-3 w-[70%]" />
        </div>
        <div className="col-span-1">
          <p className="block text-[16px] font-medium text-gray-700">
            Kind of work I do : {work}
          </p>
          <Separator orientation="horizontal" className=" mt-3 w-[70%]" />
        </div>
      </div>
      <div className=" grid lg:grid-cols-2">
        <div className="col-span-1 gap-3">
          <p className="block text-[16px] font-medium text-gray-700">
            Platforms I am most active on :{" "}
            {socials.map((social, index) => (
              <p key={index}>{social}</p>
            ))}
          </p>
          <Separator orientation="horizontal" className=" mt-3 w-[70%]" />
        </div>
        <div className="col-span-1 gap-3">
          <p className="block text-[16px] font-medium text-gray-700">
            Languages I speak : [{" "}
            {languages.map((language, index) => (
              <span className=" first-letter:capitalize ml-2" key={index}>
                {language},
              </span>
            ))}{" "}
            ]
          </p>
          <Separator orientation="horizontal" className=" mt-3 w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default Profilecomp;
