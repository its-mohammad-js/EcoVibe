import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen max-h-[50rem] relative flex justify-center items-center">
      <div className="absolute inset-0 bg-primary-950 -z-10"></div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="size-[14rem] lg:size-[45rem] rounded-full absolute  lg:-bottom-3/4 -z-10 inner-shadow shadow-primary-300 bg-primary-400/10"
      ></motion.div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="size-[14rem] lg:size-[45rem] rounded-full absolute  lg:-bottom-3/4 -z-10 shadow-2xl shadow-primary-200/50"
      ></motion.div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="size-[14rem] lg:size-[45rem] rounded-full absolute  lg:-bottom-3/4 -z-10 shadow-2xl shadow-primary-300/50"
      ></motion.div>

      <div className="absolute inset-0 bg-gray-900/10 backdrop-blur flex items-center justify-center flex-col px-4 gap-y-2 lg:gap-y-4 text-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 1, ease: "linear" }}
          className="lg:text-6xl text-gray-50 font-bold text-2xl"
        >
          Lorem ipsum dolor <br /> sit amet consectetur.
        </motion.div>
        <p className="text-sm lg:text-xl text-gray-200 lg:w-2/5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit harum eveniet id, error neque tempora, perspiciatis
          tenetur rerum dicta mollitia delectus sequi vero voluptatem!
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => window.scrollTo(0, 1000)}
            className="px-4 lg:px-6 py-2 lg:py-3 bg-gray-50 hover:bg-primary-950 hover:text-gray-50 transition-all rounded-2xl text-sm lg:text-base"
          >
            Learn more
          </button>
          <button
            onClick={() => navigate("/EcoVibe/sellers/")}
            className="px-4 lg:px-6 py-2 lg:py-3 bg-primary-500 text-gray-50 hover:bg-gray-50 hover:text-gray-950 transition-all rounded-2xl text-sm lg:text-base "
          >
            start now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
