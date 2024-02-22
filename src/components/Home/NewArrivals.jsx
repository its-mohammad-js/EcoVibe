import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { filterProducts } from "../../helpers/filterPorducts";
import { calculateAverage } from "../../helpers/constants";
import { FaCartPlus, FaPlus } from "react-icons/fa6";
import ReactStars from "react-stars";
import { Tilt } from "@jdion/tilt-react";

const producttypes = [
  {
    title: "Air Jordan",
    price: 150,
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fair%20jordan%20model.png?alt=media&token=5e569c59-11d1-45d3-8589-d0a560a62b98",
  },
  {
    title: "Smart Phone",
    price: 500,
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsmart%20phone%20model.png?alt=media&token=d090cbd1-6776-4efb-96eb-f7948ddc360e",
  },
  {
    title: "Organic Oil",
    price: 50,
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Foil%20bottle%20model.png?alt=media&token=2ee748cf-406b-4518-8dec-dec00f5ce4a2",
  },
  {
    title: "Hoodie's",
    price: 10,
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fhoodie%20model.png?alt=media&token=4649d945-b71f-431a-a786-bd076f376db9",
  },
];

function NewArrivals() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8 flex flex-col gap-y-6 md:gap-y-8 px-4">
      {/* best product types */}
      <div
        id="slide"
        className="flex flex-col gap-y-6 md:flex-row bg-primary-300/10 rounded-xl items-center justify-between px-4 py-2 md:h-96"
      >
        {/* product type card */}
        <div className="md:w-3/5 flex flex-wrap gap-6 items-center justify-evenly order-2 md:order-1">
          {producttypes.map((product, index) => (
            <motion.div
              initial={{ x: -100, opacity: 0.4, rotateX: 200 }}
              whileInView={{ x: 0, opacity: 1, rotateX: 0 }}
              transition={{ type: "spring", damping: 30 }}
              key={index}
              className="w-full md:w-5/12 h-40 flex items-center justify-between bg-gradient-to-bl from-primary-950 to-primary-700 hover:to-primary-200 cursor-pointer group rounded-lg"
            >
              <div className="w-2/5 h-full">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:-translate-y-4 group-hover:rotate-12 transition-all"
                />
              </div>

              <div className="w-3/5 h-full px-2 flex flex-col justify-around ">
                <div className="flex flex-col items-start justify-center gap-y-2.5">
                  <h4 className="text-xl font-bold text-white">
                    {product.title}
                  </h4>
                  <p className="text-gray-300">
                    Start From &nbsp;
                    <span className="border-b-2 border-primary-600 mx-0.5">
                      ${product.price}
                    </span>
                  </p>
                </div>
                <button className="bg-primary-50 font-semibold hover:bg-accent-500 hover:text-white transition-all text-base self-end px-4 w-fit py-2 rounded-xl">
                  Shop Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* title and description */}
        <div className="w-full md:w-2/5 h-full flex flex-col items-start justify-between px-6 py-6 md:order-2">
          <div className="flex flex-col gap-y-4 items-start justify-center">
            <h2 className="text-3xl font-bold border-b-4 border-primary-500">
              New Arrivals
            </h2>
            <p className="text-lg">
              Discover the best products only at our online store! 🛒 From
              stylish 👗clothing to the latest 📱tech gadgets, we've got you
              covered. Explore a wide range of top-notch 🎧electronics, trendy
              <span className="hidden md:inline">
                🕶️fashion accessories, premium 🎁gift items, and more. 💻Shop
                with confidence and find exactly what you need in our carefully
                curated best products section. Don't miss out on these must-have
                items that are sure to elevate your shopping experience! 🌟
              </span>
            </p>
          </div>
          <button className="self-end px-6 py-3 bg-primary-700 hover:bg-primary-600 hover:-translate-y-2 shadow-2xl shadow-transparent hover:shadow-primary-500 transition-all mt-4 md:mt-0 md:mb-2 text-white rounded-xl">
            Explore Shop
          </button>
        </div>
      </div>

      <CustomizedProducts />
    </div>
  );
}

export default NewArrivals;

const CustomizedProducts = () => {
  // get products data
  const { loading, data } = useSelector((state) => state.products);
  // filter prdoucts (only return bakground less pics)
  const filteredProducts = filterProducts(data, { tags: ["background"] });
  // generate a random index
  const randomIndex = Math.floor(Math.random() * filteredProducts.length);

  return (
    <div
      id="slide"
      className="flex flex-col md:flex-row items-center justify-between rounded-xl bg-primary-500/15 md:h-[500px]"
    >
      <div className="md:w-1/2">
        {/* title and description */}
        <div className="w-full h-full flex flex-col items-start justify-center gap-y-4 px-6 py-6">
          <span className="text-accent-400 font-bold">PRODUCT</span>
          <h2 className="text-5xl font-bold">
            Shopping The Way <br /> You Want
          </h2>
          <p className="text-lg">
            Personalized Experiences Await! 🛍️💫 Customize Your Shopping Journey
            and Make it Yours! 🛒✨ Discover Tailored Options That Speak to Your
            Style! 💃🕺 Your Ideal Shopping Experience Awaits - Let's Get
            Started! 🎉🛍️ Shop with Freedom and Joy, Just the Way You
            Envisioned! 🌟🛒 Embrace Shopping on Your Terms - Your Desires, Your
            Choices! 💖🛍️
          </p>

          <button className="self-end px-6 py-3 bg-primary-700 hover:bg-primary-600 hover:-translate-y-2 shadow-2xl shadow-transparent hover:shadow-primary-500 transition-all mt-4 md:mt-0 md:mb-2 text-white rounded-xl">
            Shop Now !
          </button>
        </div>
      </div>
      <div className=" md:w-1/2 flex items-center h-full justify-center">
        {/* product card */}
        {!loading && filteredProducts.length && (
          <motion.div
            initial={{ x: -30, y: -10 }}
            transition={{ type: "spring", damping: 20 }}
            whileInView={{ x: 0, y: 0 }}
            className="flex bg-white relative w-11/12 my-36 md:w-2/5 h-96 md:h-5/6 justify-evenly gap-y-2 px-4 py-6 group rounded-xl flex-col items-center"
          >
            {/* product details */}
            <div className="flex w-full items-center justify-between">
              <h6 className="line-clamp-1 cursor-pointer text-2xl font-bold hover:text-primary-800 transition-all">
                {filteredProducts[randomIndex].Name}
              </h6>
              <button className="text-xl p-2.5 group hover:bg-primary-700 transition-all rounded-full bg-primary-950 text-gray-300">
                <FaPlus className="hover:-translate-y-1 transition-all" />
              </button>
            </div>
            <div className="self-start w-2/3 px-2">
              <ReactStars
                count={5}
                value={calculateAverage(filteredProducts[randomIndex].Stars)}
                size={20}
                color2={"#ffd700"}
                edit={false}
              />
            </div>
            <div className="h-4/6 w-full">
              <img
                src={filteredProducts[randomIndex].Thumbnail}
                alt={filteredProducts[randomIndex].Name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-full text-center text-accent-800/80 text-2xl mt-3 font-bold">
              <p>${filteredProducts[randomIndex].Price}</p>
            </div>

            {/* product options */}
            <Tilt className="absolute w-11/12 flex flex-col justify-evenly px-6 py-3.5 -bottom-28 -right-1 md:-bottom-6 md:-right-44 h-32 rounded-xl bg-primary-900">
              <h6 className="text-white text-base md:text-xl">
                Choose Your &nbsp;
                <span>{filteredProducts[randomIndex].Options[0].title}</span>
              </h6>

              <div className="w-full h-2/3 flex items-center justify-evenly">
                {/* return each color option of product as a span */}
                {filteredProducts[randomIndex].Options[0].options.map(
                  (opt, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: opt,
                      }}
                      className="p-4 rounded-full border-4 border-gray-800 hover:border-white transition-all"
                    ></span>
                  )
                )}
              </div>
            </Tilt>

            {/* product rating */}
            <Tilt className="absolute w-10/12 h-20 md:h-36 px-6 py-3.5 flex flex-col justify-evenly -top-[4.5rem] md:top-auto md:-left-2/3 md:bottom-1/4 bg-primary-900 rounded-xl">
              <h2 className="text-base md:text-xl text-white">Rate Product</h2>

              <div className="w-full h-5/6 flex items-center justify-evenly md:[&>span]:text-3xl [&>span]:cursor-pointer">
                <span>👌</span>
                <span>😄</span>
                <span>🙂</span>
                <span>☹️</span>
                <span>😒</span>
              </div>
            </Tilt>
          </motion.div>
        )}
      </div>
    </div>
  );
};
