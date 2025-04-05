import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "./services/authServices";
import { IUser } from "./types";

export const middleware = async (req: NextRequest) => {
  const userInfo = await currentUser();
  const authRoutes = ["/login", "/register"];
  const { pathname } = req.nextUrl;
  const roleBasedPrivateRoutes = {
    user: [/^\/user/, /^\/create-shop/],
    admin: [/^\/admin/],
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
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", req.url));
};

export const config = {
  matcher: [
    "/login",
    "/create-shop",
    "/admin",
    "/admin/:page",
    "/user",
    "/user/:page",
  ],
};
