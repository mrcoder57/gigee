"use client";
import React, { useEffect, useState } from "react";
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
import Cookies from "js-cookie";
import Link from "next/link";

const Dropdown = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    const userId = Cookies.get("userId");
    if (token) {
      setLoggedIn(true);
      setUserId(userId || "");
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" border-blue-50 focus:outline-none">
        <div className="w-16 h-10 p-3 flex items-center justify-center border-2 rounded-full">
        <AiOutlineMenu size={16} /> {/* Adjust the size as needed */}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <Login />
        </DropdownMenuLabel>
        {loggedIn && (
          <DropdownMenuItem className="text-center font-semibold">
            <Link href={`/pages/profile/${userId}`}>
              <span className="text-center font-normal ml-2">Edit Profile</span>
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
