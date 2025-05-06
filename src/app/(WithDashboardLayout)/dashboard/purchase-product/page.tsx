import SoldProduct from "@/components/modules/soldproduct";
import SMPagination from "@/components/ui/core/SMPagination";
import { currentUser } from "@/services/authServices";
import { getAllPurchases } from "@/services/transactions";
import { IUser } from "@/types";
import { ITransaction } from "@/types/transaction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Purchase Product",
  description: "This is Purchase product page of seccond mart project",
};
const PurchaseProductPage = async (props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) => {
  const { userId } = (await currentUser()) as IUser;
  const searchObj = await props.searchParams;

  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";

  //extract all purchase product
  const { data } = await getAllPurchases(userId, query);

  //filter tranaction already completed product
  const transactions = (data as ITransaction[]).filter(
    (transaction) => transaction.status === "completed"
  );
  return (
    <div className="mx-5 space-y-3">
      <SoldProduct trnasactions={transactions} />
      {transactions.length > 0 && (
        <SMPagination totalPage={Math.ceil(transactions?.length / 10)} />
      )}
    </div>
  );
};

export default PurchaseProductPage;
