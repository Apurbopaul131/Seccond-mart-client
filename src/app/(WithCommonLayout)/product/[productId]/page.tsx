import ProductDetails from "@/components/modules/product";
import { getSingleListing } from "@/services/listing";
import { IProduct } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`);
  const { data: projects } = await res.json();

  return (projects as IProduct[])?.map((project) => ({
    id: project?._id,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleListing(productId);

  return {
    title: `SeccondMart | ${product?.title}`,
    description: product?.description,
  };
};
const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleListing(productId);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default SingleProductPage;
