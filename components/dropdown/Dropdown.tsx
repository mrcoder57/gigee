"use client"
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineMenu } from "react-icons/ai";
import { Login } from "../modal/login";
import { Signup } from "../modal/sign-up";
import { ModeToggle } from "../theme-toggle/mode-toggle";
import AddButton from "../profile/profilepic";
import Link from "next/link";
import Cookies from "js-cookie";

const Dropdown = () => {
  const userId=Cookies.get("userId");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AiOutlineMenu size={16} /> {/* Adjust the size as needed */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Signup />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <Login />
        </DropdownMenuLabel>
        {/* <DropdownMenuLabel className=" text-center font-semibold">
          <Link href={`/pages/profile/${userId}`}>
          <span>Edit Profile</span>
          </Link>
        </DropdownMenuLabel> */}
        
         <DropdownMenuItem className=" text-center font-semibold">
         <Link href={`/pages/profile/${userId}`}>
          <span className=" text-center font-semibold">Edit Profile</span>
          </Link>
        </DropdownMenuItem> 
       
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
