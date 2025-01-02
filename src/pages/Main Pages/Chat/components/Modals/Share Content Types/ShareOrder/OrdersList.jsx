import { useSelector } from "react-redux";
import { useRoomsData } from "../../../RoomsContext";
import { useEffect, useState } from "react";
import { query } from "firebase/database";
import { collection, getDocs, where } from "firebase/firestore";
import { db } from "/src/config/firebase";
import OrderShareListLoader from "UI/Loaders/OrderShareListLoader";
import OrderItem from "./OrderItem";

function OrdersList({ onCloseModal }) {
  // orders type : sells || purchases
  const [{ loading, orders, ordersType }, setOrders] = useState({
    loading: false,
    orders: [],
    ordersType: "sells",
  });
  // search input state
  const [searchQuery, setQuery] = useState("");
  // necessary data & hookd
  const { selectedRoom } = useRoomsData();
  const { userId, userType } = useSelector((state) => state.userData);

  // set order type
  useEffect(() => {
    setOrders((prev) => ({
      ...prev,
      ordersType: userType === "customer" ? "purchases" : "sells",
    }));
  }, [userType]);

  // get orders
  async function getOrders() {
    try {
      setOrders((prev) => ({ ...prev, loading: true }));
      // ref to orders related to this user
      const ordersQuery = query(
        collection(db, "Orders"),
        ordersType === "purchases"
          ? where("customerId", "==", userId)
          : where("sellers", "array-contains", userId)
      );
      // all orders (sells / purchases)
      const res = await getDocs(ordersQuery).then(({ docs }) =>
        docs.map((doc) => ({
          ...doc.data(),
        }))
      );
      // separate sells from pusrchases based on ordersType
      const orders = res
        .map((order) => ({
          ...order,
          orders:
            ordersType === "purchases"
              ? order.orders[selectedRoom.receiver.receiverId]
              : order.orders[userId],
        }))
        .filter((order) =>
          ordersType === "purchases"
            ? order.orders
            : order.customerId === selectedRoom.receiver.receiverId
        );
      // dispatch success
      setOrders((prev) => ({ ...prev, loading: false, orders }));
    } catch (error) {
      // dispatch error
      setOrders((prev) => ({ ...prev, loading: false }));
      console.log(error);
    }
  }

  // fetch orders
  useEffect(() => {
    getOrders();
  }, [ordersType]);

  // search orders
  function serachOrders() {
    return orders.filter(({ orderId }) =>
      orderId.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="size-full bg-gray-50 rounded-md px-2 py-2 flex flex-col justify-between">
      {/* header */}
      <div>
        <input
          type="text"
          onChange={({ target }) => setQuery(target.value)}
          value={searchQuery}
          placeholder="search orders"
          className="px-4 py-2 w-full rounded-md outline-none bg-gray-50 border border-gray-300"
        />
        <div
          className={`${
            userType === "customer" && "hidden"
          } mb-1 mt-2 flex items-center justify-between gap-x-1`}
        >
          <button
            onClick={() =>
              setOrders((prev) => ({ ...prev, ordersType: "sells" }))
            }
            className={`${
              ordersType === "sells" && "!border-gray-600"
            } px-4 py-3 w-1/2 h-full border-b-2 border-transparent transition-all`}
          >
            my sells
          </button>
          <button
            onClick={() =>
              setOrders((prev) => ({ ...prev, ordersType: "purchases" }))
            }
            className={`${
              ordersType === "purchases" && "!border-gray-600"
            } px-4 py-3 border-b-2 border-transparent w-1/2 h-full transition-all`}
          >
            my purchases
          </button>
        </div>
      </div>
      {/* orders list */}
      <div className="w-full overflow-auto h-full scroll-smooth styled-scroll-bar">
        <div className="flex flex-col gap-y-2 px-2 py-1">
          {loading ? (
            <OrderShareListLoader />
          ) : orders.length ? (
            serachOrders().map((order, i) => (
              <OrderItem
                key={i}
                orderData={order}
                onCloseModal={onCloseModal}
                ordersType={ordersType}
              />
            ))
          ) : (
            <h4 className="m-auto text-center my-20 text-lg font-semibold line-clamp-2">
              {ordersType === "sells"
                ? "you have no orders from this customer"
                : "you have no purchase this seller"}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrdersList;
