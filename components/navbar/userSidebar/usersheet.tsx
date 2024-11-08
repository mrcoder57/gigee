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
import { getSession, signOut } from "next-auth/react";
const Usersheet = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const router = useRouter();
  useEffect(() => {
    // Fetch session and get the userId from the session data
    const fetchSession = async () => {
      const session = await getSession();
      if (session?.user) {
        setLoggedIn(true);
        setUserId(session.user.id); // Assuming session.user contains id
        console.log(session.user.id);
      }
    };

    fetchSession();
  }, []);

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/", // Redirect to homepage or any other route after logout
    });
  };
  
  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-[36px] h-[36px]  lg:border-none border border-[#D9d9d9] rounded-full flex items-center justify-center">
          <Image src="/menu.svg" alt="delete" width={23} height={23} />
        </div>
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
              <Image src="/event.svg" alt="delete" width={23} height={23} />
              <Link href={`/create-gig`}>
                <span className=" text-center text-[16px] font-[500] ">
                  {" "}
                  Create ur Event
                </span>
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-[10px]">
              {userId ? (
                <>
                  <Image
                    src="/profile-circle.svg"
                    alt="profile-circle"
                    width={23}
                    height={23}
                  />
                  <Link href={`/profile/${userId}`}>
                    <span className="text-center text-[16px] font-[500]">
                      Edit Profile
                    </span>
                  </Link>
                </>
              ) : (
                <Login />
              )}
            </div>
          </div>
          <div className=" absolute bottom-3 flex flex-col items-start py-10 gap-y-4 justify-start w-full ">
            <div className=" flex flex-row items-center justify-center gap-x-[10px]">
              <Image src="/logout.svg" alt="delete" width={23} height={23} />
              <button onClick={handleLogout}>
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
