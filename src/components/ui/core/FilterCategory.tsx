import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productCategories } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const FilterCategory = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value !== "allcategories") {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    if (params.toString()) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(pathname);
    }
  };
  return (
    <div className="flex justify-end">
      <Select onValueChange={handleCategoryChange} defaultValue="allcategories">
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            value={"allcategories"}
            // defaultValue={searchParams.get("category")?.toString()}
          >
            All Categories
          </SelectItem>
          {productCategories.map((category, idx) => (
            <SelectItem
              key={idx}
              value={category}
              // defaultValue={searchParams.get("category")?.toString()}
            >
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterCategory;
