import React from "react";
import Card from "../common/Card/index";
import { SmartBankingDataProps, smartBankingData } from "./smartBankingData";

const SmartBanking = () => {
  return (
    <div className="bg-white w-full p-10 flex justify-center flex-col items-center h-[100vh]">
      <p className="font-bold text-3xl text-center">
        Get Convenience & Security With Our
        <br /> Smart Banking System
      </p>
      <div className="flex justify-center items-center mt-8">
        {smartBankingData.map(
          ({
            title,
            icon,
            description,
            size,
            isLargeCard,
          }: SmartBankingDataProps) => (
            <div className="mr-4 card-shadow rounded-lg text-center">
              <Card
                title={title}
                logo={icon}
                description={description}
                size={size}
                showLine={true}
                isLargeCard={true}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SmartBanking;
