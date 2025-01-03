import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "src/reducers/products/productsSlice";
import WishListLoader from "UI/Loaders/WishListLoader";
import { useNavigate } from "react-router-dom";
import ItemsGrid from "./components/ItemsGrid";
import WishListHeader from "./components/WishListHeader";

function WishListPage() {
  const { wishlist } = useSelector((state) => state.userData); // current user data
  // necessary data & hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get selected products data
  useEffect(() => {
    if (wishlist.length) dispatch(getFilteredProducts({ sortBy: "" }));
  }, []);

  if (!wishlist?.length)
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h6 className="text-2xl font-bold lg:text-4xl">Wish List Is Empty</h6>
        <button
          onClick={() => navigate("/EcoVibe/Explore-products/")}
          className="px-4 py-2 bg-primary-500 mt-4 rounded-md text-white lg:text-lg"
        >
          Explore Products
        </button>
      </div>
    );

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <div id="wrapper" className="px-2 py-2 md:px-4 flex flex-col gap-y-4">
        {/* header (user profile) */}
        <WishListHeader />
        {/* products container */}
        <ItemsGrid />
      </div>
    </div>
  );
}

export default WishListPage;
