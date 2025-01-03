import { BiSearch } from "react-icons/bi";
import { fakeArray } from "helpers";

function ProductsTabLoader() {
  return (
    <div className="lg:flex gap-x-4 w-full">
      <div className="flex flex-col gap-y-2 flex-1">
        {/* search bar */}
        <div className="w-full px-2 xl:px-4 py-1">
          <div className="flex items-center justify-center bg-white rounded-md border border-gray-300 lg:h-14">
            <input
              type="text"
              className="outline-none px-2 flex-1 lg:w-full bg-transparent lg:text-lg"
              placeholder="search"
            />
            <button className="px-4 py-3 rounded-r-md bg-gray-400 text-gray-50 lg:py-4 lg:text-2xl">
              <BiSearch />
            </button>
          </div>
        </div>
        {/* products grid */}
        <div className="bg-white grid gap-4 grid-cols-1 px-4 py-2 lg:grid-cols-4 max-h-[80vh] overflow-auto styled-scroll-bar">
          {fakeArray(20).map((item, index) => (
            <div
              key={index}
              className="h-32 animate-pulse lg:h-64 xl:h-96 cursor-pointer flex lg:flex-col items-center gap-x-3 bg-gray-100 border border-gray-200 rounded-md px-2 py-1"
            >
              {/* item thumbnail */}
              <div className="h-full w-5/12 lg:w-full lg:max-h-[60%] bg-gray-200 rounded-md"></div>
              {/* item details */}
              <div className="w-6/12 lg:w-full flex flex-col justify-evenly h-full lg:max-h-[40%] xl:justify-evenly">
                <h4 className="w-4/5 h-4 bg-gray-500 rounded-md"></h4>
                <p className="w-1/3 h-2 bg-gray-400 rounded-md"></p>
                <p className="w-2/5 h-1 bg-gray-300 rounded-md"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsTabLoader;
