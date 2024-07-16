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
import { Login } from "../modal/modal1";
import { Signup } from "../modal/sign-up";
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
        <DropdownMenuItem>login</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
