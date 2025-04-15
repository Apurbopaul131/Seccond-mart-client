import ProductsContainer from "@/components/modules/products";
import SearchBar from "@/components/modules/products/SearchBar";
import SMPagination from "@/components/ui/core/SMPagination";

import { getAllListing } from "@/services/listing";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "SeccondMart | Products",
  description: "This is all product page of seccond mart project",
};
const AllProductPage = async (props: {
  searchParams?: Promise<{
    searchTerm?: string;
    location?: string;
    condition?: string;
    category?: string;
  }>;
}) => {
  const searchObj = await props.searchParams;

  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";
  const { data: products, meta } = await getAllListing(query);
  return (
    <div className="mb-10">
      <Suspense>
        <SearchBar searchOption={searchObj?.searchTerm || ""} />
        <ProductsContainer products={products} />
        <div className="container mx-auto my-5">
          <SMPagination totalPage={meta?.totalPage} />
        </div>
      </Suspense>
    </div>
  );
};

export default AllProductPage;
