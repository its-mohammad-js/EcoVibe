import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "hooks/useMediaQuery";
import { updateUserData } from "authActions/updateUserData";
import { useEffect, useState } from "react";

function CartItem({ orderDetails }) {
  const [actionRef, setActionRef] = useState(""); // last action ref
  const { cartData, loading } = useSelector((state) => state.userData); // current user data
  const isMobile = useMediaQuery({ maxWidth: 480 }); // detect screen size
  const dispatch = useDispatch(); // dispatch hook
  console.log(cartData[1]);

  // remove product order from cart
  function removeProduct() {
    setActionRef(orderDetails.orderId);
    // filter orders by id
    const updatedCart = cartData.filter(
      ({ orderId }) => orderId !== orderDetails.orderId
    );
    // update cart data with new data
    dispatch(updateUserData({ data: updatedCart, field: "cartData" }));
  }

  // change quantity of order
  function changeQuantity(action) {
    setActionRef(orderDetails.orderId);
    // update order with updated quantity
    const updatedOrder = {
      ...orderDetails,
      quantity:
        action === "increase"
          ? orderDetails.quantity + 1
          : orderDetails.quantity - 1,
    };
    // update cart with updated order
    const updatedCart = [...cartData];
    const orderIndex = updatedCart.findIndex(
      ({ orderId }) => orderId === orderDetails.orderId
    );
    updatedCart[orderIndex] = updatedOrder;
    // update userData with new Cart Values
    dispatch(updateUserData({ data: updatedCart, field: "cartData" }));
  }

  // reset action ref after each action
  useEffect(() => {
    if (actionRef !== "" && !loading) {
      setActionRef("");
    }
  }, [loading, actionRef]);

  return (
    <div
      className={`${
        loading &&
        actionRef === orderDetails.orderId &&
        "animate-pulse bg-gray-200"
      } bg-gray-200/40 rounded-md flex items-center h-36 md:h-40 px-2 py-1 relative`}
    >
      {/* product tumbnail */}
      <div className="basis-3/6 md:basis-2/12 h-full">
        <img
          src={orderDetails.Thumbnail}
          alt={orderDetails.Name}
          className="w-full h-full object-cover rounded-md"
        />

        <button
          disabled={loading}
          onClick={removeProduct}
          className="size-8 bg-slate-100 absolute top-1.5 left-2.5 md:left-auto md:right-2 md:text-lg md:size-9 rounded-full text-red-500"
        >
          <FaTrash className="mx-auto" />
        </button>
      </div>
      {/* sorder summary */}
      <div className="basis-3/6 md:flex-1 flex flex-col justify-between h-full px-3 py-1.5">
        {/* title */}
        <div className="">
          {/* product Category */}
          <p className="text-xs font-medium md:text-sm line-clamp-1 text-gray-500">
            <span>{orderDetails.Category}</span>
          </p>
          {/* order title */}
          <h4 className="line-clamp-1 md:line-clamp-2 md:text-xl">
            <span className="font-medium">{orderDetails.Name}</span> &nbsp;
            <span className="hidden md:inline">* {orderDetails.quantity}</span>
          </h4>
        </div>
        {/* selected options badge */}
        <div className="flex flex-wrap gap-x-1">
          {orderDetails.selectedOption?.map(
            ({ title, option }, index) =>
              (isMobile ? index < 2 : index > -1) && (
                <div
                  key={index}
                  style={{ backgroundColor: title === "color" && option }}
                  className={`${
                    title === "color" &&
                    "size-5 rounded-full ring-2 ring-gray-300"
                  }`}
                >
                  {title !== "color" && (
                    <div className="flex items-center gap-x-1 text-xs bg-gray-100 text-gray-950 border border-gray-500 w-fit px-2 py-0.5 rounded-xl">
                      <p className="line-clamp-1">{option}</p>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
        {/* price */}
        <div className="font-medium">
          <p>${orderDetails.Price}</p>
        </div>
      </div>
      {/* action button's */}
      <div className="basis-1/6 md:basis-2/12 h-full flex flex-col md:flex-row md:items-end md:gap-4 items-center justify-between">
        <button
          onClick={() => changeQuantity("increase")}
          className="w-full h-11 bg-slate-50 border rounded-xl flex items-center justify-center text-gray-900"
        >
          <FaPlus />
        </button>

        <div className="w-8/12 border-b-2 md:mb-2 border-slate-600 text-center">
          {orderDetails.quantity}
        </div>

        <button
          disabled={orderDetails?.quantity <= 1}
          onClick={() => changeQuantity("decrease")}
          className="w-full h-11 bg-slate-50 border rounded-xl flex items-center justify-center text-gray-900 disabled:opacity-50"
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
