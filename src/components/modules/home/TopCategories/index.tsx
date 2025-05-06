"use client";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Box,
  Car,
  Gamepad,
  Gamepad2,
  Heart,
  Home,
  Music,
  Shirt,
  ShoppingCart,
  Table,
  Tv,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

// Define the category data with icons
const categories = [
  { name: "Electronics", icon: Tv },
  { name: "Home Appliances", icon: Home },
  { name: "Furniture", icon: Table },
  { name: "Clothing and Accessories", icon: Shirt },
  { name: "Automobiles", icon: Car },
  { name: "Books and Stationery", icon: BookOpen },
  { name: "Sports and Outdoor", icon: Gamepad2 },
  { name: "Toys and Baby Products", icon: ShoppingCart },
  { name: "Health and Beauty", icon: Heart },
  { name: "Musical Instruments", icon: Music },
  { name: "Gaming and Entertainment", icon: Gamepad },
  { name: "Other", icon: Box },
];

const TopCategories = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    }
    if (params.toString()) {
      replace(`/products?${params.toString()}`);
    } else {
      replace("/products");
    }
  };
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Top Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon; // Get the icon component
            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={cn(
                  "flex flex-col items-center justify-center",
                  "bg-white rounded-lg shadow-md",
                  "p-4 hover:shadow-lg transition-shadow duration-200",
                  "border border-gray-200/50 hover:border-blue-500/50",
                  "hover:scale-[1.02] transition-transform",
                  "hover:bg-gradient-to-br from-white to-gray-50/50" // Subtle gradient
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full",
                    "flex items-center justify-center",
                    "text-secondary", // Consistent icon color
                    "mb-2"
                  )}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">
                  {category.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
