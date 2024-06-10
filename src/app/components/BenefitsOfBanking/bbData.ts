import { StaticImageData } from "next/image";

import Img020715 from "../../assets/icons/020715.png";
import Img020820 from "../../assets/icons/020820.png";
import Img020856 from "../../assets/icons/020856.png";
import Img020923 from "../../assets/icons/020923.png";
import Img020947 from "../../assets/icons/020947.png";
import Img021026 from "../../assets/icons/021026.png";

interface BbDataProps {
  title: string;
  icon: StaticImageData;
  description: string;
}

const bBData: BbDataProps[] = [
  {
    title: "Online Banking",
    icon: Img020715,
    description:
      "Access your account anytime, anywhere, with our advanced online banking application without compromising security.",
  },
  {
    title: "Treasury Management",
    icon: Img020820,
    description:
      "Services and solutions that optimise an organisations liquidity, manage its financials risks and handle its operations for cash and investments.",
  },
  {
    title: "No Account Opening Fees",
    icon: Img020856,
    description:
      "We don't charge any fees for personal account opening, and maintenance of any of our accounts is free to charge as well, as long as you meet minimum deposit standards.",
  },
  {
    title: "Get Debit Card",
    icon: Img020923,
    description:
      "For our private banking clients, we are working on option to have a debit card associated with their account.",
  },
  {
    title: "Term Deposits",
    icon: Img020947,
    description:
      "Earn interest on your funds deposited with our bank. We offer very attractive yield on both short term and long term term deposits.",
  },
  {
    title: "Custodial Services",
    icon: Img021026,
    description:
      "Secure storage, safekeeping and management of financial assets, including securities, precious metals, virtual assets for individuals and institutions.",
  },
];

export type { BbDataProps };
export { bBData };
