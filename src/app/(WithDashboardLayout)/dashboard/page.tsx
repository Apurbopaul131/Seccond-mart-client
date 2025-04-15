import { Chart } from "@/components/modules/dashboard/chart";
import ShowProfile from "@/components/modules/profile/ShowProfile";
import { currentUser } from "@/services/authServices";
import { getMeAllListing } from "@/services/listing";
import { getAllPurchases, getAllSales } from "@/services/transactions";
import { IUser } from "@/types";
import { ITransaction } from "@/types/transaction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Dashboard",
  description: "This is user Dashboard page of seccond mart project",
};
const UserDashboardPage = async () => {
  const user = await currentUser();
  const { data: allpurchaseProducts } = await getAllPurchases(
    (user as IUser)?.userId
  );
  const { data: allSoldProducts } = await getAllSales((user as IUser)?.userId);
  const { meta } = await getMeAllListing("");
  const purchaseProducts = (allpurchaseProducts as ITransaction[]).filter(
    (transaction) => transaction.status === "completed"
  );
  const soldProducts = (allSoldProducts as ITransaction[]).filter(
    (transaction) => transaction.status === "completed"
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-5">
      <div className="md:col-span-2">
        <ShowProfile
          user={user as IUser}
          totalPurchaseProduct={purchaseProducts?.length}
          totalSoldProduct={soldProducts?.length}
          totalProduct={meta?.total}
        />
      </div>
      <div className="md:col-span-3">
        <Chart />
      </div>
    </div>
  );
};

export default UserDashboardPage;
