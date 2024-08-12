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
  creatorName: string;
}
const Cards: React.FC<cardProps> = ({
  gigId,
  image,
  title,
  price,
  userId,
  creatorName,
}) => {
  return (
    <div>
      <div className=" flex h-auto lg:w-72 md:w-[330px] w-[320px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-[310px]">
        <Link href={`/pages/gig/${gigId}`}>
        {image ? (
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          ) : (
            <Image
              src="/images/gigee.png"
              alt="Sample"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          )}
          </Link>
        </div>
      </div>
      <CardHeader className=" lg:ml-[-17px] ml-2">
        <Link href={`/pages/gig/${gigId}`}>
          <CardTitle className=" first-letter:capitalize">{title}</CardTitle>
        </Link>
        <CardDescription className=" first-letter:capitalize">
          hosted by <span className="  first-letter:capitalize">{creatorName || "Creator"}</span>{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className=" lg:ml-[-17px] mt-[-10px] ml-3">
        <p>${price}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </div>
  );
};

export default Cards;
