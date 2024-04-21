import { useState } from "react";
import { BiDollar, BiSort } from "react-icons/bi";
import {
  FaCheck,
  FaFilter,
  FaInfoCircle,
  FaSearch,
  FaSortAmountDown,
  FaTrash,
} from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { MdClose } from "react-icons/md";
import {
  supportedSortOptions,
  supportedCategories,
  getCategoryData,
} from "../../helpers/constants";
import FilterOptionRow from "./FilterOptionRow";
import { getProductOption } from "../../helpers/productOptions";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterReducer as setFilter } from "src/redux/filters/filterSlice";
import MultiThumbRange from "./MultiThumbRange";
import { useNavigate, useParams } from "react-router-dom";

function FilterProduct() {
  // check screen size of user device
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // get selected filters from redux
  const selectedFilters = useSelector((state) => state.filters);
  //  dispatch action's
  const dispatch = useDispatch();
  // state of modals
  const [menuIsOpen, setMenuIsOpen] = useState({
    sort: false,
    filters: false,
  });
  const searchParams = useParams();
  const navigate = useNavigate();

  // change filters on each action
  const changeFilterHandler = (payload) => {
    // dispatch actions
    dispatch(setFilter(payload));
    // clear query
    if (searchParams.filters && searchParams.filters.length) {
      navigate("/EcoVibe/Explore-Products/");
    }
  };

  // get category data
  const { collections, productTypes } = getCategoryData(
    selectedFilters.category.toString()
  );
  // get option's of specific product
  const productOptions = getProductOption(selectedFilters.productTypes[0]);
  // filter row's data
  const filterOptionRows = [
    {
      title: "Categories",
      filterKey: "category",
      filterOptions: supportedCategories,
    },
    {
      title: "Product Type",
      filterKey: "productTypes",
      filterOptions: productTypes,
    },
    {
      title: "Collection's",
      filterKey: "collections",
      filterOptions: collections,
    },
    {
      title: "Trend Tag's",
      filterKey: "tags",
      filterOptions: [
        { title: "Popular" },
        { title: "Special" },
        { title: "Trend" },
        { title: "2024" },
        { title: "New Release" },
        { title: "Best Sell" },
        { title: "Coming Soon" },
        { title: "Featured" },
      ],
    },
    {
      title: "Seller",
      filterKey: "seller",
      filterOptions: [{ title: "Eco Vibe" }, { title: "Other" }],
    },
  ];

  return (
    <div className="w-full relative md:mt-2">
      {/* sort menu & search input & filter grid/row button (filter option menu in mobile vision) */}
      <div
        id="wrapper"
        className="w-full md:h-20 grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-8 md:items-center md:grid-rows-1 md:gap-4 p-2.5 md:border border-gray-200 rounded-lg"
      >
        {/* search input */}
        <div className="col-span-2 md:col-span-6">
          <div className="md:w-11/12 md:mx-auto flex items-center rounded-lg border-2 border-gray-300 md:border-0 px-4 md:p-0">
            <button className="text-xl md:order-2 md:px-4 md:py-3 md:bg-primary-500 rounded-r-md md:text-white md:hover:bg-primary-600 transition-all">
              <FaSearch />
            </button>
            <input
              onChange={(e) =>
                changeFilterHandler({
                  payload: e.target.value,
                  type: "searchQuery",
                })
              }
              type="text"
              value={selectedFilters.searchQuery}
              placeholder="I'm Shopping For"
              className="bg-inherit w-full focus:outline-none px-4 py-2 rounded-md md:rounded-r-none md:border-2 md:border-r-0 border-gray-300 bg-gray-50"
            />
          </div>
        </div>
        {/* sort button & sort menu */}
        <div className="row-start-2 md:row-start-1 md:col-span-1 relative">
          {/* sort button */}
          <button
            onClick={() =>
              setMenuIsOpen((prev) => ({ ...prev, sort: !prev.sort }))
            }
            className="bg-gray-50 md:bg-transparent w-full border-2 border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-x-2 text-lg md:font-medium"
          >
            <span>{menuIsOpen.sort ? <MdClose /> : <BiSort />}</span>
            <span className="line-clamp-1">{selectedFilters.sortBy}</span>
          </button>
          {/* modal background (visible only in mobile screens) */}
          <div
            onClick={() => setMenuIsOpen((prev) => ({ ...prev, sort: false }))}
            className={`${
              !menuIsOpen.sort || !isMobile ? "hidden" : ""
            } fixed inset-0 bg-gray-950/65`}
          ></div>
          {/* sort menu */}
          <div
            className={`${
              menuIsOpen.sort
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-96 md:-translate-y-10 opacity-0 md:opacity-0"
            } fixed cursor-pointer md:absolute bottom-0 tooltip md:top-14 md:w-64 left-0 w-full h-96 md:h-56 bg-gray-200 rounded-t-2xl md:rounded-2xl z-50 transition-all duration-500 px-4 py-6 md:py-4 gap-y-4 md:gap-0 flex flex-col justify-between`}
          >
            <h6 className="text-3xl md:text-xl font-bold">Sort By</h6>
            <ul className="h-full flex flex-col justify-center gap-y-3 md:gap-y-1.5">
              {supportedSortOptions.map((sortOpt, index) => (
                <li
                  onClick={() =>
                    changeFilterHandler({
                      payload: sortOpt.value,
                      type: "sortBy",
                    })
                  }
                  key={index}
                  className="px-2 py-1 md:p-0 w-full h-1/5 flex items-center justify-between text-lg md:text-base font-semibold transition-all"
                >
                  <span>{sortOpt.title}</span>
                  <p
                    className={`${
                      selectedFilters.sortBy === sortOpt.value
                        ? "p-2 bg-primary-950"
                        : "p-3 [&>span]:hidden bg-gray-300"
                    } text-primary-50  rounded-full text-xs transition-all duration-500`}
                  >
                    <span>
                      <FaCheck />
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setMenuIsOpen({ sort: false })}
              className="px-4 p-2 md:hidden bg-primary-600 border-2 border-transparent hover:text-primary-950 hover:bg-gray-200 hover:border-primary-950 rounded-md transition-all text-primary-50 text-lg"
            >
              Apply Changes
            </button>
          </div>
        </div>
        {/* most / least relevant && filter button  */}
        <div className="row-start-2 md:row-auto md:col-span-1">
          {/* filter menu button */}
          <button
            onClick={() =>
              setMenuIsOpen((prev) => ({ ...prev, filters: true }))
            }
            className="bg-gray-50 border-2 w-full border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-x-2 text-lg md:hidden"
          >
            <span>
              <FaFilter />
            </span>
            <span>Filter Menu</span>
          </button>
          {/* most / least relevant btn */}
          <div className="hidden md:flex h-full items-center justify-end gap-x-6">
            <button
              onClick={() =>
                changeFilterHandler({
                  type: "relevant",
                  payload: selectedFilters.relevant,
                })
              }
              className={`${
                selectedFilters.relevant === "most"
                  ? "bg-primary-500 text-white rotate-180"
                  : "bg-primary-100 text-primary-500"
              } text-3xl px-2 py-1.5 rounded-md transition-all`}
            >
              <FaSortAmountDown />
            </button>
          </div>
        </div>

        {/* filter menu */}
        <div
          className={`${
            menuIsOpen.filters || !isMobile
              ? "visible opacity-100"
              : "invisible opacity-0"
          } fixed md:absolute md:shadow-lg md:top-20 md:mt-6 inset-0 md:inset-auto md:w-[20%] md:h-[90vh] md:max-h-[40rem] z-40 transition-all duration-300`}
        >
          {/* filters menu */}
          <div
            className={`${
              menuIsOpen.filters || !isMobile
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-96 opacity-0"
            } absolute h-full w-full bg-gray-100 md:rounded-lg z-10 transition-all duration-500 px-4 py-4 md:px-1 flex flex-col justify-between gap-y-5`}
          >
            {/* header */}
            <div className="w-full flex items-center justify-between md:px-1.5">
              <h4 className="text-3xl font-bold hidden md:inline">Filter's</h4>

              <button
                onClick={() => setMenuIsOpen({ filters: false })}
                className="text-3xl md:hidden"
              >
                <MdClose />
              </button>

              <button
                onClick={() => changeFilterHandler({ type: "clear" })}
                className="text-2xl text-red-400 focus:animate-bounce flex items-center justify-center group"
              >
                <span className="translate-x-10 hidden md:inline text-xl group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">
                  Clear
                </span>
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
              {/* main filter options (category,product types,collection,tags,) */}
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
                        isMobile={isMobile}
                        key={index}
                        title={title}
                        filterKey={filterKey}
                        filterOptions={filterOptions}
                        selectedFilters={selectedFilters}
                        changeFilterHandler={changeFilterHandler}
                      />
                    )
                  )}
                </div>
              </div>
              {/* product options filter */}
              <div>
                <h4 className="text-2xl font-bold flex items-center my-2">
                  <span>
                    <BiSort />
                  </span>
                  <span>Product Options :</span>
                </h4>
                <div className="flex flex-col gap-y-4">
                  {selectedFilters.productTypes.length === 1 &&
                  productOptions.length ? (
                    productOptions.map(({ title, options }, index) => (
                      <FilterOptionRow
                        isMobile={isMobile}
                        key={index}
                        title={title}
                        filterKey={"selectedOptions"}
                        filterOptions={options}
                        selectedFilters={selectedFilters}
                        changeFilterHandler={changeFilterHandler}
                        isOption={true}
                      />
                    ))
                  ) : (
                    <div className="w-full h-10 gap-x-1.5 font-medium flex items-center justify-center">
                      <span className="mb-0.5">
                        <FaInfoCircle />
                      </span>
                      <span className="text-sm">
                        Please Select A Specific Product Type !
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* close modal button (only on mobile screens) */}
            <button className="px-4 py-2 md:hidden bg-primary-500 hover:bg-transparent border-2 border-transparent hover:border-primary-950 hover:text-primary-950 transition-all duration-300 rounded-md text-lg text-white font-semibold">
              Show Items
            </button>
          </div>

          {/* menu background (only visible on mobile screens) */}
          <div
            onClick={() => {
              setMenuIsOpen({ sort: false, filters: false });
            }}
            className="w-full h-full bg-gray-950/50 -z-10 md:hidden"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
