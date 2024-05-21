import { useDispatch, useSelector } from "react-redux";
import {
  calculateAverage,
  generateId,
  isInArray,
  toggleElementInArray,
} from "../../helpers/constants";
import { updateUserData } from "../../redux/auth/regularUsers/regluarUsersSlice";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { useEffect, useState } from "react";

function ProductCard({ productData }) {
  // get user wish list
  const { wishlist, loading, cartData } = useSelector(
    (state) => state.userData
  );
  // necessary hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // check product is liked
  const isLiked = isInArray(wishlist, productData.id);
  // check product is in cart
  const isInCart = cartData.find((order) => order.productId === productData.id);
  // ref to user actions (cart & wish list)
  const [{ likeRef, orderRef }, setActions] = useState({
    likeRef: "",
    orderRef: "",
  });

  // add / remove product from wish list
  function toggleWishList(productId) {
    // set like action ref to product id
    setActions((prev) => ({ ...prev, likeRef: productId }));
    // update wish list
    const updatedWishList = toggleElementInArray(wishlist, productId);
    // update wish list with new values
    dispatch(updateUserData({ data: updatedWishList, field: "wishlist" }));
  }

  // clear actions ref after any action
  useEffect(() => {
    // reset actions ref value
    if (!loading)
      setActions({
        likeRef: "",
        orderRef: "",
      });
  }, [loading]);

  // add product with default
  function addProductToCart({ Name, Thumbnail, id, Options, Price, Category }) {
    // set cart action ref to product id
    setActions((prev) => ({ ...prev, orderRef: id }));
    // get default options of product
    let defaultOptions = [];
    Options.forEach(({ title, options }) => {
      if (options.length > 1)
        defaultOptions.push({ title, option: options[0] });
    });
    // order product with default options
    const defaultOrder = {
      orderId: generateId(id),
      orderDate: Date.now(),
      productId: id,
      Category,
      Name,
      Thumbnail,
      Price,
      quantity: 1,
      selectedOption: defaultOptions,
    };
    // add product with default order to cart
    dispatch(
      updateUserData({ data: [...cartData, defaultOrder], field: "cartData" })
    );
  }

  return (
    <div className="w-[48%] md:w-1/4 md:border h-64 md:h-96 bg-gray-50 rounded-md md:rounded-none shadow-2xl shadow-gray-500/10 hover:shadow-gray-800 transition-all duration-500 group hover:z-10">
      <div className="w-full h-1/2 md:h-2/3 relative bg-gradient-to-br from-primary-100 via-gray-200 to-primary-500/50 rounded-t-md md:rounded-none">
        {/* quick access buttons */}
        <div className="absolute inset-0 rounded-t-md md:rounded-none flex flex-col gap-y-2 px-2 py-1 md:px-3 md:py-1.5 items-end">
          <button
            onClick={() => toggleWishList(productData.id)}
            disabled={loading && likeRef === productData.id}
            className={`${
              isLiked && "!text-red-600 hover:scale-110 disabled:!text-red-700"
            } p-1.5 md:p-2 rounded-full bg-gray-50 text-gray-300 hover:text-red-500 transition-all disabled:animate-pulse disabled:cursor-wait disabled:bg-red-500`}
          >
            <FaHeart className="md:text-xl" />
          </button>
          <button className="p-1.5 peer md:p-2 rounded-full bg-gray-50 text-gray-300 hover:text-gray-950 focus:text-gray-950 transition-all hidden md:block">
            <FaEye className="md:text-xl" />
          </button>

          <div className="absolute inset-0 bg-gray-950/80 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible transition-all duration-500 hidden md:flex flex-col items-center justify-center px-4 py-2">
            <p className="text-gray-50 text-center line-clamp-6">
              {productData.Description}
            </p>
          </div>
        </div>
        {/* product image */}
        <img
          src={productData.Thumbnail}
          alt={productData.Name}
          className="w-full h-full object-cover rounded-t-md md:rounded-none"
        />
      </div>
      {/* product details */}
      <div className="w-full h-1/2 md:h-1/3 flex flex-col justify-evenly gap-y-4 px-2.5 py-1.5">
        {/* product name */}
        <h4
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/EcoVibe/Products/${productData.id}`);
          }}
          className="line-clamp-1 cursor-pointer group-hover:text-primary-500 transition-all md:text-lg"
        >
          {productData.Name}
        </h4>
        <div className="flex flex-col gap-y-2 md:flex-row md:items-center">
          {/* price & stars */}
          <div className="w-full flex md:flex-col md:items-start justify-between">
            <p className="font-medium md:text-lg">${productData.Price}</p>
            <p className="flex items-center justify-center gap-x-0.5 md:gap-y-1">
              <span className="text-base">
                {calculateAverage(productData.Stars)}
              </span>
              <span className="mb-0.5 text-amber-300">
                <FaStar />
              </span>
            </p>
          </div>
          {/* add to cart btn */}
          <button
            onClick={() => {
              addProductToCart(productData);
            }}
            disabled={isInCart}
            className={`${
              loading &&
              orderRef === productData.id &&
              "!bg-gradient-to-br from-primary-50 via-gray-300 to-primary-200 animate-pulse !text-gray-500"
            } px-2 py-1.5 text-sm rounded-md bg-primary-400 disabled:bg-gray-500 hover:bg-primary-700 transition-all text-white font-medium`}
          >
            {/* mobile content */}
            <span className="md:hidden">
              {isInCart ? "Already In Cart" : "Add To Cart"}
            </span>
            {/* desktop content */}
            <span className="text-2xl hidden md:block">
              {isInCart ? <BsCartCheck /> : <BiCart />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
