import ShowProfile from "@/components/modules/profile/ShowProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Profile",
  description: "This is Profile page of seccond mart project",
};
const AdminProfilePage = async () => {
  return (
    <div className="mx-5">
      <ShowProfile />
    </div>
  );
};

export default AdminProfilePage;
