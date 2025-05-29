"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();
  const isChatsPage= pathName==="/chats"
  if (isChatsPage) return null;
  return (
    <footer className="bg-gray-50 text-gray-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full ">
      <div className="flex flex-col items-center mb-8">
        <Link href="/" className="mb-4">
          <Image
            src="/images/gigee.png"
            alt="Company Logo"
            width={250}
            height={100}
            className="h-12 w-auto"
          />
        </Link>
        <p className="text-sm text-gray-500 text-center">Host any Jobs or Events</p>
      </div>
      {/* links  */}
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 lg:flex justify-between w-full mx-auto px-auto">
        <div>
          <h2 className="text-gray-900 text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm hover:text-gray-900 transition-colors">Home</Link></li>
            <li><Link href="/products" className="text-sm hover:text-gray-900 transition-colors">Products</Link></li>
            <li><Link href="/services" className="text-sm hover:text-gray-900 transition-colors">Services</Link></li>
            <li><Link href="/contact" className="text-sm hover:text-gray-900 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-gray-900 text-lg font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><Link href="/blog" className="text-sm hover:text-gray-900 transition-colors">Blog</Link></li>
            <li><Link href="/faq" className="text-sm hover:text-gray-900 transition-colors">FAQ</Link></li>
            <li><Link href="/support" className="text-sm hover:text-gray-900 transition-colors">Support</Link></li>
          </ul>
        </div>
        <div className=" lg:max-w-sm">
          <h2 className="text-gray-900 text-lg font-semibold mb-4">Get a Call Back</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            // Handle form submission here
            console.log('Form submitted')
          }}>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                type="tel" 
                id="phone" 
                placeholder="Enter your phone number" 
                required 
              />
            </div>
            <Button type="submit" className="mt-2 w-full bg-rose-500 hover:bg-rose-400">
              Request Call Back
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors mr-4">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </footer>

  );
};

export default Footer;
