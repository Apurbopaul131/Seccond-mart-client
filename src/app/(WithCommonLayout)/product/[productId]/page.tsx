import ProductDetails from "@/components/modules/product";
import { getSingleListing } from "@/services/listing";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleListing(productId);

  return (
    <div className="bg-muted border-2">
      <ProductDetails product={product} />
    </div>
  );
};

export default SingleProductPage;
