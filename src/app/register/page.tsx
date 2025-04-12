import RegisterForm from "@/components/modules/auth/register/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeccondMart | Register",
  description: "This is Register page of seccond mart project",
};
const RegisterPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
