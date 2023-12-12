"use client";

import * as actions from "@/actions";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import NavbarDropdown from "./NavbarDropdown";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

export default function NavbarAuth() {
  const session = useSession();
  if (session.status === "loading") {
    return (
      <div className="h-10 w-10">
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    );
  }

  return (
    <>
      {session.data?.user ? (
        <>
          <NavbarDropdown user={session.data?.user} />
        </>
      ) : (
        <>
          <Link href="/auth/signin">
            <Button type="submit" className="flex gap-2 shadow-md">
              Sign In
            </Button>
          </Link>
        </>
      )}
    </>
  );
}
