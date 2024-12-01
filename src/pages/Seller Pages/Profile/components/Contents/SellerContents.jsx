import { useSelector } from "react-redux";
import { fakeArray } from "../../../../../common/utils/constants";
import { useProfileData } from "../../SellerProfilePage";
import LastOrders from "./LastOrders";
import LastProducts from "./LastProducts";
import Reviews from "./Reviews";

function SellerContents() {
  const { setContentMode, currentMode, isOwner } = useProfileData();
  const { auth_status } = useSelector((state) => state.userData);

  return (
    <div className="flex-1 w-full overflow-auto styled-scroll-bar relative">
      {/* action buttons */}
      <div className="flex items-center justify-center px-1 lg:w-2/3 lg:mx-auto sticky top-0 bg-inherit">
        <button
          onClick={() => setContentMode("products")}
          className={`${
            currentMode === "products" &&
            "font-bold border-b-2 border-b-gray-950"
          } text-base lg:text-lg px-4 py-2`}
        >
          Products
        </button>
        <button
          onClick={() => setContentMode("reviews")}
          className={`${
            currentMode === "reviews" &&
            "font-bold border-b-2 border-b-gray-950"
          } text-base lg:text-lg px-4 py-2`}
        >
          Reviews
        </button>
        <button
          disabled={isOwner || auth_status !== 200}
          onClick={() => setContentMode("orders")}
          className={`${
            currentMode === "orders" && "font-bold border-b-2 border-b-gray-950"
          } text-base lg:text-lg px-4 py-2 disabled:hidden`}
        >
          My Orders
        </button>
      </div>
      {/* grids */}
      <div className="flex flex-wrap">
        {currentMode === "products" ? (
          <LastProducts />
        ) : currentMode === "orders" ? (
          <LastOrders />
        ) : (
          <Reviews />
        )}
      </div>
    </div>
  );
}

export default SellerContents;
