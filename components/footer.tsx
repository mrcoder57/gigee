// components/Footer.tsx

import React from "react";
import { Separator } from "./ui/separator";
const Footer: React.FC = () => {
  return (
    <footer className="  bg-slate-100 py-6">
      <div className="container mx-auto flex flex-col  justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">gigge</h2>
          <p className="mt-1">© 2024 All rights reserved.</p>
        </div>
        <Separator orientation="horizontal" className=" bg-gray-300 mt-4" />
        <div className="flex flex-col mt-4 md:mt-0 ">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <Separator orientation="horizontal" className=" bg-gray-300 mt-4" />
        <div className="flex flex-col mt-4 md:mt-0 ">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
