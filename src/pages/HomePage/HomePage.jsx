import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "src/redux/products/productsSlice";
import HeroSection from "../../components/Home/HomeHeroSection";
import TrendProductsSection from "../../components/Home/TrendProductsSection";

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
      <TrendProductsSection isLoading={loading} products={data} />
    </>
  );
}

export default HomePage;
