import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import { generateId } from "helpers";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "src/config/firebase";
import toast from "react-hot-toast";
import AddCreditCardForm from "UI/Forms/AddCreditCardForm";
import { updateUserData } from "authActions/updateUserData";
import PaymentForm from "./PaymentForm";
import CartsSlider from "./CartsSlider";
import { uniq } from "lodash";

function PaymentInfo({ shippingMethod, totalPrice, setLoading }) {
  // form data
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ mode: "all" });
  // current user data
  const {
    personalInformation: { first_name, last_name, address, creditCards },
    userId,
    cartData,
  } = useSelector((state) => state.userData);
  const [selectedCard, setCard] = useState(null); // selected credit card state
  const isMobile = useMediaQuery({ maxWidth: 480 }); // detect screen size
  const [showAddCard, setCardModal] = useState(); // add credit card modal
  const [step, setStep] = useState(1); // steps state (only used for mobile screens)
  // necessary data & hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleStepChange = () => {
      setStep(window.scrollY <= 450 ? 1 : 2);
    };

    window.addEventListener("scroll", handleStepChange);

    return () => {
      window.removeEventListener("scroll", handleStepChange);
    };
  }, []);

  // set value with user personal information
  useEffect(() => {
    if ((first_name && last_name) || address) {
      const userData = [
        { title: "full_Name", value: `${first_name} ${last_name}` },
        { title: "address", value: address || "" },
      ];

      userData.forEach(({ title, value }) => setValue(title, value));
    }

    if (creditCards?.length) {
      setCard(creditCards[0]?.cardId);
    }
  }, [first_name, last_name, address, creditCards]);

  // handle submit order
  async function addNewOrder(formData) {
    if (!selectedCard) {
      toast.error("Please select a credit card first");
      return;
    }
    // declare all seller's
    const sellers = uniq(cartData.map((item) => item.SellerId));
    // create an object of items with seller id key
    let orders = {};
    sellers.forEach((id) => {
      orders[id] = {
        items: cartData.filter(({ SellerId }) => SellerId === id),
        delivery_status: 100,
      };
    });
    // declare order id
    const orderId = `#${generateId(userId)}`;
    // order object
    const orderData = {
      orderId,
      createdAt: Timestamp.now(),
      paymentInfo: formData,
      shippingMethod: { title: shippingMethod?.title },
      orders,
      totalPrice: (Number(shippingMethod.cost) + Number(totalPrice)).toFixed(2),
      sellers,
      customerId: userId,
      createdByUser: true,
    };

    try {
      setLoading(true);
      // ref to order document
      const orderRef = doc(db, "Orders", orderId);
      // add new order to data base
      await setDoc(orderRef, orderData);
      // clear cart data after
      dispatch(updateUserData({ field: "cartData", data: [] }));
      toast.success("order submited successfully");
      navigate("/EcoVibe/bag/orders");
    } catch (error) {
      toast.remove();
      toast.error(error?.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="wrapper" className="bg-white px-4 py-2 rounded-md border">
      {/* title */}
      <h4 className="text-xl lg:text-2xl font-medium mb-4">
        Payment Information
      </h4>
      {/* payment info form */}
      <form
        onSubmit={handleSubmit((formData) => {
          addNewOrder(formData);
        })}
      >
        {/* main Inputs */}
        <PaymentForm {...{ register, errors }} />
        <hr className="my-4" />
        {/* select crdit card */}
        <CartsSlider {...{ selectedCard, setCardModal, setCard }} />
        {/* action buttons */}
        <div className="fixed lg:static bottom-0 left-0 p-3 bg-gray-100 w-full rounded-t-lg z-10 border-t-2 border-gray-300 lg:p-0 lg:border-0 lg:mt-8">
          <button
            onClick={() => step === 1 && window.scroll(0, 475)}
            type={step === 1 && isMobile ? "button" : "submit"}
            className="px-4 py-2 w-full bg-primary-600 rounded-lg text-gray-50 text-lg"
          >
            {step === 1 && isMobile ? "Continue to payment" : "Complete order"}
          </button>
        </div>
      </form>
      {/* add credit card form */}
      <div
        className={`${
          showAddCard ? "visible opacity-100" : "invisible opacity-0"
        } transition-all duration-200`}
      >
        <AddCreditCardForm onModalClose={() => setCardModal(false)} />
      </div>
    </div>
  );
}

export default PaymentInfo;
