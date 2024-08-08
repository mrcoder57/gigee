import Link from "next/link";
import Image from "next/image";
import { Separator } from "../components/ui/separator";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { AiFillFacebook } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { PiTwitterLogoLight } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <Separator orientation="horizontal" className="bg-gray-200 mt-4 " />
      <footer className="bg-slate-100 font-medium py-8 px-4  w-full ">
        <div className="container mx-auto mt-10 ">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and Description */}
            <div className="mb-6 md:mb-0">
              <Link href="/">
              <Image
                src="/images/logo.png"
                alt="GigBnB Logo"
                width={150}
                height={50}
              />
              </Link>
              <p className="mt-3 text-sm ">
                Your go-to platform for Creating contract jobs for every domain.
              </p>
            </div>

            {/* Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2">Contact</h3>
              <ul>
                <li>
                  <a href="mailto:gigbnbverifi@gmail.com">
                    gigbnbverifi@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:underline">
                  <SlSocialFacebook size={24} />
                </a>
                <a href="#" className="hover:underline">
                  <PiTwitterLogoLight size={24} />
                </a>
                <a href="#" className="hover:underline">
                  <RiGithubLine size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm">
            &copy; 2024 GigEE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
