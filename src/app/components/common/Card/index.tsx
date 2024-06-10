import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  logo: StaticImageData;
  description: string;
  size: {
    width: number;
    height: number;
  };
  showLine?: boolean;
  isLargeCard?: boolean;
}
const Card = ({
  title,
  logo,
  description,
  size,
  showLine,
  isLargeCard,
}: CardProps) => {
  return (
    <div
      className={`w-[13rem] m-[2px] hover:bg-white cursor-pointer bg-white p-5 rounded-lg ${
        isLargeCard ? "h-[17rem]" : "h-[15rem]"
      }`}
    >
      <Image
        src={logo}
        width={size.width}
        height={size.height}
        alt={title}
        className="rounded-lg overflow-hidden"
      />
      <p className="text-xs truncate mt-3 font-bold"> {title}</p>
      {showLine && <div className="border border-blue-800 w-full mt-3"></div>}
      <p className="text-xs text-gray-600 mt-3">{description}</p>
    </div>
  );
};

export default Card;
