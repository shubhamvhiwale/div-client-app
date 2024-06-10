import Banner from "@/app/components/Banner/index";
import Offerings from "./components/Offerings";
import SmartBanking from "./components/SmartBanking";
import GetAccount from "./components/GetAccount";
import BenefitsOfBanking from "./components/BenefitsOfBanking";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Offerings />
      <SmartBanking />
      <GetAccount />
      <BenefitsOfBanking />
    </main>
  );
}
