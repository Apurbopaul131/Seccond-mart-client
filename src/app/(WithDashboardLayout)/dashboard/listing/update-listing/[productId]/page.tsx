import UpdateListingForm from "@/components/modules/listing/UpdateListingForm";
import { getSingleListing } from "@/services/listing";
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
    title: `Seccond Mart | ${product?.title}`,
    description: product?.description,
  };
};
const UpdateSigngleListingPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  //extact productId form params
  const { productId } = await params;

  //extact specific listings
  const { data: product } = await getSingleListing(productId);

  return (
    <div className="flex justify-center my-10">
      <UpdateListingForm product={product} />
    </div>
  );
};

export default UpdateSigngleListingPage;
