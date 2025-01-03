import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TiltProduct from "./TiltProduct";
import { productypes } from "./constants";

function NewArrivals() {
  const navigate = useNavigate(); // navigate hook

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8 flex flex-col gap-y-6 md:gap-y-8 px-4">
      {/* top product types */}
      <div
        id="slide"
        className="flex flex-col gap-y-6 lg:flex-row bg-primary-300/10 rounded-xl items-center justify-between px-4 py-2 lg:h-96"
      >
        {/* product type card */}
        <div className="lg:w-3/5 h-full flex flex-wrap gap-6 items-center justify-evenly order-2 lg:order-1">
          {productypes.map((product, index) => (
            <motion.div
              initial={{ opacity: 0.4, rotateX: 200 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ type: "spring", damping: 30 }}
              key={index}
              className="w-full lg:w-5/12 h-40 flex items-center justify-between bg-gradient-to-bl from-primary-950 to-primary-700 hover:to-primary-200 cursor-pointer group rounded-lg"
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
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "instant",
                    });
                    navigate(`/EcoVibe/Explore-Products/${product.query}`);
                  }}
                  className="bg-primary-50 font-semibold hover:bg-accent-500 hover:text-white transition-all text-base self-end px-4 w-fit py-2 rounded-xl"
                >
                  Shop Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* title and description */}
        <div className="w-full lg:w-2/5  h-full flex flex-col items-start justify-between px-6 py-2 gap-y-2 lg:order-2">
          <div className="flex flex-col gap-y-4 items-start h-full">
            <h2 className="text-3xl font-bold border-b-4 border-primary-500">
              New Arrivals
            </h2>
            <p className="text-lg line-clamp-6">
              Discover the best products only at our online store! 🛒 From
              stylish 👗clothing to the latest 📱tech gadgets, we've got you
              covered. Explore a wide range of top-notch 🎧electronics, trendy
              <span className="hidden lg:inline">
                🕶️fashion accessories, premium 🎁gift items, and more. 💻Shop
                with confidence and find exactly what you need in our carefully
                curated best products section. Don't miss out on these must-have
                items that are sure to elevate your shopping experience! 🌟
              </span>
            </p>
          </div>
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "instant",
              });
              navigate(`/EcoVibe/Explore-Products/`);
            }}
            className="self-end px-6 py-3 bg-primary-700 hover:bg-primary-600 hover:-translate-y-2 shadow-2xl shadow-transparent hover:shadow-primary-500 transition-all mt-4 md:mt-0 md:mb-2 text-white rounded-xl"
          >
            Explore Shop
          </button>
        </div>
      </div>

      <TiltProduct />
    </div>
  );
}

export default NewArrivals;
