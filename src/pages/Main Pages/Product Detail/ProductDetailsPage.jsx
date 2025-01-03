import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BestSellProductTypes from "mainPages/Product Detail/components/BestSellProductTypes";
import CategoriesBanner from "mainPages/Product Detail/components/CategoriesBanner";
import ProductReviews from "./components/Reviews/ProductReviews";
import ProductInfo from "mainPages/Product Detail/components/ProductInfo/ProductInfo";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

function ProductDetailsPage() {
  const [product, setProduct] = useState({
    productData: null,
    loading: false,
    error: null,
  });
  const params = useParams();

  async function getProductData() {
    try {
      setProduct((prev) => ({ ...prev, loading: true }));
      const productRef = doc(db, "Products", params?.productId);
      const productData = await getDoc(productRef);
      setProduct({
        error: null,
        loading: false,
        productData: productData.data(),
      });
    } catch (error) {
      setProduct({ error, loading: false, productData: null });
      console.log(error);
    }
  }

  // read product data on component mount
  useEffect(() => {
    getProductData();
  }, [params]);

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <ProductInfo {...{ product }} />
      <ProductReviews productData={product.productData} />
      <BestSellProductTypes />
      <CategoriesBanner />
    </div>
  );
}

export default ProductDetailsPage;
