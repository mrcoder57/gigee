import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
 import Image from 'next/image' 
const Usersheet = () => {
  return (
    <Sheet>
    <SheetTrigger>
        <Image src="/menu.svg" alt="delete" width={23} height={23} /> 
    </SheetTrigger>
    <SheetContent className=' bg-white'>
      <SheetHeader>
        <SheetTitle className=' text-[20px]'>Options</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  )
}

export default Usersheet