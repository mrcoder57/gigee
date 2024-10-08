"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";
import Notifications from "../notificationns/notification";
import Link from "next/link";
import { NavLinks } from "@/utils/constants";
import MobileSearch from "./mobileSearch";

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

  return (
    <div className={`fixed flex flex-col top-0 left-0 w-full z-50 transition-all duration-300 bg-white`}>
      {/* Navbar starts */}
      <div className="flex flex-row items-center justify-between mt-4 mb-4 lg:mx-9 mx-4">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          {isHomePage ? (
            // Show NavLinks only on the home page
            (!isScrolled ? NavLinks.map((link, index) => (
              <div
                key={index}
                className="lg:block hidden text-[14px] font-semibold text-center px-6 p-2 hover:bg-gray-100 hover:p-2 hover:px-6 hover:rounded-full"
              >
                <Link href={`/pages/${link.Link}`}>{link.name}</Link>
              </div>
            )) : (
              // Show Search when scrolled on home page
              <div className="hidden sm:flex flex-row items-center">
                <Search />
              </div>
            ))
          ) : (
            // Show Search on non-home pages
            <div className="hidden sm:flex flex-row items-center">
              <Search />
            </div>
          )}
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <MobileSearch/>
          <Notifications />
          <Usermenu />
        </div>
      </div>
      {/* Navbar ends */}
      {(!isScrolled && isHomePage) && (
        <div className="lg:flex hidden items-center justify-center mt-0 mb-2">
          <Search />
        </div>
      )}
      <hr />
    </div>
  );
}

export default Navbar;
