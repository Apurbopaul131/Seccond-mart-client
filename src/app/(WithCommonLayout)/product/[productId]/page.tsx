import ProductDetails from "@/components/modules/product";
import { getAllListing, getSingleListing } from "@/services/listing";
import { IProduct } from "@/types";

//ssg for every product
export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`);
  const { data: projects } = await res.json();

  return (projects as IProduct[])?.map((project) => ({
    id: project?._id,
  }));
};

//generate metadata for every product
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
  //extarct productId from params
  const { productId } = await params;
  //Retrive specific listing
  const { data: product } = await getSingleListing(productId);
  const { data: products } = await getAllListing(
    `?category=${product?.category}`
  );

  return (
    <div>
      <ProductDetails product={product} products={products} />
    </div>
  );
};

export default SingleProductPage;
