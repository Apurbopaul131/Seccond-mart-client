import SalesHistory from "@/components/modules/sales";
import { currentUser } from "@/services/authServices";
import { getAllSales } from "@/services/transactions";
import { IUser } from "@/types";
import { Metadata } from "next";

//metadata
export const metadata: Metadata = {
  title: "SeccondMart | Sales History",
  description: "This is sales history page of seccond mart project",
};
const SalesHistoryPage = async () => {
  //extract userId
  const { userId } = (await currentUser()) as IUser;
  //extact all sales data
  const { data: transactions } = await getAllSales(userId);
  return (
    <div className="mx-5">
      <SalesHistory trnasactions={transactions} />
    </div>
  );
};

export default SalesHistoryPage;
