import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductsTabLoader from "UI/Loaders/ProductsTabLoader";
import { NavLink, useParams } from "react-router-dom";
import { useDashboardData } from "../../DashboardContext";
import FilterProducts from "./FilterProducts";
import ProductsList from "./ProductsList";

function ProductTab() {
  // filtered products
  const [filteredItems, setItems] = useState([]);
  // detail (modal) state
  const [{ modalIsShow, selectedItem }, setDetail] = useState({
    modalIsShow: false,
    selectedItem: null,
  });
  const {
    products: { products, loading },
    getProducts,
  } = useDashboardData();
  const params = useParams();

  // open selected product on query navigates
  useEffect(() => {
    // validate params
    const isSpecificModal =
      params?.modalKey &&
      !["add-story", "add-product"].includes(params.modalKey);
    // set selected product from queries
    setDetail({
      modalIsShow: isSpecificModal,
      selectedItem: isSpecificModal
        ? products.find((product) => product.id === params.modalKey)
        : null,
    });
  }, [params, products]);

  // set products list to filtered items , as initial state
  useEffect(() => {
    setItems(products);
  }, [products]);

  if (loading)
    // on loaidng case
    return <ProductsTabLoader />;

  if (!loading && products?.length)
    // display products & filters
    return (
      <div className="lg:flex gap-x-4 w-full min-h-screen">
        <div className="flex flex-col gap-y-2 flex-1">
          {/* search bar */}
          <FilterProducts {...{ setItems, products }} />
          {/* products grid */}
          <ProductsList {...{ filteredItems, setDetail }} />
        </div>
        {/* products detail modal / side bar */}
        <div
          className={`${
            modalIsShow
              ? "fixed inset-0 bg-white opacity-100 visible lg:relative lg:w-4/12"
              : "opacity-0 invisible absolute right-0 -translate-x-96"
          } transition-all duration-500 lg:mx-2 z-50`}
        >
          <ProductDetails
            selectedItem={selectedItem}
            onModalClose={() =>
              setDetail({ modalIsShow: false, selectedItem: null })
            }
            getProducts={getProducts}
          />
        </div>
      </div>
    );

  // on no products find case
  if (!products?.length)
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h4 className="text-3xl text-primary-500 text-center font-bold">
          You Have No Product Yet
        </h4>
        <NavLink
          to="/EcoVibe/Dashboard/Products/add-product"
          className="px-4 py-2 my-2 text-lg bg-primary-500 text-gray-50 rounded-md"
        >
          Add Your First Product
        </NavLink>
      </div>
    );
}

export default ProductTab;
