"use client";

import Image from 'next/image';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

const BackButton = () => {
    const pathName = usePathname();
    const router = useRouter();

    if (pathName === '/chats' || pathName === '/') return null;

    const handleBack = () => {
        router.back();
    };

    return (
        <div className='lg:hidden  flex items-center justify-center'>
            <button className='w-[36px] h-[36px] flex items-center justify-center rounded-full' onClick={handleBack} >
                <Image src='/back.svg' alt='back' width={23} height={23} />
            </button>
        </div>
    );
};

export default BackButton;
