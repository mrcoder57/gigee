// components/Hero.tsx

import Image from "next/image";
import Share  from "./share";
import React from "react";
interface GigProps {
  gigId: string ;
  image:string;
  title:string
}
const Hero:React.FC<GigProps> = ({gigId,image,title}) => {
  return (
    <div className="flex flex-col w-full mx-auto ">
      <div className=" flex flex-row mt-10 justify-between lg:mx-20 mx-5">
        <p className=" mt-16 text-2xl font-semibold ">{title}</p>
        <div className=" mt-16"><Share gigId={gigId}/></div>
      </div>
      <div className=" flex flex-col justify-center items-center">
      <div className="mt-8 w-[85%] lg:h-[560px] h-[320px] relative items-center justify-center ">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      </div>
    </div>
  );
};

export default Hero;
