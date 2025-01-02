import { GoInfo } from "react-icons/go";
import { generateId, timestampToDate } from "helpers";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, serverTimestamp, update } from "firebase/database";
import { useSelector } from "react-redux";
import { useRoomsData } from "../../../RoomsContext";

function OrderItem({ orderData, ordersType, onCloseModal }) {
  const { orders, createdAt, orderId, totalPrice } = orderData;
  const {
    selectedRoom,
    setMode,
    setSelectedMessage,
    messageMode,
    selectedMessage,
  } = useRoomsData();
  const { userId } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  // share orders to the room
  function shareOrder() {
    // ref to selected room
    const db = getDatabase();
    const roomsRef = ref(db, `rooms/${selectedRoom.roomId}`);
    // update message list with new order type message
    update(roomsRef, {
      members: [userId, selectedRoom.receiver.receiverId],
      messageList: [
        ...(selectedRoom?.messageList || []),
        {
          uiid: generateId(userId),
          type: "order",
          senderId: userId,
          createdAt: serverTimestamp(),
          order: {
            orderId: orderId,
            createdAt: createdAt,
            totalPrice: totalPrice,
            thumbnails: orders.items.map((item) => item.Thumbnail),
          },
          replyTo: messageMode === "reply" ? selectedMessage.uiid : null,
          visibleTo: [userId, selectedRoom.receiver.receiverId],
        },
      ],
    });
    // close modal & reset states
    onCloseModal();
    setSelectedMessage(null);
    setMode(null);
  }

  return (
    <div
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
        <p className="text-gray-800 font-semibold">Prcie: ${totalPrice}</p>
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
  );
}

export default OrderItem;
