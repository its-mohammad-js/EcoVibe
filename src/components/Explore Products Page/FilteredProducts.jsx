import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../redux/products/productsSlice";
import {
  calculateAverage,
  errorIconUrl,
  paginateProducts,
} from "../../helpers/constants";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import PaginationButtons from "./PaginationButtons";
import { BiCart } from "react-icons/bi";
import FilteredProductsLoader from "../Loaders/FilteredProductsLoader";
import { useNavigate } from "react-router-dom";

function FilteredProducts() {
  // get selected filters
  const filters = useSelector((state) => state.filters);
  // get products data
  const { loading, data, error } = useSelector((state) => state.products);
  // paginated product
  const paginatedProduct = paginateProducts(data, 8);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get filtered products on each filter change
  useEffect(() => {
    dispatch(
      getFilteredProducts({
        category: filters.category[0],
        tags: filters.tags,
        searchQuery: filters.searchQuery,
        collections: filters.collections,
        productTypes: filters.productTypes,
        priceRange: filters.priceRange,
        seller: filters.seller,
        selectedOptions: filters.selectedOptions,
        sortBy: filters.sortBy,
        relevant: filters.relevant,
      })
    );
  }, [filters]);

  if (loading) return <FilteredProductsLoader />;

  if (error.length && !loading) {
    return (
      <>
        <div className="ml-auto min-h-screen w-full md:w-[78%] relative flex flex-col items-center justify-center">
          <img
            src={errorIconUrl}
            alt="error icon"
            className="w-11/12 h-96 md:object-contain object-cover"
          />
          <span className="text-center text-gray-800 text-lg font-semibold">
            {error}
          </span>
        </div>
      </>
    );
  }

  if (paginatedProduct.length && !loading)
    return (
      <div className="ml-auto w-full md:w-[78%] relative">
        {/* products grid */}
        <div
          id="products-wrapper"
          className="w-full min-h-screen md:w-[98%] h-full mx-auto rounded-md flex justify-between md:justify-start gap-y-4 gap-x-2 md:gap-0 flex-wrap px-1.5 py-2"
        >
          {/* product cards */}
          {paginatedProduct[filters.page].products.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[48%] md:w-1/4 md:border h-64 md:h-96 bg-gray-50 rounded-md md:rounded-none shadow-2xl shadow-gray-500/10 hover:shadow-gray-800 transition-all duration-500 group hover:z-10"
              >
                <div className="w-full h-1/2 md:h-2/3 relative bg-gradient-to-br from-primary-100 via-gray-200 to-primary-500/50 rounded-t-md md:rounded-none">
                  {/* quick access buttons */}
                  <div className="absolute inset-0 rounded-t-md md:rounded-none flex flex-col gap-y-2 px-2 py-1 md:px-3 md:py-1.5 items-end">
                    <button className="p-1.5 md:p-2 rounded-full bg-gray-50 text-gray-300 hover:text-red-500 transition-all">
                      <FaHeart className="md:text-xl" />
                    </button>
                    <button className="p-1.5 peer md:p-2 rounded-full bg-gray-50 text-gray-300 hover:text-gray-950 focus:text-gray-950 transition-all hidden md:block">
                      <FaEye className="md:text-xl" />
                    </button>

                    <div className="absolute inset-0 bg-gray-950/80 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible transition-all duration-500 hidden md:flex flex-col items-center justify-center px-4 py-2">
                      <p className="text-gray-50 text-center line-clamp-6">
                        {item.Description}
                      </p>
                    </div>
                  </div>
                  {/* product image */}
                  <img
                    src={item.Thumbnail}
                    alt={item.Name}
                    className="w-full h-full object-cover rounded-t-md md:rounded-none"
                  />
                </div>
                {/* product details */}
                <div className="w-full h-1/2 md:h-1/3 flex flex-col justify-evenly gap-y-4 px-2.5 py-1.5">
                  {/* product name */}
                  <h4
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/EcoVibe/Products/${item.id}`);
                    }}
                    className="line-clamp-1 cursor-pointer group-hover:text-primary-500 transition-all md:text-lg"
                  >
                    {item.Name}
                  </h4>
                  <div className="flex flex-col gap-y-2 md:flex-row md:items-center">
                    {/* price & stars */}
                    <div className="w-full flex md:flex-col md:items-start justify-between">
                      <p className="font-medium md:text-lg">${item.Price}</p>
                      <p className="flex items-center justify-center gap-x-0.5 md:gap-y-1">
                        <span className="text-base">
                          {calculateAverage(item.Stars)}
                        </span>
                        <span className="mb-0.5 text-amber-300">
                          <FaStar />
                        </span>
                      </p>
                    </div>
                    {/* show detail btn */}
                    <button className="px-2 py-1.5 text-sm rounded-md bg-primary-400 hover:bg-primary-700 transition-all text-white font-medium">
                      <span className="md:hidden">Show Detail</span>
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
        {/* page buttons */}
        <PaginationButtons productsData={paginatedProduct} />
      </div>
    );
}

export default FilteredProducts;

{
  /* <div
  key={index}
  className="w-full cursor-pointer md:w-1/4 h-40 md:h-96 flex md:flex-col items-center border md:border-gray-800/10 hover:shadow-lg md:hover:shadow-2xl  hover:shadow-secondary-800/10 md:hover:shadow-secondary-950/65 transition-all md:duration-300"
>
  <div className="h-full w-1/2 md:w-full bg-gradient-to-br from-amber-100 via-orange-200 to-primary-200 md:h-2/3 rounded-l-md md:rounded-none md:relative group">
   
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
  
    <h4 className="line-clamp-2 md:line-clamp-1 cursor-pointer text-lg font-semibold">
      {item.Name}
    </h4>

    <div className="flex w-full justify-between items-center">
      <p className="line-clamp-1 text-sm">{item.Category}</p>
      <p className="flex items-center justify-center gap-x-0.5 font-semibold">
        <span className="text-base">{calculateAverage(item.Stars)}</span>
        <span className="mb-0.5 text-amber-300">
          <FaStar />
        </span>
      </p>
    </div>
    
    <div className="w-full text-end">
      <p className="text-md font-medium">${item.Price}</p>
    </div>
  </div>
</div> */
}
