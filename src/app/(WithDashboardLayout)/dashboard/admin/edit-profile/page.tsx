import UserProfileForm from "@/components/modules/profile";
import { currentUser } from "@/services/authServices";
import { getSingleUser } from "@/services/profile";
import { IUser } from "@/types";

const AdminEditProfie = async () => {
  const existUser = await currentUser();

  const { data: userProfile } = await getSingleUser(
    (existUser as IUser)?.userId
  );
  return (
    <div className="flex justify-center items-center">
      <UserProfileForm user={userProfile} />
    </div>
  );
};

export default AdminEditProfie;
