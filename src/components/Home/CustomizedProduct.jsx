import { useEffect, useRef, useState } from "react";
import AirJordanCanvas from "../canvas/AirJordanCanvas";
import { motion, useAnimation, useScroll } from "framer-motion";

function CustomizedProduct() {
  // ref to scrollable wrapper
  const wrapperRef = useRef();
  const scroll = useScroll({ container: wrapperRef });
  // control 3d model container animate
  const motionControls = useAnimation();
  // control 3d model rotation
  const [animateRole, setAnimateRole] = useState([0, 7.5, 0]);

  // change 3d model postion on wrapper scroll
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position (e.g., percentage of scroll progress)
      const scrollPosition = Math.round(scroll.scrollYProgress.get());

      // Animate the motion div
      if (scrollPosition < 1) {
        motionControls.start({ y: 0, width: "100%" });
      }
      if (scrollPosition === 1) {
        motionControls.start({ y: "100%", width: "50%" });
      }
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
        {/* imtroduce product container */}
        <div className="bg-red-300 h-[38rem] flex flex-col md:flex-row items-center justify-between">
          {/* detail buttons */}
          <div className="w-full md:w-1/5 md:h-full h-1/6 flex md:flex-col justify-evenly bg-blue-600">
            <button
              onClick={() => setAnimateRole("fade")}
              className="px-4 py-2 bg-red-400"
            >
              fade
            </button>
            <button
              onClick={() => setAnimateRole("")}
              className="px-4 py-2 bg-red-400"
            >
              reset
            </button>
            {/* <button
              onClick={() => changeRotate([-2, -10, 23])}
              className="px-4 py-2 bg-red-400"
            >
              info
            </button> */}
          </div>
          {/* 3d product container */}
          <motion.div
            className="w-full md:w-5/6 h-4/5 md:h-full bg-yellow-400"
            initial={{ y: "0%" }}
            transition={{ duration: 0.6 }}
            animate={motionControls}
          >
            <AirJordanCanvas animateRole={animateRole} />
          </motion.div>
        </div>
        {/* customize product container */}
        <div className="bg-amber-500 h-[38rem] flex flex-col md:justify-center md:items-start items-center justify-end">
          <div className="h-1/2 w-full md:w-2/6 md:h-full bg-blue-50">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              expedita perferendis, eius qui ut aliquam commodi quaerat labore
              similique possimus totam iusto modi reprehenderit culpa aut
              voluptatem nulla corrupti praesentium!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizedProduct;
