"use client";

import { createComment } from "@/actions";
import FormButton from "../Core/FormButton";
import { Textarea } from "../ui/textarea";
import { useFormState } from "react-dom";

interface CommentCreateFormProps {
  commentCount?: number;
  postId: string;
  parentId?: string;
  slug: string;
}

export default function CommentCreateForm({
  commentCount,
  postId,
  parentId,
  slug,
}: CommentCreateFormProps) {
  const [formState, action] = useFormState(
    createComment.bind(null, postId, slug, parentId),
    {
      errors: {},
    }
  );

  return (
    <div>
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
    </div>
  );
}
