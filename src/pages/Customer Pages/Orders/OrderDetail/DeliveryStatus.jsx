import { CgCheck } from "react-icons/cg";
import { deliveryInfo } from "../../../../common/utils/constants/appData";
import { doc, setDoc } from "firebase/firestore";
import toast, { LoaderIcon } from "react-hot-toast";
import { db } from "/src/config/firebase";
import IconicWarningAlert from "UI/Alerts/IconicAlert";
import { useState } from "react";

function DeliveryStatus({ updateOrders, onModalClose, order }) {
  // cancel alert warning modal
  const [cancelAlert, setAlert] = useState(false);
  // canceling (loading) process
  const [canceling, setCanceling] = useState(false);
  const { orderId } = order;
  const { delivery_status, SellerId } = order.orders[0];

  // change order delivery status
  async function cancelOrder() {
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

  return (
    <>
      {delivery_status !== 900 && (
        <div className="bg-gray-50 px-2 py-1 rounded-md col-span-3 row-start-2">
          <div className="flex items-center justify-between px-2 py-1">
            <h4 className="text-xl font-medium my-1">Delivery Status</h4>
            {delivery_status === 100 && (
              <div className="fixed bottom-0 px-4 py-2 bg-gray-50 w-full left-0 lg:static lg:w-fit lg:p-0">
                <button
                  onClick={cancelOrder}
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
            callBack={cancelOrder}
            onClose={() => setAlert(false)}
          />
        )}
        {/* canceling (loading) process */}
        {canceling && (
          <div className="z-50 absolute inset-0 flex items-center justify-center bg-gray-200/10 backdrop-blur-sm">
            <LoaderIcon className="size-24" />
          </div>
        )}
      </div>
    </>
  );
}

export default DeliveryStatus;
