import { currentUser } from "@/services/authServices";
import { IUser } from "@/types";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
const CreateUserContext = createContext<IUserProviderValues | undefined>(
  undefined
);

const UserContext = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleUser = async () => {
    const user = await currentUser();

    setUser(user as IUser | null);
    setIsLoading(false);
  };
  useEffect(() => {
    handleUser();
  }, [isLoading]);
  return (
    <CreateUserContext.Provider
      value={{ user, setUser, isLoading, setIsLoading }}
    >
      {children}
    </CreateUserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(CreateUserContext);

  if (context == undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};
export default UserContext;
