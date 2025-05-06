import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Package, Search } from "lucide-react";

const steps = [
  {
    icon: (
      <Search className="h-12 w-12 text-muted-foreground hover:text-secondary" />
    ),
    title: "Click ‘Post ad’ add description and photo",
    description:
      "Write product details and take good pics of the product you are selling.",
  },
  {
    icon: (
      <MapPin className="h-12 w-12 text-muted-foreground hover:text-secondary" />
    ),
    title: "Share your ad in the marketplace",
    description:
      "Sell your product fast and easily with the right detail, price, picture and location.",
  },
  {
    icon: (
      <Package className="h-12 w-12 text-muted-foreground hover:text-secondary" />
    ),
    title: "Buyers contact you directly",
    description: "You can go to the buyer or he/she can come to you directly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mb-10 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <Button className="text-sm p-2 px-3 text-white font-medium bg-secondary hover:bg-secondary mb-2">
          What our sellers say
        </Button>
        <h2 className="text-2xl font-bold text-gray-800 ">
          How Second BD Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-5">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center gap-4 py-8 px-4">
                {step.icon}
                <h3 className="text-2xl font-semibold text-muted-foreground text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center font-medium">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
