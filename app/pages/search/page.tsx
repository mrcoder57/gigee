"use client"
import Searchbody from "@/components/searchPage/search-body";
import React from "react";
import { useSearchParams } from "next/navigation";

const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')
 console.log(query)

  return (
    <div className="flex justify-center space-y-20">
      <div className="sm:block justify-center">
        <Searchbody query={query} />
      </div>
    </div>
  );
};

export default SearchPage;
