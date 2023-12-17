import { db } from "@/db";
import { notFound } from "next/navigation";

interface PostSingleProps {
  postId: string;
}

export default async function PostSingle({ postId }: PostSingleProps) {
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
    <div>
      <div className="flex flex-col gap-3 mb-5">
        <h1 className="text-xl font-semibold">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
