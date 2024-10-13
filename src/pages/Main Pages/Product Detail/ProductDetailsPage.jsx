import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import BestSellProductTypes from "mainPages/Product Detail/components/BestSellProductTypes";
import CategoriesBanner from "mainPages/Product Detail/components/CategoriesBanner";
import ProductReviews from "mainPages/Product Detail/components/ProductReviews";
import ProductInfo from "mainPages/Product Detail/components/ProductInfo";
import { getFilteredProducts } from "src/reducers/products/productsSlice";

function ProductDetailsPage() {
  const params = useParams();
  const dispatch = useDispatch();

  // read product data on component mount
  useEffect(() => {
    dispatch(getFilteredProducts({ sortBy: "", idList: [params.productId] }));
  }, [params]);

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
