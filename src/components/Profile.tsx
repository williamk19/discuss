"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From client: user already signed in</div>;
  }

  return <div>From client: user is not signed in</div>;
}
