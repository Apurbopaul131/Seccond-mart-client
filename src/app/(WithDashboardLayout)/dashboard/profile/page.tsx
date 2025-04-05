import UserProfileForm from "@/components/modules/profile";
import { currentUser } from "@/services/authServices";
import { getSingleUser } from "@/services/profile";
import { IUser } from "@/types";

const UserProfile = async () => {
  const existUser = await currentUser();
  console.log((existUser as IUser)?.userId);
  const { data: userProfile } = await getSingleUser(
    (existUser as IUser)?.userId
  );
  console.log(userProfile);
  return (
    <div className="flex justify-center items-center">
      <UserProfileForm user={userProfile} />
    </div>
  );
};

export default UserProfile;
