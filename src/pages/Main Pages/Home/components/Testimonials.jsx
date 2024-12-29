import { useRef } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BiCommand } from "react-icons/bi";
import { testimonialsInfo } from "./constants";

function Testimonials() {
  // ref to slider
  const sliderRef = useRef(null);
  // slider setting
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <div id="wrapper" className="flex flex-col items-center px-4 py-2">
        {/* title */}
        <div className="w-full md:w-3/4 my-6 flex flex-col gap-y-3">
          <span className="text-primary-400 text-xl font-bold">
            What People Says
          </span>
          <h2 className="text-5xl font-bold w-fit">Client Testimonials</h2>
          <span className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
            ratione vel perferendis repellat. Consequuntur consectetur atque
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
            ratione vel perferendis
          </span>
        </div>

        {/* slider container */}
        <div className="w-full flex items-center [&>button]:hidden md:[&>button]:block justify-center gap-x-6">
          {/* previous button */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-white shadow-lg shadow-gray-500/10 hover:shadow-gray-500/20 transition-all focus:bg-primary-400 focus:text-white rounded-md p-3 text-2xl"
          >
            <FaArrowLeft />
          </button>
          {/*  */}
          <Slider
            ref={sliderRef}
            {...settings}
            className="w-full md:w-3/4 relative"
          >
            {testimonialsInfo.map((testimonial, index) => (
              <div key={index} className="w-full h-96">
                <div className="w-full h-full flex justify-between items-center">
                  <div className="w-1/3 h-full">
                    <img
                      src={testimonial.userPic}
                      alt={testimonial.useName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 h-full flex flex-col items-center justify-center bg-gradient-to-r relative px-6 py-4">
                    {/* pattern background */}
                    <div className="pattern-bg absolute -z-10 inset-0"></div>
                    {/* main content */}
                    <div className="">
                      <p className="flex text-primary-400 md:text-3xl gap-x-2 my-2">
                        <BiCommand /> <BiCommand />
                      </p>
                      <h4 className="md:text-3xl font-bold mt-4 text-lg">
                        {testimonial.useName}
                      </h4>
                      <span className="text-gray-500 text-sm md:text-base">
                        {testimonial.userJob}
                      </span>

                      <p className="mt-4 md:text-xl line-clamp-6">
                        {testimonial.comment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* next button */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-white shadow-lg shadow-gray-500/10 hover:shadow-gray-500/20 transition-all focus:bg-primary-400 focus:text-white rounded-md p-3 text-2xl"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
