"use client";
import Logo from "@/app/assets/Logo";
import { NavMain } from "@/components/modules/dashboard/sidebar/nav-main";
import { NavUser } from "@/components/modules/dashboard/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";
import { Bot, Settings, SquareTerminal } from "lucide-react";
import * as React from "react";
// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const data = {
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
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex justify-center items-center gap-3">
          <Logo />
          <h1>NextMart</h1>
        </div>
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
