"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/pages/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    <div>
      <div className="border-[1px] rounded-full  w-full md:w-auto py-2  shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <div className="sm:block hidden text-sm font-semibold text-center px-6 hover:ml-3 hover:bg-gray-100 hover:p-2 hover:px-6 hover:rounded-full">
            <Link href="/pages/create-gig"> Create your gig</Link>
          </div>
          <Separator orientation="vertical" className=" h-[90%]"/>
          {/* <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
            Any week
          </div> */}
          <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
            <form>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                type="text"
                id="search"
                className="mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="search "
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
            </form>
            <div className=" bg-rose-500 rounded-full text-white">
              <button
                className=" p-2 h-full w-full rounded-full"
                onClick={handleSearch}
              >
                <BiSearch size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
