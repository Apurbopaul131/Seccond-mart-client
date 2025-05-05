import { AppSidebar } from "@/components/modules/dashboard/sidebar/app-sidebar";
import NavbarDashboard from "@/components/shared/NavbarDashboard";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <SidebarInset>
        <NavbarDashboard />
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
