import SalesHistory from "@/components/modules/sales";
import { currentUser } from "@/services/authServices";
import { getAllSales } from "@/services/transactions";
import { IUser } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Sales History",
  description: "This is sales history page of seccond mart project",
};
const SalesHistoryPage = async () => {
  const { userId } = (await currentUser()) as IUser;
  const { data: transactions } = await getAllSales(userId);
  return (
    <div className="mx-5">
      <SalesHistory trnasactions={transactions} />
    </div>
  );
};

export default SalesHistoryPage;
