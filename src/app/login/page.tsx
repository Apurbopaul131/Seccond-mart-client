import LoginForm from "@/components/modules/auth/login/LoginForm";
import { Metadata } from "next";
import { Suspense } from "react";

//meatadata
export const metadata: Metadata = {
  title: "SeccondMart | Login",
  description: "This is login page of seccond mart project",
};
const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
