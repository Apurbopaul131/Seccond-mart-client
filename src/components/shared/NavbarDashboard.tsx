"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
const NavbarDashboard = () => {
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
    <header className="w-full bg-muted">
      <div className="contaner mx-auto flex items-center justify-end h-16 px-3">
        <div className="flex items-center gap-4">
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
                <Link href={"/"}>
                  <DropdownMenuItem>Home</DropdownMenuItem>
                </Link>
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
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            onClick={handleUserLogOut}
            className="rounded-md cursor-pointer "
          >
            <LogOut />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavbarDashboard;
