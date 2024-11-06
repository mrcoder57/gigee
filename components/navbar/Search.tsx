"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import Image from "next/image";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="flex flex-row justify-between">
  <div className="rounded-full lg:w-[370px] w-[270px]  h-12 my-2 cursor-pointer border-[1px] lg:shadow-md hover:border-[#e1dbdb] transition">
    <div className="flex flex-row items-center justify-between py-1 px-3">
      <Separator orientation="vertical" className="h-[90%]" />
      <div className="text-sm  flex w-full items-center justify-between">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex-grow items-center justify-center"
        >
          <input
            type="text"
            id="search"
            className="w-full h-auto ml-3 text-[15px] font-[500] mt-0.5 placeholder:text-gray-600 border-none outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="flex items-center justify-center h-8 w-8 ml-2 mt-0.5 lg:bg-rose-500 bg-[#e6e6e6] rounded-full text-white"> 
          <button
            className="rounded-full"
            onClick={handleSearch}
          >
         
            <Image src="/search.svg" alt="search" width={20} height={20} className=" hidden lg:block" />
            <Image src="/search-black.svg" alt="search" width={20} height={20} className=" lg:hidden block" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Search;
