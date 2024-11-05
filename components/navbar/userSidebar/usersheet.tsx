"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Login } from "@/components/modal/login";
import { logOut } from "@/utils/api-handler";
const Usersheet = () => {
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
    <Sheet>
      <SheetTrigger>
        <Image src="/menu.svg" alt="delete" width={23} height={23} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className=" text-[20px] mt-[-15px]">Options</SheetTitle>
          <div className=" flex flex-col items-start py-10 gap-y-4 justify-start w-full">
            <div className=" flex flex-row items-center justify-center gap-x-[10px]">
              <Image src="/dashboard.svg" alt="delete" width={23} height={23} />
              <Link href={"/profile"}>
                <span className=" text-center text-[16px] font-[500] ">
                  {" "}
                  Dashboard
                </span>
              </Link>
            </div>
            <div className=" flex flex-row items-center justify-center gap-x-[10px]">
              <Image
                src="/profile-circle.svg"
                alt="delete"
                width={23}
                height={23}
              />
               <Link href={`/profile/${userId}`}>
                <span className=" text-center text-[16px] font-[500] ">
                  {" "}
                  Edit Profile
                </span>
              </Link>
            </div>
            <Login />
          </div>
          <div className=" absolute bottom-3 flex flex-col items-start py-10 gap-y-4 justify-start w-full ">
            <div className=" flex flex-row items-center justify-center gap-x-[10px]">
              <Image src="/logout.svg" alt="delete" width={23} height={23} />
              <button onClick={logOut}>
                <span className=" text-center text-[16px] font-[500] ">
                  {" "}
                  Logout
                </span>
              </button>
            </div>
            <div className=" flex flex-row items-center justify-center gap-x-[10px]">
              <Image src="/settings.svg" alt="delete" width={23} height={23} />
              <Link href={"/profile"}>
                <span className=" text-center text-[16px] font-[500] ">
                  {" "}
                  Settings
                </span>
              </Link>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Usersheet;
