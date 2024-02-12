import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "src/redux/products/productsSlice";
import HeroSection from "../../components/Home/HomeHeroSection";
import ProductsContainer from "../../components/Products/ProductsContainer";
import CollectionsGallery from "../../components/Home/CollectionsGallery";
import ProductsGallery from "../../components/Home/ProductsGallery";
import TopCards from "../../components/Home/TopCards";
import BestSellers from "../../components/Home/BestSellers";
import { bannerIcon } from "../../helpers/constants";
import TopCategories from "../../components/Home/TopCategories";

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
      {/* Trend Products */}
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
      {/* collections gallery */}
      <CollectionsGallery isLoading={loading} products={data} />
      {/* product types gallery */}
      <ProductsGallery />
      {/* offer cards */}
      <TopCards />
      {/* best sellers section */}
      <BestSellers />
      {/* top categories section */}
      <TopCategories />
    </>
  );
}

export default HomePage;
