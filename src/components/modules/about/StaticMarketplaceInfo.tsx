import PeopleWork from "@/app/assets/work-around-laptopjpg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const StaticMarketplaceInfo = () => {
  return (
    <div className="w-[90%] md:container mx-auto mt-20 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
        <div className="rounded-lg">
          <Image
            src={PeopleWork} // Replace with the actual path to your image
            alt="People working around a laptop"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4 flex flex-col justify-center">
          <div>
            <Button className="bg-secondary text-white py-1 px-3 rounded-md text-xs font-semibold">
              About Us
            </Button>
          </div>
          <h2 className="text-4xl font-bold text-muted-foreground">
            Second hand marketplace in Bangladesh
          </h2>
          <p className="text-sm text-muted-foreground">
            Second BD is a Bangladeshi second hand marketplace where sellers can
            sell their old products in an easy way and buyers have more options.
          </p>
          <p className="text-sm text-muted-foreground">
            Our platform focuses on second hand goods. Our goal is to give
            second hand product a second life rather than being disposed of and
            let second hand product buyers better options.
          </p>
          <p className="text-sm text-muted-foreground">
            Our goal is to empower people to create value for their old products
            and sell it easily rather than opting for landfill.
          </p>
          <p className="text-sm text-muted-foreground">
            Our vision is to reduce E-Waste and generate a healthy sustainable
            marketplace.
          </p>
          <div>
            <Link href={"/products"}>
              <Button className="cursor-pointer">
                Explore listings <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticMarketplaceInfo;
