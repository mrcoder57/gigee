"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Search from "./Search";

import Usersheet from "./userSidebar/usersheet";
import BackButton from "./back";
import CategoriesToggles from "../categories/categoriesCarousel";

function MobileNavbar() {
  const pathName = usePathname();

  const isChatsPage = pathName === "/chats";
  if (isChatsPage) return null;

  return (
    <div className="flex lg:hidden md:hidden items-center justify-center w-full bg-white  ">
      <div
        className={` flex flex-col fixed top-0 z-50 w-full justify-center items-center bg-white px-3 h-auto lg:h-auto shadow-sm `}
      >
        {/* Navbar starts */}
        <div className="flex flex-row items-center justify-between max-w-7xl py-2 w-full mx-auto">
          <div className="flex items-center justify-center">
            <BackButton />
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <Search />
          </div>
          <div className="flex flex-row items-center justify-center lg:gap-x-7 gap-x-3 ">
            <Usersheet />
          </div>
        </div>
        {/* Navbar ends */}

        <CategoriesToggles />
      </div>
    </div>
  );
}

export default MobileNavbar;
