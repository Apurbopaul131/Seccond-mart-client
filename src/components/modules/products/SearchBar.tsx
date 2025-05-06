"use client";

import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = ({
  searchOption,
  placeholderKey,
}: {
  searchOption?: string;
  placeholderKey?: string;
}) => {
  const [searchTerm, setSearchTerm] = useState(searchOption || "");
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  //handle search into onChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTermEvent = e.target.value;
    setSearchTerm(searchTermEvent);
    const params = new URLSearchParams(searchParams);
    if (searchTermEvent) {
      params.set("searchTerm", searchTermEvent);
    } else {
      params.delete("searchTerm");
    }
    if (params.toString()) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(pathname);
    }
  };

  //Clear the search input
  const handeSearchCross = () => {
    setSearchTerm("");
    const params = new URLSearchParams(searchParams);
    params.delete("searchTerm");
    if (params.toString()) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(pathname);
    }
  };
  return (
    <div className="w-full bg-gray-200 p-6 my-5">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder={placeholderKey || "Search"}
          className="border-2 border-secondary p-6 pe-10 w-full bg-white"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          onClick={handeSearchCross}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
