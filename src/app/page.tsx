import PostList from "@/components/Posts/PostList";
import TopicsHomePage from "@/components/Topics/TopicsHomePage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchTrendingPost } from "@/db/queries/posts";

export default async function Home() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md flex justify-between gap-6 py-8">
          <div className="col-span-2 flex flex-col gap-5">
            <h1 className="text-xl font-bold">Trending Post</h1>
            <ScrollArea className="h-96 pr-4" type="always">
              <PostList fetchData={() => fetchTrendingPost()} />
            </ScrollArea>
          </div>
          <div>
            <TopicsHomePage />
          </div>
        </div>
      </div>
    </>
  );
}
