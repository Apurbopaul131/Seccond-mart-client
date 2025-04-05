import SalesHistory from "@/components/modules/sales";
import { currentUser } from "@/services/authServices";
import { getAllSales } from "@/services/transactions";
import { IUser } from "@/types";

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
