import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "src/redux/products/productsSlice";
import HeroSection from "src/components/Home/HomeHeroSection";
import ProductsContainer from "src/components/Products/ProductsContainer";
import CollectionsGallery from "src/components/Home/CollectionsGallery";
import ProductsGallery from "src/components/Home/ProductsGallery";
import TopCards from "src/components/Home/TopCards";
import BestSellers from "src/components/Home/BestSellers";
import { bannerIcon } from "src/helpers/constants";
import TopCategories from "src/components/Home/TopCategories";
import BestSellingBanners from "src/components/Home/BestSellingBanners";
import NewArrivals from "src/components/Home/NewArrivals";
import TopBrands from "../../components/Home/TopBrands";
import { motion } from "framer-motion";
import Testimonials from "../../components/Home/Testimonials";

function HomePage() {
  const { loading, data } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredProducts());
  }, []);

  return (
    <>
      {/* hero section  */}
      <HeroSection />
      {/* Trend Products Section */}
      <ProductsContainer
        isLoading={loading}
        products={data}
        filterObject={{ tags: ["Trend"] }}
        title="Trend Products"
      />
      {/* simple mobile banner (only visible on mobile screens) */}
      <aside className="sm:hidden h-24 mx-auto w-11/12 shadow-md shadow-black/15 bg-gray-50 flex items-center justify-start gap-x-3 px-4 py-2 rounded-lg">
        <img src={bannerIcon} alt="banner icon" />

        <div className="">
          <p className="text-base font-bold">
            Special Offers{" "}
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
        filterObject={{ tags: ["Featured"] }}
        title="You May Also Like"
      />
      {/* Simple Banner */}
      <div className="mx-auto 2xl:max-w-screen-2xl my-6 md:my-8">
        <div
          id="wrapper"
          className="flex flex-col md:flex-row items-center relative bg-gray-200 md:h-96"
        >
          <div className="md:w-1/2 bg-primary-300/50 h-full flex flex-col justify-evenly px-6 py-3">
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
            <button className="w-fit text-xl hover:bg-primary-50 hover:text-primary-950 transition-all px-6 py-3 bg-primary-950 rounded-xl text-white self-end">
              Shop Now
            </button>
          </div>
          <motion.div
            initial={{ rotateY: 200 }}
            whileInView={{ rotateY: 0 }}
            transition={{ type: "spring", damping: 30 }}
            className="md:w-1/2 h-full"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcharlesdeluvio-FK81rxilUXg-unsplash.jpg?alt=media&token=a1b1d956-7533-4c22-aec8-3f1a77af8b75"
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
