import { StaticImageData } from "next/image";

import Img003400 from "../../assets/images/FireflyWealthManagementMoneyAsset967.jpg";
import Img003507 from "../../assets/images/FireflyInternationalCorporateBanking2523.jpg";
import Img003556 from "../../assets/images/FireflyBankingFinancing967.jpg";

interface SmartBankingDataProps {
  title: string;
  icon: StaticImageData;
  description: string;
  size: {
    width: number;
    height: number;
  };
  isLargeCard?: boolean;
}

const smartBankingData: SmartBankingDataProps[] = [
  {
    title: "Wealth Management",
    icon: Img003400,
    size: {
      width: 170,
      height: 120,
    },
    isLargeCard: true,
    description:
      "Best way to grow your wealth, thru estate management, personalised strategies tailored to your financial goals.",
  },
  {
    title: "Virtual Assets Services",
    icon: Img003507,
    size: {
      width: 170,
      height: 120,
    },
    isLargeCard: true,
    description:
      "We are able to offer vast array of virtual asset services to our clients. Including wallet and exchange services.",
  },
  {
    title: "Exclusive Private Banking",
    icon: Img003556,
    size: {
      width: 170,
      height: 120,
    },
    isLargeCard: true,
    description:
      "Bespoke dedicated client services and privileged access to specialised financial services catering to your unique needs.",
  },
];

export type { SmartBankingDataProps };
export { smartBankingData };
