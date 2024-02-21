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
    </>
  );
}

export default HomePage;
