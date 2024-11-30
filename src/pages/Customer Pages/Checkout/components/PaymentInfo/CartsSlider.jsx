import { useRef } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import useMediaQuery from "hooks/useMediaQuery";
import { FaCheck } from "react-icons/fa";

function CartsSlider({ selectedCard, setCardModal, setCard }) {
  const {
    personalInformation: { creditCards },
  } = useSelector((state) => state.userData); // current user data
  const sliderRef = useRef(null); // ref to slider
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
  const isMobile = useMediaQuery({ maxWidth: 480 }); // detect screen size

  // slider (credit cards) pagination dots
  function appendDotsFunc(e, sliderRef) {
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

  return (
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
  );
}

export default CartsSlider;
