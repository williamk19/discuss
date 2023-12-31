import type { Post } from "@prisma/client";
import { db } from "@/db";

export type PostListData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export function fetchTrendingPost(): Promise<PostListData[]> {
  return db.post.findMany({
    take: 10,
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
    orderBy: {
      comments: {
        _count: 'desc'
      }
    },
  });
}

export function fetchPostsByTopicSlug(slug: string): Promise<PostListData[]> {
  return db.post.findMany({
    where: {
      topic: {
        slug,
      },
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
