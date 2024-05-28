import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { fakeArray } from "../../helpers/constants";
import ReactStars from "react-stars";

function ProductInfoLoader() {
  // slider options
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="wrapper">
      <div className="md:flex justify-center relative min-h-screen">
        {/* product details */}
        <div className="md:flex justify-start lg:basis-10/12">
          {/* product image slider */}
          <div className="w-full md:w-[30rem] lg:h-96 mx-auto md:mx-0">
            <div className="relative">
              {/* next slide button */}
              <div className="absolute flex items-center h-full right-0 z-10 top-0 px-2">
                <button className="p-2 bg-white rounded-full text-xl">
                  <FaArrowRight />
                </button>
              </div>
              <Slider {...settings}>
                {fakeArray(10).map((item, index) => (
                  <div
                    key={index}
                    className="size-96 bg-gray-300 animate-pulse"
                  ></div>
                ))}
              </Slider>
              {/* prev slide button */}
              <div className="absolute h-full flex items-center top-0 px-2">
                <button className="p-2 bg-white rounded-full text-xl">
                  <FaArrowLeft />
                </button>
              </div>
            </div>
            {/* product images */}
            <div className="mt-4 w-full h-40 overflow-auto hidden md:flex items-center gap-x-6">
              {fakeArray(3).map((item, index) => (
                <div
                  key={index}
                  className="h-full w-96 bg-gray-300 animate-pulse"
                ></div>
              ))}
            </div>
          </div>
          {/* product detail's */}
          <div className="px-4 py-2 mt-2 md:mt-0 md:flex-1 animate-pulse">
            {/* product name & description & reviews */}
            <div className="mt-1 flex flex-col gap-y-2 md:gap-y-4">
              <div className="flex flex-col">
                <h4 className="w-2/5 h-4 rounded-xl bg-gray-300"></h4>
                {/* product review's (stars) */}
                <div className="flex items-center gap-x-2 order-1 md:order-2">
                  <ReactStars
                    count={5}
                    value={4}
                    size={26}
                    color2={"#d5daf6"}
                    edit={false}
                  />
                  <p className="text-sm font-semibold">
                    <span>Point</span>
                    <span>Review's</span>
                  </p>
                </div>
              </div>
              {/* product description */}
              <div className="flex flex-col gap-y-4">
                <p className="w-full h-3 bg-gray-300 rounded-xl"></p>
                <p className="w-10/12 h-3 bg-gray-300 rounded-xl"></p>
                <p className="w-9/12 h-3 bg-gray-300 rounded-xl"></p>
                <p className="w-8/12 h-3 bg-gray-300 rounded-xl"></p>
                <p className="w-full h-3 bg-gray-300 rounded-xl"></p>
                <p className="w-5/6 h-3 bg-gray-300 rounded-xl"></p>
                <p className="w-4/5 h-3 bg-gray-300 rounded-xl"></p>
                <p className="w-3/4 h-3 bg-gray-300 rounded-xl"></p>
                <p className="w-3/5 h-3 bg-gray-300 rounded-xl"></p>
              </div>
            </div>
            {/* product marks  */}
            <div className="mt-3">
              {/* category & type & tags & collections */}
              <div className="flex flex-col gap-y-2">
                <hr />
                <div className="flex justify-between text-lg items-center">
                  <span className="font-semibold">Category :</span>
                  <p className="w-10 h-3 bg-gray-300 rounded-xl"></p>
                </div>
                <div className="flex justify-between text-lg items-center">
                  <span className="font-semibold">Type :</span>
                  <p className="w-14 h-3 bg-gray-300 rounded-xl"></p>
                </div>
                <div className="flex justify-between text-lg items-center">
                  <span className="font-semibold">Tags :</span>

                  <p className="w-8 h-3 bg-gray-300 rounded-xl"></p>
                </div>
                <div className="flex justify-between text-lg items-center">
                  <span className="font-semibold">Collection :</span>

                  <p className="w-16 h-3 bg-gray-300 rounded-xl"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoLoader;
