import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "customerPages/Checkout/components/OrderSummary";
import PaymentInfo from "customerPages/Checkout/components/PaymentInfo";
import ShipingDetails from "customerPages/Checkout/components/ShipingDetails";
import { LoaderIcon } from "react-hot-toast";

function CheckoutPage() {
  const { loading: authLoading, cartData } = useSelector(
    (state) => state.userData
  );
  // shipping details
  const [shippMethod, setShippMethod] = useState(null);
  // necessary data & hooks
  const navigate = useNavigate();
  // calculate total price
  const totalPrice = cartData.reduce(
    (acc, order) => acc + Number(order.Price),
    0
  );
  const [orderLoading, setLoading] = useState(false);

  // on add order loading screen
  if (orderLoading)
    return (
      <div className="h-screen flex flex-col gap-y-5 justify-center items-center">
        <LoaderIcon className="size-24" />
        <h4 className="text-3xl font-bold text-primary-900 animate-pulse">
          Sumbit Your Order...
        </h4>
      </div>
    );

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

  // main components
  return (
    <div
      id="wrapper"
      className={`${
        authLoading && "animate-pulse select-none pointer-events-none"
      } mx-auto 2xl:max-w-screen-2xl px-2 py-1 lg:px-6 lg:py-4`}
    >
      <div className="lg:flex items-start justify-center lg:gap-x-20">
        <div className="lg:order-2 mb-4 lg:basis-1/3">
          <OrderSummary
            shippingCost={shippMethod?.cost}
            totalPrice={totalPrice}
          />
        </div>

        <div className="lg:basis-2/3">
          <PaymentInfo
            shippingMethod={shippMethod}
            totalPrice={totalPrice}
            setLoading={setLoading}
          />
        </div>
      </div>

      <div className="w-full order-3">
        <ShipingDetails
          onChangeMethod={setShippMethod}
          currentMehod={shippMethod}
        />
      </div>
    </div>
  );
}

export default CheckoutPage;
