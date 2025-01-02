import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "/src/config/firebase";
import { useSelector } from "react-redux";
import { useRoomsData } from "../../RoomsContext";
import { LastOrders, OrdersChart } from "./CustomerInfo.tabs";

const CustomerInfo = () => {
  // orders state
  const [{ loading, orders }, setOrders] = useState({
    orders: [],
    loading: false,
  });
  // necessary data & hooks
  const { userId } = useSelector((state) => state.userData);
  const {
    selectedRoom: { receiver },
  } = useRoomsData();

  // get orders data
  useEffect(() => {
    async function getOrders() {
      try {
        // set loading
        setOrders((prev) => ({ ...prev, loading: true }));
        // ref to orders from this seller that related to this customer
        const ordersQuery = query(
          collection(db, "Orders"),
          where("customerId", "==", receiver.receiverId),
          where("sellers", "array-contains", userId)
        );
        // get orders
        const orders = await getDocs(ordersQuery).then(({ docs }) =>
          docs.map((doc) => doc.data())
        );
        // dispatch success
        setOrders({ loading: false, orders });
      } catch (error) {
        // dispatch error
        setOrders({ loading: false, orders: [] });
        console.log(error);
      }
    }

    getOrders();
  }, []);

  return (
    <div className="size-full flex-col flex gap-y-2">
      <div className="w-full h-1/5 flex items-center justify-start gap-x-4 px-4 py-2">
        <div className="size-20 rounded-full">
          <img
            src={receiver?.profilePic}
            alt="customer-avatar"
            className="size-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-y-1 w-4/6">
          <h2 className="text-xl font-semibold line-clamp-1">
            {receiver?.first_name + " " + receiver?.last_name}
          </h2>
          <p className="text-gray-800">{receiver?.email}</p>
          <p className="text-gray-800">{receiver?.address}</p>
        </div>
      </div>
      {/* must ordered categories chart */}
      <OrdersChart {...{ orders, loading }} />
      {/* orders list  */}
      <LastOrders {...{ orders, loading }} />
    </div>
  );
};

export default CustomerInfo;
