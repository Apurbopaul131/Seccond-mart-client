import PurchaseHistory from "@/components/modules/purchase";
import SMPagination from "@/components/ui/core/SMPagination";
import { currentUser } from "@/services/authServices";
import { getAllPurchases } from "@/services/transactions";
import { IUser } from "@/types";
import { Metadata } from "next";

//meatadata
export const metadata: Metadata = {
  title: "SeccondMart | Purchase History",
  description: "This is purchase history page of seccond mart project",
};
const PurchaseHistoryPage = async (props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) => {
  //extract userId
  const { userId } = (await currentUser()) as IUser;
  const searchObj = await props.searchParams;

  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";
  //extact all purchases data
  const { data: transactions, meta } = await getAllPurchases(userId, query);
  return (
    <div className="mx-5 space-y-3">
      <PurchaseHistory trnasactions={transactions} />
      <SMPagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default PurchaseHistoryPage;
