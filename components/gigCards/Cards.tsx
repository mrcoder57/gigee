import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  gigId: string;
  image?: string;
  title: string;
  userId: string;
  price: number;
  creatorName: string;
  description: string;
}

const Cards: React.FC<CardProps> = ({
  gigId,
  image,
  title,
  price,
  userId,
  creatorName,
  description
}) => {
  const trimmedDescription = description.slice(0, 500);

  return (
    <div className="flex flex-col  h-[400px] lg:w-[300px] md:w-[330px] w-[320px] gap-y-10 rounded-lg overflow-hidden bg-white">
      <Link href={`/gig/${gigId}`}>
        {image && (
          <div className="relative w-full h-[270px] gap-y-10 rounded-lg">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        )}
        <div className="py-3 p-1">
          <h2 className="text-xl font-[500]">{title}</h2>
          {!image && (
         <p className="text-sm font-[400] mt-2">{trimmedDescription}</p>
        )}
          <p className="text-sm font-[500] mt-2">Hosted by {creatorName}</p>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
