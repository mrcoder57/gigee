"use client"
import Searchbody from "@/components/searchPage/search-body";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const SearchPage: React.FC = () => {
  return (
    <div className="flex justify-center space-y-20">
      <div className="sm:block justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchComponent />
        </Suspense>
      </div>
    </div>
  );
};

const SearchComponent: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  console.log(query);

  return <Searchbody query={query} />;
};

export default SearchPage;
