import ProductsContainer from "@/components/modules/products";
import SearchBar from "@/components/modules/products/SearchBar";
import { getAllListing } from "@/services/listing";

const AllProductPage = async (props: {
  searchParams?: Promise<{
    searchTerm?: string;
    location?: string;
    condition?: string;
    category?: string;
  }>;
}) => {
  const searchObj = await props.searchParams;
  console.log(searchObj);
  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";
  const { data: products } = await getAllListing(query);
  console.log(products);

  return (
    <div className="mb-10">
      <SearchBar searchOption={searchObj?.searchTerm || ""} />
      <ProductsContainer products={products} />
    </div>
  );
};

export default AllProductPage;
