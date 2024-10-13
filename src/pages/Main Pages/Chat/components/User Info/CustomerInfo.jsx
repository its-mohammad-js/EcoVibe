import { useEffect, useState } from "react";
import { useRoomsData } from "../RoomsContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "/src/config/firebase";
import { useSelector } from "react-redux";
import { timestampToDate, supportedCategories } from "constants";
import { filter } from "lodash";
import CustomerInfoOrderLoader from "UI/Loaders/CustomerInfoOrderLoader";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const CustomerInfo = () => {
  // orders state
  const [{ loading, orders }, setOrders] = useState({
    orders: [],
    loading: false,
  });
  // necessary data & hooks
  const { userId } = useSelector((state) => state.userData);
  const {
    selectedRoom: { reciver },
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
          where("customerId", "==", reciver.reciverId),
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
            src={reciver?.profilePic}
            alt="customer-avatar"
            className="size-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-y-1 w-4/6">
          <h2 className="text-xl font-semibold line-clamp-1">
            {reciver?.first_name + " " + reciver?.last_name}
          </h2>
          <p className="text-gray-800">{reciver?.email}</p>
          <p className="text-gray-800">{reciver?.address}</p>
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

const OrdersChart = ({ loading, orders }) => {
  const [totalProfit, setTotalProfit] = useState([]);

  // get total profit of selling on each category
  useEffect(() => {
    const totalOrders = orders.flatMap((item) =>
      Object.values(item?.orders).flatMap(({ items }) => items)
    );

    const profitByCategory = supportedCategories.map(({ title }) => ({
      title: title.split(" ")[0],
      profit: totalOrders
        .filter(({ Category }) => Category === title)
        .reduce((acc, item) => acc + Number(item.Price), 0),
    }));

    setTotalProfit(profitByCategory);
  }, [orders]);

  // main component
  return (
    <div className="w-full h-2/5">
      <h4 className="text-lg font-bold">Orders of this customer:</h4>
      <div className="size-full flex items-center justify-center">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className={`${loading && "animate-pulse"}`}
        >
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={totalProfit}>
            <PolarGrid />
            <PolarAngleAxis dataKey="title" className="text-xs" />
            <Radar
              dataKey="profit"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const LastOrders = ({ loading, orders }) => {
  // necessary data
  const { userId } = useSelector((state) => state.userData);

  // calculate total price of each order
  function calculateTotalPrice(items) {
    const orders = filter(items, (v, k) => k === userId);

    const totalPrice = orders
      .map((order) =>
        order.items.reduce((acc, curr) => acc + curr.Price * curr.quantity, 0)
      )
      .reduce((acc, price) => acc + price, 0);

    return totalPrice;
  }
  // loading screen
  if (loading) return <CustomerInfoOrderLoader />;
  // main component
  if (!loading && orders.length)
    return (
      <div className="w-full h-2/5">
        <h4 className="text-lg font-bold">Orders of this customer:</h4>
        <div className="px-2 py-1 overflow-auto styled-scroll-bar">
          <div className="flex flex-col gap-y-4">
            {orders.map((order, index) => (
              <div
                key={index}
                className="w-full h-20 bg-gray-200 cursor-pointer rounded-md px-2 py-1 flex flex-col justify-evenly"
              >
                <h4 className="line-clamp-1 font-bold">{order.orderId}</h4>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="font-semibold">Total price:</span> $
                    {calculateTotalPrice(order.orders)}
                  </p>
                  <p>
                    <span className="font-semibold">Order Date:</span>
                    {timestampToDate(order.createdAt, {})}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
