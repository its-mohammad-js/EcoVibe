import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarSearchProductLoader from "UI/Loaders/NavbarSearchProductLoader";
import { filterProducts } from "src/common/utils/filterPorducts";
import { useEffect } from "react";
import { isInArray } from "../../../../common/utils/constants";
import { getFilteredProducts } from "../../../../reducers/products/productsSlice";

// fetch products isn't allowed on this routes
const notAllowRequestRoutes = ["/EcoVibe/", "/EcoVibe/Shop"];

const ProductsList = ({ searchQuery, getProducts }) => {
  const { data: products, loading } = useSelector((state) => state.products);
  // necessary data & hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      // fetch products data in need case
      if (!isInArray(notAllowRequestRoutes, location.pathname)) {
        dispatch(getFilteredProducts());
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetch data on modal open
  useEffect(() => {
    if (getProducts) fetchProducts();
  }, [getProducts]);

  if (loading) return <NavbarSearchProductLoader />;

  if (!loading && !filterProducts(products, { searchQuery })?.length > 0)
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-xl font-bold text-center text-primary-900">
          There Is No Product Inclding
          <p className="line-clamp-1 w-64 text-primary-500">{searchQuery}</p> In
          Their Name
        </p>
      </div>
    );

  if (!loading && products?.length)
    return (
      <div className="flex flex-col gap-y-4 px-2 py-1">
        {filterProducts(products, { searchQuery }).map((item, index) => (
          <div
            key={index}
            className="w-full h-32 bg-gray-200 rounded-md px-3 py-1.5 flex items-center gap-x-2"
          >
            {/* product thumbnail */}
            <img
              src={item.Thumbnail}
              alt="item-thumbnail"
              className="w-1/2 sm:w-1/4 h-full object-cover bg-gray-100 rounded-xl"
            />
            {/* product info */}
            <div className="w-1/2 sm:w-3/4 h-full flex flex-col justify-between px-2 py-2 relative">
              <h4
                onClick={() => navigate(`/EcoVibe/Products/${item.id}`)}
                className="text-lg line-clamp-2 font-bold cursor-pointer hover:text-primary-700"
              >
                {item.Name}
              </h4>
              <p
                onClick={() =>
                  navigate(
                    `/EcoVibe/Explore-Products/category=${item.Category.toLowerCase()}`
                  )
                }
                className="font-semibold text-gray-800 cursor-pointer"
              >
                {item.Category}
              </p>
              <p>${item.Price}</p>
              {item?.Tags?.length > 0 && (
                <button
                  key={index}
                  onClick={() =>
                    navigate(
                      `/EcoVibe/Explore-Products/tags=${item.Tags[0].toLowerCase()}`
                    )
                  }
                  className="px-2 py-1 hidden lg:block absolute right-0 text-sm border border-gray-400 rounded-xl text-gray-800"
                >
                  #{item.Tags[0]}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
};

export default ProductsList;
