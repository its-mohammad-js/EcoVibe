import { FaHeart, FaStar } from "react-icons/fa";
import { fakeArray } from "constants";

function ProductInfoLoader() {
  return (
    <div id="wrapper">
      <div className="md:flex xl:h-[40rem] animate-pulse">
        {/* product details */}
        <div className="flex flex-col md:flex-row justify-start w-full gap-4 xl:px-4 xl:py-2">
          {/* product image's */}
          <div className="xl:w-2/5 flex flex-col">
            {/* main slider */}
            <div className="w-full bg-gray-100 h-72 xl:h-96 xl:rounded-md"></div>
            {/* all images */}
            <div className="w-full h-32 xl:h-44 overflow-x-auto overflow-y-hidden horizontal-scroll-bar px-2 py-0.5">
              <div className="inline-flex items-center justify-center h-full gap-4">
                {fakeArray(3).map((url, i) => (
                  <div
                    key={i}
                    className="w-24 xl:w-44 h-[95%] bg-gray-100"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          {/* product detail's & order box */}
          <div className="xl:w-3/5 px-3 py-1.5 flex flex-col gap-y-4">
            {/* summary details & wish list btn */}
            <div className="flex flex-col gap-1">
              {/* title */}
              <h4 className="w-28 h-4 bg-gray-300 rounded-md"></h4>
              <div className="w-full flex items-center gap-4 my-2 flex-wrap">
                <div className="flex items-end gap-1">
                  <p className="w-14 h-2 bg-gray-300 rounded-md"></p>
                  <p className="w-28 h-2 bg-gray-300 rounded-md"></p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="text-gray-300 text-xl">
                    <FaStar />
                  </p>
                  <p className="w-28 h-2 bg-gray-300 rounded-md"></p>
                </div>
                <button className="flex items-center gap-1 mb-1 font-bold">
                  <FaHeart className="text-gray-300" />{" "}
                  <p className="w-24 h-2 bg-gray-300 rounded-md"></p>
                </button>
              </div>
            </div>
            {/* description & seller info */}
            <div className="">
              {/* header (switcher) */}
              <div className="border-b flex items-center gap-2 py-2">
                <p className="w-24 h-2 rounded-md bg-gray-300"></p>
                <p className="w-24 h-2 rounded-md bg-gray-300"></p>
              </div>
              {/* main content */}
              <div className="py-2 flex flex-col gap-y-4">
                {fakeArray(20).map((n, i) => (
                  <p key={i} className="w-full h-2 bg-gray-300 rounded-md"></p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoLoader;
