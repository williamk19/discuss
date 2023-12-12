import { Input } from "./ui/input";
import NavbarAuth from "./NavbarAuth";
import Link from "next/link";
import paths from "@/utils/path-helper";

export default async function Navbar() {
  return (
    <div className="z-50 w-full flex justify-center border border-gray-400 bg-white shadow">
      <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md flex justify-between py-4">
        <div className="h-full flex items-center gap-5">
          <Link href={paths.homePath()}>
            <h1 className="font-semibold text:lg shadow-xl text-white bg-black py-2 px-3 select-none cursor-pointer">
              DISCUSS
            </h1>
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <Input
            className="shadow-md border-gray-300 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:border-gray-700"
            placeholder="Search a post or topics"
          />
          <NavbarAuth />
        </div>
      </div>
    </div>
  );
}
