import { useState } from "react";
import OrderBox from "../OrderBox";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateAverage,
  checkUserAuthentication,
  isInArray,
  toggleElementInArray,
} from "helpers";
import { useNavigate } from "react-router-dom";
import { updateUserData } from "authActions/updateUserData";
import toast from "react-hot-toast";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { FaArrowLeft, FaStar } from "react-icons/fa";

function ProductDescription() {
  const { data: productData } = useSelector((state) => state.products); // product data
  const {
    Name,
    Stars,
    Category,
    Options,
    Description,
    SellerEmail,
    SellerName,
    SellerProfile,
    SellerId,
    id: productId,
  } = productData[0] || {}; // destructure product data
  const { auth_status, wishlist, loading } = useSelector(
    (state) => state.userData
  ); // current user data
  const [content, setContent] = useState("description"); // description / seller info state
  // necessary hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // add / remove product from wish list
  function toggleWishList() {
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

  return (
    <div className="xl:w-3/5 px-3 py-1.5 flex flex-col gap-y-4">
      {/* summary details & wish list btn */}
      <div className="flex flex-col gap-1">
        {/* title */}
        <h4 className="line-clamp-2 text-3xl font-bold">{Name}</h4>
        <div className="w-full flex items-center gap-4 my-2 flex-wrap">
          <div className="flex items-end gap-1">
            <p className="text-gray-600">Category:</p>
            <p className="font-semibold">{Category}</p>
          </div>
          {Stars && (
            <div className="flex gap-1">
              <p className="text-amber-300 text-xl">
                <FaStar />
              </p>

              <p className="text-gray-600">
                {calculateAverage(Stars)} ({Stars?.length} rates)
              </p>
            </div>
          )}
          <button
            disabled={loading}
            onClick={() => toggleWishList()}
            className="flex items-start gap-1 font-bold group disabled:animate-pulse"
          >
            <p className="text-xl text-red-500">
              {!isInArray(wishlist, productId) ? (
                <TbHeart />
              ) : (
                <TbHeartFilled />
              )}
            </p>
            <p>
              {!isInArray(wishlist, productId)
                ? "Add To Wishlist"
                : "Remove From Wishlist"}
            </p>
          </button>
        </div>
      </div>
      {/* order box */}
      <div className="">
        <OrderBox Options={Options} productData={productData[0]} />
      </div>
      {/* description & seller info */}
      <div className="">
        {/* header (switcher) */}
        <div className="border-b flex items-center gap-2">
          <button
            onClick={() => setContent("description")}
            className={`${
              content === "description" && "text-gray-950"
            } text-xl font-bold text-gray-600 px-4 py-2 hover:text-gray-950 transition-all`}
          >
            Description
          </button>
          <button
            onClick={() => setContent("seller")}
            className={`${
              content === "seller" && "text-gray-950"
            } text-xl font-bold text-gray-600 px-4 py-2 hover:text-gray-950 transition-all`}
          >
            Seller Information
          </button>
        </div>
        {/* main content */}
        {content === "description" ? (
          <div className="px-2 py-1.5">
            <p className="text-pretty line-clamp-[10] xl:line-clamp-[15]">
              {Description}
            </p>
          </div>
        ) : (
          <div className="">
            <div className="px-4 py-2 flex items-center gap-2 h-32">
              <div className="size-24 xl:size-28">
                <img
                  src={SellerProfile}
                  alt="seller-avatar"
                  className="size-full rounded-full gradient-background"
                />
              </div>
              <div className="flex flex-col px-2 gap-y-2.5">
                <h6
                  onClick={() => navigate(`/EcoVibe/seller/${SellerId}`)}
                  className="text-2xl line-clamp-1 flex items-center gap-1 font-bold cursor-pointer hover:text-gray-800 transition-all"
                >
                  {SellerName}
                  <FaArrowLeft className="text-sm rotate-[130deg]" />
                </h6>
                <p className="text-gray-600">{SellerEmail}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDescription;
