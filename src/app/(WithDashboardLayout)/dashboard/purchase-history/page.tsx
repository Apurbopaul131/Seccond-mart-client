import PurchaseHistory from "@/components/modules/purchase";
import { currentUser } from "@/services/authServices";
import { getAllPurchases } from "@/services/transactions";
import { IUser } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Purchase History",
  description: "This is purchase history page of seccond mart project",
};
const PurchaseHistoryPage = async () => {
  const { userId } = (await currentUser()) as IUser;
  const { data: transactions } = await getAllPurchases(userId);
  return (
    <div className="mx-5">
      <PurchaseHistory trnasactions={transactions} />
    </div>
  );
};

export default PurchaseHistoryPage;
