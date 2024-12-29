import { fakeArray } from "helpers";

function SellerProfilePageLoader() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl flex flex-col justify-between">
      <div
        id="wrapper"
        className="size-full lg:w-8/12 lg:mx-auto animate-pulse"
      >
        {/* seller info */}
        <div className="px-4 py-2">
          {/* header */}
          <div className="flex items-center justify-evenly gap-x-4 lg:gap-x-8 lg:w-fit">
            {/* profile pic */}
            <div className="size-20 lg:size-24 bg-gray-300 rounded-full overflow-hidden select-none cursor-pointer"></div>
            {/* stars, products, customers count */}
            <div className="flex w-2/3 items-center justify-evenly gap-x-4">
              {fakeArray(3).map((n) => (
                <div
                  key={n}
                  className="flex items-center justify-center flex-col font-medium gap-y-2"
                >
                  <h6 className="w-10 h-2 bg-gray-300 rounded-md"></h6>
                  <p className="text-center w-16 h-2 bg-gray-200 rounded-md"></p>
                </div>
              ))}
            </div>
          </div>
          {/* biography */}
          <div className="my-2 flex flex-col gap-y-2.5">
            {/* main name */}
            <p className="h-4 w-1/4 bg-gray-200 rounded-md"></p>
            {/* business name */}
            <p className="h-2 w-2/12 bg-gray-200 rounded-md"></p>
            {/* career title */}
            <p className="h-2 w-1/12 bg-gray-200 rounded-md"></p>
            {/* biography */}
            <div className="flex flex-col gap-y-2">
              {fakeArray(4).map((n, i) => (
                <p
                  key={i}
                  className="h-2 bg-gray-200 odd:w-1/3 even:w-1/4 last-of-type:w-2/4 rounded-md"
                ></p>
              ))}
            </div>
          </div>
          {/* action btns */}
          <div className="flex items-center justify-around my-3 lg:w-fit lg:gap-x-4">
            <button className="px-4 py-1 w-24 text-sm lg:text-base bg-gray-300 cursor-auto transition-all text-gray-950 rounded-lg">
              &nbsp;
            </button>
            <button className="px-4 py-1 w-24 text-sm lg:text-base bg-gray-300 cursor-auto transition-all text-gray-950 rounded-lg">
              &nbsp;
            </button>
            <button className="px-4 py-1 w-24 text-sm lg:text-base bg-gray-300 cursor-auto transition-all text-gray-950 rounded-lg">
              &nbsp;
            </button>
          </div>
        </div>
        {/* highlights list */}
        <div className="flex select-none highlights-wrapper items-center gap-x-4 overflow-auto px-2 py-2 scroll-smooth hidden-scroll-bar">
          {fakeArray(8).map((n) => (
            <div
              key={n}
              className="size-16 cursor-pointer rounded-full bg-gray-200 flex-none flex items-center justify-center text-3xl text-gray-500"
            ></div>
          ))}
        </div>
        {/* contents */}
        <div className="flex-1 w-full overflow-auto styled-scroll-bar relative">
          {/* action buttons */}
          <div className="flex items-center gap-x-4 mt-2 justify-center px-1 lg:w-2/3 lg:mx-auto sticky top-0 bg-inherit">
            <p className="w-1/4 h-4 rounded-md bg-gray-200"></p>
            <p className="w-1/4 h-4 rounded-md bg-gray-200"></p>
            <p className="w-1/4 h-4 rounded-md bg-gray-200"></p>
          </div>
          {/* grids */}
          <div className="flex flex-wrap my-2">
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-0.5 pb-1">
              {fakeArray(10).map((product, i) => (
                <div
                  key={i}
                  className="h-36 relative group lg:h-56 bg-gray-200"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerProfilePageLoader;
