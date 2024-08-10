import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Logo = () => {
//const router = useRouter();

  return (
    <div className="hidden md:block cursor-pointer ">
      <Link href='/'>
      <Image 
        alt="Logo" 
        height={100} 
        width={100} 
        src="/images/gigee.png"
        layout="fixed" // Assuming you want the logo size to remain constant
      />
      </Link>
     
    </div>
  );
};

export default Logo;
