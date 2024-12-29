import { motion } from "framer-motion";
import { RxDragHandleDots1 } from "react-icons/rx";
import { sellers } from "./constants";

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
              <div className="w-11/12 flex flex-col items-center justify-center md:rounded-md overflow-hidden md:bg-gray-50 md:hover:scale-105 transition-all h-full relative">
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
                <span className="hidden md:block">
                  <RxDragHandleDots1 className="text-5xl text-primary-300 absolute z-0 -top-2 -right-3" />
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
