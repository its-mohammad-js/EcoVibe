import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartSummary = ({ onMenuNavigation }) => {
  const { cartData } = useSelector((state) => state.userData);

  if (!cartData?.length)
    return (
      <div className="w-full h-52 flex flex-col items-center justify-center gap-y-3 relative">
        <h6 className="text-2xl font-semibold text-primary-900">
          Cart Is Empty 🛒
        </h6>
        <button
          onClick={() => onMenuNavigation("/EcoVibe/Explore-Products/")}
          className="px-4 py-2 bg-primary-500 text-gray-50 rounded-md text-sm border border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all"
        >
          Explore Products
        </button>

        <button
          onClick={() => {
            onMenuNavigation("/EcoVibe/bag/orders");
          }}
          className="flex items-center absolute bottom-2 left-2 gap-x-2 text-sm font-semibold text-gray-950 hover:text-gray-800 transition-all"
        >
          <p>View Order History</p>
          <FaArrowRight />
        </button>
      </div>
    );

  return (
    <>
      {/* cart summary */}
      <div className="w-full max-h-52 overflow-auto p-1 scroll-smooth styled-scroll-bar">
        <div className="flex flex-col gap-y-2">
          {cartData.map((item, i) => (
            <div
              key={i}
              className="w-full h-24 hover:bg-gray-200 transition-all rounded-md px-2 py-1 flex items-center justify-center"
            >
              <img
                src={item.Thumbnail}
                alt="item-thumbnail"
                className="w-2/5 h-full object-cover rounded-xl "
              />
              <div className="w-3/5 h-full flex flex-col justify-evenly px-2">
                <h6
                  onClick={() => onMenuNavigation(`/EcoVibe/bag/cart`)}
                  className="line-clamp-1 font-bold text-gray-900 hover:text-primary-500 transition-all cursor-pointer"
                >
                  {item.Name}
                </h6>
                <p className="text-sm line-clamp-1 text-gray-700">
                  {item.Category}
                </p>
                <p>price: ${item.Price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* access links */}
      <div className="w-full flex flex-col items-start gap-y-1 py-1">
        <button
          onClick={() => {
            onMenuNavigation("/EcoVibe/bag/cart");
          }}
          className="flex items-center gap-x-2 font-semibold text-gray-950 hover:text-gray-800 transition-all"
        >
          <p>Go To Cart</p>
          <FaArrowRight />
        </button>
        <button
          onClick={() => {
            onMenuNavigation("/EcoVibe/bag/orders");
          }}
          className="flex items-center gap-x-2 font-semibold text-gray-950 hover:text-gray-800 transition-all"
        >
          <p>View Order History</p>
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default CartSummary;
