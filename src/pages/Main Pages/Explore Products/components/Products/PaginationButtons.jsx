import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterReducer as setFilter } from "src/reducers/filters/filterSlice";

function PaginationButtons({ productsData }) {
  // get selected filters
  const { page } = useSelector((state) => state.filters);
  // redux dispatcher
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="w-fit mx-auto mt-6 flex justify-center items-center gap-x-4 px-4 py-3 shadow-lg shadow-gray-950/15 rounded-lg">
      {/* prev page btn */}
      <button
        onClick={() => {
          dispatch(setFilter({ type: "prevPage" }));
        }}
        disabled={page === 0}
        className="px-4 py-2 text-sm disabled:opacity-55 disabled:shadow-none disabled:cursor-not-allowed bg-gray-100 rounded-md shadow-lg shadow-gray-200 hover:shadow-gray-500 transition-all text-gray-800 flex items-center gap-x-2.5"
      >
        <FaArrowLeft />
        <span className="hidden md:inline">Previous</span>
      </button>
      {/* page number buttons */}
      <div className="flex items-center gap-x-2">
        {productsData.map(
          (p, index) =>
            index > page - 3 &&
            index <= page + 1 && (
              <button
                key={index}
                onClick={() => {
                  dispatch(setFilter({ type: "changePage", payload: index }));
                }}
                className={`${
                  page === index &&
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
          dispatch(setFilter({ type: "nextPage" }));
        }}
        disabled={page === productsData.length - 1}
        className="px-4 py-2 text-sm disabled:opacity-55 disabled:shadow-none disabled:cursor-not-allowed bg-gray-200 rounded-md shadow-lg shadow-gray-200 hover:shadow-gray-500 transition-all text-gray-800 flex items-center gap-x-2.5"
      >
        <span className="hidden md:inline">Next</span>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default PaginationButtons;
