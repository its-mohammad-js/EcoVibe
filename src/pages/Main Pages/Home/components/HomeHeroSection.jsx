import { FaArrowLeft } from "react-icons/fa";
import SimpleBanner from "./SimpleBanner";
import { Link } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiDeliveryTruck } from "react-icons/ci";

const images = {
  img01:
    "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhome-page-hero%20(1).webp?alt=media&token=454fe00a-42fb-4bc8-8c52-5fe53a9b897e",
  img02:
    "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhome-page-hero%20(3).webp?alt=media&token=b7051a7c-5881-433f-9ea0-c33fd1c37588",
  img03:
    "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhome-page-hero%20(2).webp?alt=media&token=6a239c1b-8f4e-47d5-b278-3eac682a8af1",
};

const HeroSection = () => {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      {/* hero content */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between px-2 py-1 md:px-4 md:h-[500px] h-96">
        <div className="h-3/4 md:h-full md:w-2/3 w-full justify-center items-center bg-blue-400 rounded-md relative cursor-pointer">
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={images.img03}
              alt="hero-image"
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
          <div className="bg-black bg-opacity-25 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 absolute w-full h-full z-10 flex flex-col items-start justify-center px-6 py-2 rounded-md">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Stay
              <span className="text-primary-500">&nbsp;connected</span> <br />
              anywhere, anytime!
            </h1>
            <div className="flex flex-col items-start justify-between md:gap-y-4 gap-y-2 md:px-4 mf:py-2 px-2 py-1 border-l-4 mt-2 border-primary-600">
              <p className="text-white text-lg md:text-xl cursor-pointer">
                Sale up to
                <span className="bg-primary-500 text-white px-2 py-1 rounded-md mx-2 hover:px-3 hover:py-1.5 transition-all duration-300">
                  30% OFF
                </span>
              </p>
              <span className="text-gray-200 text-sm md:text-xl bg-white bg-opacity-10 cursor-pointer">
                Free shipping on all your order.
              </span>
            </div>
            <Link
              onClick={() => window.scroll(0, 0)}
              to="Explore-Products/productTypes=smart phones"
              className="md:px-10 px-4 font-semibold hover:bg-primary-700 hover:text-white transition-all duration-500 py-2 bg-white text-primary-600 ml-2 mt-4 rounded-lg text-sm md:text-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="flex w-full h-1/4 md:h-full md:w-1/3 items-center md:flex-col justify-between gap-x-2 cursor-pointer">
          <div className="relative w-1/2 md:w-full md:h-[240px] h-24 rounded-md bg-amber-300">
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={images.img01}
                alt="hero-image"
                className="w-full h-full object-cover object-c rounded-md"
              />
            </div>

            <div className="bg-black bg-opacity-30 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 absolute w-full h-full z-10 flex flex-col gap-y-1 items-center md:items-start justify-center px-6 py-2 rounded-md">
              <p className="text-white text-xs md:text-lg font-semibold">
                Summer Sale
              </p>
              <p className="text-white text-sm md:text-3xl font-bold border-b-4 border-b-primary-500">
                75% OFF
              </p>
              <span className="md:text-sm text-gray-300 text-xs md:block hidden">
                Only Fashion & clothes
              </span>
              <Link
                onClick={() => window.scroll(0, 0)}
                to="Explore-Products/tags=best sell"
                className="md:px-3 md:py-1.5 text-xs px-2 py-1 md:text-base bg-primary-400 rounded-lg text-white flex items-center justify-center gap-x-2 hover:scale-110 transition-all duration-300"
              >
                <span>Shop Now</span>
                <FaArrowLeft className="rotate-180" />
              </Link>
            </div>
          </div>
          <div className="md:w-full w-1/2 md:h-[240px] h-24 rounded-md bg-accent-400 relative">
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={images.img02}
                alt="hero-image"
                className="w-full h-full object-cover object-c rounded-md"
              />
            </div>

            <div className="bg-black bg-opacity-30 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 absolute w-full h-full z-10 flex flex-col gap-y-0.5 md:gap-y-1 items-center justify-center px-6 py-2 rounded-md">
              <p className="text-white md:text-lg text-xs font-semibold">
                Best Deal
              </p>
              <p className="text-white text-xs md:text-2xl lg:text-3xl font-bold border-b md:border-b-4 border-b-primary-500">
                Special Products <br /> Deal of the Month
              </p>
              <Link
                onClick={() => window.scroll(0, 0)}
                to="Explore-Products/category=fashion"
                className="md:px-3 md:py-1.5 px-2 py-1 text-xs md:text-lg rounded-lg text-white flex items-center justify-center gap-x-2 hover:scale-110 transition-all duration-300"
              >
                <span>Shop Now</span>
                <FaArrowLeft className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* hero footer (features banner && offer banner) */}
      <div className="">
        {/* simple banner (only visible on desktop) */}
        <div className="hidden md:flex items-center mx-auto w-[99%] px-2 py-1 my-4 rounded-lg bg-gray-50 shadow-xl xl:justify-around justify-between">
          <div className="flex items-center gap-x-3 lg:gap-x-4 justify-center h-20 px-2 py-1 group">
            <span className="group-hover:scale-125 transition-all duration-500">
              <CiDeliveryTruck className="text-5xl text-primary-400" />
            </span>
            <h3 className="flex flex-col justify-center gap-y-2 h-full">
              <span className="font-bold">Free Shipping</span>
              <span className="text-xs line-clamp-1">
                Free shipping on all your order
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-4 justify-center h-20 px-2 py-1 group">
            <span className="group-hover:scale-125 transition-all duration-500">
              <TfiHeadphoneAlt className="text-4xl text-primary-400" />
            </span>
            <h3 className="flex flex-col justify-center gap-y-2 h-full">
              <span className="font-bold">Free Shipping</span>
              <span className="text-xs line-clamp-1">
                Free shipping on all your order
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-4 justify-center h-20 px-2 py-1 group">
            <span className="group-hover:scale-125 transition-all duration-500">
              <IoBagCheckOutline className="text-4xl text-primary-400" />
            </span>
            <h3 className="flex flex-col justify-center gap-y-2 h-full">
              <span className="font-bold">Free Shipping</span>
              <span className="text-xs line-clamp-1">
                Free shipping on all your order
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-4 justify-center h-20 px-2 py-1 group">
            <span className="group-hover:scale-125 transition-all duration-500">
              <BsBoxSeam className="text-4xl text-primary-400" />
            </span>
            <h3 className="flex flex-col justify-center gap-y-2 h-full">
              <span className="font-bold">Free Shipping</span>
              <span className="text-xs line-clamp-1">
                Free shipping on all your order
              </span>
            </h3>
          </div>
        </div>

        {/* offer banner (only visible on mobile) */}
        <SimpleBanner
          title={"Deal Of The Day"}
          path="/EcoVibe/Explore-products"
        />
      </div>
    </div>
  );
};

export default HeroSection;
