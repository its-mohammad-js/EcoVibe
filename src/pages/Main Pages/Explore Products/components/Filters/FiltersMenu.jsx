import MultiThumbRange from "./MultiThumbRange";
import FilterOptionRow from "./FilterOptionRow";
import ProductOptions from "./ProductOptions";
import useMediaQuery from "hooks/useMediaQuery";
import { MdClose } from "react-icons/md";
import { FaFilter, FaTrash } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getFilters } from "./filterOptionsInfo";

function FiltersMenu({ changeFilterHandler, menuIsOpen, onCloseMenu }) {
  const selectedFilters = useSelector((state) => state.filters); // selected filters
  const isMobile = useMediaQuery({ maxWidth: 768 }); // detect screen size
  // filter row's data
  const filterOptionRows = getFilters(selectedFilters.category.toString());

  return (
    <div
      className={`${
        menuIsOpen || !isMobile ? "visible opacity-100" : "invisible opacity-0"
      } fixed md:absolute md:shadow-lg md:top-20 md:mt-6 inset-0 md:inset-auto md:w-[20%] md:h-[90vh] md:max-h-[40rem] z-40 transition-all duration-300`}
    >
      {/* filters menu */}
      <div
        className={`${
          menuIsOpen || !isMobile
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-96 opacity-0"
        } absolute h-full w-full bg-gray-100 md:rounded-lg z-10 transition-all duration-500 px-4 py-4 md:px-1 flex flex-col justify-between gap-y-5`}
      >
        {/* header & clear filters action button */}
        <div className="w-full flex items-center justify-between md:px-1.5">
          <h4 className="text-3xl font-bold hidden md:inline">Filter's</h4>

          <button onClick={() => onCloseMenu()} className="text-3xl md:hidden">
            <MdClose />
          </button>

          <button
            onClick={() => changeFilterHandler({ type: "clear" })}
            className="text-2xl text-red-400 flex items-center justify-center group"
          >
            <FaTrash />
          </button>
        </div>

        {/* filter options */}
        <div className="w-full flex flex-col gap-y-4 flex-1 max-h-full overflow-auto hidden-scroll-bar">
          {/* price range */}
          <div>
            <h4 className="text-2xl font-bold flex items-center">
              <span>
                <BiDollar />
              </span>
              <span>Price Range :</span>
            </h4>
            <div className="flex flex-col px-2 py-2 gap-y-4">
              <div className="flex items-center justify-between px-2 text-lg font-semibold">
                <p>Min: ${selectedFilters.priceRange.min}</p>
                <p>Max: ${selectedFilters.priceRange.max}</p>
              </div>
              {/* duble thumb range input */}
              <div className="mx-auto">
                <MultiThumbRange
                  min={0}
                  max={1000}
                  onChange={(e) => {
                    changeFilterHandler({ type: "priceRange", payload: e });
                  }}
                />
              </div>
            </div>
          </div>
          {/* main filter options (category,product types,collection,tags,seller) */}
          <div>
            <h4 className="text-2xl font-bold flex items-center gap-x-1.5 my-2">
              <span className="text-xl">
                <FaFilter />
              </span>
              <span>Main Filters :</span>
            </h4>
            <div className="flex flex-col gap-y-4">
              {filterOptionRows.map(
                ({ filterKey, filterOptions, title }, index) => (
                  <FilterOptionRow
                    key={index}
                    title={title}
                    filterKey={filterKey}
                    filterOptions={filterOptions}
                    changeFilterHandler={changeFilterHandler}
                  />
                )
              )}
            </div>
          </div>
          {/* product options filter */}
          <ProductOptions onSelectOption={changeFilterHandler} />
        </div>
        {/* close modal button (only on mobile screens) */}
        <button
          onClick={() => onCloseMenu()}
          className="px-4 py-2 md:hidden bg-primary-500 hover:bg-transparent border-2 border-transparent hover:border-primary-950 hover:text-primary-950 transition-all duration-300 rounded-md text-lg text-white font-semibold"
        >
          Show Items
        </button>
      </div>
    </div>
  );
}

export default FiltersMenu;
