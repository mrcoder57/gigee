import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Logo = () => {
//const router = useRouter();

  return (
    <div className="hidden md:block cursor-pointer">
      <Image 
        alt="Logo" 
        height={100} 
        width={100} 
        src="/images/logo.png"
        layout="fixed" // Assuming you want the logo size to remain constant
      />
    </div>
  );
};

export default Logo;
