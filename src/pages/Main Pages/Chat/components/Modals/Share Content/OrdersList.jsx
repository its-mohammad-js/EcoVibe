import { useSelector } from "react-redux";
import { useRoomsData } from "../../RoomsContext";
import { timestampToDate, generateId } from "/src/common/utils/constants";
import { useEffect, useState } from "react";
import {
  getDatabase,
  query,
  ref,
  serverTimestamp,
  update,
} from "firebase/database";
import { collection, getDocs, where } from "firebase/firestore";
import { db } from "/src/config/firebase";
import { GoInfo } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import OrderShareListLoader from "UI/Loaders/OrderShareListLoader";

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
  const {
    selectedRoom,
    messageMode,
    selectedMessage,
    setSelectedMessage,
    setMode,
  } = useRoomsData();
  const { userId, userType } = useSelector((state) => state.userData);
  const navigate = useNavigate();

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
              ? order.orders[selectedRoom.reciver.reciverId]
              : order.orders[userId],
        }))
        .filter((order) =>
          ordersType === "purchases"
            ? order.orders
            : order.customerId === selectedRoom.reciver.reciverId
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
  // share orders to the room
  function shareOrder(id) {
    // find selected order
    const selectedOrder = orders.find((order) => order.orderId === id);
    // ref to selected room
    const db = getDatabase();
    const roomsRef = ref(db, `rooms/${selectedRoom.roomId}`);
    // update message list
    update(roomsRef, {
      members: [userId, selectedRoom.reciver.reciverId],
      messageList: [
        ...(selectedRoom?.messageList || []),
        {
          uiid: generateId(userId),
          type: "order",
          senderId: userId,
          createdAt: serverTimestamp(),
          order: {
            orderId: selectedOrder.orderId,
            createdAt: selectedOrder.createdAt,
            totalPrice: selectedOrder.totalPrice,
            thumbnails: selectedOrder.orders.items.map(
              (item) => item.Thumbnail
            ),
          },
          replyTo: messageMode === "reply" ? selectedMessage.uiid : null,
          visibleTo: [userId, selectedRoom.reciver.reciverId],
        },
      ],
    });
    // close modal & reset states
    onCloseModal();
    setSelectedMessage(null);
    setMode(null);
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
            serachOrders().map(
              ({ orders, totalPrice, createdAt, orderId }, i) => (
                <div
                  key={i}
                  onClick={() => shareOrder(orderId)}
                  className="w-full cursor-pointer hover:bg-gray-300 transition-all h-28 bg-gray-200 rounded-md flex items-center px-2 py-2 gap-x-2.5 relative"
                >
                  {/* order thumbnail */}
                  <div className="size-20 bg-gray-100 overflow-hidden grid z-10 rounded-full grid-cols-2 grid-rows-2">
                    {orders.items.map(
                      ({ Thumbnail }, i) =>
                        i < 3 && (
                          <img
                            key={i}
                            className="size-full object-cover -z-10"
                            src={Thumbnail}
                          />
                        )
                    )}
                  </div>
                  {/* order title & total price */}
                  <div className="w-4/6">
                    <h4 className="line-clamp-1 break-words font-bold mb-1.5 w-11/12">
                      {orderId}
                    </h4>
                    <p className="text-gray-800 font-semibold">
                      Prcie: ${totalPrice}
                    </p>
                  </div>
                  {/* order info & date */}
                  <button
                    onClick={() =>
                      navigate(
                        ordersType === "sells"
                          ? `/EcoVibe/Dashboard/orders/${orderId}`
                          : `/EcoVibe/bag/orders`
                      )
                    }
                    className="absolute right-2 top-1.5 text-2xl opacity-70 hover:opacity-100 transition-all"
                  >
                    <GoInfo />
                  </button>
                  <p className="absolute right-2.5 bottom-1 text-xs">
                    {timestampToDate(createdAt)}
                  </p>
                </div>
              )
            )
          ) : (
            <h4 className="m-auto my-20 text-lg font-semibold line-clamp-2">
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
