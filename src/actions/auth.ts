"use server";

import * as auth from "@/auth";

export async function signInGithub() {
  return auth.signIn("github", { redirect: true, redirectTo: '/' });
}

export async function signInGoogle() {
  return auth.signIn("google", { redirect: true, redirectTo: '/' });
}

export async function signOut() {
  return auth.signOut();
}
