import { StaticImageData } from "next/image";

import Img003400 from "../../assets/icons/003400.png";
import Img003507 from "../../assets/icons/003507.png";
import Img003556 from "../../assets/icons/003556.png";
import Img003649 from "../../assets/icons/003649.png";

interface OfferingDataProps {
  title: string;
  icon: StaticImageData;
  description: string;
  size: {
    width: number;
    height: number;
  };
}

const offeringData: OfferingDataProps[] = [
  {
    title: "Personal Banking",
    icon: Img003400,
    size: {
      width: 70,
      height: 70,
    },
    description:
      "Wide range of services for every client. From savings to checking accounts, loans - ensuring secure and efficient management of personal finances",
  },
  {
    title: "Corporate Banking",
    icon: Img003507,
    size: {
      width: 70,
      height: 70,
    },
    description:
      "Suite of services for small and medium businesses, ranging from cash management to strategic financing solutions.",
  },
  {
    title: "Research Access",
    icon: Img003556,
    size: {
      width: 70,
      height: 70,
    },
    description:
      "our first class investment research delivered straight to your client portal on daily basis, for the best investment decisions.",
  },
  {
    title: "Investments",
    icon: Img003649,
    size: {
      width: 70,
      height: 70,
    },
    description:
      "Our clients can access large amount of different asset classes and strategies for optimal asset allocation.",
  },
];

export type { OfferingDataProps };
export { offeringData };
