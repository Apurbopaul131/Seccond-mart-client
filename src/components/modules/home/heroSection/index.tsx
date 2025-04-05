"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./HeroSection.module.css";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  bangladeshDivisions,
  productCategories,
  productConditions,
} from "@/constants";
import { SelectContent } from "@radix-ui/react-select";
import { useRouter, useSearchParams } from "next/navigation";

const HeroSection = () => {
  const form = useForm();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const params = new URLSearchParams(searchParams);
    if (data?.searchTerm) {
      params.set("searchTerm", data?.searchTerm);
    } else {
      params.delete("searchTerm");
    }
    if (data?.location) {
      params.set("location", data?.location);
    } else {
      params.delete("location");
    }

    if (data?.condition) {
      params.set("condition", data?.condition);
    } else {
      params.delete("condition");
    }
    if (data?.category) {
      params.set("category", data?.category);
    } else {
      params.delete("category");
    }

    if (params.toString()) {
      replace(`/products?${params.toString()}`);
    } else {
      replace("/products");
    }
  };
  return (
    <div className={`${styles.banner}`}>
      <div className="flex justify-center items-center h-full">
        <div className="">
          <h1 className="text-7xl text-secondary font-bold leading-16 text-center">
            Seccond Mart
            <br /> <span className="text-primary">Bangladeh</span>
          </h1>
          <div className="mt-10 border-2 rounded-md pt-2 pl-2 pb-2 bg-white shadow-xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <div className="pr-2 grid grid-cols-3 gap-3 items-center">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="border-2">
                            <SelectTrigger className="cursor-pointer w-full">
                              <SelectValue placeholder="Location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-primary z-50 relative bottom-40">
                            {bangladeshDivisions.map((location, idx) => (
                              <SelectItem
                                key={idx}
                                value={location}
                                className="cursor-pointer"
                                defaultValue={searchParams
                                  .get("location")
                                  ?.toString()}
                              >
                                {location}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="cursor-pointer w-full">
                              <SelectValue placeholder="Category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-primary z-50 relative bottom-40">
                            {productCategories.map((category, idx) => (
                              <SelectItem
                                key={idx}
                                value={category}
                                defaultValue={searchParams
                                  .get("category")
                                  ?.toString()}
                              >
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="condition"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="cursor-pointer w-full">
                              <SelectValue placeholder="Condition" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-primary z-50 relative bottom-40">
                            {productConditions.map((conditon, idx) => (
                              <SelectItem
                                key={idx}
                                value={conditon}
                                defaultValue={searchParams
                                  .get("condition")
                                  ?.toString()}
                              >
                                {conditon}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-8 gap-3 items-center">
                  <div className="col-span-7">
                    <FormField
                      control={form.control}
                      name="searchTerm"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="text"
                              {...field}
                              value={field.value || ""}
                              placeholder="I am lokking for...."
                              className="p-6 border-2"
                              defaultValue={searchParams
                                .get("searchTerm")
                                ?.toString()}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-1">
                    <Button
                      type="submit"
                      className="bg-secondary py-6 px-8 text-white cursor-pointer"
                    >
                      <Search className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
