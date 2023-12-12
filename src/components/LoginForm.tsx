import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { signInGithub, signInGoogle } from "@/actions";
import { OAuthAccountNotLinked } from "@auth/core/errors";
import { Separator } from "./ui/separator";

export default function LoginForm() {
  return (
    <>
      <Card className="w-[350px] shadow-xl">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Please choose SSO provider below to sign in
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-4">
          <form action={signInGoogle} className="w-full">
            <Button variant="outline" className="border border-gray-800 w-full">
              <FaGoogle className="mr-2" />
              Sign in with Google
            </Button>
          </form>
          <div className="flex items-center justify-center w-full gap-3">
            <div className="w-full">
              <Separator />
            </div>
            or
            <div className="w-full">
              <Separator />
            </div>
          </div>
          <form action={signInGithub} className="w-full">
            <Button className="w-full">
              <FaGithub className="mr-2" />
              Sign in with Github
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
