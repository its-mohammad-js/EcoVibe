import { fakeArray } from "constants";
import { BiCart } from "react-icons/bi";
import { TbEye, TbHeart, TbStar } from "react-icons/tb";

function FilteredProductsLoader() {
  return (
    <div className="ml-auto w-full md:w-[78%] relative">
      {/* products grid */}
      <div
        id="products-wrapper"
        className="w-full min-h-screen md:w-[98%] h-full mx-auto rounded-md flex justify-between md:justify-start gap-y-4 gap-x-2 md:gap-0 flex-wrap px-1.5 py-2"
      >
        {/* product cards */}
        {fakeArray(8).map((item, index) => {
          return (
            <div
              key={index}
              className="w-[48%] md:w-1/4 md:border h-64 md:h-96 cursor-pointer bg-gray-50 rounded-md md:rounded-none shadow-2xl shadow-gray-500/10 hover:shadow-gray-800 transition-all duration-500 group hover:z-10 animate-pulse"
            >
              <div className="w-full h-1/2 md:h-2/3 relative bg-gradient-to-br from-gray-200 via-gray-200 to-gray-600/75 rounded-t-md md:rounded-none">
                {/* img container */}
                <div className="absolute inset-0 rounded-t-md md:rounded-none flex flex-col gap-y-2 px-2 py-1 md:px-3 md:py-1.5 items-end">
                  <button className="p-1.5 md:p-2 rounded-full bg-gray-50 text-gray-300 transition-all">
                    <TbHeart className="md:text-xl" />
                  </button>
                  <button className="p-1.5 peer md:p-2 rounded-full bg-gray-50 text-gray-300 transition-all hidden md:block">
                    <TbEye className="md:text-xl" />
                  </button>
                </div>
              </div>
              {/* product details */}
              <div className="w-full h-1/2 md:h-1/3 flex flex-col justify-evenly px-2.5 py-1.5">
                {/* product name */}
                <h4 className="w-[75%] h-2 bg-gray-300 rounded-md"></h4>
                <div className="flex flex-col gap-y-2 md:flex-row md:items-center">
                  {/* price & stars */}
                  <div className="w-full flex md:flex-col md:items-start justify-between">
                    <p className="w-10 h-2 bg-gray-300 rounded-md"></p>
                    <p className="flex items-center justify-center gap-x-0.5 md:gap-y-1">
                      <span className="text-base">
                        {/* {calculateAverage(item.Stars)} */}
                      </span>
                      <span className="mb-0.5 text-gray-300">
                        <TbStar />
                      </span>
                    </p>
                  </div>
                  {/* show detail btn */}
                  <button className="px-2 py-1.5 text-sm rounded-md bg-gray-300">
                    <span className="md:hidden">&nbsp;</span>
                    <span className="text-2xl hidden md:block">
                      <BiCart />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilteredProductsLoader;
