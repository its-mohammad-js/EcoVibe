import Slider from "react-slick";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { heroSectionsInfo } from "constants";

function ShopHeroSection() {
  const settings = {
    arrows: false,
    speed: 1200,
    dots: true,
    appendDots: appendDotsFunc,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // customize pagination controll (dots) (jsx)
  function appendDotsFunc(e) {
    return (
      <>
        <div className="flex justify-center sm:justify-between items-end mt-2 gap-x-2 absolute bottom-0 right-0 px-8 py-4 w-fit">
          {/* pagination numbers */}
          <div className="flex items-center justify-center gap-x-1.5">
            {e.map((dotNum) => (
              <p
                onClick={() => sliderRef.current.slickGoTo(dotNum.key)}
                key={dotNum.key}
                className={`${
                  dotNum.props.className === "" ? "bg-gray-950" : "bg-gray-100"
                } w-2.5 h-2.5 md:w-5 md:h-3 rounded-full transition-all cursor-pointer`}
              ></p>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-4 md:mt-2">
      <Slider ref={sliderRef} {...settings} className="mx-2">
        {heroSectionsInfo.shopPage.map((banner, index) => {
          return (
            <div
              className="w-full h-48 rounded-md md:h-[34rem] relative focus:outline-none"
              key={index}
            >
              {/* slide background image */}
              <div className="absolute inset-0 -z-10">
                {/* background blur filter on moblie screens */}
                <div className="absolute inset-0 bg-primary-50/40 backdrop-blur-sm rounded-md md:hidden"></div>
                <img
                  src={banner.img}
                  alt="hero section banner"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="h-full w-full md:w-2/4 flex flex-col justify-evenly md:justify-center gap-y-4 md:gap-y-8 px-4 py-2">
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-2xl md:text-5xl font-bold">
                    {banner.title}
                  </h2>
                  <p className="line-clamp-3 md:line-clamp-none font-semibold text-sm md:text-xl">
                    {banner.subTitle}
                  </p>
                </div>
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(banner.query);
                  }}
                  className="w-fit md:text-lg px-4 py-1 md:py-2 md:px-8 text-white text-sm bg-primary-950 rounded-md"
                >
                  Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ShopHeroSection;
