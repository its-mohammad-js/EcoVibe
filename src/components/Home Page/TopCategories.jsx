import { FaArrowRight } from "react-icons/fa";

const categoriesInfo = [
  {
    title: "Living Room",
    img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftop%20category%20banner%20(2).webp?alt=media&token=cf33d03f-9c23-4147-b0d1-68f0406c1ebf",
  },
  {
    title: "Bedroom",
    img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftop%20category%20banner%20(3).webp?alt=media&token=d8bd5490-7788-4d96-a259-447eb697d031",
  },
  {
    title: "Kitchen",
    img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftop%20category%20banner%20(1).webp?alt=media&token=d4384226-4073-4f41-94d6-6094a93f7ab3",
  },
];

function TopCategories() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8">
      <div
        id="wrapper"
        className="flex flex-col md:flex-row items-center justify-center gap-y-4 gap-x-6 lg:gap-x-10 w-full px-4 py-2 h-96 md:h-[500px] lg:h-[550px]"
      >
        {/* main slide */}
        <div className="md:w-1/3 w-full h-full relative">
          {/* slide bg */}
          <div className="w-full h-full absolute -z-10">
            <img
              src={categoriesInfo[0].img}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          {/* slide title */}
          <div className="z-10 h-full w-full px-4 py-2 md:px-6 md:py-4 flex items-start flex-col gap-y-2">
            <h2 className="text-3xl md:text-4xl">{categoriesInfo[0].title}</h2>
            <button className="flex items-center gap-x-1 border-b-2 border-b-black">
              <span>Shop Now</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        {/* secondary slides */}
        <div className="md:w-1/2 w-full h-full flex flex-col gap-y-4 md:gap-y-5">
          <div className="w-full h-1/2 relative">
            {/* slide bg */}
            <div className="w-full h-full absolute -z-10">
              <img
                src={categoriesInfo[1].img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* slide title */}
            <div className="z-10 h-full w-full px-4 py-2 md:px-6 md:py-4 flex items-start flex-col gap-y-2">
              <h2 className="text-3xl md:text-4xl">
                {categoriesInfo[1].title}
              </h2>
              <button className="flex items-center gap-x-1 border-b-2 border-b-black">
                <span>Shop Now</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="w-full h-1/2 relative">
            {/* slide bg */}
            <div className="w-full h-full absolute -z-10">
              <img
                src={categoriesInfo[2].img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* slide title */}
            <div className="z-10 h-full w-full px-4 py-2 md:px-6 md:py-4 flex items-start flex-col gap-y-2">
              <h2 className="text-3xl md:text-4xl">
                {categoriesInfo[2].title}
              </h2>
              <button className="flex items-center gap-x-1 border-b-2 border-b-black">
                <span>Shop Now</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCategories;
