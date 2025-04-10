"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createListing = async (data: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};

export const getSingleListing = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
      {
        next: { tags: ["PRODUCT"] },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
export const getAllListing = async (query: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings${query}`,
      {
        next: { tags: ["PRODUCT"] },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};

export const getMeAllListing = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/me`, {
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      next: { tags: ["PRODUCT"] },
    });
    const result = res.json();
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
export const deleteListing = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    const result = res.json();
    revalidateTag("PRODUCT");
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};

export const updateSingleListing = async (productId: string, data: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
      {
        method: "PUT",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = res.json();
    revalidateTag("PRODUCT");
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};

export const MarkAsSolidListing = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/mark-sold/${productId}`,
      {
        method: "PUT",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    const result = res.json();
    revalidateTag("PRODUCT");
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
