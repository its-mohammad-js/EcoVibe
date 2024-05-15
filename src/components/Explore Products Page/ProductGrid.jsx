import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../redux/products/productsSlice";
import {
  calculateAverage,
  errorIconUrl,
  generateId,
  isInArray,
  paginateElements,
  toggleElementInArray,
} from "../../helpers/constants";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import PaginationButtons from "./PaginationButtons";
import { BiCart } from "react-icons/bi";
import FilteredProductsLoader from "../Loaders/FilteredProductsLoader";
import { useNavigate } from "react-router-dom";
import { updateUserData } from "../../redux/auth/regularUsers/regluarUsersSlice";
import { BsCartCheck } from "react-icons/bs";
import ProductCard from "./ProductCard";

function ProductGrid() {
  // get selected filters
  const filters = useSelector((state) => state.filters);
  // get products data
  const { loading, data, error } = useSelector((state) => state.products);
  // paginated product
  const paginatedProduct = paginateElements(data, 8);
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

  // diplay loading proccess
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
          {paginatedProduct[filters.page].products.map((item, index) => (
            <ProductCard key={index} productData={item} />
          ))}
        </div>
        {/* page buttons */}
        <PaginationButtons productsData={paginatedProduct} />
      </div>
    );
}

export default ProductGrid;
