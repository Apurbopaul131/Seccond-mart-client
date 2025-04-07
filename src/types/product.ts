type TProductCondition =
  | "New"
  | "Like New"
  | "Excellent"
  | "Good"
  | "Fair"
  | "For Parts";
type TCategory =
  | "Electronics"
  | "Home Appliances"
  | "Furniture"
  | "Clothing & Accessories"
  | "Automobiles"
  | "Books & Stationery"
  | "Sports & Outdoor"
  | "Toys & Baby Products"
  | "Health & Beauty"
  | "Musical Instruments"
  | "Gaming & Entertainment"
  | "Other";
type TProductStatus = "available" | "sold";
export interface IProduct {
  _id: string;
  title: string;
  userId: {
    _id: string;
    name: string;
    phoneNumber: string;
    email: string;
    role: "user" | "admin";
    isBlocked: boolean;
  };
  condition: TProductCondition;
  brand: string;
  price: number;
  category: TCategory;
  images: string[];
  description: string;
  status: TProductStatus;
  isDeleted: boolean;
  location: string;
}
