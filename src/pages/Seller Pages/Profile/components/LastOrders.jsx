import { useNavigate, useParams } from "react-router-dom";
import { fakeArray, timestampToDate } from "../../../../common/utils/constants";
import { useProfileData } from "../SellerProfilePage";

function LastOrders() {
  const {
    sellerData: { orders },
  } = useProfileData();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-0.5 lg:-cols-3 w-full select-none cursor-pointer">
      {orders.map((order, i) => (
        <div
          onClick={() =>
            navigate(
              `/EcoVibe/bag/orders/${order.orderId.replace("#", "")}/${
                params.id
              }`
            )
          }
          key={i}
          className="h-36 lg:h-56 gradient-background relative hover:opacity-80 transition-all"
        >
          {/* order thumbnail */}
          <div className="grid grid-rows-2 grid-cols-2 h-full">
            {order.orders[params?.id].items.map(
              (item, i) =>
                i < 3 && (
                  <img key={i} className="object-cover" src={item.Thumbnail} />
                )
            )}
          </div>
          {/* order summary */}
          <div className="absolute left-0 bottom-0 lg:h-1/3 bg-gray-950/50 z-40 w-full px-2 py-1 flex flex-col justify-evenly">
            <h4 className="text-sm lg:text-base font-bold text-gray-200">
              Ordered at: {timestampToDate(order.createdAt)}
            </h4>
            <p className="text-sm font-medium text-gray-300">
              total price: ${order.totalPrice}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LastOrders;
