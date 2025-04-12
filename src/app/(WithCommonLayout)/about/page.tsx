import About from "@/components/modules/about";
import HowItWorks from "@/components/modules/home/HowItWorks";
import Supporters from "@/components/modules/home/Supporters";
import WhyTheyLoveUs from "@/components/modules/home/WhyTheyLoveUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | About",
  description: "This is about page of seccond mart project.",
};

const AboutPage = () => {
  return (
    <div>
      <About />
      <WhyTheyLoveUs />
      <HowItWorks />
      <Supporters />
    </div>
  );
};

export default AboutPage;
