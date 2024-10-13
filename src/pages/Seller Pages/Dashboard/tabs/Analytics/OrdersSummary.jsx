import { useRef } from "react";
import { timestampToDate } from "constants";
import { BiChevronLeft } from "react-icons/bi";
import { IoOpenOutline } from "react-icons/io5";
import { useDashboardData } from "../../DashboardContext";
import OrdersSummaryLoader from "UI/Loaders/OrdersSummaryLoader";
import { useNavigate } from "react-router-dom";
import useHorizontalTouchScroll from "hooks/useTouchScroll";
import { scrollContainer } from "src/common/utils/constants";

function OrdersSummary() {
  // order's data
  const {
    orderList: { orders, loading },
  } = useDashboardData();
  const containerRef = useRef();
  useHorizontalTouchScroll(".orders-wrapper", loading);
  const navigate = useNavigate();

  // display loading screen
  if (loading) return <OrdersSummaryLoader animate />;

  if (!loading && orders?.length)
    return (
      <>
        <h4 className="text-xl font-bold">Order's Summary</h4>
        <button
          disabled={orders.length < 2}
          onClick={() => scrollContainer("left", containerRef.current)}
          className="disabled:hidden z-40 absolute left-0 lg:-left-2 p-1 bg-gray-100 text-primary-500 border border-primary-300 text-xl rounded-full"
        >
          <BiChevronLeft />
        </button>
        <div
          ref={containerRef}
          className="overflow-x-scroll overflow-y-hidden hidden-scroll-bar w-full orders-wrapper"
        >
          <div
            className={`${
              orders.length < 2 ? "px-2" : "px-8"
            } inline-flex items-center gap-x-8 py-1 lg:py-2`}
          >
            {orders.map((order, index) => (
              <div
                key={index}
                className="w-44 lg:w-52 h-28 relative bg-primary-100 px-3 py-1.5 rounded-md flex flex-col justify-evenly"
              >
                <button
                  onClick={() =>
                    navigate(
                      `/EcoVibe/dashboard/Orders/${order.orderId.replace(
                        "#",
                        ""
                      )}`
                    )
                  }
                  className="absolute top-2.5 right-2 text-lg lg:text-xl text-primary-700"
                >
                  <IoOpenOutline />
                </button>
                <p className="select-none text-lg font-bold">Order Id:</p>
                <p className="select-none line-clamp-1">{order.orderId}</p>
                <p className="select-none text-sm text-gray-950/60">
                  {timestampToDate(order.createdAt)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          disabled={orders.length < 2}
          onClick={() => scrollContainer("right", containerRef.current)}
          className="disabled:hidden absolute z-50 right-0 lg:-right-2 p-1 bg-gray-100 text-primary-500 border border-primary-300 text-xl rounded-full"
        >
          <BiChevronLeft className="rotate-180" />
        </button>
      </>
    );

  if (!loading && !orders?.length)
    return (
      <>
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-tr from-gray-50/10 via-gray-800/20 rounded-md to-gray-50/10 backdrop-blur-sm">
          <h4 className="text-4xl font-bold text-primary-800">
            You Haven't Any Order Yet :(
          </h4>
        </div>
        <OrdersSummaryLoader />
      </>
    );
}

export default OrdersSummary;
