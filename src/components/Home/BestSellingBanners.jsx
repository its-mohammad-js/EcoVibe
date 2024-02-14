import { Tilt } from "@jdion/tilt-react";
import { FaArrowRight } from "react-icons/fa";

const bannersInfo = [
  {
    title: "New Man Collections",
    subTitle:
      "Elevate your style with modern cuts, luxurious fabrics, and timeless designs. From sharp tailored suits to casual everyday essentials, this collection has everything you need to look and feel your best.",
    bgurl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fjade-aucamp-Kj6LgGceZ4M-unsplash.jpg?alt=media&token=bf06f396-12d7-4c1b-a4a8-3b837d76c63a",
  },
  {
    title: "Woman Winter Collections",
    subTitle:
      "Discover the latest woman winter collections, featuring cozy 🧥 outerwear, stylish ❄️ accessories, and chic 🧣 scarves to keep you warm and fashionable during the chilly season. From elegant coats to trendy boots.",
    bgurl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fdom-hill-nimElTcTNyY-unsplash.jpg?alt=media&token=360a3cac-5de4-4bc6-9b8c-02818769b5a2",
  },
];

function BestSellingBanners() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      {/* title */}
      <div className="w-full px-2 my-1 md:px-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold  md:text-3xl">Best Selling Items</h2>

        <span className="flex items-center gap-x-1 md:gap-x-1.5 md:text-lg text-sm text-gray-500 hover:text-accent-300 transition-all cursor-pointer">
          View All <FaArrowRight className="text-xs md:text-base" />
        </span>
      </div>
      {/* content wrapper */}
      <div
        id="wrapper"
        className="flex flex-col gap-y-6 md:flex-row items-center justify-evenly w-full px-4 py-4 md:py-6"
      >
        {bannersInfo.map((banner, index) => (
          <Tilt
            key={index}
            className="w-full md:w-2/5 h-48 md:h-64 relative cursor-pointer"
          >
            <div className="w-full h-full">
              {/* banner background */}
              <div className="absolute w-full h-full -z-10">
                <img
                  src={banner.bgurl}
                  alt="banner-pic"
                  className="w-full h-full object-cover object-top rounded-xl"
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
                <button className="bg-white text-gray-950 hover:bg-gray-950 hover:text-white transition-all md:text-lg font-semibold rounded-xl text-sm my-3 px-4 py-2 w-fit md:self-end md:px-5 md:py-2.5">
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
