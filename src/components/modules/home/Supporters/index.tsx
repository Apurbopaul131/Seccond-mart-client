import BeximcoLogo from "@/app/assets/supporters/Bximco_logo.png";

import SingureLogo from "@/app/assets/supporters/Singure.jpg";
import TenMinutesLogo from "@/app/assets/supporters/Ten-minutes-school.png";
import IctDivisionLogo from "@/app/assets/supporters/ict-divition.png";
import StartUpBangladeshLogo from "@/app/assets/supporters/start_up_bangladesh.jpg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const supportersLogos = [
  {
    name: "Beximco",
    logo: BeximcoLogo,
  },
  {
    name: "Tenminutes",
    logo: TenMinutesLogo,
  },
  {
    name: "Ict Division",
    logo: IctDivisionLogo,
  },
  {
    name: "Startup Bangladesh",
    logo: StartUpBangladeshLogo,
  },
  {
    name: "Singure Bangladesh",
    logo: SingureLogo,
  },
];
const Supporters = () => {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">
        Our Supporters
      </h2>
      <Marquee pauseOnClick={true}>
        {supportersLogos.map(({ name, logo }, idx) => (
          <div key={idx} className="mr-12">
            <Image src={logo} alt={name} width={80} height={50}></Image>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Supporters;
