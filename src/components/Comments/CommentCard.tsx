import {
  CommentWithAuthor,
  fetchCommentsByPostId,
} from "@/db/queries/comments";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import CommentCreateForm from "./CommentCreateForm";

interface CommentCardProps {
  disableReply?: boolean;
  comments?: CommentWithAuthor[];
  commentId: string;
  slug: string;
  postId: string;
}

export default async function CommentCard({
  disableReply = false,
  postId,
  slug,
  commentId,
}: CommentCardProps) {
  const comments = await fetchCommentsByPostId(postId);
  const comment = comments.find((c) => c.id === commentId);
  const dateFormat: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return (
      <CommentCard
        postId={postId}
        disableReply={true}
        slug={slug}
        key={child.id}
        commentId={child.id}
        comments={comments}
      />
    );
  });

  return (
    <Card className="rounded-sm shadow-md mb-2 last-of-type:mb-0">
      <CardHeader className="pb-4">
        <div className="flex gap-4 mb-3">
          <Image
            src={comment.user.image || ""}
            alt="user image"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">
              {comment.user.name}
            </p>
            <p className="text-gray-900">{comment.content}</p>
          </div>
          <p className="text-xs font-semibold">
            {comment.createdAt.toLocaleDateString("en-US", dateFormat)}
          </p>
        </div>
        {!disableReply && (
          <CommentCreateForm
            slug={slug}
            postId={comment.postId}
            parentId={comment.id}
          />
        )}
      </CardHeader>
      <CardContent>{renderedChildren}</CardContent>
    </Card>
  );
}
