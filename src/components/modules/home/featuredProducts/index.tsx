import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";

import { IProduct } from "@/types";
import Link from "next/link";

const FeaturedProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
    next: { revalidate: 30 },
  });
  const { data: products } = await res.json();

  return (
    <div className="my-10">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Featured Products</h2>
          <Link href="/products">
            <Button size={"sm"} className="rounded-md cursor-pointer">
              View all
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-8 mt-5">
          {products?.slice(0, 5).map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
