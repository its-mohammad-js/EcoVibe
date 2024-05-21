import CartItem from "./CartItem";
import { useEffect, useState } from "react";

function ItemsGrid({ cartData, filters }) {
  // filtered order data
  const [filteredOrders, setFilteredOrders] = useState([]);
  // filters data
  const { searchQuery, sortValue } = filters;

  // filter & sort orders
  useEffect(() => {
    // filter product by their names
    let sortedOrders = cartData.filter((order) => {
      if (searchQuery.length) {
        return order.Name.toLowerCase().includes(searchQuery.toLowerCase());
      } else return order;
    });
    // sort product
    sortedOrders.sort((orderA, orderB) => {
      switch (sortValue) {
        case "high_price":
          return Number(orderB.Price) - Number(orderA.Price);
        case "low_price":
          return Number(orderA.Price) - Number(orderB.Price);
        case "oldest":
          return orderA.orderDate - orderB.orderDate;
        case "newest":
          return orderB.orderDate - orderA.orderDate;
        default:
          return orderA;
      }
    });
    // set filtered products (paginated)
    setFilteredOrders(sortedOrders);
  }, [cartData, filters]);

  return (
    <div className="mt-4 md:mt-6 grid gap-4 max-h-[30rem] overflow-y-auto styled-scroll-bar">
      {filteredOrders.map((order, index) => (
        <CartItem key={index} orderDetails={order} />
      ))}
    </div>
  );
}

export default ItemsGrid;
