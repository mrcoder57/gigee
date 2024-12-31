import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Logo = () => {
//const router = useRouter();

  return (
    <div className="lg:flex items-center justify-center hidden">
      <Link href='/'>
      <Image 
        alt="Logo" 
        height={120} 
        width={120} 
        src="/logo.png"
        layout="fixed" // Assuming you want the logo size to remain constant
      />
      </Link>
     
    </div>
  );
};

export default Logo;
