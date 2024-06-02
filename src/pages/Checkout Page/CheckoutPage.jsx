import { useSelector } from "react-redux";
import OrderSummary from "../../components/Checkout Page/OrderSummary";
import PaymentInfo from "../../components/Checkout Page/PaymentInfo";
import ShipingDetails from "../../components/Checkout Page/ShipingDetails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CheckoutPage() {
  const { loading, cartData, uid } = useSelector((state) => state.userData);
  // shiping details
  const [shipMethod, setShipMethod] = useState(null);
  // necessary data & hooks
  const navigate = useNavigate();

  useEffect(() => {
    console.log(uid);
    if (!uid) {
      toast("Looks like you're not signed in yet!");
      navigate("/EcoVibe/Sign-in");
    }
  }, []);

  if (!cartData.length)
    return (
      <div className="h-screen flex items-center justify-center flex-col">
        <h4 className="text-2xl font-medium lg:text-4xl">Cart Is Empty</h4>
        <button
          onClick={() => navigate("/EcoVibe/Explore-products/")}
          className="mt-4 lg:mt-6 px-4 py-2 rounded-md bg-primary-500 text-gray-50 lg:text-xl"
        >
          Explore Products
        </button>
      </div>
    );

  return (
    <div
      id="wrapper"
      className={`${
        loading && "animate-pulse"
      } mx-auto 2xl:max-w-screen-2xl px-2 py-1 lg:px-6 lg:py-4`}
    >
      <div className="lg:flex items-start justify-center lg:gap-x-20">
        <div className="lg:order-2 mb-4 lg:basis-1/3">
          <OrderSummary shippingCost={shipMethod?.cost} />
        </div>

        <div className="lg:basis-2/3">
          <PaymentInfo shippingMethod={shipMethod} />
        </div>
      </div>

      <div className="w-full order-3 mt-4 lg:mt-8">
        <ShipingDetails
          onChangeMethod={setShipMethod}
          currentMehod={shipMethod}
        />
      </div>
    </div>
  );
}

export default CheckoutPage;
