import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "./services/authServices";
import { IUser } from "./types";

export const middleware = async (req: NextRequest) => {
  const userInfo = await currentUser();
  const authRoutes = ["/login", "/register"];
  const { pathname } = req.nextUrl;
  const roleBasedPrivateRoutes = {
    user: [
      "/dashboard",
      "/dashboard/listing",
      "/dashboard/sold-product",
      "/dashboard/purchase-product",
      "/dashboard/listing/create-listing",
      "/dashboard/sales-history",
      "/dashboard/purchase-history",
      "/dashboard/wishlist",
      "/dashboard/profile",
      /^\/payment/,
      "/messages",
    ],
    admin: [/admin/],
  };
  //Non-loggedin user
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirectPath=${pathname}`, req.url)
      );
    }
  }
  //role-base access
  if (
    (userInfo as IUser)?.role &&
    roleBasedPrivateRoutes[(userInfo as IUser)?.role]
  ) {
    const routes = roleBasedPrivateRoutes[(userInfo as IUser)?.role];

    if (
      routes.some((route) =>
        typeof route === "string" ? pathname === route : route.test(pathname)
      )
    ) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", req.url));
};

export const config = {
  matcher: [
    "/login",
    "/payment/verify",
    "/dashboard",
    "/dashboard/:page",
    "/dashboard/listing/create-listing",
    "/dashboard/listing",
    "/dashboard/sold-product",
    "/dashboard/purchase-product",
    "/dashboard/sales-history",
    "/dashboard/purchase-history",
    "/dashboard/wishlist",
    "/dashboard/profile",
    "/dashboard/admin",
    "/dashboard/admin/user-management",
    "/dashboard/admin/listings",
    "/messages",
  ],
};
