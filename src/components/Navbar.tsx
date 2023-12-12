import * as actions from "@/actions";
import { Button } from "./ui/button";
import { auth } from "@/auth";
import NavbarDropdown from "./NavbarDropdown";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md flex justify-between py-4 px-8 bg-slate-200 rounded-b-lg">
      <div className="h-full flex items-center gap-5">
        <h1 className="font-semibold text:lg shadow-xl text-white bg-black py-2 px-3">
          DISCUSS
        </h1>
      </div>
      <div className="flex gap-2">
        {session?.user ? (
          <>
            <NavbarDropdown user={session?.user} />
          </>
        ) : (
          <>
            <form action={actions.signIn}>
              <Button type="submit">Sign In</Button>
            </form>
            <form action={actions.signIn}>
              <Button type="submit">Sign Up</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
