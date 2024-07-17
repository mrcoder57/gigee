// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-200 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">gigge</h2>
          <p className="mt-1">© 2024 All rights reserved.</p>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 ">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 ">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
