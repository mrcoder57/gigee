"use client";

import React, { useState } from "react";
import CategoryItem from "./categoryItems";
import { usePathname } from "next/navigation";

import { FiBriefcase, FiClipboard, FiGlobe } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa6";
import { BiSolidParty } from "react-icons/bi";
import { MdOutlineSportsBaseball, MdOutlineFestival } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";
import { FaPeopleLine } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const CategoriesToggles = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const pathName = usePathname();

  const handleSelect = (name: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === name ? null : name
    );
  };

  const categories = [
    { name: "Placements", icon: FiBriefcase },
    { name: "Coding Contest", icon: FaLaptopCode },
    { name: "Gigs", icon: FiClipboard },
    { name: "Sports", icon: MdOutlineSportsBaseball },
   
    { name: "Cultural Events", icon: BiSolidParty },
    { name: "Festival", icon: MdOutlineFestival },
    { name: "Travel/ Picnic", icon: TbTrekking },
    { name: "Guest Lectures", icon: FaPeopleLine },
    { name: "Workshops", icon: GrWorkshop },
  ];

  if (pathName !== "/") {
    return null;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full max-w-7xl h-auto "
    >
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem
            key={index}
            className=" basis-[32%] flex flex-col items-center justify-center"
          >
            <div className="pb-2  flex items-center justify-center h-auto">
              <CategoryItem
                key={category.name}
                name={category.name}
                Icon={category.icon}
                isSelected={selectedCategory === category.name}
                onSelect={handleSelect}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CategoriesToggles;
