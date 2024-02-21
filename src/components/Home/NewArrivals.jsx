import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

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
  const { scrollYProgress } = useScroll();
  const productTypeMotions = useAnimation();
  const { loading, data } = useSelector((state) => state.products);
  const randomIndex = Math.floor(Math.random() * data.length);

  useEffect(() => {
    const scrollHandle = () => {
      if (scrollYProgress.get() >= 0.9) {
        productTypeMotions.start({
          x: 0,
          rotateX: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 50 },
        });
      }
    };
    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, [scrollYProgress]);

  if (!loading && data.length)
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
                initial={{ x: -200 * index + 10, opacity: 0.4, rotateX: 200 }}
                animate={productTypeMotions}
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
                  with confidence and find exactly what you need in our
                  carefully curated best products section. Don't miss out on
                  these must-have items that are sure to elevate your shopping
                  experience! 🌟
                </span>
              </p>
            </div>
            <button className="self-end px-6 py-3 bg-primary-700 hover:bg-primary-600 hover:-translate-y-2 shadow-2xl shadow-transparent hover:shadow-primary-500 transition-all mt-4 md:mt-0 md:mb-2 text-white rounded-xl">
              Explore Shop
            </button>
          </div>
        </div>

        {/* customize product */}
        <div
          id="slide"
          className="flex items-center justify-between rounded-xl bg-primary-500/15 md:h-96"
        >
          <div className="w-1/2">
            {/* title and description */}
            <div className="w-full h-full flex flex-col items-start justify-center gap-y-4 px-6 py-6">
              <span className="text-accent-400 font-bold">PRODUCT</span>
              <h2 className="text-5xl font-bold">
                Shopping The Way <br /> You Want
              </h2>
              <p className="text-lg">
                Discover the best products only at our online store! 🛒 From
                stylish 👗clothing to the latest 📱tech gadgets, we've got you
                covered. Explore a wide range of top-notch 🎧electronics, trendy
              </p>

              <button className="self-end px-6 py-3 bg-primary-700 hover:bg-primary-600 hover:-translate-y-2 shadow-2xl shadow-transparent hover:shadow-primary-500 transition-all mt-4 md:mt-0 md:mb-2 text-white rounded-xl">
                Shop Now !
              </button>
            </div>
          </div>
          <div className="w-1/2 flex items-center h-full justify-center">
            <div className="flex bg-white/65 w-2/5 h-80 justify-evenly gap-y-2 px-4 py-6 rounded-xl flex-col items-center">
              <div className="flex w-full items-center justify-between">
                <h6 className="line-clamp-1 text-2xl font-bold w-2/3">
                  {data[randomIndex].Name}
                </h6>
                <button></button>
              </div>
              <div className="h-5/6 w-full">
                <img
                  src={data[randomIndex].Thumbnail}
                  alt={data[randomIndex].Name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="">
                <p>${data[randomIndex].Price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewArrivals;
