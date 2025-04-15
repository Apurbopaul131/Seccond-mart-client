import ShowMessage from "@/components/modules/message";
import { currentUser } from "@/services/authServices";
import { getMessages } from "@/services/messages";
import { IUser } from "@/types";

const MessagePage = async () => {
  const user = (await currentUser()) as IUser;
  const result = await getMessages(user?.userId);

  return (
    <div className="mx-5">
      <ShowMessage messages={result?.data} />
    </div>
  );
};

export default MessagePage;
