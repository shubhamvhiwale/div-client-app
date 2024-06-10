import React from "react";
import Image from "next/image";
import HomeBanner from "@/app/assets/images/HomeBanner1BG.jpg";

const Banner = () => {
  return (
    <div className="banner-container w-full h-[90vh] flex justify-start items-center">
      <div className="ml-32">
        <h1 className="text-5xl font-bold">
          Simplicity, Value
          <br /> & Convenience
        </h1>
        <p className="mt-4">
          Morder private bank, servicing all your needs in one place
        </p>
        <button className="mt-4 bg-blue-800 rounded-full p-3 text-white w-[100px] h-[40px] text-xs">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
