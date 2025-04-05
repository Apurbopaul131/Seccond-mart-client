import { IProduct } from "./product";
import { IUser } from "./user";

export interface ITransaction {
  _id: string;
  buyerID: IUser;
  sellerID: IUser;
  itemID: IProduct;
  status: "pending" | "completed";
}
