"use client";

import LoginForm from "@/components/LoginForm";
import paths from "@/utils/path-helper";
import { useSession, getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { CgSpinner } from "react-icons/cg";

export default function SignInPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="w-full flex justify-center">
        <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md py-20 flex justify-center">
          <div className="flex gap-3 justify-center items-center">
            <CgSpinner className="animate-spin w-8 h-8" />
            <p>Please wait</p>
          </div>
        </div>
      </div>
    );
  }

  if (status === "authenticated") {
    return redirect(paths.homePath());
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md py-20 flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
