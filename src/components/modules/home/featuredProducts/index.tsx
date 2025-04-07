import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";

import { getAllListing } from "@/services/listing";

import { IProduct } from "@/types";
import Link from "next/link";

const FeaturedProducts = async () => {
  const { data: products } = await getAllListing("");

  return (
    <div className="py-10">
      <div className="w-[90%] md:container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Featured Products</h2>
          <Link href="/products">
            <Button
              variant="outline"
              className="rounded-full cursor-pointer text-muted-foreground border-muted-foreground hover:border-secondary hover:text-secondary"
            >
              view all
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-8 my-5">
          {products?.slice(0, 5).map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
