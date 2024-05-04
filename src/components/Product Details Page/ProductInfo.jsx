import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredProducts } from "../../redux/products/productsSlice";
import Slider from "react-slick";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import ReactStars from "react-stars";
import { calculateAverage } from "../../helpers/constants";

function ProductInfo() {
  const { data, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const params = useParams();
  const productData = data.find((product) => product.id === params.productId);
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: appendDotsFunc,
  };
  const navigate = useNavigate();

  // check products data & send request to data base
  useEffect(() => {
    if (productData) {
      return;
    } else {
      dispatch(getFilteredProducts({ sortBy: "" }));
    }
  }, [params]);

  if (loading) return <p>loading...</p>;

  if (data.length && !loading)
    return (
      <div id="wrapper">
        <div className="md:flex justify-center md:gap-x-10 lg:gap-x-12 mt-6 md:mt-12 min-h-screen">
          {/* product image slider */}
          <div className="w-full md:w-1/2 lg:w-[33rem] lg:h-[33rem] mx-auto md:mx-0">
            <div className="relative">
              {/* next slide button */}
              <div className="absolute flex items-center h-full right-0 z-10 top-0 px-2">
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className="p-2 bg-white rounded-full text-xl hover:bg-primary-400 hover:text-primary-50 transition-all"
                >
                  <FaArrowRight />
                </button>
              </div>
              <Slider {...settings} ref={sliderRef} className=" md:mx-auto">
                {productData.Images.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={productData.Name}
                    className="w-full h-full"
                  />
                ))}
              </Slider>
              {/* prev slide button */}
              <div className="absolute h-full flex items-center top-0 px-2">
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="p-2 bg-white rounded-full text-xl hover:bg-primary-400 hover:text-primary-50 transition-all"
                >
                  <FaArrowLeft />
                </button>
              </div>
            </div>
            {/* product images */}
            <div className="mt-4 w-full h-40 overflow-auto hidden md:flex items-center gap-x-6">
              {productData.Images.map((imgUrl, index) => (
                <img
                  onClick={() => sliderRef.current.slickGoTo(index)}
                  key={index}
                  src={imgUrl}
                  alt={productData.Name}
                  className="w-1/3 h-full"
                />
              ))}
            </div>
          </div>
          {/* product detail's */}
          <div className="px-4 py-2 mt-2 md:mt-0 md:w-1/3">
            {/* product name & description & reviews */}
            <div className="mt-1 flex flex-col gap-y-2 md:gap-y-4">
              <div className="flex flex-col">
                <h4 className="text-2xl md:text-4xl font-bold order-2 md:order-1">
                  {productData.Name}
                </h4>
                {/* product review's (stars) */}
                <div className="flex items-center gap-x-2 order-1 md:order-2">
                  <ReactStars
                    count={5}
                    value={calculateAverage(productData.Stars)}
                    size={26}
                    color2={"#ffd700"}
                    edit={false}
                  />
                  <p className="text-sm font-semibold">
                    <span>{productData.Stars.length}</span>
                    <span>Review's</span>
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg">{productData.Description}</p>

              <p className="text-2xl md:text-3xl font-medium">
                ${productData.Price}
              </p>
            </div>
            {/* action button's */}
            <div className="flex flex-col gap-y-2 mt-4">
              <div className="flex items-center justify-between gap-x-2">
                <div className="w-1/3 flex justify-center bg-gray-100 rounded-md">
                  <span className="w-1/3 py-2.5 flex items-center justify-center cursor-pointer rounded-md hover:bg-primary-600 hover:text-gray-50 transition-all">
                    <FaPlus />
                  </span>
                  <span className="w-1/3 py-2.5 text-center">1</span>
                  <span className="w-1/3 py-2.5 flex items-center justify-center cursor-pointer rounded-md hover:bg-gray-950 hover:text-gray-50 transition-all">
                    <FaMinus />
                  </span>
                </div>
                <button className="flex px-4 py-1.5 items-center md:text-lg justify-center gap-x-1 w-2/3 border-2 border-gray-800 hover:border-primary-600 hover:text-primary-600 rounded-md">
                  <span className="text-lg">
                    <FaHeart />
                  </span>
                  <span>Wish List</span>
                </button>
              </div>
              <button className="px-4 py-2 bg-primary-600 md:text-xl text-gray-50 hover:bg-primary-50 hover:text-primary-950 transition-all rounded-md">
                Add to Cart
              </button>
            </div>
            {/* product marks  */}
            <div className="mt-3">
              {/* category & type & tags & collections */}
              <div className="flex flex-col gap-y-2">
                <hr />
                <div className="flex justify-between text-lg items-center">
                  <span className="font-semibold">Category :</span>
                  <span
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(
                        `/EcoVibe/Explore-Products/category=${productData.Category.toLowerCase()}`
                      );
                    }}
                    className="underline w-24 line-clamp-1 text-end cursor-pointer"
                  >
                    {productData.Category}
                  </span>
                </div>
                <div className="flex justify-between text-lg items-center">
                  <span className="font-semibold">Type :</span>
                  <span
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(
                        `/EcoVibe/Explore-Products/productTypes=${productData.Type.toLowerCase()}`
                      );
                    }}
                    className="underline w-24 line-clamp-1 text-end cursor-pointer"
                  >
                    {productData.Type}
                  </span>
                </div>
                <div className="flex justify-between text-lg items-center">
                  <span className="font-semibold">Tags :</span>

                  <div className="flex items-center gap-x-1">
                    {productData.Tags.map(
                      (tag, index) =>
                        index <= 3 && (
                          <span
                            onClick={() => {
                              window.scrollTo(0, 0);
                              navigate(
                                `/EcoVibe/Explore-Products/tags=${tag.toLowerCase()}`
                              );
                            }}
                            key={index}
                            className="text-sm md:text-base cursor-pointer px-2 py-1 bg-gray-100 hover:bg-gray-950 hover:-translate-y-1 transition-all hover:text-gray-50 rounded-md font-semibold"
                          >
                            {tag}
                          </span>
                        )
                    )}
                  </div>
                </div>
                <div className="flex justify-between text-lg items-center">
                  <span className="font-semibold">Collection :</span>

                  <span
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(
                        `/EcoVibe/Explore-Products/collections=${productData.Collection.toLowerCase()}`
                      );
                    }}
                    className="underline w-24 line-clamp-1 text-end cursor-pointer"
                  >
                    {productData.Collection}
                  </span>
                </div>
              </div>
            </div>
            {/* option picker */}
            <hr />
            <div className="">
              {productData.Options &&
                productData.Options.map(({ title, options }, index) => (
                  <div key={index} className="flex flex-col gap-y-2 py-2">
                    {/* option title  */}
                    <h6 className="text-lg font-semibold">
                      <span>Choose</span> &nbsp;
                      <span className="capitalize">{title}</span>:
                    </h6>
                    {/* picker action */}
                    <div className="flex items-center flex-wrap gap-x-4 gap-y-2">
                      {options.map((opt, index) => (
                        <span
                          key={index}
                          style={{
                            background: title.toLowerCase() === "color" && opt,
                          }}
                          className={`${
                            title.toLowerCase() === "color" &&
                            "!p-3.5 !rounded-full border-2 border-gray-100 hover:!border-gray-600"
                          } line-clamp-1 cursor-pointer capitalize px-3 py-1.5 transition-all bg-gray-50 border rounded-md border-gray-300 hover:bg-primary-400 hover:border-primary-400 hover:text-white`}
                        >
                          {title.toLowerCase() !== "color" && opt}
                        </span>
                      ))}
                    </div>

                    <hr />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* options table */}
        <div className="w-11/12 mx-auto">
          {productData.Options && (
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
                {productData.Options.map(({ title, options }, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border lowercase">{title}</td>
                    <td className="px-4 py-2 border">
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
}

export default ProductInfo;
