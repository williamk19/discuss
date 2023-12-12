import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import TopicCreateForm from "./TopicCreateForm";

export default function TopicsHomePage() {
  return (
    <Card className="w-[280px] shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Top Topics</CardTitle>
        <CardDescription>5 most trending topics right now!</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
      <CardFooter>
        <TopicCreateForm />
      </CardFooter>
    </Card>
  );
}
