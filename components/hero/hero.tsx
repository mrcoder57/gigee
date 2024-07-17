// components/Hero.tsx

import Image from "next/image";
import { Share } from "./share";

const Hero = () => {
  return (
    <div className="flex flex-col w-full mx-auto ">
      <div className=" flex flex-row mt-10 justify-between mx-20">
        <p className=" mt-16 text-2xl font-semibold ">Go VIP with Kevin Hart</p>
        <div className=" mt-16"><Share/></div>
      </div>
      <div className=" flex flex-col justify-center items-center">
      <div className="mt-8 w-[85%] lg:h-[560px] h-[320px] relative items-center justify-center ">
        <Image
          src="/images/sample.jpg"
          alt="VIP with Kevin Hart"
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
