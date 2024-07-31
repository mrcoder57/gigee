"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoAdd } from "react-icons/io5";
interface FormData {
  name: string;
  phone: string;
  socials: string[];
  languages: string[];
}

const ProfileForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [city, setCity] = useState("");
  const [work,setWork]=useState("")
  const [hobby,setHobby]=useState("")
  const [socials, setSocials] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  const handleSocialChange = (index: number, value: string) => {
    const newSocials = [...socials];
    newSocials[index] = value;
    setSocials(newSocials);
  };

  const handleLanguageChange = (index: number, value: string) => {
    const newLanguages = [...languages];
    newLanguages[index] = value;
    setLanguages(newLanguages);
  };

  const addSocialInput = () => {
    setSocials([...socials, ""]);
  };

  const addLanguageInput = () => {
    setLanguages([...languages, ""]);
  };

  return (
    <form className="flex flex-col mx-auto p-4 col-span-2 bg-white shadow-md md:w-[450px] lg:w-full w-[300px] rounded-lg space-y-4 lg:space-y-0 lg:gap-4">
      <div className=" flex lg:flex-row flex-col  gap-10">
        <div className="col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col gap-10">
        <div className="col-span-2">
          <label
            htmlFor="education"
            className="block text-sm font-medium text-gray-700"
          >
            Where i went to school?
          </label>
          <Input
            type="text"
            id="education"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            Where i live?
          </label>
          <Input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col gap-10">
        <div className="col-span-2">
          <label
            htmlFor="education"
            className="block text-sm font-medium text-gray-700"
          >
            I spent most of time on
          </label>
          <Input
            type="text"
            id="education"
            name="education"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="work"
            className="block text-sm font-medium text-gray-700"
          >
            Kind of Work i do
          </label>
          <Input
            type="text"
            id="work"
            name="work"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col gap-10">
        <div className="col-span-2 gap-3">
          <label className="block text-sm font-medium text-gray-700">
            Plateforms I am most active on
          </label>
          {socials.map((social, index) => (
            <Input
              key={index}
              type="text"
              value={social}
              onChange={(e) => handleSocialChange(index, e.target.value)}
              className="gap-3"
            />
          ))}
          <Button type="button" onClick={addSocialInput} className=" mt-3 rounded-full p-[18px]  border-2 border-dotted border-gray-400 shadow-md">
          <IoAdd size={20} /> Add
          </Button>
        </div>
        <div className="col-span-2 gap-3">
          <label className="block text-sm font-medium text-gray-700">
            Languages I speak
          </label>
          {languages.map((language, index) => (
            <Input
              key={index}
              type="text"
              value={language}
              onChange={(e) => handleLanguageChange(index, e.target.value)}
              className=" gap-3"
            />
          ))}
          <Button type="button" onClick={addLanguageInput}  className=" mt-3 rounded-full p-[18px]  border-2 border-dotted border-gray-400 shadow-md">
            <IoAdd size={20}/> Add
          </Button>
        </div>
      </div>
      <div className="col-span-2">
        <Button
          type="submit"
          variant="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
