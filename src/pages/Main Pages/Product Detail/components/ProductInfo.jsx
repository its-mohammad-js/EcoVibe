import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import toast from "react-hot-toast";
import {
  calculateAverage,
  checkUserAuthentication,
  errorIconUrl,
  isInArray,
  toggleElementInArray,
} from "constants";
import OrderBox from "./OrderBox";
import ProductInfoLoader from "UI/Loaders/ProductInfoLoader";
import { updateUserData } from "src/reducers/auth/userDataSlice";
import { FaArrowLeft, FaChevronRight, FaHeart, FaStar } from "react-icons/fa";
import { BiChevronLeft, BiHeart } from "react-icons/bi";
import useHorizontalTouchScroll from "hooks/useTouchScroll";

function ProductInfo() {
  // product data
  const {
    data: productData,
    loading,
    error,
  } = useSelector((state) => state.products);
  const sliderRef = useRef();
  // slider options
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const navigate = useNavigate();
  const {
    Images,
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
  } = productData[0] || {};
  const [content, setContent] = useState("description");
  const { wishlist, auth_status } = useSelector((state) => state.userData);
  useHorizontalTouchScroll(".images-wrapper", loading);
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
      toast.error(error?.message);
    }
  }

  console.log(productData[0]);

  if (loading || auth_status === 204) return <ProductInfoLoader />;

  if (productData.length && !loading)
    return (
      <div id="wrapper">
        {/* bread crumbs */}
        <div className="flex items-center px-2 py-2 gap-2">
          <h4
            onClick={() => navigate("/EcoVibe/Explore-Products/")}
            className="text-lg font-bold cursor-pointer"
          >
            Products
          </h4>
          <p>
            <FaChevronRight />
          </p>
          <p
            onClick={() =>
              navigate(
                `/EcoVibe/Explore-Products/category=${Category.toLowerCase()}`
              )
            }
            className="line-clamp-1 w-20 xl:w-auto text-gray-600 cursor-pointer"
          >
            {Category}
          </p>
          <p>
            <FaChevronRight />
          </p>
          <p className="line-clamp-1 w-24 xl:w-auto text-gray-600">{Name}</p>
        </div>
        {/* product information & order box */}
        <div className="md:flex xl:h-[40rem]">
          {/* product details */}
          <div className="flex flex-col md:flex-row justify-start w-full gap-4 xl:px-4 xl:py-2">
            {/* product image's */}
            <div className="xl:w-2/5 flex flex-col">
              {/* main slider */}
              <div className="relative">
                {/* prev btn */}
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="absolute left-0 z-50 top-1/2 mx-2 p-1 rounded-full bg-gray-50 opacity-70 hover:opacity-100 transition-all text-2xl"
                >
                  <BiChevronLeft />
                </button>
                <Slider
                  appendDots={SliderDots}
                  ref={sliderRef}
                  {...settings}
                  className="xl:rounded-md"
                >
                  {Images.map((url, i) => (
                    <div
                      key={i}
                      className="w-full bg-gray-50 h-72 xl:h-96 xl:rounded-md"
                    >
                      <img
                        src={url}
                        alt="product-image"
                        className="size-full object-cover xl:rounded-md"
                      />
                    </div>
                  ))}
                </Slider>
                {/* next btn */}
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className="absolute right-0 z-50 top-1/2 mx-2 p-1 rounded-full bg-gray-50 opacity-70 hover:opacity-100 transition-all text-2xl"
                >
                  <BiChevronLeft className="rotate-180" />
                </button>
                {/* paginate dots */}
                <div className="absolute w-full z-50 bottom-2.5 flex justify-center gap-1">
                  {Images.map((url, i) => (
                    <button
                      key={i}
                      className="size-3 rounded-full"
                      onClick={() => sliderRef.current.slickGoTo(i)}
                    ></button>
                  ))}
                </div>
              </div>
              {/* all images */}
              <div className="xl:block w-full h-32 xl:h-44 images-wrapper overflow-x-auto overflow-y-hidden horizontal-scroll-bar px-2 py-0.5">
                <div className="inline-flex items-center justify-center h-full gap-4">
                  {Images.map((url, i) => (
                    <div key={i} className="w-24 xl:w-44 h-[95%]">
                      <img
                        draggable={false}
                        onClick={() => sliderRef.current.slickGoTo(i)}
                        src={url}
                        alt="product-image"
                        className="size-full select-none object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* product detail's & order box */}
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
                  <div className="flex gap-1">
                    <p className="text-amber-300 text-xl">
                      <FaStar />
                    </p>
                    <p className="text-gray-600">
                      {calculateAverage(Stars)} ({Stars?.length} rates)
                    </p>
                  </div>
                  <button
                    onClick={() => toggleWishList()}
                    className="flex items-center gap-1 mb-1 font-bold group"
                  >
                    <FaHeart className="text-red-500 hidden text-lg group-hover:inline" />
                    <BiHeart className="text-red-500 text-xl group-hover:hidden" />
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
                          onClick={() =>
                            navigate(`/EcoVibe/seller/${SellerId}`)
                          }
                          className="text-2xl line-clamp-1 flex items-center gap-1 font-bold cursor-pointer hover:text-gray-800 transition-all"
                        >
                          {SellerName}{" "}
                          <FaArrowLeft className="text-sm rotate-[130deg]" />
                        </h6>
                        <p className="text-gray-600">{SellerEmail}</p>
                      </div>
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus eum corrupti quos omnis quo, rerum minima
                      perferendis id et deleniti mollitia ex vitae harum
                      reiciendis possimus quisquam neque! Fuga, earum.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* options table */}
        <div className="mx-auto px-4 lg:px-6">
          {Options && (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 md:text-xl w-1/3 border">
                    Option Title
                  </th>
                  <th className="px-4 py-2 md:text-xl w-2/3 border">List</th>
                </tr>
              </thead>

              <tbody>
                {Options.map(({ title, options }, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border lowercase">{title}</td>
                    <td className="px-4 py-2 border md:flex gap-2">
                      {options.map((opt, index) => (
                        <p key={index}>{opt},</p>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );

  if ((!loading && !productData?.length) || error)
    return (
      <div className="flex items-center justify-center">
        <img
          src={errorIconUrl}
          alt="error-icon"
          className="size-96 object-cover"
        />
        <div className="flex flex-col gap-y-4">
          <h4 className="text-8xl text-primary-800 font-bold">Oops!</h4>
          <p className="text-lg font-semibold">
            There was a problem connecting to our server. Please check your
            internet connection and try again.
          </p>
          <button
            onClick={() => navigate("/EcoVibe/Explore-Products/")}
            className="w-fit px-4 py-2 border border-primary-500 bg-primary-500 text-gray-50 rounded-md hover:bg-gray-50 hover:text-primary-500 transition-all"
          >
            Back to explore
          </button>
        </div>
      </div>
    );
}

export default ProductInfo;

// images slider dots component
function SliderDots(props) {
  return (
    <div className="">
      {props.map((slide, index) => (
        <button
          key={index}
          className={`${
            slide.props.className === "slick-active" && "bg-gray-800"
          } size-2.5 bg-gray-50 mb-10 mx-1 rounded-full transition-all`}
        ></button>
      ))}
    </div>
  );
}
