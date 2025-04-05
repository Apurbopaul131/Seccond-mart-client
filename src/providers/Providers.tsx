"use client";
import UserContext from "@/context/UserContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserContext>{children}</UserContext>;
};

export default Providers;
