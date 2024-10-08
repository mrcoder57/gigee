"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi"
  

const MobileSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/pages/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className=" lg:hidden block focus:outline-none mt-1">
    <BiSearch size={25} />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <div className="flex items-center justify-between h-12 w-[320px] max-w-xs rounded-lg border border-gray-200">
          <input
            type="text"
            className="w-[85%] ml-2 h-full border-none outline-none focus:outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex items-center justify-center h-full w-[15%] bg-rose-500 rounded-md text-white">
            <button className="rounded-full" 
            onClick={handleSearch}>
              <BiSearch size={20} />
            </button>
          </div>
        </div>
    </DropdownMenuContent>
  </DropdownMenu>
  
  )
}

export default MobileSearch