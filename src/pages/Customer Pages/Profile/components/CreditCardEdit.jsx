import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { BiTrash } from "react-icons/bi";
import { updateUserData } from "authActions/updateUserData";
import AddCreditCardForm from "UI/Forms/AddCreditCardForm";

function CreditCardEdit() {
  const [modalIsShow, setModal] = useState(false);
  // necessary data & hooks
  const { loading, personalInformation } = useSelector(
    (state) => state.userData
  );
  const { creditCards } = personalInformation;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDotsFunc,
  };
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

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

  function removeCardHandler(cardId, name) {
    const updatedCardsData = creditCards?.filter(
      (card) => card.cardId !== cardId
    );

    dispatch(
      updateUserData({
        data: { ...personalInformation, creditCards: updatedCardsData },
        field: "personalInformation",
      })
    );
  }

  return (
    <div
      className={`${
        loading && "animate-pulse"
      } bg-gray-50 px-4 pt-2 pb-8 border border-gray-400 rounded-md mt-2`}
    >
      <div className="flex items-center justify-between">
        <h6 className="text-base font-bold">Your Credit Cards :</h6>
        <button
          onClick={() => setModal(true)}
          className="px-3 py-1.5 bg-primary-500 rounded-md text-sm text-white"
        >
          Add Card
        </button>
      </div>
      {/* crdit cards slider */}
      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="w-full mt-2 relative">
          {creditCards?.map(
            ({ provider, name, code_number, cvv, cardId }, index) => (
              <div key={index} className="w-full h-48 relative z-10 p-3.5 ">
                <button
                  onClick={() => removeCardHandler(cardId, name)}
                  className="absolute text-red-400 text-3xl"
                >
                  <BiTrash />
                </button>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-300 to-primary-950 rounded-2xl">
                  <img
                    src={provider.bgUrl}
                    alt="card-bg"
                    className="w-full h-full object-cover object-right rounded-2xl"
                  />
                </div>

                <div className="w-full h-full flex flex-col items-center justify-end text-gray-200">
                  <p className="text-xl font-medium lg:text-2xl mb-2">
                    {code_number}
                  </p>

                  <div className="flex items-center justify-between w-full">
                    <p className="font-medium">{name}</p>
                    <p>CVV : {cvv}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
      {/* add new credit card modal */}
      <div
        className={`${
          modalIsShow ? "visible opacity-100" : "invisible opacity-0"
        } transition-all duration-200`}
      >
        <AddCreditCardForm onModalClose={() => setModal(false)} />
      </div>
    </div>
  );
}

export default CreditCardEdit;
