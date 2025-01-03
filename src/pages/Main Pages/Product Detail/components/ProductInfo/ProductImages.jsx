import { useRef } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import useHorizontalTouchScroll from "hooks/useTouchScroll";

function ProductImages({ Images, loading }) {
  const { auth_status } = useSelector((state) => state.userData); // current user data
  const sliderRef = useRef(); // ref to slider
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; // slider options
  useHorizontalTouchScroll(
    ".images-wrapper",
    (loading && Images) || auth_status === 204
  ); // horizontral touch scroll for images list

  return (
    <div className="xl:w-2/5 flex flex-col">
      {/* main slider */}
      <div className="relative">
        {/* prev btn */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-0 z-40 top-1/2 mx-2 p-1 rounded-full bg-gray-50 opacity-70 hover:opacity-100 transition-all text-2xl"
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
            <div key={i} className="w-full bg-gray-50 h-96 xl:rounded-md">
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
          className="absolute right-0 z-40 top-1/2 mx-2 p-1 rounded-full bg-gray-50 opacity-70 hover:opacity-100 transition-all text-2xl"
        >
          <BiChevronLeft className="rotate-180" />
        </button>
        {/* paginate dots */}
        <div className="absolute w-full bottom-2.5 flex justify-center gap-1">
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
            <div key={i} className="w-28 xl:w-44 h-[95%] flex-none">
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
  );
}

export default ProductImages;

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
