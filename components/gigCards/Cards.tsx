import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  gigId: string;
  image?: string;
  title: string;
  userId: string;
  price: number;
  creatorName: string;
}

const Cards: React.FC<CardProps> = ({
  gigId,
  image,
  title,
  price,
  userId,
  creatorName,
}) => {
  return (
    <div>
      <div className="flex h-auto lg:w-72 md:w-[330px] w-[320px] mx-auto bg-white rounded-lg overflow-hidden">
        <div className="relative w-full h-[310px]">
          <Link href={`/pages/gig/${gigId}`}>
            {image ?  (
              <div className=" rounded-xl shadow-lg">
                    <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              </div>
          
            ) : (
              <div className="flex items-center justify-center shadow-sm w-full h-full text-center p-4">
                <div>
                  <h2 className="text-xl font-semibold first-letter:capitalize">
                    {title}
                  </h2>
                  <p className="text-gray-500 first-letter:capitalize">
                    hosted by {creatorName || "Creator"}
                  </p>
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
      <CardHeader className="lg:ml-[17px] ml-2">
        <Link href={`/pages/gig/${gigId}`}>
          <CardTitle className="first-letter:capitalize">{title}</CardTitle>
        </Link>
        <CardDescription className="first-letter:capitalize">
          hosted by <span className="first-letter:capitalize">{creatorName || "Creator"}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="lg:ml-[17px] mt-[-10px] ml-3">
        <p>${price}</p>
      </CardContent>
    </div>
  );
};

export default Cards;
