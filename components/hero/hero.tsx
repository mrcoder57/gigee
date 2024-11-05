// components/Hero.tsx

import Image from "next/image";
import Share from "./share";
import React from "react";
interface GigProps {
  gigId: string;
  image: string;
  title: string;
}
const Hero: React.FC<GigProps> = ({ gigId, image, title }) => {
  return (
    <div className=" w-full">
    <div className="flex lg:flex-col flex-col-reverse w-full max-w-6xl lg:mx-auto  ">
      <div className=" flex flex-row mt-4 justify-between px-4  ">
        <p className=" lg:mt-12 text-[28px] font-[500] ">{title}</p>
        <div className=" lg:mt-12 lg:block hidden">
          <Share gigId={gigId} />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="lg:mt-8 mt-14 w-full lg:h-[560px] h-[320px] relative items-center justify-center ">
          <Image
            src={image || "/images/gigee.png"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="lg:rounded-lg"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
