import { FaArrowRight } from "react-icons/fa";
import useMediaQuery from "hooks/useMediaQuery";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

// slides data
const slidesInfo = [
  {
    title: "Tech Savvy Side ! ",
    subTitle: "Best Deals",
    offer: 40,
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftop%20card%20banner%20%20(1).webp?alt=media&token=5eaf487e-d10c-4184-9285-f6ea7eaf38e0",
    query: "productTypes=smart phones",
  },
  {
    title: "Sale of the Month",
    subTitle: "Summer Sale",
    offer: 25,
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftop%20card%20banner%20%20(1).jpg?alt=media&token=dae1321a-eda1-4803-bf01-f4080497ac28",
    query: "category=fashion",
  },
  {
    title: "home decor collection!",
    subTitle: " Explore our",
    offer: 10,
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftop%20card%20banner%20%20(2).webp?alt=media&token=5cf5b497-3d2c-40a4-9ed8-f4365a3802b9",
    query: "category=home decor",
  },
];

function TopCards() {
  // check window width
  const isMobile = useMediaQuery({ maxWidth: 480 });
  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDotsFunc,
  };

  // customize pagination controll (dots) (jsx)
  function appendDotsFunc(e) {
    return (
      <>
        <div className="flex justify-center sm:justify-between items-end mt-2 gap-x-2 absolute bottom-0 w-full py-2 md:hidden">
          {/* pagination numbers */}
          <div className="flex items-center justify-center gap-x-1.5">
            {e.map((dotNum) => (
              <p
                key={dotNum.key}
                className={`${
                  dotNum.props.className === "" ? "bg-gray-950" : "bg-gray-100"
                } w-2.5 h-2.5 rounded-full transition-all`}
              ></p>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl my-4 px-2 md:px-6">
      {isMobile ? (
        <Slider {...settings}>
          {slidesInfo.map((slide, index) => (
            <Card key={index} {...slide} />
          ))}
        </Slider>
      ) : (
        <div className="flex items-center justify-evenly gap-x-8 lg:gap-x-8 w-full px-4 py-2 group">
          {slidesInfo.map((slide, index) => (
            <Card key={index} {...slide} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TopCards;

const Card = ({ bgUrl, title, subTitle, offer, query }) => {
  const navigate = useNavigate(); // navigate hook

  return (
    <div className="w-full md:w-1/3 h-[500px] md:h-[550px] relative md:hover:-translate-y-6 transition-all duration-500 md:group-hover:scale-95 md:hover:!scale-105">
      {/* background image */}
      <div className="absolute inset-0 top-0 -z-10">
        <img
          src={bgUrl}
          alt="slide pic"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      {/* card title */}
      <div className="h-full w-full z-10 flex flex-col items-center py-6 lg:py-8 rounded-md">
        <div className="flex flex-col items-center gap-y-4">
          <p className="text-gray-200 text-lg">{subTitle}</p>
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-100 cursor-pointer">
            {title}
          </h2>
          <p className="text-gray-200 text-xl">
            Up To {offer}% &nbsp;
            <span className="bg-white text-accent-700 text-base px-3 py-1 rounded-xl">
              OFF
            </span>
          </p>
        </div>

        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/EcoVibe/Explore-Products/${query}`);
          }}
          className="flex items-center my-4 md:my-6 gap-x-2 text-xl text-accent-800 hover:bg-accent-50/60 transition-all duration-500 bg-white px-4 py-2 md:px-6 md:py-3 rounded-xl"
        >
          <span>Shop Now</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
