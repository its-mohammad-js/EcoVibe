import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TbMinus, TbPlus, TbTrash } from "react-icons/tb";
import { updateUserData } from "authActions/updateUserData";

function BoxActions({
  addOrderToCart,
  removeProductFromCart,
  currentOrder,
  setOrder,
  actionRef,
  setActionRef,
}) {
  const { orderId, isOrdered, orderQuantity } = currentOrder;
  // current user data
  const { cartData, loading } = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // change order quantity
  function onQuantityChange(type) {
    // set action ref
    setActionRef("quantityChange");
    // change order detail if product is not ordered
    if (!isOrdered && !orderId.length) {
      switch (type) {
        case "increase":
          setOrder((prev) => ({
            ...prev,
            orderQuantity: prev.orderQuantity + 1,
          }));
          break;
        case "decrease":
          setOrder((prev) => ({
            ...prev,
            orderQuantity: prev.orderQuantity - 1,
          }));
          break;
      }
    }
    // update qunatity of ordered product
    else {
      // find order index
      const orderIndex = cartData.findIndex(
        (order) => order.orderId === orderId
      );
      // update quantity of order
      const updatedOrder = {
        ...cartData[orderIndex],
        quantity:
          type === "increase"
            ? cartData[orderIndex].quantity + 1
            : cartData[orderIndex].quantity - 1,
      };
      // take a copy from cart & update it
      const updatedCart = [...cartData];
      updatedCart[orderIndex] = updatedOrder;
      // update user cart data with new order data
      dispatch(updateUserData({ data: updatedCart, field: "cartData" }));
    }
  }

  return (
    <div className="fixed lg:static z-40 bottom-0 right-0 lg:mt-2 bg-gray-100 lg:bg-opacity-0 w-full rounded-t-xl px-4 lg:px-0 py-4 lg:py-2 flex items-center justify-between">
      {/* order product button */}
      <button
        onClick={() =>
          isOrdered ? navigate("/EcoVibe/bag/cart") : addOrderToCart()
        }
        className={`${
          loading &&
          actionRef === "orderProduct" &&
          "animate-pulse !bg-gray-400"
        } px-4 py-2.5 bg-primary-400 text-white lg:text-lg rounded-md disabled:bg-gray-500 transition-all size-fit`}
      >
        {isOrdered ? "Show In Cart" : "Add To Cart"}
      </button>
      {/* change quantity buttons */}
      <div
        className={`${
          loading && actionRef === "quantityChange" && "animate-pulse"
        } ${
          isOrdered
            ? "visible opacity-100 translate-y-0"
            : "opacity-0 invisible -translate-y-10"
        } flex transition-all items-center gap-x-4`}
      >
        <div className="flex gap-x-3">
          <button
            disabled={loading}
            onClick={() =>
              orderQuantity > 1
                ? onQuantityChange("decrease")
                : removeProductFromCart()
            }
            className="hover:bg-gray-950 px-2.5 hover:text-gray-50 rounded-md"
          >
            {orderQuantity === 1 && isOrdered ? (
              <TbTrash className="text-2xl" />
            ) : (
              <TbMinus className="text-xl" />
            )}
          </button>
          <span className="px-2 lg:px-4 py-1 border-b-2 border-gray-950 lg:text-lg">
            {orderQuantity}
          </span>
          <button
            disabled={loading}
            onClick={() => onQuantityChange("increase")}
            className="bg-gray-950 text-gray-50 p-2.5 rounded-md"
          >
            <TbPlus className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoxActions;
