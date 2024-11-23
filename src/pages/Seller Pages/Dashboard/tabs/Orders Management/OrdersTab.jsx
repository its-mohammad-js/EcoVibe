import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "src/config/firebase";
import OrderDetails from "./OrderDetails";
import toast from "react-hot-toast";
import FilterOrders from "./FilterOrders";
import OrdersTable from "./OrdersTable";
import { useDashboardData } from "../../DashboardContext";
import { useNavigate, useParams } from "react-router-dom";
import OrdersTabLoader from "UI/Loaders/OrdersTabLoader";

function OrdersTab() {
  // orders list state (all orders , without filter & fetch orders function)
  const {
    orderList: { orders, loading, error },
    getOrders,
  } = useDashboardData();
  // order detail modal
  const [{ detailShow, selectedOrder }, setOrderDetail] = useState({
    selectedOrder: null,
    detailShow: false,
  });
  // necessary data & hooks
  const { userId } = useSelector((state) => state.userData);
  // filtered orders
  const [filteredOrders, setFilteredOrders] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  // fetch orders on app mount
  useEffect(() => {
    getOrders();
  }, []);

  // open order data on query case
  useEffect(() => {
    // note: modalKey its used to read order id on this case
    if (orders.length) {
      // find selected order from order id (known as modalKey on params object)
      const selectedOrder = orders?.find(
        ({ orderId }) => orderId === `#${params?.modalKey}`
      );
      // display selected order
      if (selectedOrder) setOrderDetail({ detailShow: true, selectedOrder });
    }
  }, [params, orders]);

  // change order (delivery) status
  async function changeOrderStatus(order, status) {
    try {
      // update order data with new delivery status
      let updatedOrder = {
        orders: {
          ...order.allItems,
          [userId]: {
            ...order.allItems[userId],
            delivery_status: status,
          },
        },
      };
      // add order data to updated order (ignore all items property)
      Object.entries(order).forEach(([key, value]) => {
        if (key !== "orders" && key !== "allItems") updatedOrder[key] = value;
      });
      // ref to order on database
      const orderRef = doc(db, "Orders", order.orderId);
      await setDoc(orderRef, updatedOrder);
      toast.success("order updated");
      // fetch orders
      getOrders();
    } catch (error) {
      toast.error("failed to update order status");
    }
  }

  // close order detail modal (and clear query params)
  function onCloseOrderDetail() {
    setOrderDetail({ detailShow: false, selectedOrder: null });
    navigate("/EcoVibe/dashboard/Orders");
  }

  if (loading) return <OrdersTabLoader />;

  if (!orders?.length && error)
    return (
      <div className="h-screen flex items-center justify-center">
        <h4 className="text-3xl font-bold text-primary-500">
          You Haven't Any Order, Please Try Again Later
        </h4>
      </div>
    );

  if (!loading && orders?.length)
    return (
      <div className="px-2 py-1 lg:px-4 lg:py-2">
        {/* filter orders */}
        <FilterOrders allOrders={orders} onFilterChange={setFilteredOrders} />
        {/* orders table */}
        <OrdersTable
          filteredOrders={filteredOrders}
          onOrderDetail={setOrderDetail}
          onStatusChange={changeOrderStatus}
        />
        {/* order details modal */}
        <div
          className={`${
            detailShow
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 translate-y-96 lg:translate-y-0"
          } fixed inset-0 h-screen transition-all duration-500 z-50 lg:flex items-center justify-center`}
        >
          <div
            onClick={onCloseOrderDetail}
            className="fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm hidden lg:block"
          ></div>
          <div className="lg:w-2/5 z-50">
            {selectedOrder && (
              <OrderDetails
                orderData={selectedOrder}
                onModalClose={onCloseOrderDetail}
              />
            )}
          </div>
        </div>
      </div>
    );
}

export default OrdersTab;
