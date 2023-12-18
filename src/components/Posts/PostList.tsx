import type { PostListData } from "@/db/queries/posts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import paths from "@/utils/path-helper";
import { trimText } from '@/utils/string';

interface PostListProps {
  fetchData: () => Promise<PostListData[]>;
  showTags?: boolean;
}

export default async function PostList({
  fetchData,
  showTags = false,
}: PostListProps) {
  const posts = await fetchData();
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="mb-5 last-of-type:mb-0">
          <Link href={paths.postShowPath(post.topic.slug, post.id)}>
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold">
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {post.createdAt.toLocaleDateString("en-US", options)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{trimText(post.content)}</p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between w-full">
                  <p>By {post.user.name}</p>
                  <p>{post._count.comments} Comments</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </>
  );
}
