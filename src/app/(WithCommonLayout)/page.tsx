import ClientReview from "@/components/modules/home/ClientReview";
import FeaturedProducts from "@/components/modules/home/featuredProducts";
import HeroSection from "@/components/modules/home/heroSection";
import HowItWorks from "@/components/modules/home/HowItWorks";
import Supporters from "@/components/modules/home/Supporters";
import WhyTheyLoveUs from "@/components/modules/home/WhyTheyLoveUs";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "SeccondMart | Home",
  description: "This is home page of seccond mart project",
};
export default function HomePage() {
  return (
    <>
      <Suspense>
        <HeroSection />
        <FeaturedProducts />
        <HowItWorks />
        <WhyTheyLoveUs />
        <Supporters />
        <ClientReview />
      </Suspense>
    </>
  );
}
