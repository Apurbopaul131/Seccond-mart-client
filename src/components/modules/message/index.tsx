"use client";
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
import { sendMessage } from "@/services/messages";
import { IMessage } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ShowMessage = ({ messages }: { messages: IMessage[] }) => {
  const [senderID, setSenderId] = useState("");
  const [receiverID, setReceiverId] = useState("");
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
    const modifiedData = {
      senderID,
      receiverID,
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
  };
  return (
    <div className="grid grid-cols-3 gap-3">
      {messages?.map((message, idx) => (
        <div
          className="p-3 bg-gray-500 text-muted rounded-md shadow-lg space-y-1"
          key={idx}
        >
          <h3>From:{message?.senderID?.name}</h3>
          <p>{message?.message}</p>
          <div className="flex justify-between items-center">
            <p className="py-1 px-3 bg-secondary rounded-full">
              {message?.createdAt.split("T")[0]}
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="cursor-pointer text-muted-foreground"
                  size={"sm"}
                  onClick={() => {
                    setSenderId(message?.receiverID?._id);
                    setReceiverId(message?.senderID?._id);
                  }}
                >
                  Reply
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
        </div>
      ))}
    </div>
  );
};

export default ShowMessage;
