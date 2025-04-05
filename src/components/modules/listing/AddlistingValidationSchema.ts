import { z } from "zod";

export const addListingSchema = z.object({
  title: z.string().min(1, "Product Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Price must be a positive number",
    }),
  category: z.string().min(1, "Category is required"),
  brand: z.string().min(1, "Brand is required"),
  condition: z.string().min(1, "Condition is required"),
  location: z.string().min(1, "Location is required"),
});
