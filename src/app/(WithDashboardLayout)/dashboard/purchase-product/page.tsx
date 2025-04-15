import SoldProduct from "@/components/modules/soldproduct";
import { currentUser } from "@/services/authServices";
import { getAllPurchases } from "@/services/transactions";
import { IUser } from "@/types";
import { ITransaction } from "@/types/transaction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Purchase Product",
  description: "This is Purchase product page of seccond mart project",
};
const PurchaseProductPage = async () => {
  const { userId } = (await currentUser()) as IUser;
  const { data } = await getAllPurchases(userId);
  const transactions = (data as ITransaction[]).filter(
    (transaction) => transaction.status === "completed"
  );
  return (
    <div className="mx-5">
      <SoldProduct trnasactions={transactions} />
    </div>
  );
};

export default PurchaseProductPage;
