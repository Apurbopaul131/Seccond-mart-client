import SalesHistory from "@/components/modules/sales";
import SMPagination from "@/components/ui/core/SMPagination";
import { currentUser } from "@/services/authServices";
import { getAllSales } from "@/services/transactions";
import { IUser } from "@/types";
import { Metadata } from "next";

//metadata
export const metadata: Metadata = {
  title: "SeccondMart | Sales History",
  description: "This is sales history page of seccond mart project",
};
const SalesHistoryPage = async (props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) => {
  //extract userId
  const { userId } = (await currentUser()) as IUser;
  const searchObj = await props.searchParams;

  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";
  //extact all sales data
  const { data: transactions, meta } = await getAllSales(userId, query);
  return (
    <div className="mx-5 space-y-3">
      <SalesHistory trnasactions={transactions} />
      <SMPagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default SalesHistoryPage;
