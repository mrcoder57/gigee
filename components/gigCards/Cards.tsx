import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Cards = () => {
  return (
    <div>
      <div className=" flex h-auto lg:w-72 md:w-64 w-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-[310px]">
        <Image
          src="/images/sample.jpg"
          alt="VIP with Kevin Hart"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        </div>
      </div>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>hosted by aman and anil</CardDescription>
      </CardHeader>
      <CardContent>
        <p>$3000</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </div>
  );
};

export default Cards;
