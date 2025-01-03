import { Tilt } from "@jdion/tilt-react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { bannersInfo } from "./constants";

function BestSellingBanners() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-4 md:mt-6">
      {/* title */}
      <div className="w-full px-2 my-1 md:px-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold  md:text-3xl">Best Selling Items</h2>

        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant",
            });
            navigate(`/EcoVibe/Explore-Products/tags=special`);
          }}
          className="flex items-center gap-x-1 md:gap-x-1.5 md:text-lg text-sm text-gray-500 hover:text-accent-300 transition-all cursor-pointer"
        >
          View All <FaArrowRight className="text-xs md:text-base" />
        </button>
      </div>
      {/* content wrapper */}
      <div
        id="wrapper"
        className="flex flex-col gap-y-6 md:flex-row items-center justify-evenly w-full px-4 py-4 md:py-6"
      >
        {bannersInfo.map((banner, index) => (
          <Tilt
            key={index}
            className="w-full md:w-2/5 h-48 md:h-64 relative cursor-pointer group"
          >
            <div className="w-full h-full">
              {/* banner background */}
              <div className="absolute w-full h-full -z-10">
                <img
                  src={banner.bgurl}
                  alt="banner-pic"
                  className="w-full h-full object-cover object-top rounded-xl group-hover:object-left-bottom transition-all duration-1000"
                />
              </div>
              {/* banner description */}
              <div className="z-10 flex flex-col px-4 py-4 bg-gray-800/35 rounded-xl h-full md: justify-evenly">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {banner.title}
                </h2>
                <span className="line-clamp-3 text-gray-300">
                  {banner.subTitle}
                </span>
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "instant",
                    });
                    navigate(`/EcoVibe/Explore-Products/${banner.query}`);
                  }}
                  className="bg-white text-gray-950 hover:bg-gray-950 hover:text-white transition-all md:text-lg font-semibold rounded-xl text-sm my-3 px-4 py-2 w-fit md:self-end md:px-5 md:py-2.5"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default BestSellingBanners;
