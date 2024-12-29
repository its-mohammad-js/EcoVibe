import { fakeArray } from "helpers";

function CommentsTabLoader({ animate }) {
  return (
    <>
      <h4 className="text-xl font-bold">Last Comments</h4>
      <div className="overflow-auto h-[90%] styled-scroll-bar px-1">
        <div className="flex flex-col gap-y-4">
          {fakeArray(4).map((comment, index) => (
            <div
              key={index}
              className={`${
                animate && "animate-pulse"
              } w-full h-24 bg-gray-200 flex items-center px-2 py-1 rounded-md gap-2`}
            >
              <div className="size-20 bg-gray-400 rounded-full"></div>
              <div className="h-full w-3/5 flex flex-col justify-evenly">
                <p className="w-14 h-2 bg-gray-400 rounded-md"></p>
                <p className="w-28 h-2 bg-gray-500 rounded-md"></p>
                <p className="w-36 h-2 bg-gray-500 rounded-md"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CommentsTabLoader;
