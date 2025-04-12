import ManageListing from "@/components/modules/listing";
import SMPagination from "@/components/ui/core/SMPagination";
import { getMeAllListing } from "@/services/listing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Listing",
  description: "This is manage listing page of seccond mart project",
};
const ViewListingPage = async (props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) => {
  const searchObj = await props.searchParams;

  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";
  const { data: products, meta } = await getMeAllListing(query);

  return (
    <div className="mx-5 space-y-3">
      <ManageListing products={products} />
      <SMPagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default ViewListingPage;
