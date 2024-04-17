import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../redux/products/productsSlice";
import ProductCard from "../Products/ProductCard";
import { calculateAverage, fakeArray } from "../../helpers/constants";
import { FaStar } from "react-icons/fa";

function FilteredProducts() {
  // get selected filters
  const filters = useSelector((state) => state.filters);
  // get products data
  const { loading, data, error } = useSelector((state) => state.products);
  // redux dispatcher
  const dispatch = useDispatch();

  // get filtered products on each filter change
  useEffect(() => {
    dispatch(
      getFilteredProducts({
        category: filters.category[0],
        // problem with key word on app strategy
        tags: filters.tags,
        searchQuery: filters.searchQuery,
        // problem with key word on app strategy
        collections: filters.collections,
        // problem on key words in databse
        productTypes: filters.productTypes,
        // may have problem with property types
        priceRange: filters.priceRange,
        // problem on seller key words in filter function
        seller: filters.seller,
        // problem with key word on data base
        selectedOptions: filters.selectedOptions,
      })
    );
  }, [filters]);

  if (loading)
    return (
      <div className="ml-auto w-full md:w-[78%] h-96 md:h-screen max-h-[60rem]">
        <div
          id="wrapper"
          className="w-full md:w-[98%] h-full mx-auto bg-gray-50 rounded-md flex items-center justify-center"
        >
          <p className="text-3xl animate-pulse">loading ...</p>
        </div>
      </div>
    );

  if (data[0] && !loading)
    return (
      <div className="ml-auto w-full md:w-[78%] min-h-screen">
        <div
          id="wrapper"
          className="w-full md:w-[98%] h-full mx-auto rounded-md flex flex-col md:flex-row gap-y-2 sm:gap-y-3 md:gap-0 items-center flex-wrap px-1.5 py-2"
        >
          {/* product cards */}
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full cursor-pointer md:w-1/4 h-40 md:h-96 flex md:flex-col items-center border md:border-gray-800/10 hover:shadow-lg md:hover:shadow-2xl  hover:shadow-secondary-800/10 md:hover:shadow-secondary-950/65 transition-all md:duration-300"
              >
                <div className="h-full w-1/2 md:w-full bg-gradient-to-br from-amber-100 via-orange-200 to-primary-200 md:h-2/3 rounded-l-md md:rounded-none md:relative group">
                  {/* product description (only visible on desktop) */}
                  <div className="absolute inset-0 invisible flex items-center justify-center opacity-0 px-4 py-2 md:group-hover:visible md:group-hover:opacity-100 bg-primary-950/70 transition-all duration-700">
                    <p className="text-center text-transparent group-hover:text-gray-200 duration-300 line-clamp-5">
                      {item.Description}
                    </p>
                  </div>
                  <img
                    src={item.Thumbnail}
                    alt={item.Name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-full w-1/2 md:w-full md:h-1/3 rounded-r-md md:rounded-none flex flex-col items-start justify-evenly gap-2 px-4 py-2">
                  {/* main title */}
                  <h4 className="line-clamp-2 md:line-clamp-1 cursor-pointer text-lg font-semibold">
                    {item.Name}
                  </h4>
                  {/* secondary title */}
                  <div className="flex w-full justify-between items-center">
                    <p className="line-clamp-1 text-sm">{item.Category}</p>
                    <p className="flex items-center justify-center gap-x-0.5 font-semibold">
                      <span className="text-base">
                        {calculateAverage(item.Stars)}
                      </span>
                      <span className="mb-0.5 text-amber-300">
                        <FaStar />
                      </span>
                    </p>
                  </div>
                  {/* price */}
                  <div className="w-full text-end">
                    <p className="text-md font-medium">${item.Price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default FilteredProducts;
