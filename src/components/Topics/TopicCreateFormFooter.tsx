"use client";
import { useSession } from "next-auth/react";
import TopicCreateForm from "./TopicCreateForm";

export default function TopicCreateFormFooter() {
  const { data: session, status } = useSession();

  return (
    <>
      {session && status == "authenticated" ? (
        <TopicCreateForm />
      ) : (
        <p className="text-sm text-gray-500">
          * Please sign in to create topic
        </p>
      )}
    </>
  );
}
