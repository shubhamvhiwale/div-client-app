import React from "react";
import Card from "../common/Card";
import { OfferingDataProps, offeringData } from "./offeringsData";

const Offerings = () => {
  return (
    <div className="bg-white w-full p-10 flex justify-center flex-col items-center h-[100vh]">
      <p className="font-bold text-5xl">Explor Our Offerings...</p>
      <div className="flex justify-center items-center mt-8">
        {offeringData.map(
          ({ title, icon, description, size }: OfferingDataProps) => (
            <div className="mr-4 card-shadow rounded-lg">
              <Card
                title={title}
                logo={icon}
                description={description}
                size={size}
              />
            </div>
          )
        )}
      </div>
      <button className="mt-8 bg-blue-800 text-white p-2 rounded-full w-[18rem] text-xs h-[40px]">
        Ready to Create An Account?
      </button>
    </div>
  );
};

export default Offerings;
