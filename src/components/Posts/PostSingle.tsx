import { PostListData } from "@/db/queries/posts";

interface PostShowProps {
  post: PostListData;
}

export default async function PostSingle({ post }: PostShowProps) {
  return (
    <div>
      <div className="flex flex-col gap-3 mb-5">
        <h1 className="text-xl font-semibold">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
