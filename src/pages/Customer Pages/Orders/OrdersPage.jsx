import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "src/config/firebase";
import { errorIconUrl } from "constants";
import OrdersList from "customerPages/Orders/components/OrdersList";
import OrderDetail from "customerPages/Orders/components/OrderDetail";
import OrdersPageLoader from "UI/Loaders/OrdersPageLoader";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

function OrdersPage() {
  // all orders data
  const [{ error, loading, orders }, setOrders] = useState({
    orders: [],
    error: null,
    loading: false,
  });
  // ordered products data
  const [items, setItems] = useState([]);
  // order detail modal data
  const [{ modalIsShow, order }, setDetail] = useState({
    modalIsShow: false,
    order: null,
  });
  // necessary data & hooks
  const { userId } = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const params = useParams();

  // get all related orders to this customer from database
  async function getOrders() {
    try {
      setOrders((prev) => ({ ...prev, loading: true }));
      // ref to orders collection on data base
      const refQuery = query(
        collection(db, "Orders"),
        where("customerId", "==", userId)
      );
      // get all user orders
      const res = await getDocs(refQuery);
      const orders = res.docs.map((doc) => doc.data());
      // dispatch error on empty case
      if (res.empty) {
        throw Error(
          "You haven't placed an order yet. Start shopping now to find what you need."
        );
      }
      // set all ordered products
      setOrders((prev) => ({
        ...prev,
        orders: orders,
        loading: false,
      }));
      // store all ordered items from all orders
      setItems(getOrderedItems(orders));
    } catch (error) {
      setOrders({ orders: [], loading: false, error });
    }
  }

  useEffect(() => {
    if (!loading && params?.orderId && orders?.length) {
      onOrderDetail("open", `#${params.orderId}`, params.sellerId);
    }
  }, [loading, params]);

  // read orders on app mount
  useEffect(() => {
    getOrders();
  }, []);

  // get all ordered products
  function getOrderedItems(orders) {
    const orderedProducts = [];
    orders.forEach((order) => {
      // Iterate over the "orders" array property
      for (const [key, { delivery_status, items }] of Object.entries(
        order.orders
      )) {
        items.forEach((item) => {
          orderedProducts.push({
            ...item,
            delivery_status,
            orderId: order.orderId,
            date: order.createdAt,
            paymentInfo: order.paymentInfo,
          });
        });
      }
    });

    return orderedProducts;
  }

  // search ordered items by name
  function searchItems(query) {
    // display all orders on empty case
    if (query === "") {
      setItems(getOrderedItems(orders));
    } else {
      // search on all orders data
      const filteredItems = getOrderedItems(orders).filter((item) =>
        item.Name.toLowerCase().includes(query)
      );
      setItems(filteredItems);
    }
  }

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

  if (loading) return <OrdersPageLoader />;

  if (!loading && orders.length)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl -mb-6 lg:-mb-8 px-2 py-1 lg:px-4 lg:py-2">
        {/* search orders by product name  */}
        <div className="flex">
          <input
            onChange={(e) => searchItems(e.target.value)}
            type="text"
            className="w-full outline-none border px-4 py-2 rounded-tl-md lg:py-3 focus:border-gray-500"
            placeholder="Search By Product Name"
          />
          <button className="px-4 py-2 bg-primary-500 text-gray-50 rounded-tr-md text-lg lg:text-3xl">
            <BiSearch />
          </button>
        </div>
        {/* ordered items list */}
        <OrdersList ordersData={items} onOrderDetail={onOrderDetail} />
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
              updateOrders={getOrders}
            />
          )}
        </div>
      </div>
    );

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
