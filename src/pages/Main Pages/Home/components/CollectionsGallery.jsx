import { BiHeart } from "react-icons/bi";
import { filterProducts } from "/src/common/utils/filterPorducts";
import { FaHeart } from "react-icons/fa";
import ReactStars from "react-stars";
import { calculateAverage, isInArray, toggleElementInArray } from "helpers";
import CollectionGalleryLoader from "UI/Loaders/CollectionGalleryLoader";
import SimpleBanner from "./SimpleBanner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "authActions/updateUserData";
import toast from "react-hot-toast";
import { checkUserAuthentication } from "helpers";
import { generateId } from "../../../../common/utils/constants/helpers";

function CollectionsGallery({ products, isLoading }) {
  // get summer collection products
  const summerCollection = filterProducts(products, {
    collections: ["summer"],
  });
  // current user data
  const { wishlist, loading, auth_status } = useSelector(
    (state) => state.userData
  );
  const dispatch = useDispatch();

  // add / remove product from wish list
  function toggleWishList(productId) {
    try {
      checkUserAuthentication(auth_status);
      // update wish list
      const updatedWishList = toggleElementInArray(wishlist, productId);
      // update wish list with new values
      dispatch(updateUserData({ data: updatedWishList, field: "wishlist" }));
    } catch (error) {
      toast.remove();
      toast.error(error?.message);
    }
  }

  // loading screen
  if (isLoading) return <CollectionGalleryLoader />;

  // return when all selected products are fetched
  if (summerCollection.length >= 4 && !isLoading)
    return (
      <>
        <div className="mx-auto 2xl:max-w-screen-2xl mt-6 bg-gray-100 py-4 lg:py-6">
          {/* title */}
          <h2 className="px-2 md:px-3 text-2xl font-bold my-1 md:text-3xl cursor-pointer hover:text-accent-300 w-fit transition-all">
            SPRING/SUMMER 2024
          </h2>
          {/* Gallery Wrapper */}
          <div
            id="wrapper"
            className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3 items-center px-2 py-1 lg:px-4 lg:py-2 lg:h-[450px]"
          >
            {summerCollection.map((product, index) => {
              if (index <= 3)
                return (
                  <CustomProductCard
                    key={index}
                    isLoading={loading}
                    onProductLike={toggleWishList}
                    isLiked={isInArray(wishlist, product)}
                    product={product}
                  />
                );
            })}
          </div>
        </div>
        {/* offer banner (only visible on moblie) */}
        <SimpleBanner
          title={"Trending Products"}
          path="/EcoVibe/Explore-products/tags=trend"
        />
      </>
    );
}

export default CollectionsGallery;

const CustomProductCard = ({
  product,
  minimal,
  onProductLike,
  isLiked,
  isLoading,
}) => {
  // get product colors from product options
  const productColors = product?.Options?.filter(
    (opt) => opt.title.toLowerCase() === "color"
  );
  const navigate = useNavigate(); // navigate hook

  return (
    <div className="w-full h-80 lg:h-96 bg-gray-300/35 rounded-xl first-of-type:basis-4/12 last-of-type:basis-4/12 basis-1/5">
      <div className="w-full h-3/5 relative">
        {/* product thumbnail */}
        <img
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant",
            });
            navigate(`/EcoVibe/Products/${product.id}`);
          }}
          loading="lazy"
          src={product.Thumbnail}
          alt={product.Name}
          className="w-full h-full rounded-t-md object-cover cursor-pointer"
        />
        {/* wish list btn */}
        <button
          disabled={isLoading}
          onClick={() => {
            onProductLike(product.id);
          }}
          className="absolute top-2 right-2 text-xl md:text-2xl bg-gray-50/60 p-1.5 hover:scale-110 transition-all duration-300 rounded-full group disabled:opacity-90 disabled:cursor-progress"
        >
          <BiHeart className={`${isLiked && "!hidden"} group-hover:hidden`} />
          <FaHeart
            className={`${
              isLiked && "!block text-red-600"
            } hidden group-hover:block group-hover:text-red-600 transition-all`}
          />
        </button>
      </div>
      {/* product details */}
      <div className="flex flex-col items-start h-2/5 justify-between px-4 py-2">
        {/* summary info */}
        <div>
          <span className="text-xs my-0.5">{product.Tags[0]}</span>
          <h2
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "instant",
              });
              navigate(`/EcoVibe/Products/${product.id}`);
            }}
            className="font-bold hover:text-primary-600 transition-all cursor-pointer"
          >
            {product.Name}
          </h2>
          {/* product options */}
          <div
            className={`${
              minimal && "hidden"
            } flex items-center justify-center gap-x-2 mt-2`}
          >
            {productColors.map((color, index) =>
              color.options.map((opt) => (
                <span
                  style={{ backgroundColor: opt }}
                  className="p-2 md:p-3 rounded-full border border-gray-400 hover:border-gray-800 transition-all"
                  key={generateId(index)}
                ></span>
              ))
            )}
            <span className="text-sm ml-0.5">+5 more ...</span>
          </div>
        </div>
        {/* price & rates */}
        <p className="mt-1 font-bold flex items-center w-full justify-between">
          <span>${product.Price}</span>
          <div>
            <ReactStars
              count={5}
              value={calculateAverage(product.Stars)}
              size={minimal ? 12 : 18}
              color2={"#ffd700"}
              edit={false}
            />
          </div>
        </p>
      </div>
    </div>
  );
};
