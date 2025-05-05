"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllUser = async (query: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/users${query}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: { tags: ["USERS"] },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
export const blockUser = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/users/${userId}/block`,
      {
        method: "PATCH",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    const result = res.json();
    revalidateTag("USERS");
    return result;
  } catch (error: any) {
    return new Error(error);
  }
};
