import { useEffect, useState } from "react";
import {
  checkUserAuthentication,
  isInArray,
  toggleElementInArray,
} from "../../../../../common/utils/constants/helpers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserData } from "../../../../../reducers/auth/authActions/updateUserData";
import toast from "react-hot-toast";
import { FaEye, FaHeart } from "react-icons/fa";

function ProductThumbnail({ productData }) {
  const { wishlist, loading, auth_status } = useSelector(
    (state) => state.userData
  ); // current userdata
  const [summaryDesc, setSummaryDesc] = useState(false); // display summary product info
  const isLiked = isInArray(wishlist, productData.id); // check product is liked
  const [lastAction, setAction] = useState(null);
  // necessary hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) setAction(null);
  }, [loading]);

  // add / remove product from wish list
  function toggleWishList(productId) {
    try {
      checkUserAuthentication(auth_status);
      setAction(productId);
      // update wish list
      const updatedWishList = toggleElementInArray(wishlist, productId);
      // update wish list with new values
      dispatch(updateUserData({ data: updatedWishList, field: "wishlist" }));
    } catch (error) {
      toast.remove();
      toast.error(error?.message);
    }
  }

  return (
    <div className="w-full h-1/2 md:h-2/3 relative bg-gradient-to-br from-primary-100 via-gray-200 to-primary-500/50 rounded-t-md md:rounded-none">
      {/* product image */}
      <img
        onClick={() => {
          window.scrollTo(0, 0);
          navigate(`/EcoVibe/Products/${productData.id}`);
        }}
        src={productData.Thumbnail}
        alt={productData.Name}
        className="w-full h-full object-cover rounded-t-md md:rounded-none"
      />
      {/* quick access buttons */}
      <div className="absolute top-0 right-0 rounded-t-md md:rounded-none flex flex-col gap-y-2 px-2 py-1 md:px-3 md:py-1.5 items-end">
        <button
          onClick={() => toggleWishList(productData.id)}
          disabled={loading && lastAction === productData.id}
          className={`${
            isLiked && "!text-red-600 hover:scale-110 disabled:!text-red-700"
          } p-1.5 md:p-2 rounded-full bg-gray-50 text-gray-300 hover:text-red-500 transition-all disabled:animate-pulse disabled:cursor-wait disabled:bg-red-500`}
        >
          <FaHeart className="md:text-xl" />
        </button>
        <button
          onClick={() => setSummaryDesc(true)}
          className="p-1.5 peer md:p-2 rounded-full bg-gray-50 text-gray-300 hover:text-gray-950 focus:text-gray-950 transition-all hidden md:block"
        >
          <FaEye className="md:text-xl" />
        </button>
      </div>
      {/* summary description */}
      <div
        onClick={() => setSummaryDesc(false)}
        className={`${
          summaryDesc ? "opacity-100 visible" : "invisible  opacity-0"
        } absolute inset-0 select-none bg-gray-950/80 transition-all duration-500 hidden md:flex flex-col items-center justify-center px-4 py-2`}
      >
        <p className="text-gray-50 text-center line-clamp-6">
          {productData.Description}
        </p>
      </div>
    </div>
  );
}

export default ProductThumbnail;
