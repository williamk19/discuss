import PostCreateForm from "@/components/Posts/PostCreateForm";
import { db } from "@/db";
import PostList from "@/components/Posts/PostList";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { notFound } from "next/navigation";

interface TopicPageProps {
  params: {
    slug: string;
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = params;
  const topic = await db.topic.findFirst({
    where: {
      slug,
    },
  });

  if (!topic) {
    return notFound();
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md flex justify-between gap-5 py-8">
          <div className="max-w-lg">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">{slug}</h1>
              <p>{topic.description}</p>
            </div>
            <div className="">
              <ScrollArea className="h-96 pr-5 overflow-visible" type="always">
                <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
              </ScrollArea>
            </div>
          </div>
          <div className="max-w-sm">
            <PostCreateForm slug={slug} />
          </div>
        </div>
      </div>
    </>
  );
}
