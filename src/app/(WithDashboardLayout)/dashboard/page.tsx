import { Chart } from "@/components/modules/dashboard/chart";
import ManageWishlist from "@/components/modules/wishlist";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/services/authServices";
import { getAllPurchases, getAllSales } from "@/services/transactions";
import { getAllWishlist } from "@/services/wishlist";
import { IUser } from "@/types";
import { ITransaction } from "@/types/transaction";
import { DollarSign } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SeccondMart | Dashboard",
  description: "This is user Dashboard page of seccond mart project",
};
const UserDashboardPage = async () => {
  const user = await currentUser();
  const { data: allpurchaseProducts } = await getAllPurchases(
    (user as IUser)?.userId,
    ""
  );
  const { data: allSoldProducts } = await getAllSales(
    (user as IUser)?.userId,
    ""
  );

  const purchaseProducts = (allpurchaseProducts as ITransaction[]).filter(
    (transaction) => transaction.status === "completed"
  );
  const soldProducts = (allSoldProducts as ITransaction[]).filter(
    (transaction) => transaction.status === "completed"
  );
  const totalSales = soldProducts.reduce(
    (acc, { itemID }) => acc + itemID?.price,
    0
  );
  const totalPurchase = purchaseProducts.reduce(
    (acc, { itemID }) => acc + itemID?.price,
    0
  );
  console.log(totalSales);
  const { data } = await getAllWishlist((user as IUser)?.userId);
  return (
    <div className="mx-5 space-y-5">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg p-4 shadow-md md:w-90 w-60">
          <div>
            <p className="text-sm">Total Revenue</p>
            <p className="text-2xl font-bold">{totalSales + totalPurchase}</p>
          </div>
          <div className="bg-white text-black rounded-full p-3">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>

        <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg p-4 shadow-md md:w-90 w-60">
          <div>
            <p className="text-sm">Total Sales</p>
            <p className="text-2xl font-bold">{totalSales}</p>
          </div>
          <div className="bg-white text-black rounded-full p-3">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
        <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg p-4 shadow-md md:w-90 w-60">
          <div>
            <p className="text-sm">Total Purchase</p>
            <p className="text-2xl font-bold">{totalPurchase}</p>
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
          <ManageWishlist products={data?.items?.slice(0, 4)} />
          <div className="flex gap-2 justify-end">
            <Link href={"/dashboard/wishlist"}>
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

export default UserDashboardPage;
