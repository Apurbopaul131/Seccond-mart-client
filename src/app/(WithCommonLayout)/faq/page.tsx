import FAQ from "@/components/modules/faq";
import Banner from "@/components/ui/core/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | FAQ",
  description: "This is FAQ page of seccond mart project",
};
const FaqPage = () => {
  return (
    <div>
      <Banner routePath="FAQ" />
      <FAQ />
    </div>
  );
};

export default FaqPage;
