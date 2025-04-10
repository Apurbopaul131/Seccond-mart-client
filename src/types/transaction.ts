import { IProduct } from "./product";
import { IUser } from "./user";

export interface ITransaction {
  _id: string;
  buyerID: IUser;
  sellerID: IUser;
  itemID: IProduct;
  status: "pending" | "completed";
  transaction: {
    id: string;
    transactionStatus: null | string;
    bank_status: string;
    date_time: string;
    method: string;
    payment_status: string;
    sp_code: string;
    sp_message: string;
  };
  createdAt: string;
}
