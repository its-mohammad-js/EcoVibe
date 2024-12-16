import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { supportedCategories } from "constants";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "/src/config/firebase";
import {
  DashboradSummaryLoader,
  MainMenuLoader,
} from "UI/Loaders/NavbarMenuLoader";

function QuickAccessMenu({ menuIsShow, onCloseMenu }) {
  // summary (main content of modal) state, cart || dashboard
  const [summaryShow, setSummary] = useState("cart");
  const { loading, auth_status, error } = useSelector(
    (state) => state.userData
  );
  const navigate = useNavigate();

  function onMenuNavigation(path) {
    navigate(path);
    onCloseMenu();
  }

  if (error)
    return (
      <div
        className={`${
          menuIsShow
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute top-12 w-72 h-56 -left-64 md:-left-14 xl:-left-8 md:top-[4.25rem] bg-gray-100 rounded-md shadow-2xl shadow-gray-800 transition-all flex flex-col items-center justify-evenly z-50 px-2 py-1`}
      >
        <div className="tooltip absolute -top-1 z-40 bg-gray-300 right-6 md:right-12"></div>
        <h6 className="font-bold text-center">
          Ops!, it seems we cant fetch your data, please refresh the page
        </h6>
      </div>
    );

  // on loading (user data) screen
  if (loading)
    return (
      <div
        className={`${
          menuIsShow
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute top-12 w-72 -left-64 md:-left-14 xl:-left-8 md:top-[4.25rem] bg-gray-100 rounded-md shadow-2xl shadow-gray-800 transition-all flex flex-col items-center justify-center z-50 px-2 py-1`}
      >
        <MainMenuLoader />
      </div>
    );

  // main components
  if (!loading && auth_status === 200)
    return (
      <div
        className={`${
          menuIsShow
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute top-12 w-72 -left-64 md:-left-14 xl:-left-8 md:top-[4.25rem] bg-gray-100 rounded-md shadow-2xl shadow-gray-800 transition-all flex flex-col items-center justify-center z-50 px-2 py-1`}
      >
        <div className="tooltip absolute -top-1 z-40 bg-gray-300 right-6 md:right-12"></div>
        {/* top action btn's */}
        <div className="flex justify-between w-full items-center py-1">
          <button
            onClick={() => setSummary("cart")}
            className={`${
              summaryShow === "cart" && "bg-gray-200"
            } px-4 py-2 w-1/2 text-center font-semibold hover:text-gray-700 text-gray-950 transition-all rounded-md`}
          >
            Bag
          </button>
          <button
            onClick={() => setSummary("dashboard")}
            className={`${
              summaryShow === "dashboard" && "bg-gray-200"
            } px-4 py-2 w-1/2 text-center font-semibold hover:text-gray-700 text-gray-950 transition-all rounded-md`}
          >
            Dashborad
          </button>
        </div>
        {/* main content */}
        {summaryShow === "cart" ? (
          <CartSummary {...{ onMenuNavigation }} />
        ) : (
          <DashboradSummary {...{ onMenuNavigation }} />
        )}
      </div>
    );
  // on unauthorized user case
  if (!loading && (auth_status === 401 || auth_status === 204))
    return (
      <div
        className={`${
          menuIsShow
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute top-12 w-72 h-56 -left-64 md:-left-14 xl:-left-8 md:top-[4.25rem] bg-gray-100 rounded-md shadow-2xl shadow-gray-800 transition-all flex flex-col items-center justify-evenly z-50 px-2 py-1`}
      >
        <div className="tooltip absolute -top-1 z-40 bg-gray-300 right-6 md:right-12"></div>
        <h6 className="font-bold text-center">
          You Need SignIn To Access This Section
        </h6>
        <button
          onClick={() => navigate("/EcoVibe/sign-in")}
          className="px-4 py-2 bg-primary-500 text-gray-50 rounded-md text-sm border border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all"
        >
          Sign in
        </button>
        <button
          onClick={() => {
            navigate("/EcoVibe/customers");
          }}
          className="flex items-center gap-x-2 text-sm font-semibold text-gray-950 hover:text-gray-800 transition-all"
        >
          <p>Create New Account</p>
          <FaArrowRight />
        </button>
      </div>
    );
}

export default QuickAccessMenu;

const CartSummary = ({ onMenuNavigation }) => {
  const { cartData } = useSelector((state) => state.userData);

  if (!cartData?.length)
    return (
      <div className="w-full h-52 flex flex-col items-center justify-center gap-y-3 relative">
        <h6 className="text-2xl font-semibold text-primary-900">
          Cart Is Empty 🛒
        </h6>
        <button
          onClick={() => onMenuNavigation("/EcoVibe/Explore-Products/")}
          className="px-4 py-2 bg-primary-500 text-gray-50 rounded-md text-sm border border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all"
        >
          Explore Products
        </button>

        <button
          onClick={() => {
            onMenuNavigation("/EcoVibe/bag/orders");
          }}
          className="flex items-center absolute bottom-2 left-2 gap-x-2 text-sm font-semibold text-gray-950 hover:text-gray-800 transition-all"
        >
          <p>View Order History</p>
          <FaArrowRight />
        </button>
      </div>
    );

  return (
    <>
      {/* cart summary */}
      <div className="w-full max-h-52 overflow-auto p-1 scroll-smooth styled-scroll-bar">
        <div className="flex flex-col gap-y-2">
          {cartData.map((item, i) => (
            <div
              key={i}
              className="w-full h-24 hover:bg-gray-200 transition-all rounded-md px-2 py-1 flex items-center justify-center"
            >
              <img
                src={item.Thumbnail}
                alt="item-thumbnail"
                className="w-2/5 h-full object-cover rounded-xl "
              />
              <div className="w-3/5 h-full flex flex-col justify-evenly px-2">
                <h6
                  onClick={() => onMenuNavigation(`/EcoVibe/bag/cart`)}
                  className="line-clamp-1 font-bold text-gray-900 hover:text-primary-500 transition-all cursor-pointer"
                >
                  {item.Name}
                </h6>
                <p className="text-sm line-clamp-1 text-gray-700">
                  {item.Category}
                </p>
                <p>price: ${item.Price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* access links */}
      <div className="w-full flex flex-col items-start gap-y-1 py-1">
        <button
          onClick={() => {
            onMenuNavigation("/EcoVibe/bag/cart");
          }}
          className="flex items-center gap-x-2 font-semibold text-gray-950 hover:text-gray-800 transition-all"
        >
          <p>Go To Cart</p>
          <FaArrowRight />
        </button>
        <button
          onClick={() => {
            onMenuNavigation("/EcoVibe/bag/orders");
          }}
          className="flex items-center gap-x-2 font-semibold text-gray-950 hover:text-gray-800 transition-all"
        >
          <p>View Order History</p>
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

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
