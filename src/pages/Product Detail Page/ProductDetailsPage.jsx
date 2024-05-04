import BestSellProductTypes from "../../components/Product Details Page/BestSellProductTypes";
import CategoriesBanner from "../../components/Product Details Page/CategoriesBanner";
import CommentsSection from "../../components/Product Details Page/CommentsSection";
import ProductInfo from "../../components/Product Details Page/ProductInfo";

function ProductDetailsPage() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <ProductInfo />
      {/* <CommentsSection /> */}
      <BestSellProductTypes />
      <CategoriesBanner />
    </div>
  );
}

export default ProductDetailsPage;
