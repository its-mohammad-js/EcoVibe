import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "src/reducers/products/productsSlice";
import { errorIconUrl, paginateElements } from "constants";
import PaginationButtons from "./PaginationButtons";
import FilteredProductsLoader from "UI/Loaders/FilteredProductsLoader";
import ProductCard from "./ProductCard";
import { debounce } from "lodash";

function ProductGrid() {
  // get selected filters
  const filters = useSelector((state) => state.filters);
  // get products data
  const { loading, data, error } = useSelector((state) => state.products);
  // paginated product
  const paginatedProduct = paginateElements(data, 8);
  // necessary hooks
  const dispatch = useDispatch();

  const debouncedFetchProducts = useCallback(
    debounce((filters) => {
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
    }, 300),
    [dispatch]
  );

  // get filtered products on each filter change
  useEffect(() => {
    debouncedFetchProducts(filters);
    return () => debouncedFetchProducts.cancel();
  }, [filters]);

  if (loading) return <FilteredProductsLoader />;

  if (error.length && !loading) {
    // diplay loading proccess
    return (
      <>
        <div className="ml-auto min-h-screen w-full md:w-[78%] relative flex flex-col items-center justify-center">
          <img
            src={errorIconUrl}
            alt="error icon"
            className="w-11/12 h-96 md:object-contain object-cover"
          />
          <span className="text-center text-gray-800 text-lg font-semibold">
            {error == 420
              ? "Uh oh! We can't seem to connect. Try refreshing the page."
              : "No products found!, Please search something else or clear filters"}
          </span>

          {error == 420 && (
            <button
              onClick={() => fetchProducts()}
              className="px-4 py-2 my-2 bg-primary-500 text-gray-50 rounded-md border-2 border-primary-500 hover:bg-transparent hover:text-primary-500 transition-all"
            >
              Try Again
            </button>
          )}
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
          className="w-full lg:min-h-screen md:w-[98%] h-full mx-auto rounded-md grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 px-1.5 py-2"
        >
          {/* product cards */}
          {paginatedProduct[filters.page].items.map((item, index) => (
            <ProductCard key={index} productData={item} />
          ))}
        </div>
        {/* page buttons */}
        {data.length >= 8 && (
          <PaginationButtons productsData={paginatedProduct} />
        )}
      </div>
    );
}

export default ProductGrid;
