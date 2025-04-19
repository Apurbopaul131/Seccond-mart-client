import SoldProduct from "@/components/modules/soldproduct";
import { currentUser } from "@/services/authServices";
import { getAllSales } from "@/services/transactions";
import { IUser } from "@/types";
import { ITransaction } from "@/types/transaction";
import { Metadata } from "next";

//metadata
export const metadata: Metadata = {
  title: "SeccondMart | Sold Product",
  description: "This is sold product page of seccond mart project",
};
const SoldProductPage = async () => {
  //extact userId
  const { userId } = (await currentUser()) as IUser;

  //extract all sales data
  const { data } = await getAllSales(userId);

  //filter tranaction already completed product
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
