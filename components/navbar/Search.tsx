import React from "react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

const Search = () => {
  return (
    <div>
      <div className="border-[1px] rounded-full  w-full md:w-auto py-2  shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <div className="sm:block hidden font-semibold text-center px-6">
           baad m sochenge
          </div>

          <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
            Any week
          </div>
          <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
            <form>
              <label
                htmlFor="guestName"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                className="mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Add guest:"
              />
            </form>
            <div className="p-2 bg-rose-500 rounded-full text-white">
              <BiSearch size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
