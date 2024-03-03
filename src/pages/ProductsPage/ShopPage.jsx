import OfferdProducts from "../../components/Shop Page/OfferdProducts";
import ShopHeroSection from "../../components/Shop Page/ShopHeroSection";
import TrendTags from "../../components/Shop Page/TrendTags";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFilteredProducts } from "src/redux/products/productsSlice";
import ShopByCategory from "../../components/Shop Page/ShopByCategory";
import BestSellingItems from "../../components/Shop Page/BestSellingItems";
import TopCompanies from "../../components/Shop Page/TopCompanies";
import {
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import SellersSection from "../../components/Shop Page/SellersSection";
import { BiLogoGmail } from "react-icons/bi";

function ShopPage() {
  const dispatch = useDispatch();

  // get products data from data base
  useEffect(() => {
    dispatch(getFilteredProducts());
  }, []);

  return (
    <>
      {/* Hero Section */}
      <ShopHeroSection />
      {/* Header Sections With Orders */}
      <div className="flex flex-col">
        {/* Trend Tags Card */}
        <div className="order-2 md:order-1">
          <TrendTags />
        </div>
        {/* Offerd Products */}
        <div className="order-1 md:order-2">
          <OfferdProducts />
        </div>
      </div>
      {/* Best Selling Items */}
      <BestSellingItems />
      {/* Top Brands Section */}
      <TopCompanies />
      {/* Seller's Section */}
      <SellersSection />
      {/* Shop By Category Section */}
      <ShopByCategory />
      {/* simple banner */}
      <div
        style={{
          backgroundImage: `url(${"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20page%20banner.webp?alt=media&token=2086af8a-5344-4201-9a50-1d9bc4dc8871"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8 h-96 flex items-center justify-center"
      >
        <div className="w-11/12 md:w-2/5 h-5/6 border-2 border-gray-500 px-4 py-2 flex flex-col items-center justify-evenly">
          <div className="flex flex-col gap-y-4 text-center">
            <h4 className="text-xl md:text-2xl font-bold text-gray-950">
              -50 PROMOTION HOT SUMMER
            </h4>
            <span className="text-sm md:text-base text-gray-700">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </span>
          </div>
          <div className="flex flex-col items-center gap-y-1.5">
            <button className="w-fit px-4 py-2 bg-gray-700 rounded-md text-white">
              ADD YOUR CALL TO ACTION
            </button>
            <span className="text-sm text-gray-600 border-b-2 border-b-gray-400">
              Designing Better Experience
            </span>
          </div>
        </div>
      </div>
      {/* Social Media Section */}
      <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8">
        <div
          id="wrapper"
          className="flex flex-col items-center md:flex-row md:justify-between w-full text-center px-4 py-2 gap-y-4"
        >
          <div className="flex flex-col items-center gap-y-4">
            <h4 className="text-3xl md:text-4xl font-bold">
              Get answers to all your questions.
            </h4>
            <span className="text-base md:text-lg text-gray-600">
              Problems trying to resolve the
              <span className="hidden md:inline">
                <br />
              </span>
              conflict between the two major realms of Classical physics:
            </span>
            <button className="bg-primary-400 w-fit text-sm md:text-base text-white px-4 py-2 rounded-md hover:-translate-y-2 shadow-xl shadow-inherit transition-all duration-500 hover:shadow-primary-800">
              CONTACT OUR COMPANY
            </button>
          </div>

          <div className="flex items-center justify-center md:w-80 md:flex-wrap gap-4 md:gap-x-6 lg:gap-x-8 w-full text-3xl md:text-6xl my-2 text-gray-500">
            <span className="md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all">
              <FaInstagram />
            </span>
            <span className="md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all">
              <FaTelegram />
            </span>
            <span className="md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all">
              <FaLinkedin />
            </span>
            <span className="md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all">
              <FaWhatsapp />
            </span>
            <span className="md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all">
              <BiLogoGmail />
            </span>
            <span className="md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all">
              <FaPhone />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
