import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { errorIconUrl } from "constants";
import OrdersList from "customerPages/Orders/components/OrdersList";
import OrderDetail from "customerPages/Orders/components/OrderDetail";
import OrdersPageLoader from "UI/Loaders/OrdersPageLoader";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useOrders, useOrderSearch } from "./OrdersPage.Hooks";

function OrdersPage() {
  // orders functionality & data
  const { error, items, loading, orders, fetchOrders, getOrderedItems } =
    useOrders();
  // search orders functionality
  const { filteredItems, searchQuery, setSearchQuery } = useOrderSearch(items);
  // order detail modal data
  const [{ modalIsShow, order }, setDetail] = useState({
    modalIsShow: false,
    order: null,
  });
  const { userId } = useSelector((state) => state.userData); // current user id
  // necessary data & hooks
  const navigate = useNavigate();
  const params = useParams();

  // display order on query navigates
  useEffect(() => {
    if (!loading && params?.orderId && orders?.length) {
      onOrderDetail("open", `#${params.orderId}`, params.sellerId);
    }
  }, [loading, params]);

  // read orders on app mount
  useEffect(() => {
    fetchOrders(userId);
  }, []);

  // order detail modal actions
  function onOrderDetail(action, orderId, sellerId) {
    // on open detail modal case
    if (action === "open") {
      // find selected order
      let selectedOrder = {
        ...orders?.find((item) => item.orderId === orderId),
        allOrders: orders?.find((item) => item.orderId === orderId).orders,
      };
      // assign ordered items to selected order (instead of all orders of all sellers)
      selectedOrder.orders = getOrderedItems([selectedOrder]).filter(
        (item) => item.SellerId == sellerId
      );
      // open order detail modal
      setDetail({ modalIsShow: true, order: selectedOrder });
    }
    // on close case
    else {
      setDetail({ modalIsShow: false, order: null });
    }
  }

  // loading screen
  if (loading) return <OrdersPageLoader />;

  // main components
  if (!loading && orders.length)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl -mb-6 lg:-mb-8 px-2 py-1 lg:px-4 lg:py-2">
        {/* search orders by product name  */}
        <div className="flex">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="text"
            className="w-full outline-none border px-4 py-2 rounded-tl-md lg:py-3 focus:border-gray-500"
            placeholder="Search By Product Name"
          />
          <button className="px-4 py-2 bg-primary-500 text-gray-50 rounded-tr-md text-lg lg:text-3xl">
            <BiSearch />
          </button>
        </div>
        {/* ordered items list */}
        <OrdersList ordersData={filteredItems} onOrderDetail={onOrderDetail} />
        {/* ordered item detail */}
        <div
          className={`${
            modalIsShow
              ? "visible opacity-100 translate-x-0"
              : "invisible opacity-0 translate-y-96"
          } fixed inset-0 z-50 transition-all duration-300 flex items-center bg-white`}
        >
          {order && (
            <OrderDetail
              order={order}
              onModalClose={onOrderDetail}
              updateOrders={() => fetchOrders(userId)}
            />
          )}
        </div>
      </div>
    );

  // error screen
  if (!loading && error)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl h-screen flex flex-col items-center justify-center gap-y-4">
        <img
          src={errorIconUrl}
          alt="error-icon"
          className="size-80 object-cover"
        />
        <h4 className="text-xl lg:text-3xl text-center font-bold text-primary-900">
          {error?.message}
        </h4>
        <button
          onClick={() => navigate("/EcoVibe/Explore-products/")}
          className="px-4 py-2 bg-primary-500 lg:text-lg rounded-md text-gray-50 border-2 border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all"
        >
          Explore Products
        </button>
      </div>
    );
}

export default OrdersPage;
