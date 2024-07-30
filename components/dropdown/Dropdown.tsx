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
const Dropdown = () => {
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
        
        <DropdownMenuItem>
         
        </DropdownMenuItem>
       
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
