import { useDispatch, useSelector } from "react-redux";
import { calculateAverage, generateId } from "helpers";
import { updateUserData } from "authActions/updateUserData";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { map, filter } from "lodash";
import ProductThumbnail from "./ProductThumbnail";
import useMediaQuery from "../../../../../common/hooks/useMediaQuery";

function ProductCard({ productData }) {
  const { loading, cartData } = useSelector((state) => state.userData); // current userdata
  const isInCart = cartData.find((order) => order.productId === productData.id); // check product is in cart
  // ref to user actions (cart & wish list)
  const [{ orderRef }, setActions] = useState({
    orderRef: "",
  });
  // necessary hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 480 });

  // clear actions ref after any action
  useEffect(() => {
    // reset actions ref value
    if (!loading)
      setActions({
        orderRef: "",
      });
  }, [loading]);

  // add product with default
  function addProductToCart(product) {
    // set cart action ref to product id
    setActions((prev) => ({ ...prev, orderRef: product.id }));
    // get default options of product
    let defaultOptions = map(
      filter(product.Options, ({ options }) => options.length > 1),
      ({ title, options }) => ({ title, option: options[0] })
    );
    // order product with default options
    const defaultOrder = {
      orderId: generateId(product.id),
      orderDate: Date.now(),
      productId: product.id,
      Category: product.Category,
      Name: product.Name,
      Thumbnail: product.Thumbnail,
      Price: product.Price,
      quantity: 1,
      selectedOption: defaultOptions,
      SellerId: product.SellerId,
      SellerName: product.SellerName,
      SellerProfile: product.SellerProfile,
      SellerEmail: product.SellerEmail,
    };
    // add product with default order to cart
    dispatch(
      updateUserData({ data: [...cartData, defaultOrder], field: "cartData" })
    );
  }

  return (
    <div className="md:border h-64 md:h-96 bg-gray-50 rounded-md md:rounded-none shadow-2xl shadow-gray-500/10 hover:shadow-gray-800 transition-all duration-500 group hover:z-10">
      {/* product image & summary description */}
      <ProductThumbnail productData={productData} />
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
        <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:justify-between">
          {/* price & stars */}
          <div className="flex md:flex-col md:items-start justify-between">
            {/* <p className="font-medium md:text-lg">${productData.Price}</p> */}
            <p className="flex items-center justify-center gap-x-0.5 md:gap-y-1">
              <span className="text-base">
                {calculateAverage(
                  productData?.Stars ? productData?.Stars : [0]
                )}
              </span>
              <span className="mb-0.5 text-amber-300">
                <FaStar />
              </span>
            </p>
          </div>
          {/* add to cart || navigate to cart btn */}
          <button
            onClick={() => {
              isMobile && window.scroll(0, 0);
              isInCart
                ? navigate("/EcoVibe/bag/cart")
                : addProductToCart(productData);
            }}
            className={`${
              loading &&
              orderRef === productData.id &&
              "!bg-gradient-to-br from-primary-50 via-gray-300 to-primary-200 animate-pulse !text-gray-500"
            } ${
              isInCart
                ? "bg-primary-900"
                : "bg-primary-400 hover:bg-primary-700"
            } px-2 py-1.5 text-sm flex justify-center items-end gap-x-1 text-gray-50 rounded-md transition-all font-medium`}
          >
            {/* icon */}
            <span className="text-lg lg:text-2xl md:block mb-0.5 lg:mb-0">
              {isInCart ? <BsCartCheck /> : <BiCart />}
            </span>
            {/* text  */}
            <span>{isInCart ? "Show in Cart" : "Add To Cart"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
