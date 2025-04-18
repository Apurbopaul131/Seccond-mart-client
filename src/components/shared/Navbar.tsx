"use client";
import Logo from "@/app/assets/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { protectedRoutes } from "@/constants";
import { useUser } from "@/context/UserContext";
import { userLogut } from "@/services/authServices";
import { LogOut, Menu, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const currentUser = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const handleUserLogOut = () => {
    userLogut();
    currentUser.setIsLoading(true);
    setTimeout(() => {
      if (protectedRoutes.some((route) => pathname.match(route))) {
        router.push("/");
      }
    }, 200);
  };
  return (
    <header className="w-full bg-primary">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <div className="flex items-center gap-12">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden border-1 cursor-pointer border-primary-foreground">
                <Menu className="w-6 h-6 text-muted-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[60%] h-full flex flex-col bg-muted p-6 shadow-lg"
            >
              <SheetTitle></SheetTitle>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold flex gap-1 items-center">
                  <Logo />
                  SecondMart
                </h1>
              </div>
              <nav className="mt-6 flex flex-col space-y-4 text-lg font-medium text-gray-900">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/faq">FAQ</Link>
              </nav>
              <div className="mt-6 border-t pt-4">
                <p className="font-semibold text-yellow-600">Call Support</p>
                <p className="text-gray-700">+880 1777-037916</p>
                <p className="mt-3 font-semibold text-blue-600">
                  Email Address
                </p>
                <p className="text-gray-700">hi@secondbd.com</p>
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="text-2xl font-bold hidden md:flex gap-1 items-center">
            <Logo />
            SeccondMart
          </h1>
          <div className="hidden  md:flex items-center gap-3 text-primary-foreground font-semibold">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/faq"}>FAQ</Link>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          {!currentUser?.user ? (
            <>
              <Link href={"/login"}>
                <Button className="rounded-md cursor-pointer bg-secondary hover:bg-secondary text-white">
                  Login
                </Button>
              </Link>
              <Link href={"/register"}>
                <Button className="rounded-md cursor-pointer bg-secondary hover:bg-secondary text-white">
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <>
              <h3 className="font-semibold hidden lg:block">
                {currentUser?.user?.name}
              </h3>
              <Link href={"/dashboard/listing/create-listing"}>
                <Button className="rounded-md bg-secondary hover:bg-secondary cursor-pointer text-white">
                  Post your product
                  <Plus />
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href={"/dashboard/profile"}>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </Link>

                    <Link href={"/dashboard"}>
                      <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    </Link>
                    <Link href={"/dashboard/wishlist"}>
                      <DropdownMenuItem>My Wishlist</DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-destructive cursor-pointer"
                    onClick={handleUserLogOut}
                  >
                    <LogOut /> Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
