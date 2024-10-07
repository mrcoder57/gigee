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
    <div className=" w-full ">
      <Separator orientation="horizontal" className="bg-gray-200 mt-4 " />
      <footer className="bg-slate-100 font-medium  flex items-center justify-center w-full h-96 ">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center md:flex-row justify-between">
            {/* Logo and Description */}
            <div className="mb-6 md:mb-0 flex flex-col">
              <Link href="/">
              <Image
                src="/images/gigee.png"
                alt="GigBnB Logo"
                width={150}
                height={50}
              />
              </Link>
              <p className="mt-3 text-sm ">
                Your go-to platform <br /> for Creating <br /> contract jobs for every domain.
              </p>
            </div>

            {/* Links */}
            <div className="mb-6 md:mb-0 flex flex-col  items-center justify-center">
              <h3 className="font-bold mb-2">Contact Us</h3>
              <ul>
                <li>
                  <a href="mailto:gigbnbverifi@gmail.com">
                    gigbnbverifi@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="mb-6 md:mb-0 flexx flex-col items-center justify-center">
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex items-center justify-center gap-3">
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
          <div className="mt-8 flex items-center justify-center text-center text-sm">
            &copy; <p>2024 GigEE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
