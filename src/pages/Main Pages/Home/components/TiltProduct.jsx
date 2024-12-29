import { useSelector } from "react-redux";
import { filterProducts } from "../../../../common/utils/filterPorducts";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tilt } from "@jdion/tilt-react";

function TiltProduct() {
  // get products data
  const { loading, data } = useSelector((state) => state.products);
  // filter prdoucts (only return bakground less pics)
  const filteredProducts = filterProducts(data, { tags: ["background"] });
  // generate a random index
  const randomIndex = Math.floor(Math.random() * filteredProducts.length);
  // get product color options
  const productsColors = filteredProducts?.map(
    (product) =>
      product.Options.filter((opt) => opt.title.toLowerCase() === "color")[0]
        .options
  );
  const navigate = useNavigate();

  return (
    <div
      id="slide"
      className="flex flex-col md:flex-row items-center justify-between rounded-xl bg-primary-500/15 md:h-[500px]"
    >
      <div className="md:w-2/5 h-full">
        {/* title and description */}
        <div className="w-full h-full flex flex-col items-start justify-evenly px-6 py-3">
          <span className="text-accent-400 font-bold">TREND PRODUCT</span>
          <h2 className="text-4xl font-bold">Shopping The Way You Want</h2>
          <p className="text-lg md:line-clamp-6 xl:line-clamp-none">
            Personalized Experiences Await! 🛍️💫 Customize Your Shopping Journey
            and Make it Yours! 🛒✨ Discover Tailored Options That Speak to Your
            Style! 💃🕺 Your Ideal Shopping Experience Awaits - Let's Get
            Started! 🎉🛍️ Shop with Freedom and Joy, Just the Way You
            Envisioned! 🌟🛒
          </p>

          <button className="self-end px-6 py-3 bg-primary-700 hover:bg-primary-600 hover:-translate-y-2 shadow-2xl shadow-transparent hover:shadow-primary-500 transition-all mt-4 md:mt-0 md:mb-2 text-white rounded-xl">
            Shop Now !
          </button>
        </div>
      </div>
      <div className="md:w-3/5 flex items-center h-full justify-center">
        {/* product card */}
        {!loading && filteredProducts.length && (
          <motion.div
            initial={{ x: -30, y: -20 }}
            transition={{ type: "spring", damping: 20 }}
            whileInView={{ x: 0, y: 0 }}
            className="flex bg-white relative w-11/12 my-36 md:w-2/5 h-96 md:h-5/6 justify-evenly gap-y-2 px-4 py-6 group rounded-xl flex-col items-center"
          >
            {/* product details */}
            <div className="flex w-full items-center justify-between">
              <h6
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(
                    `/EcoVibe/Products/${filteredProducts[randomIndex].id}`
                  );
                }}
                className="line-clamp-1 cursor-pointer text-2xl font-bold hover:text-primary-800 transition-all"
              >
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
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(
                    `/EcoVibe/Products/${filteredProducts[randomIndex].id}`
                  );
                }}
                src={filteredProducts[randomIndex].Thumbnail}
                alt={filteredProducts[randomIndex].Name}
                className="w-full h-full object-cover rounded-2xl cursor-pointer"
              />
            </div>
            <div className="w-full text-center text-accent-800/80 text-2xl mt-3 font-bold">
              <p>${filteredProducts[randomIndex].Price}</p>
            </div>

            {/* product options */}
            <Tilt className="absolute flex flex-col justify-evenly px-6 py-3.5 -bottom-32 -right-1 md:-bottom-6 md:-right-28 xl:-right-40 h-32 rounded-xl bg-primary-900">
              <h6 className="text-white text-base md:text-lg">Choose Color</h6>

              <div className="w-full h-2/3 gap-x-0.5 flex items-center justify-evenly">
                {/* return each color option of product as a span */}
                {data.length &&
                  productsColors[randomIndex].map((opt, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: opt,
                      }}
                      className="p-3.5 md:p-4 rounded-full border-4 border-gray-800 hover:border-white transition-all"
                    ></span>
                  ))}
              </div>
            </Tilt>

            {/* product rating */}
            <Tilt className="absolute w-10/12  h-20 md:h-36 px-6 py-3.5 flex flex-col justify-evenly -top-[4.5rem] md:top-auto md:-left-2/3 md:bottom-1/4 bg-primary-900 rounded-xl">
              <h2 className="text-base md:text-lg text-white">Rate Product</h2>

              <div className="w-full h-5/6 flex items-center justify-evenly md:[&>span]:text-2xl xl:[&>span]:text-2xl [&>span]:cursor-pointer">
                <span className="md:hover:-translate-y-2 transition-all hover:scale-105">
                  👌
                </span>
                <span className="md:hover:-translate-y-2 transition-all hover:scale-105">
                  😄
                </span>
                <span className="md:hover:-translate-y-2 transition-all hover:scale-105">
                  🙂
                </span>
                <span className="md:hover:-translate-y-2 transition-all hover:scale-105">
                  ☹️
                </span>
                <span className="md:hover:-translate-y-2 transition-all hover:scale-105 hidden lg:block">
                  😒
                </span>
              </div>
            </Tilt>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default TiltProduct;
