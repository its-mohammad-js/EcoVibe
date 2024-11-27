import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeFilterReducer as setFilter } from "src/reducers/filters/filterSlice";
import { queryToFilterObject } from "constants";
import ProductGrid from "./components/ProductGrid";
import { FaFilter, FaSearch, FaSortAmountDown } from "react-icons/fa";
import SortMenu from "./components/Filters/SortMenu";
import useDisableScroll from "../../../common/hooks/UseDisableScroll";
import FiltersMenu from "./components/Filters/FiltersMenu";

function ExploreProducts() {
  const [menuIsOpen, setMenuIsOpen] = useState(false); // filters menu state (open close functionality on mobile)
  useDisableScroll(480, !menuIsOpen); // disable screen scroll on filters menu open
  const selectedFilters = useSelector((state) => state.filters); // selected filters
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = useParams();

  // change filters on each action
  const changeFilterHandler = (payload) => {
    // dispatch actions
    dispatch(setFilter(payload));
    // clear query
    if (queryParams.filters && queryParams.filters.length) {
      navigate("/EcoVibe/Explore-Products/");
    }
  };

  // effect query params to products rquest
  useEffect(() => {
    // destructure qeury to key / value array
    const query = queryToFilterObject(queryParams);
    // dispatch filters
    if (query.length) {
      query.forEach((filter) => {
        dispatch(setFilter(filter));
      });
    } else if (!query?.length) {
      // clear filters
      dispatch(setFilter({ type: "clear" }));
    }
    // clear filters
    return () => {
      dispatch(setFilter({ type: "clear" }));
    };
  }, [queryParams]);

  return (
    <>
      <div className="mx-auto min-h-screen 2xl:max-w-screen-2xl flex flex-col md:gap-y-2 md:px-2">
        {/* header (filters) */}
        <div className="w-full relative md:mt-2">
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
            {/* sort menu */}
            <SortMenu changeFilterHandler={changeFilterHandler} />
            {/* most / least relevant & open filters menu button  */}
            <div className="row-start-2 md:row-auto md:col-span-1">
              {/* filter menu button */}
              <button
                onClick={() => setMenuIsOpen(true)}
                className="bg-gray-50 border-2 w-full border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-x-2 md:hidden"
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
            {/* filters menu */}
            <FiltersMenu
              changeFilterHandler={changeFilterHandler}
              menuIsOpen={menuIsOpen}
              onCloseMenu={() => setMenuIsOpen(false)}
            />
          </div>
        </div>
        {/* filtered product */}
        <ProductGrid />
      </div>
    </>
  );
}

export default ExploreProducts;
