"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Login } from "@/components/modal/modal1";
import { Avatar } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";

type Props = {};

const UserMenu = (props: Props) => {
 

  return (
    <div className="relative">
      <div className=" w-16 h-10 p-3 flex items-center justify-center border-2 rounded-full">
      <Dropdown/>
      </div>
    </div>
  );
};

export default UserMenu;
