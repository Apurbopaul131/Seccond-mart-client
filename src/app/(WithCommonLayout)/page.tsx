import ClientReview from "@/components/modules/home/ClientReview";
import FeaturedProducts from "@/components/modules/home/featuredProducts";
import HeroSection from "@/components/modules/home/heroSection";
import HowItWorks from "@/components/modules/home/HowItWorks";
import Supporters from "@/components/modules/home/Supporters";
import WhyTheyLoveUs from "@/components/modules/home/WhyTheyLoveUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <HowItWorks />
      <WhyTheyLoveUs />
      <Supporters />
      <ClientReview />
    </>
  );
}
