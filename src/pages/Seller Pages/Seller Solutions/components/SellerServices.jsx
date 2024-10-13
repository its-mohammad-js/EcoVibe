import { FaChartArea, FaCreditCard, FaShop, FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";

const images = {
  img01:
    "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsellers%20page%20banner%2001.jpg?alt=media&token=a9783244-92a4-49be-902a-350a9ee0b3fd",
};

function SellerServices() {
  return (
    <div className="pt-8 lg:pt-12 bg-white lg:px-4">
      {/* summary options */}
      <div className="flex flex-col gap-y-12  lg:flex-row lg:gap-0 lg:justify-evenly">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="size-20 lg:size-24 rounded-full relative z-10 cursor-pointer group">
            <div className="absolute w-full h-full -top-2 -left-2 border-4 border-dotted border-primary-500 rounded-full -z-10 group-hover:top-0 group-hover:left-0 transition-all group-hover:rotate-180" />
            <div className="w-full h-full bg-primary-500 group-hover:bg-opacity-0 transition-all rounded-full flex items-center justify-center">
              <FaShop className="text-4xl lg:text-5xl text-gray-50 group-hover:text-primary-500 transition-all" />
            </div>
          </div>
          <h6 className="font-bold lg:text-3xl">Sell Your Product</h6>
          <p className="text-sm lg:w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            tenetur architecto eligendi doloribus accusantium voluptas eius .
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="size-20 lg:size-24 rounded-full relative z-10 cursor-pointer group">
            <div className="absolute w-full h-full -top-2 -left-2 border-4 border-dotted border-primary-500 rounded-full -z-10 group-hover:top-0 group-hover:left-0 transition-all group-hover:rotate-180" />
            <div className="w-full h-full bg-primary-500 group-hover:bg-opacity-0 transition-all rounded-full flex items-center justify-center">
              <FaUser className="text-4xl lg:text-5xl text-gray-50 group-hover:text-primary-500 transition-all" />
            </div>
          </div>
          <h6 className="font-bold lg:text-3xl">Connect With Customer</h6>
          <p className="text-sm lg:w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            tenetur architecto eligendi doloribus accusantium voluptas eius .
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="size-20 lg:size-24 rounded-full relative z-10 cursor-pointer group">
            <div className="absolute w-full h-full -top-2 -left-2 border-4 border-dotted border-primary-500 rounded-full -z-10 group-hover:top-0 group-hover:left-0 transition-all group-hover:rotate-180" />
            <div className="w-full h-full bg-primary-500 group-hover:bg-opacity-0 transition-all rounded-full flex items-center justify-center">
              <FaChartArea className="text-4xl lg:text-5xl text-gray-50 group-hover:text-primary-500 transition-all" />
            </div>
          </div>
          <h6 className="font-bold lg:text-3xl">Analyze Your Business</h6>
          <p className="text-sm lg:w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            tenetur architecto eligendi doloribus accusantium voluptas eius .
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="size-20 lg:size-24 rounded-full relative z-10 cursor-pointer group">
            <div className="absolute w-full h-full -top-2 -left-2 border-4 border-dotted border-primary-500 rounded-full -z-10 group-hover:top-0 group-hover:left-0 transition-all group-hover:rotate-180" />
            <div className="w-full h-full bg-primary-500 group-hover:bg-opacity-0 transition-all rounded-full flex items-center justify-center">
              <FaCreditCard className="text-4xl lg:text-5xl text-gray-50 group-hover:text-primary-500 transition-all" />
            </div>
          </div>
          <h6 className="font-bold lg:text-3xl">Secure Payment</h6>
          <p className="text-sm lg:w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            tenetur architecto eligendi doloribus accusantium voluptas eius .
          </p>
        </div>
      </div>
      {/* section no.2 */}
      <div className="flex flex-col lg:flex-row lg:items-start items-center mt-4 lg:mt-16 gap-x-28 px-2 lg:px-4">
        <div className="w-full lg:order-2">
          <motion.img
            src={images.img01}
            initial={{ rotateY: 180 }}
            whileInView={{ rotateY: 0 }}
            transition={{ type: "spring", damping: 30 }}
            alt="banner-img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center lg:text-start lg:w-4/5">
          <div className="my-2">
            <span className="text-sm lg:text-xl font-semibold">POWERFUL</span>
            <h4 className="text-4xl lg:text-5xl font-bold relative">
              <span className="absolute w-28 h-12 border-2 border-dotted border-primary-200 right-0 -top-2"></span>
              <p className="relative">All the tools you can imagine</p>
            </h4>
          </div>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi nam
            suscipit, ad nulla eos veniam iure quis cum? Cupiditate nam optio
            placeat dolorem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. A quasi nam suscipit, ad nulla eos veniam iure quis cum?
            Cupiditate nam optio placeat dolorem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            <span className="hidden lg:inline">
              A quasi nam suscipit, ad nulla eos veniam iure quis cum?
              Cupiditate nam optio placeat dolorem. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. A quasi nam suscipit, ad nulla eos
              veniam iure quis cum? Cupiditate nam optio placeat dolorem.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  items-center mt-4 lg:mt-8 px-2 lg:px-4">
        <div className="w-full h-80 flex items-center justify-center relative lg:order-2">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="size-48 border-2 border-primary-600 absolute z-0"
          ></motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="size-44 border-2 border-primary-600 absolute z-0"
          ></motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="size-40 border-2 border-primary-600 absolute z-0"
          ></motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="size-36 border-2 border-primary-600 absolute z-0"
          ></motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="size-32 relative bg-primary-800"
          ></motion.div>
        </div>
        <div className="text-center lg:text-start lg:w-4/5">
          <div className="my-2">
            <span className="text-sm lg:text-xl font-semibold">Customers</span>
            <h4 className="text-4xl lg:text-5xl font-bold content-center relative">
              <motion.p
                initial={{ width: 0, height: 0 }}
                whileInView={{ width: 64, height: 56 }}
                transition={{ type: "spring", damping: 30 }}
                className="absolute bg-primary-100 left-1/2"
              ></motion.p>
              <p className="relative">
                Target customers with our powerful AI kit
              </p>
            </h4>
          </div>
          <p>
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia
            <span className="hidden lg:inline">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              asperiores, blanditiis optio recusandae magni quae quod voluptatem
              ab fugit ipsa nemo dolorum culpa repellat laboriosam fugiat cum
              consequuntur neque nisi sunt esse illum amet numquam eaque modi?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SellerServices;
