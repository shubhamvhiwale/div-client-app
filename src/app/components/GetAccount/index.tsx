import React from "react";

const GetAccount = () => {
  return (
    <div className="banner-container-2 w-full h-[100vh] flex justify-end items-center">
      <div className="mr-16">
        <h1 className="text-5xl font-bold">
          Get Your own
          <br />
          Account Today!
        </h1>
        <p className="mt-4">
          Our online account opening takes just couple of
          <br /> minutes, and opens world of possibilities for our
          <br /> clients.
        </p>
        <button className="mt-4 bg-blue-800 rounded-full p-3 text-white w-[100px] h-[40px] text-xs">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default GetAccount;
