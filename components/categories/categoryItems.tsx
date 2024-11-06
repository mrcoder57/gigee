"use client";

import React from "react";
import { IconType } from "react-icons";

interface CategoryItemProps {
  name: string;
  Icon: IconType; // Corrected type for a React component
  isSelected: boolean;
  onSelect: (name: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  name,
  Icon,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-auto cursor-pointer "
      onClick={() => onSelect(name)}
    >
      <Icon size={24} color={isSelected ? "black" : "#6a6a6a"} />
      <h5
        className={`text-[12px] font-medium mt-2 ${
          isSelected ? "text-black" : "text-[#6a6a6a]"
        }`}
      >
        {name}
      </h5>
    </div>
  );
};

export default CategoryItem;
