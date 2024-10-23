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
import { RxAvatar } from "react-icons/rx";
import { Login } from "../modal/login";
import { Signup } from "../modal/sign-up";
import Cookies from "js-cookie";
import Link from "next/link";
import { logOut } from "@/utils/api-handler";
import { useRouter } from "next/navigation";

const Dropdown = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");
    const userId = Cookies.get("userId");
    if (token) {
      setLoggedIn(true);
      setUserId(userId || "");
    }
  }, []);

  const handleLogout = async () => {
    await logOut();
    setLoggedIn(false);
    setUserId("");
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-blue-50 focus:outline-none">
        <div className="w-10 h-10  flex items-center justify-center ">
          <RxAvatar size={28} /> {/* Adjust the size as needed */}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        {loggedIn ? (
          <>
            <DropdownMenuItem className="text-center hover:text-gray-600 transition-colors duration-200">
              <Link href={`/profile/${userId}`}>
                <span className="text-center font-normal ml-2">
                  Edit Profile
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" ml-2 cursor-pointer text-center font-medium hover:underline hover:text-gray-600 transition-colors duration-200 "
              onClick={handleLogout}
            >
              Logout
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuLabel>
              <Login />
            </DropdownMenuLabel>
            <DropdownMenuItem className="text-center font-semibold">
              {/* <Signup /> Optional: If you have a Signup option */}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
