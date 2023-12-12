import { Input } from "./ui/input";
import NavbarAuth from "./NavbarAuth";

export default async function Navbar() {
  return (
    <div className="w-full flex justify-center border border-gray-400 shadow">
      <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md flex justify-between py-4 px-8">
        <div className="h-full flex items-center gap-5">
          <h1 className="font-semibold text:lg shadow-xl text-white bg-black py-2 px-3">
            DISCUSS
          </h1>
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
