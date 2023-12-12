import { db } from "@/db";
import paths from "@/utils/path-helper";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default async function TopicList() {
  const topics = await db.topic.findMany({ take: 5 });

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {topics.map((topic) => (
        <div key={topic.id}>
          <Link href={paths.topicShowPath(topic.slug)}>
            <Badge>{topic.slug}</Badge>
          </Link>
        </div>
      ))}
    </div>
  );
}
