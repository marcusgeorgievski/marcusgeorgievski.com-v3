"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
// import { createMessage } from "@/actions/message";
import { useTransition } from "react";
import { useToast } from "@/components/shadcn/ui/use-toast";
import { useRouter } from "next/navigation";
import { createMessage } from "@/actions/message";
import { Button } from "../shadcn/ui/button";
import { jetBrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TextAlignLeftIcon } from "@radix-ui/react-icons";

export const messageSchema = z.object({
  name: z.string().min(1, {
    message: "Name required!",
  }),
  contact: z.string(),
  message: z.string().min(1, {
    message: "Message required!",
  }),
});

export default function MessageForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof messageSchema>) {
    // await createMessage(values)
    startTransition(async () => {
      createMessage(values).then((res: any) => {
        if (res?.error) {
          toast({
            title: "Error",
            description: "Something went wrong :(",
            variant: "destructive",
          });
          return;
        }
        toast({
          title: res?.title || "Message sent!",
          description: res?.description || "Thanks " + values.name + "!",
        });
        form.resetField("message");
      });
      router.refresh();
    });
  }

  return (
    <div id="message">
      <h3
        className={cn(
          jetBrainsMono.className,
          "text-sm text-slate-400 mb-8 animate-fade-in  px-1  flex items-center gap-3 border-b pb-2 border-slate-700 lg:border-none "
        )}
      >
        <TextAlignLeftIcon height={16} width={16} />
        {"message;"}
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="md:grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Contact{" "}
                    <span className="text-xs text-muted-foreground/90 ml-2">
                      optional
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="email, phone, etc." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="uh hello..."
                    className="resize-none h-[80px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isPending}
            aria-label="Submit message"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
