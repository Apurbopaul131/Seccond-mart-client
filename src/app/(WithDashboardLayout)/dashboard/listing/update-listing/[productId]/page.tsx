import UpdateListingForm from "@/components/modules/listing/UpdateListingForm";
import { getSingleListing } from "@/services/listing";

const UpdateSigngleListingPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleListing(productId);
  console.log(product);
  return (
    <div className="flex justify-center my-10">
      <UpdateListingForm product={product} />
    </div>
  );
};

export default UpdateSigngleListingPage;
