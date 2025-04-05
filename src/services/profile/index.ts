"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const getSingleUser = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: { tags: ["USER"] },
      }
    );
    const result = res.json();

    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
export const updateSingleUser = async (userId: string, data: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/${userId}`,
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
    revalidateTag("USER");
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
