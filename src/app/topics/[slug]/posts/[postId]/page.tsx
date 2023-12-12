import CommentCreateForm from "@/components/Comments/CommentCreateForm";
import CommentList from "@/components/Comments/CommentList";
import PostSingle from "@/components/Posts/PostSingle";
import { db } from "@/db";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import paths from "@/utils/path-helper";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

interface PostPageProps {
  params: {
    postId: string;
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { postId, slug } = params;

  const post = await db.post.findFirst({
    where: {
      id: postId,
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });

  if (!post) {
    return notFound();
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md flex flex-col gap-5 py-8">
        <Link
          className="underline flex items-center gap-2"
          href={paths.topicShowPath(slug)}
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to {slug} slug
        </Link>
        <PostSingle post={post} />
        <CommentCreateForm
          commentCount={post._count.comments}
          postId={postId}
          slug={slug}
        />
        <CommentList fetchData={() => fetchCommentsByPostId(postId)} />
      </div>
    </div>
  );
}
