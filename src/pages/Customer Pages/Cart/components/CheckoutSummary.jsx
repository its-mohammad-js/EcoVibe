import { FaBitcoin, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CheckoutSummary() {
  const { cartData } = useSelector((state) => state.userData); // current user cart data
  // calculate total price
  const totalPrice = cartData.reduce(
    (acc, order) => acc + Number(order.Price),
    0
  );
  const navigate = useNavigate(); // navigate hook

  return (
    <div className="mt-4 flex flex-col items-center gap-y-3 px-4 py-3 bg-slate-100 rounded-md md:w-80 md:ml-auto">
      <div className="flex items-center justify-between w-full text-2xl font-medium">
        <h6>Total :</h6>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <p className="text-sm text-gray-500">
        Shipping,taxes & discounts calcuted
      </p>
      <button
        onClick={() => {
          window.scroll(0, 0);
          navigate("/EcoVibe/bag/checkout");
        }}
        className="py-2 text-lg bg-primary-500 w-full text-gray-50 rounded"
      >
        Checkout
      </button>
      <span className="text-sm text-gray-500">Secured Payments By</span>
      <div className="flex items-center gap-x-4 text-3xl">
        <p>
          <FaPaypal />
        </p>
        <p>
          <FaCcMastercard />
        </p>
        <p>
          <FaBitcoin />
        </p>
      </div>
    </div>
  );
}

export default CheckoutSummary;
