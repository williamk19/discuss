"use client";

import { useSession } from "next-auth/react";
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
  const { data: session, status } = useSession();

  return (
    <Card className="w-[280px] shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Top Topics</CardTitle>
        <CardDescription>5 most trending topics right now!</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
      <CardFooter>
        {session && status == "authenticated" ? (
          <TopicCreateForm />
        ) : (
          <p className="text-sm text-gray-500">* Please sign in to create topic</p>
        )}
      </CardFooter>
    </Card>
  );
}
