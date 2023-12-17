import { Skeleton } from "../ui/skeleton";

export default async function PostSingleLoading() {
  return (
    <div>
      <div className="flex flex-col gap-3 mb-5">
        <p>Loadingdek</p>
        <Skeleton className="w-9 h-3" />
        {/* <h1 className="text-xl font-semibold">{post.title}</h1> */}
        {/* <p>{post.content}</p> */}
      </div>
    </div>
  );
}
