import OrderVerification from "@/components/modules/transaction";
import { paymentVerification } from "@/services/transactions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Payment verify",
  description: "This is payment verify of seccond mart project",
};
const PaymentVerifyPage = async (props: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const { order_id } = await props.searchParams;
  const result = await paymentVerification(order_id);

  return (
    <div>
      {result?.data[0] && <OrderVerification orderData={result?.data[0]} />}
    </div>
  );
};

export default PaymentVerifyPage;
