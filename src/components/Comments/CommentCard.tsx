"use client";

import { CommentWithAuthor } from "@/db/queries/comments";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import CommentCreateForm from "./CommentCreateForm";
import { useState } from "react";

interface CommentCardProps {
  comments: CommentWithAuthor[];
  commentId: string;
  slug: string;
}

export default function CommentCard({
  slug,
  comments,
  commentId,
}: CommentCardProps) {
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return (
      <CommentCard
        slug={slug}
        key={child.id}
        commentId={child.id}
        comments={comments}
      />
    );
  });

  return (
    <Card className="shadow-md mb-4 last-of-type:mb-0">
      <CardHeader>
        <div className="flex gap-4 mb-4">
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
          <p
            className="text-sm text-gray-500 cursor-pointer"
            onClick={() => setIsReplyFormOpen(!isReplyFormOpen)}
          >
            reply
          </p>
        </div>
        <div className={isReplyFormOpen ? "visible" : "hidden"}>
          <CommentCreateForm
            slug={slug}
            postId={comment.postId}
            parentId={comment.id}
          />
        </div>
      </CardHeader>
      <CardContent>{renderedChildren}</CardContent>
    </Card>
  );
}
