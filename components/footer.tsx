import Link from 'next/link';
import Image from 'next/image';
import { Separator } from "../components/ui/separator";
import { IoLogoFacebook,IoLogoLinkedin,IoLogoTwitter } from "react-icons/io5";
import { AiFillFacebook } from 'react-icons/ai';
import { SlSocialFacebook } from "react-icons/sl"
import { PiTwitterLogoLight } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
        <Separator orientation="horizontal" className="bg-gray-200 mt-4 " /> 
    <footer className="bg-slate-100 font-medium py-8  w-full ">
     
      <div className="container mx-auto mt-10 ">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <Image src="/images/logo.png" alt="GigBnB Logo" width={150} height={50} />
            <p className="mt-2 text-sm">
              Your go-to platform for finding gigs and job opportunities.
            </p>
          </div>

          {/* Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-sm hover:underline">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-sm hover:underline">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/jobs" legacyBehavior>
                  <a className="text-sm hover:underline">Jobs</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-sm hover:underline">Contact</a>
                </Link>
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
          &copy; 2024 GigBnB. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
