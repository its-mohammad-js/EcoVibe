import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const faqInfo = [
  {
    title: "Streamlined Sales Management",
    subTitle:
      "Effortlessly drive sales and track performance with our intuitive seller features!",
  },
  {
    title: "Boosted Product Visibility",
    subTitle:
      "Maximize exposure and reach your target audience easily using our seller tools!",
  },
  {
    title: "Insightful Analytics Tools",
    subTitle:
      "Make data-driven decisions and optimize your sales strategy with powerful seller analytics!",
  },
  {
    title: "Efficient Inventory Management",
    subTitle:
      "Simplify inventory tasks and keep your products organized with our user-friendly features!",
  },
  {
    title: "Mobile-Friendly Selling Solutions",
    subTitle:
      "Sell on-the-go and manage your store anytime, anywhere with our mobile-optimized seller platform!",
  },
];

const bannerUrl = {
  mobile:
    "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fjoin-us-banner-1-66682965004ef.webp?alt=media&token=db7edd72-e556-4c14-8816-75b2572c3d90",
  desktop:
    "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fjoin-us-banner-2-6668296857c54.webp?alt=media&token=f94bdee9-f629-4338-8151-43754aeb3b65",
};

function Faq() {
  const [faqShow, setFaqShow] = useState(-1);
  const isMobile = useMediaQuery({ maxWidth: 524 });
  const navigate = useNavigate();

  return (
    <div className="-mb-6 lg:-mb-8">
      {/* faq section */}
      <div className="my-4 lg:my-6 px-2 py-4 lg:pt-8 bg-gray-200">
        <div className="text-center">
          <h4 className="text-2xl lg:text-5xl font-extrabold text-primary-700 mb-2 lg:mb-4">
            Your favourite tools
          </h4>
          <p>
            In risus nec molestie at in pulvinar tellus. At integer id
            condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem
            erat et sit faucibus. Sollicitudin elit gravida tellus mattis
            porttitor. &nbsp;
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              eveniet quos quaerat consequatur quo quis ullam voluptas fugit?
              Quas harum illum accusamus facere nobis, reiciendis perferendis
              iusto veritatis eum magni. Molestiae saepe quam quod eos,
              consequatur omnis libero possimus corrupti.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4 my-4 lg:my-8 lg:w-11/12 lg:mx-auto">
          {faqInfo.map(({ title, subTitle }, index) => (
            <div key={index} className="p-2 lg:px-4 bg-gray-50 rounded-md">
              <button
                onClick={() =>
                  setFaqShow((prev) => (prev === index ? -1 : index))
                }
                className="flex items-center justify-between w-full h-8 lg:h-12"
              >
                <h6 className="font-semibold lg:text-lg">{title}</h6>
                <p
                  className={`${
                    faqShow === index && "rotate-180"
                  } text-primary-700 text-xl transition-all duration-500`}
                >
                  <FaChevronDown />
                </p>
              </button>
              <div
                className={`${
                  faqShow === index
                    ? "opacity-100 visible h-24 px-2 py-1"
                    : "opacity-0 h-0 invisible"
                }  leading-7 transition-all duration-500`}
              >
                <p>{subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* banner */}
      <div className="my-4 lg:my-6 h-[30rem] bg-primary-800 relative flex items-center lg:justify-center ">
        <img
          src={isMobile ? bannerUrl.mobile : bannerUrl.desktop}
          alt="banner-img"
          className="absolute inset-0 size-full object-cover z-0"
        />

        <div className="z-10 flex flex-col items-center text-center gap-4 px-4 py-2">
          <h4 className="text-gray-200 text-3xl lg:text-6xl font-bold">
            Join a world of earning
          </h4>
          <p className="text-gray-400 lg:text-xl lg:w-1/2">
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
            elit et fringilla habitant ut facilisi.
          </p>
          <button
            onClick={() => navigate("/EcoVibe/Sellers/")}
            className="bg-primary-50 px-4 py-2 rounded-md text-primary-950 lg:px-6 lg:py-3 lg:text-xl hover:bg-primary-600 hover:text-gray-50 transition-all"
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
