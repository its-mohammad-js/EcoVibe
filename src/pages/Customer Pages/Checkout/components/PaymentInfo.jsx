import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../../../common/hooks/useMediaQuery";
import { generateId } from "constants";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "src/config/firebase";
import toast from "react-hot-toast";
import AddCreditCardForm from "UI/Forms/AddCreditCardForm";
import { updateUserData } from "src/reducers/auth/userDataSlice";
import TextInput from "UI/Forms/TextInput";

const inputsOptions = [
  // full-name
  {
    name: "full_Name",
    placeholder: "John Doe",
    validation: {
      required: {
        value: true,
        message: "test",
      },
      minLength: {
        value: 4,
        message: "Min Length Is 4 Characters",
      },
    },
    cols: 3,
  },
  // phone-number
  {
    name: "phone_Number",
    placeholder: "892-345-145",
    validation: {
      minlength: {
        value: 8,
        message: "Please Enter 8 Numbers At Least",
      },
    },
    cols: 3,
  },
  // email
  {
    name: "email",
    placeholder: "Example@mail.com",
    validation: {
      minLength: {
        value: 4,
        message: "Minimum Length Is 4 Characters",
      },
      pattern: {
        value: {},
        message: "Invalid email format",
      },
    },
    cols: 3,
  },
  // address
  {
    name: "address",
    placeholder: "Plsease Enter A Valid Address",
    validation: {
      minLength: {
        value: 15,
        message: "Minimum Length Is 15 Characters",
      },
    },
    cols: 3,
  },
  // post-code
  {
    name: "post_Code",
    placeholder: "XX-XX",
    validation: {
      minLength: {
        value: 4,
        message: "Minimum Length Is 4 Characters",
      },
      max: {
        value: 9999,
        message: "Invalide code format",
      },
    },
  },
  // country
  {
    name: "Country",
    placeholder: "Iran",
  },
  // city
  {
    name: "City",
    placeholder: "Tehran",
  },
];

function PaymentInfo({ shippingMethod, totalPrice, setLoading }) {
  // payment information
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ mode: "all" });
  // necessary data & hooks
  const {
    personalInformation: { first_name, last_name, address, creditCards },
    userId,
    cartData,
  } = useSelector((state) => state.userData);
  const [selectedCard, setCard] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [showAddCard, setCardModal] = useState();
  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1200,
    appendDots: appendDotsFunc,
    slidesToShow: !isMobile && creditCards?.length > 1 ? 2 : 1,
    slidesToScroll: !isMobile && creditCards?.length > 1 ? 2 : 1,
  };
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // slider (credit cards) pagination dots
  function appendDotsFunc(e) {
    const currentSlide = sliderRef?.current?.innerSlider.state.currentSlide;

    return (
      <div className="w-full bg-red-600">
        {e.map((dot, index) => (
          <button
            key={index}
            className={`${
              currentSlide === index ? "bg-primary-700" : "bg-gray-500"
            } p-1 lg:p-1.5 mx-0.5 rounded-full transition-all`}
          ></button>
        ))}
      </div>
    );
  }

  async function addNewOrder(formData) {
    if (!selectedCard) {
      toast.error("Please Select A Credit Card First");
      return;
    }
    // declare all seller's
    const sellers = cartData.map((item) => item.SellerId);
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
        <div className="grid gap-y-12 lg:gap-x-6 lg:grid-cols-6 lg:grid-rows-3 mb-16">
          {inputsOptions.map((input, index) => (
            <TextInput
              label={input.name.replace("_", " ")}
              key={index}
              id={input.name}
              placeholder={input.placeholder}
              register={{
                ...register(input.name, {
                  ...input.validation,
                  required: { value: true, message: "This Field Is Required" },
                }),
              }}
              error={errors[input.name]?.message}
              style={`w-full [&>input]:bg-gray-50 [&>p]:text-sm ${
                input.cols === 3 ? "lg:col-span-3" : "lg:col-span-2 lg:mt-1"
              }`}
            />
          ))}
        </div>
        <hr className="my-4" />
        {/* select crdit card */}
        <div className="w-full pb-8 lg:pb-0">
          <h6 className="font-medium mb-2 first-letter:uppercase lg:text-lg">
            Select Credit Card :
          </h6>
          {/* creidt card slides */}
          {creditCards?.length ? (
            <Slider
              ref={sliderRef}
              {...settings}
              className="lg:w-[50rem] lg:mx-auto"
            >
              {creditCards.map(
                ({ provider, code_number, name, cvv, cardId }, index) => (
                  <div onClick={() => setCard(cardId)} key={index}>
                    <div
                      className={`${
                        creditCards?.length <= 1 && "w-full xl:h-72"
                      } w-11/12 h-48 relative p-3.5 z-10`}
                    >
                      <p
                        className={`${
                          selectedCard === cardId
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        } absolute text-primary-600 text-lg p-2 rounded-full bg-gray-50 transition-all`}
                      >
                        <FaCheck />
                      </p>
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-300 to-primary-950 rounded-2xl">
                        <img
                          src={provider.bgUrl}
                          alt="card-bg"
                          className="w-full h-full object-cover object-right rounded-2xl"
                        />
                      </div>

                      <div className="w-full h-full flex flex-col items-center justify-end text-gray-200">
                        <p className="text-xl lg:text-2xl font-semibold mb-2">
                          {code_number}
                        </p>

                        <div className="flex items-center justify-between w-full">
                          <p className="font-medium">{name}</p>
                          <p>CVV : {cvv}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Slider>
          ) : (
            <div className="flex items-center justify-center flex-col gap-y-2 py-8">
              <p className="font-bold">You Don't Have Credit Card</p>
              <button
                onClick={() => setCardModal(true)}
                type="button"
                className="px-2 py-1.5 text-sm text-white bg-primary-600 rounded-md"
              >
                Add New
              </button>
            </div>
          )}
        </div>

        <div className="fixed lg:static bottom-0 left-0 p-3 bg-gray-100 w-full rounded-t-lg z-10 border-t-2 border-gray-300 lg:p-0 lg:border-0 lg:mt-8">
          <button className="px-4 py-2 w-full bg-primary-600 rounded-lg text-gray-50 text-lg">
            Complete Order
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
