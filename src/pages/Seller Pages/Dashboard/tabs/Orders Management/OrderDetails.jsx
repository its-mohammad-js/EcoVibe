import { FaChevronRight } from "react-icons/fa";
import { timestampToDate } from "constants";
import { CgClose } from "react-icons/cg";
import useDisableScroll from "hooks/UseDisableScroll";

function OrderDetails({ orderData, onModalClose }) {
  const {
    orderId,
    orders,
    paymentInfo,
    shippingMethod,
    createdAt,
    totalPrice,
  } = orderData;
  useDisableScroll();

  return (
    <div className="flex flex-col px-4 py-2 h-screen lg:py-3 bg-gray-50 lg:h-[35rem] xl:h-[42rem] max-h-[90vh] overflow-auto styled-scroll-bar lg:rounded-md">
      {/* bread crumbs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 text-gray-600">
          <p>Orders</p>
          <FaChevronRight className="text-gray-400 text-sm" />
          <p className="line-clamp-1 w-28">{orderId}</p>
        </div>

        <button
          onClick={onModalClose}
          className="text-xl p-1 text-gray-50 bg-gray-400 rounded-full"
        >
          <CgClose />
        </button>
      </div>
      {/* header */}
      <div className="py-2 flex flex-col gap-y-1">
        <h4 className="flex gap-x-2 text-lg font-semibold">
          <p>ORDER ID:</p>
          <p className="line-clamp-1 w-2/3 break-words">{orderId}</p>
        </h4>

        <p className="text-sm text-gray-500">
          ordered at: {timestampToDate(createdAt)}
        </p>
      </div>
      {/* ordered items */}
      <div>
        <h4 className="text-xl font-bold text-gray-950">Ordered Items :</h4>
        <div className="flex flex-col gap-y-2 max-h-96 overflow-auto styled-scroll-bar">
          {/* order card */}
          {orders.items.map((item, index) => (
            <div
              key={index}
              className="w-full h-32 flex items-center px-2 py-2 border-b border-gray-400 last-of-type:border-none"
            >
              {/* item thumbnail */}
              <div className="h-full w-2/5 border-2 border-gray-200 bg-gray-200 rounded-lg">
                <img
                  src={item.Thumbnail}
                  alt="product-thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* order details */}
              <div className="w-3/5 flex flex-col h-full justify-evenly px-2">
                {/* product title */}
                <h6 className="font-semibold line-clamp-1">{item.Name}</h6>
                {/* quantity & price */}
                <div className="text-sm text-gray-700">
                  <p>
                    price ${item.Price} * {item.quantity}
                  </p>
                </div>
                {/* options list */}
                <p className="flex items-center flex-wrap">
                  {item.selectedOption.map(
                    (opt, index) =>
                      index < 10 && (
                        <span
                          key={index}
                          className="text-xs border-r border-gray-700 line-clamp-1 px-1 last-of-type:border-none"
                        >
                          {opt.option}
                        </span>
                      )
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* other details */}
      <div className="max-h-48 styled-scroll-bar overflow-auto">
        <div className="pt-2 pb-4 text-sm text-gray-800 border-b border-gray-400">
          <h4 className="text-gray-950 text-xl font-bold">Customer Info :</h4>
          <p>Name : {paymentInfo.full_Name}</p>
          <p>Country : {paymentInfo.country}</p>
          <p>City : {paymentInfo.city}</p>
          <p>Address : {paymentInfo.address}</p>
          <p>Email : {paymentInfo.email}</p>
          <p>Post Code : {paymentInfo.post_Code}</p>
          <p>Phone Number : {paymentInfo.phone_Number}</p>
        </div>
        {/* order summary & faq */}
        <div className="py-2 flex flex-col">
          <div className="order-2 text-sm text-gray-800">
            <h4 className="text-xl font-bold">Need Help ?</h4>
            <p className="underline cursor-pointer w-fit">Order Issues</p>
            <p className="underline cursor-pointer w-fit">Delivery Info</p>
            <p className="underline cursor-pointer w-fit">Returns</p>
          </div>
          <div className="text-sm text-gray-800 my-2">
            <h4 className="text-xl font-bold text-gray-950">Order Summary :</h4>
            <p>Total Price : ${totalPrice}</p>
            <p>Shipping Method : {shippingMethod.title}</p>
            <p>Total Items : {orders.items.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
