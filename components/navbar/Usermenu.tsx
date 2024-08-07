"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Login } from "@/components/modal/login";
import { Avatar } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";

type Props = {};

const UserMenu = (props: Props) => {
 

  return (
    <div className="relative">
      <div className=" ">
      <Dropdown/>
      </div>
    </div>
  );
};

export default UserMenu;
