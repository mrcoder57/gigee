"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";
import Notifications from "./notificationns/notification";
import Link from "next/link";
import { NavLinks } from "@/utils/constants";

import Usersheet from "./userSidebar/usersheet";
import BackButton from "./back";
import { Separator } from "../ui/separator";
import CategoriesToggles from "../categories/categoriesToggles";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = pathName === "/";
  const isChatsPage = pathName === "/chats";
  if (isChatsPage) return null;

  return (
    <div className="lg:flex md:flex hidden items-center justify-center w-full   bg-white  ">
    <div
      className={` flex flex-col fixed top-0 z-50 w-full justify-center items-center bg-white px-2 h-[70px] lg:h-auto shadow-sm `}
    >
      {/* Navbar starts */}
      <div className="flex flex-row items-center justify-between max-w-7xl py-2 w-full mx-auto">
        <div className="flex items-center justify-center">
          <Logo />
          <BackButton/>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          {isHomePage ? (
            // Show NavLinks only on the home page
            !isScrolled ? (
              NavLinks.map((link, index) => (
                <div
                  key={index}
                  className="lg:block hidden text-[14px] font-semibold text-center px-6 p-2 hover:bg-gray-100 hover:p-2 hover:px-6 hover:rounded-full"
                >
                  <Link href={`/${link.Link}`}>{link.name}</Link>
                </div>
              ))
            ) : (
              // Show Search when scrolled on home page
              <div className="hidden sm:flex flex-row items-center">
                <Search />
              </div>
            )
          ) : (
            // Show Search on non-home pages
            <div className=" sm:flex flex-row items-center">
              <Search />
            </div>
          )}
        </div>
        <div className="flex flex-row items-center justify-center lg:gap-x-7 gap-x-3 ">
          
          <Notifications />
          <Usersheet />
        </div>
      </div>
      {/* Navbar ends */}
      {!isScrolled && isHomePage && (
        <div className="lg:flex hidden items-center justify-center mt-3 mb-2">
          <Search />
        </div>
      )}
      <Separator className=" h-[0.5px]" />
      <div className=" w-full flex  max-w-7xl h-auto">
        <CategoriesToggles />

      </div>
     
    </div>
    
    </div>
  );
}

export default Navbar;
