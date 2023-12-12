import TopicsHomePage from "@/components/Topics/TopicsHomePage";

export default async function Home() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-11/12 sm:w-5/4 md:w-3/4 max-w-screen-md flex justify-between gap-5 py-8">
          <div className="col-span-2">
            <h1>Top Post</h1>
          </div>
          <div>
            <TopicsHomePage />
          </div>
        </div>
      </div>
    </>
  );
}
