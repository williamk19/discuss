import CommentCreateForm from "@/components/Comments/CommentCreateForm";
import CommentList from "@/components/Comments/CommentList";
import PostSingle from "@/components/Posts/PostSingle";
import PostSingleLoading from "@/components/Posts/PostSingleLoading";
import { db } from "@/db";
import paths from "@/utils/path-helper";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface PostPageProps {
  params: {
    postId: string;
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const { postId, slug } = params;

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md flex flex-col gap-5 py-8">
        <Link
          className="underline flex items-center gap-2"
          href={paths.topicShowPath(slug)}
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to {slug} topic
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <PostSingle postId={postId} />
        </Suspense>
        <CommentCreateForm
          hideReply={true}
          startOpen={true}
          commentCount={0}
          postId={postId}
          slug={slug}
        />
        <CommentList slug={slug} postId={postId} />
      </div>
    </div>
  );
}
