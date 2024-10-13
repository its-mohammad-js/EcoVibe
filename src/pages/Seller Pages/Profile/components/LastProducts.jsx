import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "src/reducers/products/productsSlice";
import { useParams } from "react-router-dom";
import { SellerLastProductLoader } from "../../../../common/UI elements/Loaders/SellerProfilePageLoader";

function LastProducts() {
  // last 3 products of this seller
  const [lastProducts, setLastProducts] = useState([]);
  // necessary data hooks
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const params = useParams();

  function getProducts() {
    dispatch(getFilteredProducts({ seller: [params.id] }));
  }

  // fetch seller products on components mount
  useEffect(() => {
    getProducts();
  }, []);

  // set last 3 products to app state
  useEffect(() => {
    if (data.length) {
      setLastProducts(data.filter((product, index) => index < 3 && product));
    }
  }, [data]);

  if (loading) return <SellerLastProductLoader />;

  if (lastProducts.length && !loading)
    return (
      <div className="bg-gray-200 px-4 py-8 my-4">
        <h4 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Last products of this seller
        </h4>
        <p className="text-sm lg:text-base my-2 lg:mb-4 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae maiores
          quam maxime perspiciatis! &nbsp;
          <p className="hidden lg:inline">
            Quia, officia? Eaque eum veniam debitis labore nemo possimus ipsa
            porro facilis, consequatur voluptatum, est numquam voluptas? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Quae maiores
            quam maxime perspiciatis! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quae maiores quam maxime perspiciatis!
          </p>
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-4 my-2 lg:justify-evenly lg:px-12">
          {lastProducts.map((item, index) => (
            <div
              key={index}
              className="w-full bg-gray-50 rounded-md h-80 flex flex-col lg:w-80"
            >
              <div className="w-full h-4/6 rounded-t-md bg-gradient-to-br from-primary-400 via-gray-300 to-primary-800">
                <img
                  src={item.Thumbnail}
                  alt="product-thumbnail"
                  className="size-full object-cover rounded-t-md"
                />
              </div>
              <div className="flex flex-col gap-y-1 lg:justify-evenly lg:h-2/6 px-3 py-1 lg:py-2">
                <h4 className="text-lg font-bold hover:text-primary-600 transition-all cursor-pointer">
                  {item.Name}
                </h4>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {item.Description}
                </p>

                <p className="text-gray-800 font-medium">$33</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default LastProducts;
