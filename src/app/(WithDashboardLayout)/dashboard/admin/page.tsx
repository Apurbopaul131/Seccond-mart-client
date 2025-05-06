import { Chart } from "@/components/modules/dashboard/chart";
import ManageUsers from "@/components/modules/users";
import { Button } from "@/components/ui/button";
import { getAllListing } from "@/services/listing";
import { getAllUser } from "@/services/users";
import { DollarSign, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SeccondMart | Dashboard",
  description: "This is user Dashboard page of seccond mart project",
};
const AdminDashboardPage = async (props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) => {
  const searchObj = await props.searchParams;
  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";
  const { data: users } = await getAllUser(query);
  const { meta } = await getAllListing("");
  console.log(meta);
  return (
    <div className="mx-5 space-y-5">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg p-4 shadow-md md:w-90 w-60">
          <div>
            <p className="text-sm">Total Revenue</p>
            <p className="text-2xl font-bold">50000</p>
          </div>
          <div className="bg-white text-black rounded-full p-3">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>

        <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg p-4 shadow-md md:w-90 w-60">
          <div>
            <p className="text-sm">Total users</p>
            <p className="text-2xl font-bold">{users?.length}</p>
          </div>
          <div className="bg-white text-black rounded-full p-3">
            <Users className="w-6 h-6" />
          </div>
        </div>
        <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg p-4 shadow-md md:w-90 w-60">
          <div>
            <p className="text-sm">Total Products</p>
            <p className="text-2xl font-bold">{meta?.total}</p>
          </div>
          <div className="bg-white text-black rounded-full p-3">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          {/* <ShowProfile
            user={user as IUser}
            totalPurchaseProduct={purchaseProducts?.length}
            totalSoldProduct={soldProducts?.length}
            totalProduct={meta?.total}
          /> */}
          <ManageUsers users={users?.slice(0, 4)}></ManageUsers>
          <div className="flex gap-2 justify-end">
            <Link href={"/dashboard/admin/user-management"}>
              <Button size="sm" className="rounded-md cursor-pointer">
                View all
              </Button>
            </Link>
          </div>
        </div>
        <div className="">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
