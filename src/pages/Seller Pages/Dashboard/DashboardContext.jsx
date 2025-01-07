import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "src/config/firebase";
import { useSelector } from "react-redux";

const DashboardContextProvider = createContext();

function DashboardContext({ children }) {
  // seller orders list state
  const [orderList, setOrders] = useState({
    loading: false,
    orders: [],
    error: null,
  });
  // seller products state
  const [products, setProducts] = useState({
    products: [],
    loading: false,
    error: null,
  });
  // necessary data & hooks
  const { userId } = useSelector((state) => state.userData);

  // fetch orders related to this seller user
  const getOrders = async () => {
    try {
      setOrders((prev) => ({ ...prev, loading: true }));
      // ref to orders cell on data base
      const ordersRef = query(
        collection(db, "Orders"),
        where("sellers", "array-contains", userId)
      );
      // get all orders
      const { docs } = await getDocs(ordersRef);
      // get orders include items related to this seller
      const sellerOrders = docs
        .map((doc) => ({
          ...doc.data(),
          orders: doc.data().orders[userId],
          allItems: doc.data().orders,
        }))
        .filter((order) => order);

      // store orders or dispatch error (no orders find)
      if (!sellerOrders.length) {
        throw new Error("Failed to fetch orders or there is no order");
      } else {
        setOrders({
          loading: false,
          orders: sellerOrders,
          error: null,
        });
      }
    } catch (error) {
      // on other errors case
      setOrders({ loading: false, orders: [], error });
      console.log(error);
    }
  };

  // read all related products to this user
  async function getProducts() {
    try {
      setProducts((prev) => ({ ...prev, loading: true }));
      // ref to products related to this seller
      const productsQuery = query(
        collection(db, "Products"),
        where("SellerId", "==", userId)
      );
      // fetch products
      const products = await getDocs(productsQuery).then(({ docs }) =>
        docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setProducts({ loading: false, products, error: null });
    } catch (error) {
      setProducts({ products: [], loading: false, error });
      console.log(error);
    }
  }

  // fetch product on mount
  useEffect(() => {
    if (userId) {
      getProducts();
    }
  }, [userId]);

  return (
    <DashboardContextProvider.Provider
      value={{ orderList, getOrders, products, getProducts }}
    >
      {children}
    </DashboardContextProvider.Provider>
  );
}

export default DashboardContext;

export const useDashboardData = () => {
  return useContext(DashboardContextProvider);
};
