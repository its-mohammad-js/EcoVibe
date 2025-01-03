import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetProductsState } from "src/reducers/products/productsSlice";
import { getFilteredProducts } from "src/reducers/products/productsSlice";
import { motion } from "framer-motion";
import HeroSection from "mainPages/Home/components/HomeHeroSection";
import CollectionsGallery from "mainPages/Home/components/CollectionsGallery";
import ProductsGallery from "mainPages/Home/components/ProductsGallery";
import TopCards from "mainPages/Home/components/TopCards";
import BestSellers from "mainPages/Home/components/BestSellers";
import TopCategories from "mainPages/Home/components/TopCategories";
import BestSellingBanners from "mainPages/Home/components/BestSellingBanners";
import NewArrivals from "mainPages/Home/components/NewArrivals";
import TopBrands from "mainPages/Home/components/TopBrands";
import Testimonials from "mainPages/Home/components/Testimonials";
import ProductsContainer from "UI/ProductsContainer/ProductsContainer";
import SellersStories from "./components/SellersStories";

// url of simple banner home page
export const bannerIcon =
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ficon%20svg.webp?alt=media&token=a96944c7-1885-44a9-8ecb-d43e92358f57";

function HomePage() {
  // products data
  const { loading, data } = useSelector((state) => state.products);
  // necessary hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get all products data from data base
  // note: in home page we send get request for product just once
  useEffect(() => {
    // fetch products on mount
    dispatch(getFilteredProducts({ sortBy: "" }));

    // reset products data on umnount
    return () => {
      dispatch(resetProductsState());
    };
  }, []);

  return (
    <>
      <SellersStories />
      {/* hero section  */}
      <HeroSection />
      {/* Trend Products Section */}
      <ProductsContainer
        isLoading={loading}
        products={data}
        filterObject={{ tags: ["trend"] }}
        title="Trend Products"
      />
      {/* simple mobile banner (only visible on mobile screens) */}
      <aside
        onClick={() => {
          window.scrollTo(0, 0);
          navigate(`/EcoVibe/Explore-Products/`);
        }}
        className="sm:hidden select-none h-24 mx-auto w-11/12 shadow-md shadow-black/15 bg-gray-50 flex items-center justify-start gap-x-3 px-4 py-2 rounded-lg"
      >
        <img src={bannerIcon} alt="banner icon" />

        <div className="">
          <p className="text-base font-bold hover:text-opacity-80">
            Special Offers
            <span className="p-1 mx-2 border border-gray-300 rounded-full">
              😱
            </span>
          </p>

          <span className="text-xs">
            We make sure you get the <br /> offer you need at best prices
          </span>
        </div>
      </aside>
      {/* Collections Gallery Section */}
      <CollectionsGallery isLoading={loading} products={data} />
      {/* Product Types Gallery */}
      <ProductsGallery />
      {/* Offer Cards */}
      <TopCards />
      {/* Best Sellers Section */}
      <BestSellers />
      {/* Top Categories Section */}
      <TopCategories />
      {/* Best Selling Banners */}
      <BestSellingBanners />
      {/* Our Services Section */}
      <NewArrivals />
      {/* Top Brands */}
      <TopBrands />
      {/* User May Like Products */}
      <ProductsContainer
        isLoading={loading}
        products={data}
        filterObject={{ tags: ["featured"] }}
        title="You May Also Like"
      />
      {/* Simple Banner */}
      <div className="mx-auto 2xl:max-w-screen-2xl my-6 md:my-8">
        <div
          id="wrapper"
          className="flex flex-col md:flex-row items-center relative bg-gray-200 md:h-96"
        >
          <div className="md:w-2/3 bg-primary-300/50 h-full flex flex-col justify-evenly px-6 py-3">
            <div className="flex flex-col gap-y-12">
              <h2 className="text-4xl font-semibold">It's All About You</h2>
              <p className="text-xl">
                🛍️ Discover a world of products that revolve around you! 🌟 🎁
                From personalized gifts to trendy essentials, it's all about
                you! 💫 🛒 Shop for items that fit your style, taste, and
                personality. 🌈 💝 Treat yourself to the best with our curated
                collection just for you! ✨ 🌟 Explore, shop, and make every
                purchase uniquely yours! 🛍️
              </p>
            </div>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/EcoVibe/Explore-Products/`);
              }}
              className="w-fit text-xl hover:bg-primary-50 hover:text-primary-950 transition-all px-6 py-3 bg-primary-950 rounded-xl text-white self-end"
            >
              Shop Now
            </button>
          </div>
          <motion.div
            initial={{ rotateY: 100 }}
            whileInView={{ rotateY: 0 }}
            transition={{ type: "spring", damping: 30 }}
            className="md:w-1/3 h-full"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fdesktop%20banner.webp?alt=media&token=1fe830ea-57ba-4a6e-a3e8-28c16c180db9"
              className="w-full h-full object-cover translate-y-6 md:-translate-x-4 hover:translate-y-0 hover:translate-x-0 transition-all duration-300"
              alt="banner image"
            />
          </motion.div>
        </div>
      </div>
      {/* Testimoianls */}
      <Testimonials />
    </>
  );
}

export default HomePage;
