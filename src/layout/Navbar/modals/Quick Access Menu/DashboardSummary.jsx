import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supportedCategories } from "../../../../common/utils/constants";
import { db } from "/src/config/firebase";
import { DashboradSummaryLoader } from "UI/Loaders/NavbarMenuLoader";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FaArrowRight } from "react-icons/fa";

const DashboradSummary = ({ onMenuNavigation }) => {
  const [{ error, loading, orders }, setOrders] = useState({
    orders: [],
    loading: false,
    error: null,
  });
  // necessary data & hooks
  const navigate = useNavigate();
  const { userId, userType, seller_step } = useSelector(
    (state) => state.userData
  );

  // fetch orders from data base
  async function fetchOrders() {
    try {
      // set loading true
      setOrders((prev) => ({ ...prev, loading: true }));
      // ref to orders related to this seller
      const ordersQuery = query(
        collection(db, "Orders"),
        where("sellers", "array-contains", userId)
      );
      // get all orders
      const orders = await getDocs(ordersQuery).then(({ docs }) =>
        docs.map((doc) => doc.data().orders[userId])
      );
      // get all ordered items
      const allOrderedItems = orders.flatMap((order) => order.items);
      // calculate all profit base on categories
      const totalProfit = supportedCategories.map(({ title }) => ({
        title: title.split(" ")[0],
        profit: allOrderedItems
          .filter(({ Category }) => Category === title)
          .reduce((acc, item) => acc + Number(item.Price), 0),
      }));
      // dispatch success
      setOrders({ orders: totalProfit, loading: false, error: null });
    } catch (error) {
      // dispatch error
      setOrders({ orders: [], loading: false, error: error });
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, [userId]);

  // on user is customer case
  if (!loading && userType === "customer")
    return (
      <div className="w-full h-52 flex flex-col items-center justify-center gap-y-3 relative">
        <h6 className="text-2xl font-semibold text-primary-900">
          Your Are Not A seller !
        </h6>
        <button
          onClick={() => navigate("/EcoVibe/sellers-solutions")}
          className="px-4 py-2 bg-primary-500 text-gray-50 rounded-md text-sm border border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all"
        >
          Become a Seller
        </button>
      </div>
    );

  // on loading screen
  if (loading) return <DashboradSummaryLoader />;

  // main components
  if (!loading && orders.length)
    return (
      <div className="w-full relative">
        {/* simple bar chart */}
        <div className="h-52 px-4 py-2 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={orders}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey="title"
                className="text-sm font-semibold"
              />
              <Radar
                dataKey="profit"
                stroke="#1128bb"
                fill="#1128bb"
                fillOpacity={0.4}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        {/* access links */}
        <div className="w-full flex flex-col items-start gap-y-1 py-1 px-0.5">
          <button
            onClick={() => {
              onMenuNavigation("/EcoVibe/dashboard");
            }}
            className="flex items-center gap-x-2 font-semibold text-gray-950 hover:text-gray-800 transition-all"
          >
            <p>Go To Dashboard</p>
            <FaArrowRight />
          </button>
          <button
            onClick={() => {
              onMenuNavigation("/EcoVibe/dashboard/Analytics/add-product");
            }}
            className="flex items-center gap-x-2 font-semibold text-gray-950 hover:text-gray-800 transition-all"
          >
            <p>Add New Product</p>
            <FaArrowRight />
          </button>
          <button
            onClick={() => {
              onMenuNavigation(
                seller_step === "third-step"
                  ? `/EcoVibe/seller/${userId}`
                  : "/EcoVibe/sellers/sign-up"
              );
            }}
            className="flex items-center gap-x-2 font-semibold text-gray-950 hover:text-gray-800 transition-all"
          >
            <p>
              {seller_step === "third-step"
                ? "My Profile"
                : "Add Business Information"}
            </p>
            <FaArrowRight />
          </button>
        </div>
      </div>
    );
};

export default DashboradSummary;
