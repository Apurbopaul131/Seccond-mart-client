import ManageUsers from "@/components/modules/users";
import SMPagination from "@/components/ui/core/SMPagination";
import { getAllUser } from "@/services/users";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Listing",
  description: "This is manage listing page of seccond mart project",
};
const ManageUsersPage = async (props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) => {
  const searchObj = await props.searchParams;
  const params = new URLSearchParams(searchObj);
  const query = params.toString() ? `?${params.toString()}` : "";
  const { data: users, meta } = await getAllUser(query);

  return (
    <div className="mx-5 space-y-3">
      <ManageUsers users={users}></ManageUsers>
      <SMPagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManageUsersPage;
