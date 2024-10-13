import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const slidesData = [
  {
    title: "November Outfits",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcollection%20shop%20banner%20(3).webp?alt=media&token=327f8f92-d2a0-4754-9f47-c3018ae26d6b",
    query: "/EcoVibe/Explore-Products/collections=november outfits",
  },
  {
    title: "Cashmere Set",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcollection%20shop%20banner%20(2).webp?alt=media&token=08c6a462-3a98-4489-8fb1-c3820cb411f2",
    query: "/EcoVibe/Explore-Products/collections=cashmere set",
  },
  {
    title: "The New Nordic",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcollection%20shop%20banner%20(4).webp?alt=media&token=a8e07234-efa8-4397-955e-60262be5abc4",
    query: "/EcoVibe/Explore-Products/collections=new nordic",
  },
  {
    title: "The Leather",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcollection%20shop%20banner%20(1).webp?alt=media&token=d21063fd-7de0-403c-8760-d433d3245eae",
    query: "/EcoVibe/Explore-Products/collections=leather",
  },
];

function BestSellingItems() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8">
      <div
        id="wrapper"
        className="flex flex-col items-center gap-y-4 md:gap-y-8 px-2.5 md:px-4 py-2"
      >
        {/* title */}
        <div className="text-center flex flex-col gap-y-1.5 md:gap-y-2">
          <p className="text-base md:text-xl text-primary-400 font-semibold">
            Most Popular Collections
          </p>
          <h4 className="text-3xl md:text-5xl font-bold">Best Selling Items</h4>
          <span className="text-sm text-gray-600 md:text-lg">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Deserunt blanditiis provident dicta.
          </span>
        </div>
        {/* sildes */}
        <div className="flex flex-col md:flex-row gap-4 w-full ">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="w-full h-96 flex flex-col px-5 py-8 items-start justify-end gap-y-2 relative group"
            >
              {/* background image */}
              <div className="absolute inset-0 -z-10 bg-gray-950">
                <img
                  src={slide.bgUrl}
                  alt="slide banner"
                  className="w-full h-full object-cover group-hover:opacity-50 transition-all duration-500"
                />
              </div>
              {/* slide title */}
              <h6 className="text-2xl font-semibold text-white cursor-pointer group-hover:text-3xl transition-all duration-300">
                {slide.title}
              </h6>
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(slide.query);
                }}
                className="w-fit flex items-center justify-center gap-x-1.5 text-lg text-gray-200 border-b-2 border-gray-200"
              >
                <span>Collection</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSellingItems;
