import LoginForm from "@/components/modules/auth/login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Login",
  description: "This is login page of seccond mart project",
};
const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
