import BestSellProductTypes from "../../components/Product Details Page/BestSellProductTypes";
import CategoriesBanner from "../../components/Product Details Page/CategoriesBanner";
import ProductReviews from "../../components/Product Details Page/ProductReviews";
import ProductInfo from "../../components/Product Details Page/ProductInfo";

function ProductDetailsPage() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <ProductInfo />
      <ProductReviews />
      <BestSellProductTypes />
      <CategoriesBanner />
    </div>
  );
}

export default ProductDetailsPage;
