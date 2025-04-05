"use server";

import { cookies } from "next/headers";

export const getAllSales = async (sellerID: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/sales/${sellerID}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
export const getAllPurchases = async (buyerId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/purchases/${buyerId}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
