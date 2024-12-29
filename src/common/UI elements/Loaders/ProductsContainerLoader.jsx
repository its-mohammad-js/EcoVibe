import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCardLoader from "./ProductCardLoader";
import { fakeArray } from "helpers";

function ProductsContainerLoader({ title }) {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl my-4 md:my-6 relative animate-pulse">
      {/* title */}
      <h2 className="px-2 text-2xl font-bold my-1 md:my-2 md:text-3xl">
        {title}
      </h2>
      {/* products container */}
      <div className="w-full overflow-auto scroll-smooth hidden-scroll-bar">
        {/* right scroll button */}
        <div className="h-72 bg-gradient-to-l from-gray-50/0 transition-all duration-500 to-gray-50 w-16 md:w-24 absolute z-10 left-0 top-9 flex items-center justify-start opacity-50">
          <button className="text-lg md:text-2xl p-2 bg-gray-100 shadow-2xl rounded-md mx-2">
            <FaArrowLeft />
          </button>
        </div>
        {/* products wrapper */}
        <div className="inline-flex items-center gap-x-8 px-4 py-2">
          {fakeArray(10).map((num, index) => (
            <ProductCardLoader key={index} />
          ))}
        </div>

        {/* left scroll button */}
        <div className="h-72 bg-gradient-to-r from-gray-50/0 transition-all duration-500 to-gray-50 w-16 md:w-24 absolute z-10 right-0 top-8 flex items-center justify-end opacity-50">
          <button className="text-lg md:text-2xl p-2 bg-gray-100 shadow-2xl rounded-md mx-2">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsContainerLoader;
