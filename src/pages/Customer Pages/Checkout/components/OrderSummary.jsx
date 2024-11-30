import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "src/reducers/auth/userDataSlice";

function OrderSummary({ shippingCost, totalPrice }) {
  const { cartData } = useSelector((state) => state.userData); // current user cart data
  // necessary data & hooks
  const dispatch = useDispatch();
  const totalAmount = Number(totalPrice) + Number(shippingCost);

  // remove order product from cart
  function removeOrder(orderId) {
    const updatedCartData = cartData.filter(
      (order) => order.orderId !== orderId
    );

    dispatch(updateUserData({ data: updatedCartData, field: "cartData" }));
  }

  return (
    <div
      id="wrapper"
      className="bg-white w-full lg:px-4 pb-4 lg:border rounded-md"
    >
      <h4 className="text-xl lg:text-2xl font-medium my-2">Order Summary</h4>
      {/* orders list */}
      <div className="flex flex-col gap-4 h-96 overflow-auto px-1 py-0.5 styled-scroll-bar">
        {cartData.map(
          ({ Name, Price, quantity, Thumbnail, orderId }, index) => (
            <div
              key={index}
              className="border-2 rounded-md h-32 flex items-center px-2 py-1 gap-4 relative"
            >
              <div className="w-2/5 h-full">
                <img
                  src={Thumbnail}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flex flex-col flex-1 gap-y-0.5 text-gray-500">
                <h6 className="font-medium line-clamp-1 text-lg text-gray-950">
                  {Name}
                </h6>
                <p className="">${Price}</p>
                <p>Quantity: {quantity}</p>
              </div>

              <button
                onClick={() => removeOrder(orderId)}
                className="absolute top-1 right-1 text-2xl text-red-500"
              >
                <BiTrash />
              </button>
            </div>
          )
        )}
      </div>
      <hr className="my-4" />
      {/* checkout information */}
      <div className="flex flex-col gap-y-4 px-4 font-semibold text-gray-700">
        <p className="w-full flex items-center justify-between">
          <span>Subtotal:</span> <span>{totalPrice?.toFixed(2)}</span>
        </p>
        <p className="w-full flex items-center justify-between">
          <span>Shiping Cost:</span> <span>{shippingCost || 0}</span>
        </p>
        <p className="w-full flex items-center justify-between">
          <span>Discount: </span> <span>0</span>
        </p>
        <hr className="my-1" />
        <p className="w-full flex items-center justify-between">
          <span>Total Amount: </span>
          <span>{Number(totalAmount).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default OrderSummary;
