import Link from 'next/link';
import Image from 'next/image';
import { Separator } from "../components/ui/separator";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black font-bold py-8 lg:ml-10 lg:mr-10 ">
      <Separator orientation="horizontal" className="bg-gray-300 mt-4" />
      <div className="container mx-auto mt-10 px-4">
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
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:underline">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:underline">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-bold mb-2">Subscribe</h3>
            <form className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded mb-2 md:mb-0"
              />
              <button type="submit" className="bg-blue-500 p-2 rounded text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          &copy; 2024 GigBnB. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
