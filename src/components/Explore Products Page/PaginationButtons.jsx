import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterReducer as setFilter } from "src/redux/filters/filterSlice";

function PaginationButtons({ productsData }) {
  // get selected filters
  const filters = useSelector((state) => state.filters);
  // redux dispatcher
  const dispatch = useDispatch();
  const totalPages = productsData.length;
  // calculate button count
  const buttonCount = Math.min(4, totalPages);
  // calculate start index & end buttons index
  const startIndex = Math.max(
    0,
    filters.page - Math.floor((buttonCount - 2) / 2)
  );
  const endIndex = Math.min(totalPages, startIndex + buttonCount);

  return (
    <div className="w-fit mx-auto mt-6 flex justify-center items-center gap-x-4 px-4 py-3 shadow-lg shadow-gray-950/15 rounded-lg">
      {/* prev page btn */}
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          dispatch(setFilter({ type: "prevPage" }));
        }}
        disabled={filters.page === 0}
        className="px-4 py-2 text-sm disabled:opacity-55 disabled:shadow-none disabled:cursor-not-allowed bg-gray-100 rounded-md shadow-lg shadow-gray-200 hover:shadow-gray-500 transition-all text-gray-800 flex items-center gap-x-2.5"
      >
        <FaArrowLeft />
        <span className="hidden md:inline">Previous</span>
      </button>
      {/* page number buttons */}
      <div className="flex items-center gap-x-2">
        {productsData.map(
          (p, index) =>
            index > startIndex - 1 &&
            index < endIndex && (
              <button
                key={index}
                onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(setFilter({ type: "changePage", payload: index }));
                }}
                className={`${
                  filters.page === index &&
                  "!bg-primary-400 text-white hover:!bg-gray-300/90 hover:text-gray-900"
                } px-3 py-1.5 text-sm font-semibold bg-gray-200/70 rounded-md hover:bg-primary-400 hover:text-white transition-all text-center duration-500`}
              >
                <span>{index + 1}</span>
              </button>
            )
        )}
      </div>
      {/* next page btn */}
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          dispatch(setFilter({ type: "nextPage" }));
        }}
        disabled={filters.page === productsData.length - 1}
        className="px-4 py-2 text-sm disabled:opacity-55 disabled:shadow-none disabled:cursor-not-allowed bg-gray-200 rounded-md shadow-lg shadow-gray-200 hover:shadow-gray-500 transition-all text-gray-800 flex items-center gap-x-2.5"
      >
        <span className="hidden md:inline">Next</span>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default PaginationButtons;
