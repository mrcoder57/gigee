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
interface cardProps{
  image:string,
  title:string,
  userId:string,
  price:number
}
const Cards:React.FC<cardProps> = ({image,title,price,userId}) => {
  return (
    <div>
      <div className=" flex h-auto lg:w-72 md:w-64 w-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-[310px]">
        <Image
          src="/images/sample.jpg"
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>hosted by {userId}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>${price}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </div>
  );
};

export default Cards;
