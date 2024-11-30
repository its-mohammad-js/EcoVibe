import {
  getDatabase,
  query,
  ref,
  serverTimestamp,
  update,
} from "firebase/database";
import { useSelector } from "react-redux";
import { db } from "/src/config/firebase";
import { collection, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { generateId } from "constants";
import { useRoomsData } from "../../RoomsContext";
import { fakeArray } from "constants";

function ShareProduct({ onCloseModal }) {
  // products state
  const [{ loading, products, error }, setProducts] = useState({
    loading: false,
    products: [],
    error: null,
  });
  // necessary data
  const { userId } = useSelector((state) => state.userData);
  const {
    selectedRoom,
    messageMode,
    selectedMessage,
    setSelectedMessage,
    setMode,
  } = useRoomsData();

  // get products
  async function getMyProducts() {
    try {
      // set loading
      setProducts((prev) => ({ ...prev, loading: true }));
      // ref to products in data-base
      const refQuery = query(
        collection(db, "Products"),
        where("SellerId", "in", [userId, selectedRoom.reciver.reciverId])
      );
      // response
      const productsData = await getDocs(refQuery).then(({ docs }) =>
        docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      // dispatch success
      setProducts({
        loading: false,
        products: productsData,
        error: !productsData.length && 404,
      });
    } catch (error) {
      setProducts({ loading: false, products: [], error: error });
      console.log(error);
    }
  }

  // get products related to this user
  useEffect(() => {
    getMyProducts();
  }, []);

  // send product as message
  function sendProduct(product) {
    // message data
    const messageData = {
      senderId: userId,
      createdAt: serverTimestamp(),
      uiid: generateId(userId),
      replyTo: messageMode === "reply" ? selectedMessage.uiid : null,
      type: "product",
      product: {
        id: product.id,
        thumbnail: product.Thumbnail,
        desc: product.Description,
        price: product.Price,
        name: product.Name,
      },
      visibleTo: [userId, selectedRoom.reciver.reciverId],
    };
    // ref to selectedRoom
    const db = getDatabase();
    const roomsRef = ref(db, `rooms/${selectedRoom.roomId}`);
    // update message list
    update(roomsRef, {
      messageList: [...(selectedRoom?.messageList || []), messageData],
      members: [userId, selectedRoom.reciver.reciverId],
    });
    // clode modal & reset state's
    onCloseModal();
    setSelectedMessage(null);
    setMode(null);
  }

  if (error)
    return (
      <div className="size-full bg-gray-50 rounded-md overflow-hidden px-2 py-1 flex flex-col justify-center items-center">
        <h2 className="text-center font-medium text-lg">
          No product related to you or your contact was found.
        </h2>
      </div>
    );

  return (
    <div className="size-full bg-gray-50 rounded-md overflow-hidden px-2 py-1 flex flex-col justify-evenly">
      {/* search products */}
      <div className="">
        <input
          type="text"
          placeholder="Search Your Products"
          className="w-full h-10 bg-gray-200 rounded-md px-4"
        />
      </div>
      {/* products list */}
      <div className="overflow-auto styled-scroll-bar h-5/6 px-2 py-1">
        <div className="grid grid-cols-2 gap-4">
          {!loading
            ? products?.map((item, i) => (
                <div
                  key={i}
                  onClick={() => sendProduct(item)}
                  className="h-48 bg-gray-200 rounded-lg px-2 flex flex-col justify-evenly cursor-pointer"
                >
                  <img
                    src={item.Thumbnail}
                    alt="item-thumbnail"
                    className="w-full h-36 object-cover rounded-lg"
                  />
                  <h4 className="line-clamp-1 text-sm font-bold">
                    {item.Name}
                  </h4>
                </div>
              ))
            : fakeArray(5).map((n, i) => (
                <div
                  key={i}
                  className="h-48 animate-pulse bg-gray-200 rounded-lg px-2 flex flex-col justify-evenly cursor-pointer"
                >
                  <div
                    alt="item-thumbnail"
                    className="w-full bg-gray-300 h-36 object-cover rounded-lg"
                  />
                  <h4 className="w-20 h-2 bg-gray-400 rounded-md"></h4>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default ShareProduct;
