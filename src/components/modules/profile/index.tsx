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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { userRoles } from "@/constants";
import { updateSingleUser } from "@/services/profile";
import { IUser } from "@/types";
import { SquarePen } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function UserProfileForm({ user }: { user: IUser }) {
  const [enableEdit, setEnableEdit] = useState(false);

  //Initialize react-hook-form with deafacult values
  const form = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
      role: user?.role || "",
    },
  });

  //extract the form state
  const {
    formState: { isSubmitting },
  } = form;

  //enbale edit of the user
  const handleEnableEdit = () => {
    setEnableEdit(true);
  };

  //Handle edit of the user information
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setEnableEdit(false);
    try {
      const result = await updateSingleUser(user?.userId, data);
      if (result?.success) {
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Account Details</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!enableEdit}
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!enableEdit}
                      type="text"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!enableEdit}
                      type="text"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled
                  >
                    <FormControl className="w-full">
                      <SelectTrigger disabled>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      {userRoles.map((role, idx) => (
                        <SelectItem key={idx} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between items-center">
            <Button
              onClick={handleEnableEdit}
              disabled={enableEdit}
              className="mt-5 bg-secondary text-white cursor-pointer"
            >
              Edit <SquarePen />
            </Button>
            <Button
              type="submit"
              className="mt-5 cursor-pointer"
              disabled={!enableEdit}
            >
              {isSubmitting ? "Save Changes.." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
