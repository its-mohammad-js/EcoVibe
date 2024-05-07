import { useRef } from "react";
import { filterProducts } from "../../helpers/filterPorducts";
import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductsContainerLoader from "../Loaders/ProductsContainerLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../redux/auth/regularUsers/regluarUsersSlice";
import { isInArray, toggleElementInArray } from "../../helpers/constants";

function ProductsContainer({ isLoading, products, filterObject, title }) {
  // filter products data by trend tag
  const filteredPrdocts = filterProducts(products, filterObject);
  // ref to products container
  const containerRef = useRef();
  const navigate = useNavigate();
  // get user wish list
  const { wishlist } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  // navigate to explore page on product click event
  function navigateToExplore() {
    // get filter key
    const filterKey = Object.keys(filterObject)[0];
    // get filter value
    const filterVal = Object.values(filterObject).toLocaleString();
    console.log("pl");
    // navigate to explore page with query
    navigate(`/EcoVibe/Explore-Products/${filterKey}=${filterVal}`);
    // scroll up :)
    window.scrollTo(0, 0);
  }

  // add / remove product from wish list
  function toggleWishList(productId) {
    // update wish list
    const updatedWishList = toggleElementInArray(wishlist, productId);
    // update wish list with new values
    dispatch(updateUserData({ data: updatedWishList, field: "wishlist" }));
  }

  if (isLoading) {
    return <ProductsContainerLoader title={title} />;
  }

  if (!isLoading && products.length)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8 relative bg-inherit">
        {/* title */}
        <div className="w-full px-2 my-1 md:px-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold  md:text-3xl">{title}</h2>

          <button
            onClick={navigateToExplore}
            className="flex items-center gap-x-1 md:gap-x-1.5 md:text-lg text-sm text-gray-500 hover:text-accent-300 transition-all cursor-pointer"
          >
            View All <FaArrowRight className="text-xs md:text-base" />
          </button>
        </div>
        {/* products container */}
        <div
          ref={containerRef}
          className="w-full overflow-auto scroll-smooth hidden-scroll-bar md:px-4"
        >
          {/* right scroll button */}
          <div className="h-72 bg-gradient-to-l from-gray-50/0 transition-all duration-500 to-gray-50 w-16 md:w-24 absolute z-10 left-0 top-9 flex items-center justify-start opacity-50 hover:opacity-100">
            <button
              onClick={() => {
                // scroll the container to left
                containerRef.current.scrollLeft -= 200;
              }}
              className="text-lg md:text-2xl p-2 bg-gray-100 shadow-2xl rounded-md mx-2"
            >
              <FaArrowLeft />
            </button>
          </div>
          {/* products wrapper */}
          <div className="inline-flex items-center gap-x-8 px-4 py-2">
            {filteredPrdocts.map((product) => (
              <ProductCard
                key={product.id}
                productData={product}
                onProductLike={toggleWishList}
                isLiked={isInArray(wishlist, product.id)}
              />
            ))}
          </div>

          {/* left scroll button */}
          <div className="h-72 bg-gradient-to-r from-gray-50/0 transition-all duration-500 to-gray-50 w-16 md:w-24 absolute z-10 right-0 top-8 flex items-center justify-end opacity-50 hover:opacity-100">
            <button
              onClick={() => {
                // scroll the container to right
                containerRef.current.scrollLeft += 200;
              }}
              className="text-lg md:text-2xl p-2 bg-gray-100 shadow-2xl rounded-md mx-2"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
}

export default ProductsContainer;
