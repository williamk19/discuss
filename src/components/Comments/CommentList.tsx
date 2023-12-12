import { CommentWithAuthor } from "@/db/queries/comments";
import CommentCard from "./CommentCard";

interface CommentListProps {
  fetchData: () => Promise<CommentWithAuthor[]>;
  slug: string;
}

export default async function CommentList({
  fetchData,
  slug,
}: CommentListProps) {
  const comments = await fetchData();
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );

  return (
    <div>
      {topLevelComments.map((comment) => (
        <CommentCard
          slug={slug}
          key={comment.id}
          commentId={comment.id}
          comments={comments}
        />
      ))}
    </div>
  );
}
