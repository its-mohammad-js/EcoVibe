import { CgCheck, CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import { deliveryInfo, loadingIcon, timestampToDate } from "constants";
import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { BiArrowBack } from "react-icons/bi";
import toast from "react-hot-toast";
import { db } from "src/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import IconicWarningAlert from "UI/Alerts/IconicAlert";
import { useNavigate } from "react-router-dom";
import useDisableScroll from "../../../../common/hooks/UseDisableScroll";

function OrderDetail({ order, onModalClose, updateOrders }) {
  // user data
  const {
    personalInformation: { first_name },
  } = useSelector((state) => state.userData);
  // order details & infomation's
  const { orderId, createdAt, orders, paymentInfo } = order;
  const { delivery_status, SellerId, SellerName, SellerProfile } =
    order.orders[0];
  // canceling (loading) process
  const [canceling, setCanceling] = useState(false);
  // cancel alert warning modal
  const [cancelAlert, setAlert] = useState(false);
  const navigate = useNavigate();
  useDisableScroll();
  console.log(SellerId);

  // change order delivery status
  async function changeOrder() {
    // alert warning on first try to cancel order
    if (!cancelAlert) {
      setAlert(true);
    }
    // cancel order process
    else if (cancelAlert) {
      try {
        // change user screen to loading
        setCanceling(true);
        // update order data with new delivery status
        let updatedOrder = {
          orders: {
            ...order.allOrders,
            [SellerId]: {
              ...order.allOrders[SellerId],
              delivery_status: 900,
            },
          },
        };
        // add order data to updated order (ignore all items property)
        Object.entries(order).forEach(([key, value]) => {
          if (key !== "orders" && key !== "allOrders")
            updatedOrder[key] = value;
        });
        // ref to order on database
        const orderRef = doc(db, "Orders", orderId);
        // update order delivery status
        await setDoc(orderRef, updatedOrder);
        toast("Order Canceled");
        updateOrders();
        setCanceling(false);
        onModalClose("close");
      } catch (error) {
        toast.error("Faild To Cancel Order Plase Try Again");
        setCanceling(false);
        console.log(error);
      }
    }
  }

  if (order)
    return (
      <div className="w-full h-screen overflow-auto styled-scroll-bar bg-white flex flex-col lg:grid grid-cols-4 grid-rows-4 gap-4 px-2 py-1.5 lg:px-4 lg:py-2">
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
        {delivery_status !== 900 && (
          <div className="bg-gray-50 px-2 py-1 rounded-md col-span-3 row-start-2">
            <div className="flex items-center justify-between px-2 py-1">
              <h4 className="text-xl font-medium my-1">Delivery Status</h4>
              {delivery_status === 100 && (
                <div className="fixed bottom-0 px-4 py-2 bg-gray-50 w-full left-0 lg:static lg:w-fit lg:p-0">
                  <button
                    onClick={changeOrder}
                    className="px-4 py-2 border-2 font-medium border-primary-500 text-primary-500 rounded-md float-right"
                  >
                    Cancel Order
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-center gap-4 lg:gap-20 py-1">
              {Object.entries(deliveryInfo).map(
                ([key, { label, color }]) =>
                  key < 900 && (
                    <div key={key} className="flex flex-col items-center gap-2">
                      <p
                        className={`${
                          key > delivery_status
                            ? "bg-gray-300 text-gray-300"
                            : "bg-primary-500 text-gray-50"
                        } rounded-full relative flex items-center text-4xl lg:text-7xl justify-center`}
                      >
                        <span className="z-10">
                          <CgCheck />
                        </span>
                        {key < 400 && (
                          <span className="absolute w-1.5 h-20 lg:h-40 bg-inherit opacity-70 -right-4 rotate-90"></span>
                        )}
                      </p>
                      <p
                        className={`${
                          key > delivery_status
                            ? "text-gray-500"
                            : "text-primary-500 font-semibold"
                        }`}
                      >
                        {label}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
        <hr />
        {/* ordered items */}
        <div
          className={`${
            delivery_status === 900 &&
            "!row-start-2 [&>div]:max-h-96 mt-12 xl:mt-0"
          } bg-gray-50 px-2 py-1 rounded-md col-span-3 row-span-2 col-start-1 row-start-3`}
        >
          <h4 className="text-xl font-medium my-1">Orders Items</h4>
          <div className="flex flex-col gap-y-2 max-h-64 overflow-auto styled-scroll-bar">
            {orders.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1 w-full h-32 bg-gray-100 border border-gray-300 rounded-md"
              >
                {/* item thumbnail */}
                <div className="w-5/12 lg:w-1/5 h-full flex items-center justify-center">
                  <img
                    src={item.Thumbnail}
                    alt="item-thumbnail"
                    className="size-11/12 rounded-md object-cover"
                  />
                </div>
                {/* item deteils */}
                <div className="w-3/5 h-full flex flex-col items-start py-2 justify-between">
                  <h6 className="line-clamp-1 text-lg lg:text-xl font-medium text-gray-900">
                    {item.Name}
                  </h6>
                  <p className="text-sm font-medium">
                    Total Price: ${item.Price * item.quantity}
                  </p>
                  <div className="">
                    {item.selectedOption.map(
                      ({ title, option }, index) =>
                        index < 3 && (
                          <div
                            key={index}
                            className="flex items-center line-clamp-1"
                          >
                            <p className="text-sm font-medium line-clamp-1 max-w-[60%]">
                              {title}: &nbsp;
                            </p>
                            <span className="text-xs text-gray-800 flex-1">
                              {option}
                            </span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {/* order payment information's */}
        <div className="bg-gray-50 px-2 py-1 rounded-md row-span-3 col-start-4 row-start-2 mb-16">
          <h4 className="text-xl font-medium my-1">Seller</h4>
          <div className="flex items-center justify-between">
            <img
              src={SellerProfile}
              alt="seller-avatar"
              className="size-16 gradient-background rounded-full"
            />
            <h4
              onClick={() =>
                SellerId !== "eco vibe" &&
                navigate(`/EcoVibe/seller/${SellerId}`)
              }
              className="text-start w-full px-3 text-lg font-medium cursor-pointer hover:underline transition-all"
            >
              {SellerName}
            </h4>
            <button className="rotate-45 p-2 bg-gray-200 rounded-full">
              <BiArrowBack />
            </button>
          </div>
          <hr className="my-2" />
          <h4 className="text-xl font-medium my-1">Payment Infomtaion</h4>
          <div className="">
            {Object.entries(paymentInfo).map(([title, value], index) => (
              <div key={index} className="flex items-center justify-between">
                <p className="first-letter:uppercase font-semibold">
                  {title.replace("_", " ")}
                </p>
                <p className="line-clamp-1">{value}</p>
              </div>
            ))}
          </div>
        </div>
        {/* cancel order warning alert */}
        <div
          className={`${
            cancelAlert ? "visible opacity-100" : "invisible opacity-0"
          } fixed inset-0  z-50 flex items-center justify-center transition-all`}
        >
          <div
            onClick={() => {
              if (!canceling) setAlert(false);
            }}
            className="bg-gray-950/50 absolute inset-0"
          ></div>
          {/* warning alert */}
          {!canceling && (
            <IconicWarningAlert
              title="Are Sure About To Cancel This Order ?"
              subTitle="Back To Orders"
              callBack={changeOrder}
              onClose={() => setAlert(false)}
            />
          )}
          {/* canceling (loading) process */}
          {canceling && (
            <div className="z-50 absolute inset-0 flex items-center justify-center bg-gray-200/10 backdrop-blur-sm">
              <img src={loadingIcon} alt="loading-icon" className="size-36" />
            </div>
          )}
        </div>
      </div>
    );
}

export default OrderDetail;
