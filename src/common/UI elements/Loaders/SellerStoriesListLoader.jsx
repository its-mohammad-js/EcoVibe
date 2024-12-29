import { fakeArray } from "helpers";

function SellerStoriesListLoader() {
  return (
    <div className="mx-auto overflow-auto hidden-scroll-bar 2xl:max-w-screen-2xl px-4 py-2 flex gap-x-2.5 items-center justify-start">
      {/* story lists */}
      {fakeArray(15).map((n, listIndex) => (
        <div
          key={listIndex}
          className="flex flex-col animate-pulse gap-y-2 justify-center items-center cursor-pointer"
        >
          <div className="size-20 rounded-full ring-2 ring-gray-300 bg-gray-200" />
          <p className="font-semibold w-16 h-2 bg-gray-400 rounded-xl"></p>
          <p className="w-12 h-2 bg-gray-400 rounded-md"></p>
        </div>
      ))}
    </div>
  );
}

export default SellerStoriesListLoader;
