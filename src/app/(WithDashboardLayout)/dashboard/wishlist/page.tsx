import ManageWishlist from "@/components/modules/wishlist";
import { currentUser } from "@/services/authServices";
import { getAllWishlist } from "@/services/wishlist";
import { IUser } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Wishlist",
  description: "This is wishlist of seccond mart project",
};
const WishlistPage = async () => {
  const { userId } = (await currentUser()) as IUser;
  const { data } = await getAllWishlist(userId);
  return (
    <div className="mx-5">
      <ManageWishlist products={data?.items} />
    </div>
  );
};

export default WishlistPage;
