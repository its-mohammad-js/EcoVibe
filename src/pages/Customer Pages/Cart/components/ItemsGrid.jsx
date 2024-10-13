import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

function ItemsGrid({ cartData, filters }) {
  // filtered order data
  const [filteredOrders, setFilteredOrders] = useState([]);
  // filters data
  const { searchQuery, sortValue } = filters;
  // necessary hooks
  const navigate = useNavigate();

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

  console.log(filters.searchQuery);

  if (!cartData.length)
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 lg:gap-6">
        <h4 className="text-2xl lg:text-4xl text-center font-bold">
          Oops! 🛒 Your cart is currently empty.
        </h4>

        <button
          onClick={() => navigate("/EcoVibe/Explore-products/")}
          className="bg-primary-500 text-white hover:bg-primary-800 transition-all lg:text-xl px-4 py-2 rounded-md"
        >
          Explore Products...
        </button>
      </div>
    );

  if (!filteredOrders.length)
    return (
      <div className="w-full bg-white absolute right-0 h-[40rem] flex justify-center items-center">
        <h4 className="text-4xl text-center font-bold text-primary-800">
          No products contain the word
          <span className="text-primary-500">
            &nbsp; "{filters?.searchQuery}" &nbsp;
          </span>{" "}
          in in their names.
        </h4>
      </div>
    );

  return (
    <div className="mt-4 md:mt-6 grid gap-4 max-h-[30rem] overflow-y-auto styled-scroll-bar">
      {filteredOrders.map((order, index) => (
        <CartItem key={index} orderDetails={order} />
      ))}
    </div>
  );
}

export default ItemsGrid;
