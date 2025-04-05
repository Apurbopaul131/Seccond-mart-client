import ManageListing from "@/components/modules/listing";
import { getMeAllListing } from "@/services/listing";

const ViewListingPage = async () => {
  const { data: products } = await getMeAllListing();
  return (
    <div className="mx-5">
      <ManageListing products={products} />
    </div>
  );
};

export default ViewListingPage;
