import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "customerPages/Checkout/components/OrderSummary";
import PaymentInfo from "./components/PaymentInfo/PaymentInfo";
import { LoaderIcon } from "react-hot-toast";

// shiping methods info
const methodsInfo = [
  {
    title: "FedEx Delivery",
    subTitle: "Delivery: Friday, 25",
    cost: "10.40",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FFedEx%20logo.png?alt=media&token=efa51dde-4d71-418f-b760-bef0edacfaf2",
  },
  {
    title: "DHL Fast Delivery",
    subTitle: "Delivery: Sunday, 27",
    cost: "10.99",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fdhl%20logo.png?alt=media&token=2350c603-e5ee-4a39-b919-e4c630e0afb6",
  },
];

function CheckoutPage() {
  const { loading: authLoading, cartData } = useSelector(
    (state) => state.userData
  ); // current user data
  const [shippMethod, setShippMethod] = useState(methodsInfo[0]); // shipping details
  const navigate = useNavigate(); // navigate hook
  // calculate total price
  const totalPrice = cartData.reduce(
    (acc, order) => acc + Number(order.Price),
    0
  );
  const [orderLoading, setLoading] = useState(null); // loading state

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
        {/* ordered items summary */}
        <div className="lg:order-2 mb-4 lg:basis-1/3">
          <OrderSummary
            shippingCost={shippMethod?.cost}
            totalPrice={totalPrice}
          />
        </div>
        {/* payment info */}
        <div className="lg:basis-2/3">
          <PaymentInfo
            shippingMethod={shippMethod}
            totalPrice={totalPrice}
            setLoading={setLoading}
          />
        </div>
      </div>
      {/* shipping details */}
      <div className="w-full order-3">
        <div className="flex flex-col px-4 py-2">
          <h4 className="text-xl lg:text-2xl font-medium my-2">
            Shipping Address
          </h4>

          <div className="flex flex-col lg:flex-row w-full items-center gap-4">
            {methodsInfo.map(({ logoUrl, cost, subTitle, title }, index) => (
              <div
                onClick={() =>
                  setShippMethod({ logoUrl, cost, subTitle, title })
                }
                key={index}
                className={`${
                  shippMethod?.title === title
                    ? "bg-primary-50 border-primary-500"
                    : "bg-gray-50"
                } flex items-center gap-x-4 w-full h-28 rounded-md px-4 py-2 lg:basis-3/12 border-2 transition-all`}
              >
                <div className="basis-2/5 border-r h-full">
                  {/* logo */}
                  <img
                    src={logoUrl}
                    alt="shipping-logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* shipping info */}
                <div className="h-full flex flex-col justify-center text-sm text-gray-700 gap-1">
                  <h6 className="text-lg line-clamp-1 font-bold">{title}</h6>
                  <p>{subTitle}</p>
                  <p>${cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
