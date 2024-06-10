import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaXbox, FaLinkedin } from "react-icons/fa";

import DarkLogo from "@/app/assets/images/024931.png";

const Footer = () => {
  return (
    <div className="w-full h-[100vh] p-20 bg-black text-white">
      <div className="flex justify-evenly">
        <div>
          <Image src={DarkLogo} alt={"dark-logo"} width={210} height={60} />
        </div>
        <div>
          <h1 className="font-bold">Quick Link</h1>
          <ul className="mt-2">
            <li>Our Bank</li>
            <li>Investment Research</li>
            <li>Other products</li>
            <li>Fanancing</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Company</h1>
          <ul className="mt-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>AML Policy</li>
            <li>Latest News</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Follow us</h1>
          <div className="flex mt-2">
            <FaFacebook className="bg-blue-800 rounded-full" />
            &nbsp; <FaInstagram className="bg-blue-800 rounded-full" />
            &nbsp; <FaXbox className="bg-blue-800 rounded-full" />
            &nbsp; <FaLinkedin className="bg-blue-800 rounded-full" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1>Disclaimer</h1>
        <p className="text-xs">
          "Silber Bank" "Silber Private bank" and "Silber Bank Logo" are
          registered trademarks of Silber Private Bank IBC.
          <br />
          <br />
          This website is operated by Silber Private Bank with registration
          number HY01123056, 1257 Bonovo Rd, KM, which is an authorized and
          regulated international private bank, with license number B2023105.
          Opening any deposit, savings, cryptocurrency or trading accounts with
          the bank is subject to approval, know your customer, AML and KYT and
          Travel Rule procedures and registration to the website itself doesn't
          constitute account approval.
          <br />
          <br /> We will not open accounts for residents of certain countries -
          for restricted countries, please consult our terms and conditions. Not
          all products are suitable for all kinds of investors. Information
          displayed on the website, including investment research available for
          registered users is general in nature and doesn't consider your
          personal investment objectives, your needs, or financial
          circumstances.
          <br />
          <br /> Please make sure you fully understand all of our legal
          documents, terms and conditions and the risks involved in different
          products offered by the bank before you make any decision or action.
          You should seek independent advice.
        </p>
      </div>
      <div className="w-full border border-blue-800 mt-10"></div>
      <p className="text-center mt-2 text-xs">
        © Copyright 2024 Silber Private Bank | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
