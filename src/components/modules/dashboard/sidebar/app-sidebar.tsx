"use client";
import Logo from "@/app/assets/Logo";
import { NavMain } from "@/components/modules/dashboard/sidebar/nav-main";
import { NavUser } from "@/components/modules/dashboard/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";
import { Bot, MessageCircle, Settings, SquareTerminal } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const { user } = useUser();
  const data =
    user?.role === "user"
      ? {
          user: {
            name: user?.name as string,
            email: user?.email as string,
            avatar: "/avatars/shadcn.jpg",
          },
          navMain: [
            {
              title: "Dashboard",
              url: "/dashboard",
              icon: SquareTerminal,
              isActive: true,
            },
            {
              title: "Shop",
              url: "#",
              icon: Bot,
              items: [
                {
                  title: "Manage Listing",
                  url: "/dashboard/listing",
                },
                {
                  title: "Track Sales",
                  url: "/dashboard/sales-history",
                },
                {
                  title: "Track Purchase",
                  url: "/dashboard/purchase-history",
                },
                {
                  title: "Manage Wishlist",
                  url: "/dashboard/wishlist",
                },
              ],
            },

            {
              title: "Settings",
              url: "#",
              icon: Settings,
              items: [
                {
                  title: "Profile",
                  url: "/dashboard/profile",
                },
              ],
            },
            {
              title: "Communication & Transactions",
              url: "#",
              icon: MessageCircle,
              items: [
                {
                  title: "Track Sold Product",
                  url: "/dashboard/sold-product",
                },
                {
                  title: "Track Purchase Product",
                  url: "/dashboard/purchase-product",
                },
                {
                  title: "Messages",
                  url: "/messages",
                },
              ],
            },
          ],
        }
      : {
          user: {
            name: user?.name as string,
            email: user?.email as string,
            avatar: "/avatars/shadcn.jpg",
          },
          navMain: [
            {
              title: "Dashboard",
              url: "/dashboard",
              icon: SquareTerminal,
              isActive: true,
            },
            {
              title: "Shop",
              url: "#",
              icon: Bot,
              items: [
                {
                  title: "Manage Listing",
                  url: "/dashboard/admin/listings",
                },
                {
                  title: "Track Sales",
                  url: "/dashboard/sales-history",
                },
                {
                  title: "Track Purchase",
                  url: "/dashboard/purchase-history",
                },
                {
                  title: "Manage Users",
                  url: "/dashboard/admin/user-management",
                },
              ],
            },

            {
              title: "Communication & Transactions",
              url: "#",
              icon: MessageCircle,
              items: [
                {
                  title: "Track Sold Product",
                  url: "/dashboard/sold-product",
                },
                {
                  title: "Track Purchase Product",
                  url: "/dashboard/purchase-product",
                },
                {
                  title: "Messages",
                  url: "/messages",
                },
              ],
            },
          ],
        };

  return (
    <Sidebar className="bg-muted" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem
            className="cursor-pointer"
            onClick={() => router.push("/")}
          >
            <SidebarMenuButton size="lg" asChild>
              <a>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Logo />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Seccond Mart</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
