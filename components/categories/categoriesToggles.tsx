"use client";

import React, { useState } from 'react';
import CategoryItem from './categoryItems';
import { usePathname } from 'next/navigation';
import { FiBriefcase, FiClipboard, FiGlobe } from 'react-icons/fi';
import { FaLaptopCode } from "react-icons/fa6";
import { BiSolidParty } from "react-icons/bi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdOutlineFestival } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";
import { FaPeopleLine } from "react-icons/fa6";
const CategoriesToggles = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
        const pathName = usePathname();
    // Custom handleSelect function to toggle selection
    const handleSelect = (name: string) => {
        setSelectedCategory(prevCategory => (prevCategory === name ? null : name));
    };

    const categories = [
        { name: 'Jobs', icon: FiBriefcase },
        { name: 'Gigs', icon: FiClipboard },
        { name: 'Sports', icon: MdOutlineSportsBaseball },
        { name: 'Coding Contest', icon: FaLaptopCode },
        {name:"Cultural Events",icon:BiSolidParty},
        {name:"Festival",icon:MdOutlineFestival},
        {name:"Travel/ Picnic",icon:TbTrekking},
        {name:"Guest Lectures",icon:FaPeopleLine},
        {name:"Workshops",icon:GrWorkshop},
    ];
if(pathName !== "/"){
    return null;
}
    return (
        <div className="w-full py-4">
            <div className="flex items-center justify-center space-x-7 gap-x-7 ">
                {categories.map((category) => (
                    <CategoryItem
                        key={category.name}
                        name={category.name}
                        Icon={category.icon}
                        isSelected={selectedCategory === category.name}
                        onSelect={handleSelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesToggles;
