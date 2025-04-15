import SoldProduct from "@/components/modules/soldproduct";
import { currentUser } from "@/services/authServices";
import { getAllSales } from "@/services/transactions";
import { IUser } from "@/types";
import { ITransaction } from "@/types/transaction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Sold Product",
  description: "This is sold product page of seccond mart project",
};
const SoldProductPage = async () => {
  const { userId } = (await currentUser()) as IUser;
  const { data } = await getAllSales(userId);
  const transactions = (data as ITransaction[]).filter(
    (transaction) => transaction.status === "completed"
  );
  return (
    <div className="mx-5">
      <SoldProduct trnasactions={transactions} />
    </div>
  );
};

export default SoldProductPage;
