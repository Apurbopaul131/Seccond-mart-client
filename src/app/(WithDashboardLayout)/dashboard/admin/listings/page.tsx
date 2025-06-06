import ManageListing from "@/components/modules/listing";
import SMPagination from "@/components/ui/core/SMPagination";
import { getAllListing } from "@/services/listing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Listing",
  description: "This is manage listing page of seccond mart project",
};
const AdminListingPage = async (props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) => {
  const searchObj = await props.searchParams;
  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";
  const { data: products, meta } = await getAllListing(query);

  return (
    <div className="mx-5 space-y-3">
      <ManageListing products={products} />
      {products.length > 0 && <SMPagination totalPage={meta?.totalPage} />}
    </div>
  );
};

export default AdminListingPage;
