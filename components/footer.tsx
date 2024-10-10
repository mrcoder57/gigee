"use client";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../components/ui/separator";

import { AiFillFacebook } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { PiTwitterLogoLight } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";
import { quickLinks } from "@/utils/constants";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();
  const isChatsPage= pathName==="/pages/chats"
  if (isChatsPage) return null;
  return (
    <div className="w-full border-t-2 h-[350px] flex items-center justify-center">
  <footer className="flex flex-col gap-2 items-center justify-between h-full w-full">
    <div className="flex lg:flex-row flex-col items-center w-full justify-center lg:gap-48 gap-y-7 mt-auto mb-auto px-4">
      <div className="flex flex-col justify-center items-center lg:gap-7 gap-4">
        <Link href="/">
          <Image
            src="/images/gigee.png"
            alt="GigBnB Logo"
            width={150}
            height={50}
          />
        </Link>
        <a
          href="mailto:gigbnbverifi@gmail.com"
          className="text-[12px] font-semibold"
        >
          gigbnbverifi@gmail.com
        </a>
      </div>

      <div className="flex flex-col justify-center lg:gap-y-4">
        <h3 className="text-[12px] font-medium">Quick Links</h3>
        {quickLinks.map((links, ind) => (
          <a href="#" className="text-[12px] text-[#909090]" key={ind}>
            {links.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col justify-center mt-4 lg:gap-y-7">
        {quickLinks.map((links, ind) => (
          <a href="#" className="text-[12px] text-[#909090]" key={ind}>
            {links.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center lg:gap-y-6 gap-y-2">
        <h3 className="text-[12px] font-medium">Search products</h3>
        <div className="flex items-center justify-between h-12 w-full max-w-xs rounded-lg border border-gray-200">
          <input
            type="text"
            className="w-[70%] ml-2 h-full border-none outline-none focus:outline-none"
          />
          <div className="flex items-center justify-center h-full w-[30%] bg-rose-500 rounded-md text-white">
            <button className="rounded-full">
              <BiSearch size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-4 w-full justify-between items-center px-4 mb-6">
      <hr className="lg:flex border-[#909090] lg:w-[80%] w-[50%]" />
      <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-[340px] gap-y-3">
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="h-[28px] w-[28px] hover:cursor-pointer flex items-center justify-center border border-[#909090] rounded-full">
            <SlSocialFacebook size={18} />
          </div>
          <div className="h-[28px] w-[28px] hover:cursor-pointer flex items-center justify-center border border-[#909090] rounded-full">
            <PiTwitterLogoLight size={18} />
          </div>
          <div className="h-[28px] w-[28px] hover:cursor-pointer flex items-center justify-center border border-[#909090] rounded-full">
            <RiGithubLine size={18} />
          </div>
        </div>

        <div className="text-center flex items-center justify-center">
          <p className="text-[12px]">A product of GIGEE</p>
        </div>
        <div className="text-center flex items-center justify-center">
          <p className="text-[12px]">© 2024 all rights reserved</p>
        </div>
      </div>
    </div>
  </footer>
</div>

  );
};

export default Footer;
