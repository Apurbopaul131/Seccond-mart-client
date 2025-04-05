"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registeredUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const registeredUser = await res.json();
    return registeredUser;
  } catch (error: any) {
    return new Error(error);
  }
};
export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const loggedInUser = await res.json();
    const loggedInCookies = await cookies();
    if (loggedInUser?.success) {
      loggedInCookies.set("accessToken", loggedInUser?.data?.accessToken);
    }
    return loggedInUser;
  } catch (error: any) {
    return new Error(error);
  }
};

export const currentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedUser = null;
  if (accessToken) {
    decodedUser = jwtDecode(accessToken);
  }
  return decodedUser;
};

export const reCaptchaTokenVerification = async (token: string) => {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_SERVER_RECAPTCHA!,
        response: token,
      }),
    });

    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const userLogut = async () => {
  (await cookies()).delete("accessToken");
};
