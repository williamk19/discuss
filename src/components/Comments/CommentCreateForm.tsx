"use client";

import { createComment } from "@/actions";
import FormButton from "../Core/FormButton";
import { Textarea } from "../ui/textarea";
import { useFormState } from "react-dom";
import { useState } from "react";

interface CommentCreateFormProps {
  startOpen?: boolean;
  hideReply?: boolean;
  commentCount?: number;
  postId: string;
  parentId?: string;
  slug: string;
}

export default function CommentCreateForm({
  startOpen = false,
  hideReply = false,
  commentCount,
  postId,
  parentId,
  slug,
}: CommentCreateFormProps) {
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(startOpen);
  const [formState, action] = useFormState(
    createComment.bind(null, postId, slug, parentId),
    {
      errors: {},
    }
  );

  return (
    <div>
      {!hideReply && (
        <div
          className="cursor-pointer w-fit font-semibold text-sm"
          onClick={() => setIsReplyFormOpen(!isReplyFormOpen)}
        >
          Reply
        </div>
      )}
      {isReplyFormOpen && (
        <form className="flex flex-col gap-3" action={action}>
          <h1 className="font-semibold">
            Comments {commentCount ? `(${commentCount})` : null}
          </h1>
          <Textarea
            name="comment"
            className="border-2 border-gray-600 shadow-md"
          />
          <div
            className={`flex ${
              formState.errors?._form || formState.errors?.comment
                ? "justify-between"
                : "justify-end"
            }`}
          >
            {formState.errors?.comment ? (
              <p className="text-sm text-red-400">
                {formState.errors.comment?.join(", ")}
              </p>
            ) : null}
            {formState.errors?._form ? (
              <p className="text-sm text-red-400">
                {formState.errors._form?.join(", ")}
              </p>
            ) : null}
            <FormButton>Add Comment</FormButton>
          </div>
        </form>
      )}
    </div>
  );
}
