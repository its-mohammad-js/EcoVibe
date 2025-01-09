import { CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import { deliveryInfo } from "appData";
import { CiCalendar } from "react-icons/ci";
import useDisableScroll from "hooks/UseDisableScroll";
import { timestampToDate } from "helpers";
import OrderedItems from "./OrderedItems";
import PaymentInfo from "./PaymentInfo";
import DeliveryStatus from "./DeliveryStatus";

function OrderDetail({ order, onModalClose, updateOrders }) {
  // user data
  const {
    personalInformation: { first_name },
  } = useSelector((state) => state.userData);
  // order details & infomation's
  const { orderId, createdAt, paymentInfo } = order;
  const { delivery_status } = order.orders[0];
  useDisableScroll(Infinity, false);

  if (order)
    return (
      <div className="w-full h-full overflow-auto styled-scroll-bar bg-white flex flex-col lg:grid grid-cols-4 grid-rows-4 gap-4 px-2 py-1.5 lg:px-4 lg:py-2">
        {/* header */}
        <div className="col-span-4 flex flex-col justify-between gap-y-4">
          {/* order id & close modal btn */}
          <div className="flex items-center justify-between">
            <h4 className="flex items-center gap-1 text-xl lg:text-2xl font-medium">
              <span className="text-gray-500">Order</span>
              <p className="uppercase">{orderId.slice(0, 10)}</p>
            </h4>
            <button
              onClick={() => onModalClose("close")}
              className="p-2 bg-gray-100 rounded-full border border-gray-100 lg:text-2xl"
            >
              <CgClose />
            </button>
          </div>
          {/* order title */}
          <p>
            Hi dear <span className="font-medium">{first_name || "User"}</span>,
            thanks for your order! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum similique temporibus nemo labore quod
            alias accusamus animi quia odit, aliquid iusto ullam esse mollitia
            voluptates cupiditate impedit beatae cum. Ut.{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis placeat beatae laboriosam iste aut nemo corporis
            </span>
          </p>
          {/* delivery status & order data */}
          <div className="flex items-center justify-between">
            <p
              style={{
                color: deliveryInfo[delivery_status].color,
                borderColor: deliveryInfo[delivery_status].color,
              }}
              className="border-2 px-2 py-1 lg:px-4 lg:py-2 lg:text-xl rounded-md font-medium"
            >
              {deliveryInfo[delivery_status].label}
            </p>
            <div className="flex items-end gap-1">
              <p className="text-sm lg:text-lg">{timestampToDate(createdAt)}</p>
              <p className="text-3xl text-gray-400">
                <CiCalendar />
              </p>
            </div>
          </div>
        </div>
        {/* delivery status & delivery action btns */}
        <DeliveryStatus
          {...{
            updateOrders,
            onModalClose,
            order,
          }}
        />
        <hr />
        {/* ordered items */}
        <OrderedItems orders={order.orders} delivery_status={delivery_status} />
        <hr />
        {/* order payment information's */}
        <PaymentInfo paymentInfo={paymentInfo} sellerInfo={order.orders[0]} />
      </div>
    );
}

export default OrderDetail;
