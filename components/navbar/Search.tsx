"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";

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
  <div className="rounded-full w-96 h-14 my-2 cursor-pointer border-[1px] shadow-md hover:border-[#e1dbdb] transition">
    <div className="flex flex-row items-center justify-between py-[3px] px-3">
      <Separator orientation="vertical" className="h-[90%]" />
      <div className="text-sm text-gray-600 flex w-full items-center justify-between">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex-grow"
        >
          <input
            type="text"
            id="search"
            className="w-full h-12 ml-3 text-[15px] border-none outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="flex items-center justify-center h-10 w-10 ml-2 bg-rose-500 rounded-full text-white">
          <button
            className="rounded-full"
            onClick={handleSearch}
          >
            <BiSearch size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Search;
