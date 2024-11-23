import { useEffect, useState } from "react";
import Select from "react-select";
import ProductDetails from "./ProductDetails";
import ProductsTabLoader from "UI/Loaders/ProductsTabLoader";
import { NavLink, useParams } from "react-router-dom";
import { useDashboardData } from "../../DashboardContext";
import { supportedCategories } from "constants";
import { BiSearch } from "react-icons/bi";

const categoryOptions = supportedCategories.map(({ title }) => ({
  label: title,
  value: title,
}));

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
  // selected filters state
  const [{ searchQuery, selectedCategory }, setFilters] = useState({
    searchQuery: "",
    selectedCategory: "",
  });
  const params = useParams();

  useEffect(() => {
    if (
      params?.modalKey &&
      params?.modalKey !== "add-story" &&
      params?.modalKey !== "add-product"
    ) {
      setDetail({
        modalIsShow: true,
        selectedItem: products.find(
          (product) => product.id === params?.modalKey
        ),
      });
    } else {
      setDetail({
        modalIsShow: false,
        selectedItem: null,
      });
    }
  }, [params, products]);

  // set products list to filtered items , as initial state
  useEffect(() => {
    setItems(products);
  }, [products]);

  // search items by name & sort them by cateogry
  function searchSortItems() {
    // loop on all products
    const filteredProducts = products.filter(({ Name, Category }) => {
      if (selectedCategory === "")
        return Name.toLowerCase().includes(searchQuery.toLowerCase());
      else
        return (
          Name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          Category === selectedCategory
        );
    });
    // display filtered items
    setItems(filteredProducts);
  }

  if (loading)
    // on loaidng case
    return <ProductsTabLoader />;

  if (!loading && products?.length)
    // display products & filters
    return (
      <div className="lg:flex gap-x-4 w-full min-h-screen">
        <div className="flex flex-col gap-y-2 flex-1">
          {/* search bar */}
          <div className="w-full px-2 xl:px-4 py-1">
            <div className="flex items-center justify-center bg-white rounded-md border border-gray-300 lg:h-14">
              <input
                type="text"
                className="outline-none px-2 w-[50%] lg:w-full bg-transparent lg:text-lg "
                placeholder="search"
                value={searchQuery}
                onChange={(e) => {
                  setFilters((prev) => ({
                    ...prev,
                    searchQuery: e.target.value,
                  }));
                }}
              />
              <Select
                placeholder="Sort By"
                className="text-sm lg:text-base [&>div]:lg:py-2 [&>div]:border-none border-l border-gray-300 [&>div]:rounded-none max-w-[40%] lg:w-2/12"
                options={[{ label: "All", value: "" }, ...categoryOptions]}
                onChange={({ value }) =>
                  setFilters((prev) => ({ ...prev, selectedCategory: value }))
                }
              />
              <button
                onClick={searchSortItems}
                className="px-4 py-3 rounded-r-md bg-primary-500 text-gray-50 lg:py-4 lg:text-2xl"
              >
                <BiSearch />
              </button>
            </div>
          </div>
          {/* products grid */}
          {filteredItems.length ? (
            <div className="bg-white grid gap-4 grid-cols-1 px-4 py-2 lg:grid-cols-4 max-h-[80vh] overflow-auto styled-scroll-bar">
              {filteredItems.map((item, index) => (
                <div
                  onClick={() =>
                    setDetail({ modalIsShow: true, selectedItem: item })
                  }
                  key={index}
                  className="h-32 lg:h-64 xl:h-96 cursor-pointer flex lg:flex-col items-center gap-x-3 bg-gray-100 border border-gray-200 rounded-md px-2 py-1"
                >
                  {/* item thumbnail */}
                  <div className="h-full w-5/12 lg:w-full lg:max-h-[60%] bg-gray-200 rounded-md">
                    <img
                      src={item.Thumbnail}
                      alt="product-thumbnail"
                      className="size-full object-cover rounded-md"
                    />
                  </div>
                  {/* item details */}
                  <div className="w-6/12 lg:w-full flex flex-col justify-evenly h-full lg:max-h-[40%] xl:justify-between xl:pt-3.5">
                    <h4 className="text-lg xl:text-xl line-clamp-1 font-medium">
                      {item.Name}
                    </h4>
                    <p className="line-clamp-3 py-1 text-xs xl:text-base xl:flex-1">
                      {item.Description}
                    </p>
                    <p className="text-primary-700 font-bold xl:text-lg">
                      ${item.Price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-screen flex items-center justify-center text-3xl font-bold text-primary-500 text-center">
              <h4>There is no product with this name or category</h4>
            </div>
          )}
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
