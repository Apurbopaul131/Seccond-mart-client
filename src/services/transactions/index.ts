"use server";

import { cookies } from "next/headers";

export const getAllSales = async (sellerID: string, query: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/sales/${sellerID}${query}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: { tags: ["SALES"] },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
export const getAllPurchases = async (buyerId: string, query: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/purchases/${buyerId}${query}`,
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

export const createOrder = async (paymentPayload: {
  buyerID: string;
  sellerID: string;
  itemID: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions`,
      {
        method: "POST",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentPayload),
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const paymentVerification = async (order_id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/verify?order_id=${order_id}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
