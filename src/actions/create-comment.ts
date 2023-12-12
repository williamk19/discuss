"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/utils/path-helper";
import { Comment } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createCommentSchema = z.object({
  comment: z.string().min(3),
});

interface createCommentFormState {
  errors?: {
    comment?: string[];
    _form?: string[];
  };
}

export async function createComment(
  postId: string,
  slug: string,
  parentId: string | undefined,
  formState: createCommentFormState,
  formData: FormData
): Promise<createCommentFormState> {
  const result = createCommentSchema.safeParse({
    comment: formData.get("comment"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must signed in to create post"],
      },
    };
  }

  let comment: Comment;
  try {
    comment = await db.comment.create({
      data: {
        content: result.data.comment,
        postId: postId,
        userId: session.user.id,
        parentId: parentId ? parentId : null,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong!"],
        },
      };
    }
  }

  revalidatePath(paths.postShowPath(slug, postId));
  return {
    errors: undefined
  }
}
