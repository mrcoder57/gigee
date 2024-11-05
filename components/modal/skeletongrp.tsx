import React from "react";
import { SkeletonCard } from "../skeleton/skeleton";

const Skeletons = () => {
  return (
    <div className="grid py-24 mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 desktop:grid-cols-5 gap-10 justify-around lg:ml-5 lg:gap-y-16 gap-y-8 mb-12">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default Skeletons;
