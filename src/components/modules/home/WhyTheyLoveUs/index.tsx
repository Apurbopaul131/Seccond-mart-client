"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhyTheyLoveUs() {
  return (
    <section className="bg-gray-500 mb-44">
      <div className="container mx-auto px-4 text-center rounded-xl bg-white shadow-lg py-14 relative top-30">
        <div className="absolute inset-0 opacity-5 rounded-xl"></div>
        <div className="relative z-10">
          <Button className="text-sm p-2 px-3 text-white font-medium bg-secondary hover:bg-secondary mb-2">
            What our sellers say
          </Button>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Why they love us
          </h2>
          <p className="text-muted-foreground mb-10 font-bold">
            #1 Second Hand Platform in Bangladesh
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-10">
            <div>
              <h3 className="text-3xl font-bold">1m</h3>
              <p className="text-sm text-gray-700">Ads added</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">1K</h3>
              <p className="text-sm text-gray-700">Daily Searches</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">1K</h3>
              <p className="text-sm text-gray-700">
                {/* <span className="inline-block w-1 h-4 bg-yellow-500 mr-1 align-middle" /> */}
                Registered Users
              </p>
            </div>
          </div>

          <Link href={"/products"}>
            <Button className="bg-primary text-md px-6 py-2 text-muted-foreground cursor-pointer">
              Explore Listings
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
