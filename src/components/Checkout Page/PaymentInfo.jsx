import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BiTrash } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { updateUserData } from "../../redux/auth/regularUsers/regluarUsersSlice";
import { useNavigate } from "react-router-dom";
import { generateId } from "../../helpers/constants";

const inputsOption = {
  full_Name: {
    required: { value: true, message: "test" },
    minLength: {
      value: 4,
      message: "Min Length Is 4 Characters",
    },
  },
  phone_Number: {
    minlength: {
      value: 8,
      message: "Please Enter 8 Numbers At Least",
    },
  },
  email: {
    minLength: {
      value: 4,
      message: "Minimum Length Is 4 Characters",
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email format",
    },
  },
  address: {
    minLength: {
      value: 15,
      message: "Minimum Length Is 15 Characters",
    },
  },
  post_Code: {
    minLength: {
      value: 4,
      message: "Minimum Length Is 4 Characters",
    },
  },
};

function PaymentInfo({ shippingMethod }) {
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
    orders,
    cartData,
  } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [selectedCard, setCard] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDotsFunc,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  // set value with user personal information
  useEffect(() => {
    if (first_name && last_name && address) {
      const userData = [
        { title: "full_Name", value: `${first_name} ${last_name}` },
        { title: "address", value: address },
      ];

      userData.forEach(({ title, value }) => setValue(title, value));
    }

    if (creditCards.length) {
      setCard(creditCards[0]?.cardId);
    }
  }, [first_name, last_name, address, creditCards]);

  // slider pagination dots
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

  function addNewOrder(formData) {
    const orderData = {
      orderId: `#${Date.now()}`,
      paymentInfo: formData,
      shippingMethod: { title: shippingMethod?.title },
      orders: cartData,
    };

    dispatch(updateUserData({ data: [...orders, orderData], field: "orders" }));
    dispatch(updateUserData({ data: [], field: "cartData" }));
  }

  return (
    <div id="wrapper" className="bg-white px-4 py-2 rounded-md border">
      {/* title */}
      <h4 className="text-xl lg:text-2xl font-medium mb-4">
        Payment Information
      </h4>

      <form
        onSubmit={handleSubmit((formData) => {
          addNewOrder(formData);
        })}
      >
        {/* personal information */}
        <div className="grid grid-rows-4 lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-4">
          <Input
            name="full_Name"
            placeholder="John Doe"
            register={register}
            errors={errors}
          />
          <Input
            name="phone_Number"
            placeholder="883-992-145"
            register={register}
            errors={errors}
          />
          <Input
            name="email"
            placeholder="ex@email.com"
            register={register}
            errors={errors}
          />
          <Input
            name="address"
            placeholder="tehran,tajrish"
            register={register}
            errors={errors}
          />
        </div>
        {/* address info */}
        <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 mt-4 gap-4">
          <Input
            name="country"
            placeholder="Iran"
            register={register}
            errors={errors}
          />
          <Input
            name="city"
            placeholder="Tehran"
            register={register}
            errors={errors}
          />
          <Input
            name="post_Code"
            placeholder="94612"
            register={register}
            errors={errors}
          />
        </div>
        <hr className="my-4" />
        {/* select crdit card */}
        <div className="w-full pb-8 lg:pb-0">
          <h6 className="font-medium mb-2 first-letter:uppercase lg:text-lg">
            Select Credit Card :
          </h6>

          {creditCards?.length ? (
            <Slider
              ref={sliderRef}
              {...settings}
              className="lg:w-[50rem] lg:mx-auto"
            >
              {creditCards.map(
                ({ provider, cardCode, name, cvv, cardId }, index) => (
                  <div onClick={() => setCard(cardId)} key={index}>
                    <div className="w-11/12 h-48 relative p-3.5 z-10">
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
                        <p className="text-xl lg:text-2xl mb-2">{cardCode}</p>

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
              <button className="px-2 py-1.5 text-sm text-white bg-primary-600 rounded-md">
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
    </div>
  );
}

export default PaymentInfo;

const Input = ({ name, placeholder, register, errors }) => {
  return (
    <div className="lg:w-full">
      <h6 className="font-medium mb-2 first-letter:uppercase lg:text-lg">
        {name.replace("_", " ")} :
      </h6>

      <input
        type="text"
        {...register(name, {
          ...inputsOption[name],
          required: { value: true, message: "This Field Is Required" },
        })}
        placeholder={placeholder}
        className="w-full outline-none px-4 py-2 rounded-md text-sm bg-gray-50 border border-gray-200 focus:border-gray-500 transition-all lg:text-base"
      />

      <p className="text-sm text-red-400 px-1 mt-0.5">
        {errors[name]?.message}
      </p>
    </div>
  );
};
