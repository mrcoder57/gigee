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
import Link from "next/link";
interface cardProps {
  gigId: string;
  image: string;
  title: string;
  userId: string;
  price: number;
}
const Cards: React.FC<cardProps> = ({ gigId, image, title, price, userId }) => {
  return (
    <div>
      <div className=" flex h-auto lg:w-72 md:w-[300px] w-[300px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
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
        <Link href={`/pages/gig/${gigId}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
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
