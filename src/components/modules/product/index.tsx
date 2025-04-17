"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/context/UserContext";
import { sendMessage } from "@/services/messages";
import { createOrder } from "@/services/transactions";
import { createWishlist } from "@/services/wishlist";
import { IProduct } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Eye,
  Facebook,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [viewNumber, setNumberView] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const formSchema = z.object({
    message: z
      .string({
        invalid_type_error: "Message must be string",
        required_error: "Message must be required",
      })
      .min(1, { message: "Mesage length must be one" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const handleMessageSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!user?.userId) {
      toast.error("You are not Authorized.please login...");
      router.push("/login");
    } else {
      const modifiedData = {
        senderID: user?.userId,
        receiverID: product?.userId?._id,
        ...data,
      };
      try {
        const result = await sendMessage(modifiedData);
        if (result?.success) {
          toast.success(result?.message);
          form.reset();
        } else {
          toast.error(result?.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleAddToWishList = async (
    productId: string,
    productUserId: string
  ) => {
    const modifiedData = {
      userId: user?.userId,
      items: [productId],
    };
    if (!user?.userId) {
      router.push("/login");
      toast.error("Please login..");
    } else if (user?.userId === productUserId) {
      toast.error("User do not added his own product.");
    } else {
      try {
        const result = await createWishlist(modifiedData);
        if (result?.success) {
          toast.success(result?.message);
        } else {
          toast.error(result?.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleProceedOrder = async (product: IProduct) => {
    try {
      if (!user?.userId) {
        toast.error("please login...");
        router.push("/login");
      } else {
        const modifiedData = {
          buyerID: user?.userId,
          sellerID: product?.userId?._id,
          itemID: product?._id,
        };
        const result = await createOrder(modifiedData);
        if (result?.success && result?.data?.checkout_url) {
          toast.success(result?.message);
          window.location.href = result?.data?.checkout_url;
        } else {
          toast.error(result?.message);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-[90%] md:container mx-auto">
      <div className="grid grid-cols-5 gap-3 my-10">
        <div className="col-span-5 md:col-span-3 border-2 bg-white rounded-md">
          <Image
            src={product?.images[0]}
            alt={product?.title}
            height={400}
            width={800}
          ></Image>
          <div className="p-3 space-y-5">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold text-muted-foreground">
                1 month ago
              </h3>
              <h3 className="text-xl font-semibold text-muted-foreground">
                74 views
              </h3>
            </div>
            <h1 className="text-3xl font-bold text-muted-foreground">
              {product?.title}
            </h1>
            <div>
              <Button
                variant={"outline"}
                className="border-1 border-secondary p-2 text-secondary font-semibold"
              >
                {product?.category}
              </Button>
            </div>
            <div>
              <Button
                variant={"outline"}
                className="border-1 border-secondary p-2 text-secondary font-semibold"
              >
                <MapPin className="h-6 w-6" />
                Location: {product?.location}
              </Button>
            </div>
            <div>
              <Button
                variant={"outline"}
                className="border-1 border-secondary p-2 text-secondary font-semibold"
              >
                <Smartphone />
                Phone Number: {product?.userId?.phoneNumber}
              </Button>
            </div>
            <p className="text-xl text-muted-foreground">
              <span className="font-semibold">Description:</span>
              {product?.description}
            </p>
            {product.status === "sold" && (
              <p className="text-destructive">product are already sold!</p>
            )}
            <div className="flex justify-end">
              <Button
                variant={"outline"}
                className="border-1 border-primary cursor-pointer p-2 text-primary font-semibold"
                onClick={() => handleProceedOrder(product)}
                disabled={product?.status === "sold"}
              >
                Proced Checkout
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-5 md:col-span-2 border-2 rounded-md h-2/3 bg-white">
          <div className="flex items-center gap-3 p-5">
            <div>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </div>
            <div className="">
              <h3>{product?.userId?.name}</h3>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <p>{product?.userId.email}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-5 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="p-4 bg-white rounded-full">
                <Smartphone className="w-6 h-6" />
              </div>
              <p>
                {viewNumber
                  ? product?.userId?.phoneNumber
                  : `${product?.userId?.phoneNumber.slice(0, 3)}********`}
              </p>
            </div>
            <div>
              <Button
                onClick={() => setNumberView(!viewNumber)}
                className="p-4 rounded-full font-semibold cursor-pointer"
              >
                <Eye className="w-6 h-6" />
              </Button>
            </div>
          </div>
          <div className="p-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  disabled={product?.status === "sold"}
                  className="w-full text-center p-8 text-white"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chat
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleMessageSubmit)}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Type your message here."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end mt-5">
                      <Button type="submit" className="cursor-pointer">
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
          {user?.userId && user?.userId === product?.userId?._id && (
            <div className="px-5">
              <p className="p-3 bg-red-100 rounded-md  text-red-500">
                warning:User can not purchase,add wishlist and chat for his own
                product
              </p>
            </div>
          )}
          <div className="px-5 pt-5 flex justify-center items-center gap-3 text-muted-foreground">
            <div
              onClick={() =>
                handleAddToWishList(product?._id, product?.userId._id)
              }
              className="p-3 rounded-full border-1 cursor-pointer hover:border-secondary hover:text-secondary"
            >
              <Heart className="w-6 h-6" />
            </div>
            <div className="p-3 rounded-full border-1 cursor-pointer hover:border-secondary hover:text-secondary">
              <Facebook className="w-6 h-6" />
            </div>
            <div className="p-3 rounded-full border-1 cursor-pointer hover:border-secondary hover:text-secondary">
              <Instagram className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
