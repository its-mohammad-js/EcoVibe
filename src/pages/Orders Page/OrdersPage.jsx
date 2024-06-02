import { useSelector } from "react-redux";
import OrderRow from "../../components/Orders Page/OrderRow";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function OrdersPage() {
  // necessary data & hooks
  const { orders, uid } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!uid) {
      toast("Looks like you're not signed in yet!");
      navigate("/EcoVibe/Sign-in");
    }
  }, []);

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl lg:px-4 lg:py-2 gradient-background -mb-6 lg:-mb-8">
      <div
        id="wrapper"
        className="w-full border-2 lg:rounded-md bg-gray-50 py-2"
      >
        <div className="flex flex-col gap-y-2 px-2 py-1">
          {orders.map((order, index) => (
            <OrderRow {...order} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
