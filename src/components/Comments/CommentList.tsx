import { CommentWithAuthor, fetchCommentsByPostId } from "@/db/queries/comments";
import CommentCard from "./CommentCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CommentListProps {
  fetchData?: () => Promise<CommentWithAuthor[]>;
  slug: string;
  postId: string;
}

export default async function CommentList({
  fetchData,
  slug,
  postId
}: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );

  return (
    <ScrollArea className="h-96 my-8 p-4 pr-5 border rounded-sm bg-gray-100" type="always">
      {topLevelComments.map((comment) => (
        <CommentCard
          slug={slug}
          key={comment.id}
          commentId={comment.id}
          postId={postId}
        />
      ))}
    </ScrollArea>
  );
}
