import React from "react";
import { BbDataProps, bBData } from "./bbData";
import Image from "next/image";

const BenefitsOfBanking = () => {
  return (
    <div className="w-full bg-white h-[100vh] flex justify-center items-center flex-col">
      <p className="font-bold text-3xl">
        Benefits Of Banking With Silber Private Bank
      </p>
      <div className="grid grid-cols-2 gap-6 mt-10">
        {bBData.map(({ title, icon, description }: BbDataProps) => (
          <div className="flex justify-center items-center min-w-[20rem] w-[25rem] p-2">
            <Image src={icon} alt={title} width={60} height={60} />
            <div className="text-xs ml-2">
              <h1 className="font-bold">{title}</h1>
              <p className="mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className=" bg-blue-800 rounded-full p-3 text-white w-[100px] h-[40px] text-xs">
          Apply Now
        </button>
        <button className=" ml-4 border border-blue-800 rounded-full p-3 text-blue-800 font-bold w-[100px] h-[40px] text-xs">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default BenefitsOfBanking;
