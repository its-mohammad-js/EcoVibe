import { useRef } from "react";
import { timestampToDate } from "constants";
import { BiChevronLeft } from "react-icons/bi";
import { IoOpenOutline } from "react-icons/io5";
import { useDashboardData } from "../../DashboardContext";
import OrdersSummaryLoader from "UI/Loaders/OrdersSummaryLoader";
import { useNavigate } from "react-router-dom";
import useHorizontalTouchScroll from "hooks/useTouchScroll";
import { scrollContainer } from "src/common/utils/constants";
import { useSelector } from "react-redux";

function OrdersSummary() {
  // order's data
  const {
    orderList: { orders, loading },
  } = useDashboardData();
  const { userId } = useSelector((state) => state.userData); // current user id
  const containerRef = useRef(); // ref to orders container
  useHorizontalTouchScroll(".orders-wrapper", loading); // horizontal scroll for orders list
  const navigate = useNavigate(); // navigate hook

  // display loading screen
  if (loading) return <OrdersSummaryLoader animate />;

  // main components
  if (!loading && orders?.length > 0)
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
            } inline-flex relative items-center gap-x-8 py-1 lg:py-2`}
          >
            {orders?.map((order, index) => (
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

  // no orders screen
  if (!loading && orders?.length <= 0) {
    return (
      <div className="size-full flex flex-col items-start">
        <h4 className="text-xl font-bold">Order's Summary</h4>

        <div className="font-medium text-gray-900 mt-10 text-center w-full">
          <p className="text-sm lg:text-xl">
            Unfortunately, no orders have been placed for your products yet,
            <span
              onClick={() =>
                navigate(`/EcoVibe/Explore-Products/seller=${userId}`)
              }
              className="lg:text-base text-sm text-primary-900 hover:text-primary-800 transition-all mt-1 ml-1 underline cursor-pointer"
            >
              Show me My products on the Explore page...
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default OrdersSummary;
