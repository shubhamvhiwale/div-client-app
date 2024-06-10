import React from "react";
import Image from "next/image";
import Link from "next/link";
import SilberPrivateBankLogo from "@/app/assets/images/SilberPrivateBankLogo.jpg";
import { HeaderProps, headerData } from "./headerData";

const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between pl-5 pr-5">
      <Image src={SilberPrivateBankLogo} alt="logo" width={200} height={40} />
      <div className="text-xs">
        {headerData.map(({ title, value, type, style }: HeaderProps) => (
          <>
            {typeof value === "string" && type === "link" ? (
              <Link className="mr-4" href={value}>
                {title}
              </Link>
            ) : type === "select" && typeof value !== "string" ? (
              <select className="mr-4">
                {value.map((opt, index) => (
                  <option>{opt}</option>
                ))}
              </select>
            ) : (
              <button className={style || ""}>{title}</button>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Header;
