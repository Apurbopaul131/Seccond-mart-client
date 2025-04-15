"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Logo from "@/app/assets/Logo";
import { useUser } from "@/context/UserContext";
import { loginUser } from "@/services/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { loginSchema } from "./loginValidation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const searchTerms = searchParams.get("redirectPath");
  const router = useRouter();
  const currentUser = useUser();
  // const [reChaptchaVerificationStatus, setReChaptchaVerificationStatus] =
  //   useState(false);
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;
  // const handleRecaptcha = async (value: string | null) => {
  //   try {
  //     const res = await reCaptchaTokenVerification(value!);
  //     if (res?.success) {
  //       setReChaptchaVerificationStatus(true);
  //     }
  //   } catch (err: any) {
  //     console.error(err);
  //   }
  // };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res?.message);
        form.reset();
        currentUser.setIsLoading(true);

        if (searchTerms) {
          setTimeout(() => {
            router.push(searchTerms);
          }, 2000);
        } else {
          setTimeout(() => {
            router.push("/");
          }, 2000);
        }
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <div className="flex items-center space-x-4 ">
        <Logo />
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-primary-foreground">
            Join us today and start your journey!
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <ReCAPTCHA
            sitekey={`${process.env.NEXT_PUBLIC_CLIENT_RECAPTCHA}`}
            onChange={handleRecaptcha}
          /> */}
          <Button
            type="submit"
            // disabled={reChaptchaVerificationStatus ? false : true}
            className="mt-5 w-full"
          >
            {isSubmitting ? "Loginig...." : "Login"}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3">
        Already have an account ?
        <Link href="/register" className="text-primary">
          Register
        </Link>
      </p>
    </div>
  );
}
