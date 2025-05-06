import SoldProduct from "@/components/modules/soldproduct";
import SMPagination from "@/components/ui/core/SMPagination";
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
const SoldProductPage = async (props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) => {
  //extact userId
  const { userId } = (await currentUser()) as IUser;
  const searchObj = await props.searchParams;

  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";
  //extract all sales data
  const { data } = await getAllSales(userId, query);
 
  //filter tranaction already completed product
  const transactions = (data as ITransaction[])?.filter(
    (transaction) => transaction.status === "completed"
  );
  return (
    <div className="mx-5 space-y-3">
      <SoldProduct trnasactions={transactions} />
      <SMPagination totalPage={Math.ceil(transactions?.length / 10)} />
    </div>
  );
};

export default SoldProductPage;
