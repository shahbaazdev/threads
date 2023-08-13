"use client";

import { z } from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Button,
} from "../../ui";

import { CommentValidation } from "../../../lib/validations/thread";
import { addCommentToThread } from "../../../lib/actions/thread.action";
import { useState } from "react";

interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

function Comment({ threadId, currentUserImg, currentUserId }: Props) {
  const pathname = usePathname();
  const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    setLoading(true);
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname
    );

    form.reset();
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form className="comment-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-3">
              <FormLabel>
                <Image
                  src={currentUserImg}
                  alt="current_user"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  type="text"
                  {...field}
                  placeholder="Reply..."
                  className="no-focus text-light-1 outline-none"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button disabled={isLoading} type="submit" className="comment-form_btn">
          {isLoading ? "Loading...." : "Reply"}
        </Button>
      </form>
    </Form>
  );
}

export default Comment;
