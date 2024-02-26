import { motion } from "framer-motion";

const sellers = [
  {
    sellerName: "John",
    img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fbest-sellers%20(3).webp?alt=media&token=3c4014b2-2c56-4265-b4f4-9533ee70d370",
    sellerShogaln: "ABC Store",
  },
  {
    sellerName: "Alice",
    img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fbest-sellers%20(1).webp?alt=media&token=0950be8a-af45-4d18-ba99-7c1f8beebd06",
    sellerShogaln: "XYZ Market",
  },
  {
    sellerName: "Ashley",
    img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fbest-sellers%20(2).webp?alt=media&token=c97de2b9-686c-4d45-a03b-2fd250f0710b",
    sellerShogaln: "123 Shop",
  },
  {
    sellerName: "Emily",
    img: "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fbest-sellers%20(4).webp?alt=media&token=e7d47286-e311-480f-9a93-259be24cf119",
    sellerShogaln: "Best Deals Co.",
  },
];

function BestSellers() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8">
      {/* title */}
      <div className="w-full flex flex-col items-center justify-center md:gap-y-3">
        <span className="text-sm md:text-lg text-accent-600 font-semibold">
          Our Best Seller's
        </span>
        <h2 className="text-2xl md:text-5xl text-center font-bold">
          Meet Awesome Seller's !
        </h2>
        <span className="text-center w-3/5 text-lg hidden md:inline">
          Discover a wide range of products from various sellers. 💼 Join our
          community and become a seller to showcase your unique items. 🌟 Share
          your creations and reach a global audience. 🌍 Start your selling
          journey today and turn your passion into profits! 💰
        </span>
      </div>
      {/* content wrapper */}
      <div
        id="wrapper"
        className="px-4 py-3 md:py-6 flex items-center flex-wrap justify-evenly gap-x-8 gap-y-12 w-full"
      >
        {sellers.map((seller, index) => (
          <motion.div
            initial={{ rotateY: 100 }}
            whileInView={{ rotateY: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              delay: index / 4,
            }}
            key={index}
            className="w-24 h-32 md:w-1/5 md:h-96 flex flex-col relative md:cursor-pointer"
          >
            <div className="w-full h-3/4 md:h-full">
              <img
                src={seller.img}
                alt={seller.sellerName}
                className="w-full h-full rounded-full md:rounded-lg object-cover"
              />
            </div>

            <div className="w-full h-1/4 md:absolute md:bottom-0 md:flex items-center justify-center px-2 py-1 mt-4 md:mt-0 md:px-4 md:py-2">
              <div className="w-11/12 flex flex-col items-center justify-center md:rounded-md md:bg-gray-50 md:hover:scale-105 transition-all h-full relative">
                {/* background icon */}
                <span className="hidden md:block absolute z-0 bottom-0 left-0">
                  <svg
                    width="61"
                    height="30"
                    viewBox="0 0 61 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="45"
                      r="45"
                      fill="#13C296"
                      fillOpacity="0.11"
                    />
                  </svg>
                </span>
                {/* main title */}
                <div>
                  <h2 className="my-1 text-center md:text-2xl font-bold text-lg">
                    {seller.sellerName}
                  </h2>
                  <span className="text-center text-xs font-semibold line-clamp-1">
                    {seller.sellerShogaln}
                  </span>
                </div>

                {/* background icon */}
                <span className="hidden md:block absolute z-0 top-0 right-0">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="25"
                      fill="none"
                      viewBox="0 0 20 25"
                    >
                      <circle
                        cx=".706257"
                        cy="24.3533"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 .706257 24.3533)"
                      />
                      <circle
                        cx="6.39687"
                        cy="24.3533"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 6.39687 24.3533)"
                      />
                      <circle
                        cx="12.0881"
                        cy="24.3533"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 12.0881 24.3533)"
                      />
                      <circle
                        cx="17.7787"
                        cy="24.3533"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 17.7787 24.3533)"
                      />
                      <circle
                        cx=".706257"
                        cy="18.6624"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 .706257 18.6624)"
                      />
                      <circle
                        cx="6.39687"
                        cy="18.6624"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 6.39687 18.6624)"
                      />
                      <circle
                        cx="12.0881"
                        cy="18.6624"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 12.0881 18.6624)"
                      />
                      <circle
                        cx="17.7787"
                        cy="18.6624"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 17.7787 18.6624)"
                      />
                      <circle
                        cx=".706257"
                        cy="12.9717"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 .706257 12.9717)"
                      />
                      <circle
                        cx="6.39687"
                        cy="12.9717"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 6.39687 12.9717)"
                      />
                      <circle
                        cx="12.0881"
                        cy="12.9717"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 12.0881 12.9717)"
                      />
                      <circle
                        cx="17.7787"
                        cy="12.9717"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 17.7787 12.9717)"
                      />
                      <circle
                        cx=".706257"
                        cy="7.2808"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 .706257 7.2808)"
                      />
                      <circle
                        cx="6.39687"
                        cy="7.2808"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 6.39687 7.2808)"
                      />
                      <circle
                        cx="12.0881"
                        cy="7.2808"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 12.0881 7.2808)"
                      />
                      <circle
                        cx="17.7787"
                        cy="7.2808"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 17.7787 7.2808)"
                      />
                      <circle
                        cx=".706257"
                        cy="1.58989"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 .706257 1.58989)"
                      />
                      <circle
                        cx="6.39687"
                        cy="1.58989"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 6.39687 1.58989)"
                      />
                      <circle
                        cx="12.0881"
                        cy="1.58989"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 12.0881 1.58989)"
                      />
                      <circle
                        cx="17.7787"
                        cy="1.58989"
                        r=".646687"
                        fill="#3758F9"
                        transform="rotate(-90 17.7787 1.58989)"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
