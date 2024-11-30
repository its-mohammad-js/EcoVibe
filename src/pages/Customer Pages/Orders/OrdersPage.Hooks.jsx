import { collection, getDocs, query, where } from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "src/config/firebase";

// Custom hook for managing orders.
export function useOrders() {
  // orders state
  const [orders, setOrders] = useState({
    orders: [],
    items: [],
    loading: false,
    error: null,
  });

  // request current user orders
  const fetchOrders = useCallback(async (userId) => {
    // dispatch looading
    setOrders((prev) => ({ ...prev, loading: true, error: null }));
    try {
      // ref to user orders on firestore
      const refQuery = query(
        collection(db, "Orders"),
        where("customerId", "==", userId)
      );
      // get orders from firestore
      const res = await getDocs(refQuery);
      // throw error if user haven't any order
      if (res.empty) {
        throw new Error("You haven't placed an order yet. Start shopping now!");
      }
      // merge orders
      const orders = res.docs.map((doc) => ({
        ...doc.data(),
        orderId: doc.id,
      }));
      // seperate ordered items
      const items = getOrderedItems(orders);
      // dispatch success
      setOrders({ orders, items, loading: false, error: null });
    } catch (err) {
      // dispatch failure
      setOrders({ orders: [], items: [], loading: false, error: err });
    }
  }, []);

  // seperation ordered items
  const getOrderedItems = (orders) => {
    return orders.flatMap((order) =>
      Object.entries(order.orders).flatMap(([_, { delivery_status, items }]) =>
        items.map((item) => ({
          ...item,
          delivery_status,
          orderId: order.orderId,
          date: order.createdAt,
          paymentInfo: order.paymentInfo,
        }))
      )
    );
  };

  return {
    ...orders,
    fetchOrders,
    getOrderedItems,
  };
}

// Custom hook for managing search functionality for ordered items.
export function useOrderSearch(items) {
  // search query state
  const [searchQuery, setSearchQuery] = useState("");

  // filter ordered items based their names with search query
  const filteredItems = searchQuery
    ? items.filter((item) =>
        item.Name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  return {
    searchQuery,
    setSearchQuery,
    filteredItems,
  };
}
