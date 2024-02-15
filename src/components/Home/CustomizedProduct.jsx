import { useEffect, useRef, useState } from "react";
import AirJordanCanvas from "../canvas/AirJordanCanvas";
import { motion, useAnimation, useScroll } from "framer-motion";

function CustomizedProduct() {
  const wrapperRef = useRef();
  const scroll = useScroll({ container: wrapperRef });
  const motionControls = useAnimation();
  const [rotate, setRotate] = useState([0, -0.25, 0.02]);

  function changeRotate(e) {
    setRotate(e);
  }

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position (e.g., percentage of scroll progress)
      const scrollPosition = scroll.scrollYProgress.get();
      const roundScroll = Math.round(scrollPosition);

      // Animate the motion div
      if (roundScroll < 1) {
        motionControls.start({ y: 0 });
      }
      if (roundScroll === 1) {
        motionControls.start({ y: "100%" });
      }
      // motionControls.start({ y: `${scrollPosition * 100}%` });
    };

    wrapperRef.current.addEventListener("scroll", handleScroll);
    return () => {
      wrapperRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [motionControls]);

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <div
        id="wrapper"
        ref={wrapperRef}
        className="w-full h-[38rem] snap-both snap-mandatory overflow-auto styled-scroll-bar"
      >
        <div className="bg-red-300 h-[38rem] flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/5 md:h-full h-1/6 flex flex-col md:justify-between bg-blue-600">
            <button
              onClick={() => changeRotate([0, 2, 3])}
              className="px-4 py-2 bg-red-400"
            >
              info
            </button>
            <button
              onClick={() => changeRotate([21, 1, 24])}
              className="px-4 py-2 bg-red-400"
            >
              info
            </button>
            <button
              onClick={() => changeRotate([-2, -10, 23])}
              className="px-4 py-2 bg-red-400"
            >
              info
            </button>
          </div>
          <motion.div
            className="w-full md:w-2/3 h-4/5 md:h-full"
            initial={{ y: "0%" }}
            transition={{ duration: 0.8 }}
            animate={motionControls}
          >
            <AirJordanCanvas rotate={rotate} />
          </motion.div>
        </div>
        <div className="bg-amber-700 h-[38rem]"></div>
      </div>
    </div>
  );
}

export default CustomizedProduct;

{
  /* <motion.div className="w-full h-full">
  <AirJordanCanvas />
</motion.div>; */
}
