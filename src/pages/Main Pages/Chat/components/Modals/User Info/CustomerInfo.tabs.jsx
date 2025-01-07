import { useEffect, useState } from "react";
import { supportedCategories } from "appData";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import CustomerInfoOrderLoader from "UI/Loaders/CustomerInfoOrderLoader";
import { timestampToDate } from "helpers";
import { useSelector } from "react-redux";
import { filter } from "lodash";

export const OrdersChart = ({ loading, orders }) => {
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

export const LastOrders = ({ loading, orders }) => {
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
        <div className="px-2 pb-12 lg:py-1 h-[75%] lg:h-auto overflow-auto styled-scroll-bar">
          <div className="flex flex-col gap-y-4">
            {orders.map((order, index) => (
              <div
                key={index}
                className="w-full h-24 bg-gray-200 cursor-pointer rounded-md px-2 py-1 flex flex-col justify-evenly"
              >
                <h4 className="line-clamp-1 break-words font-bold">
                  {order.orderId}
                </h4>
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
