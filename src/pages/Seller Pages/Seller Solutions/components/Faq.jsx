import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { bubbleImgs, faqInfo } from "./constants";

function Faq() {
  const [faqShow, setFaqShow] = useState(-1);
  const navigate = useNavigate();

  return (
    <div className="-mb-6 lg:-mb-8">
      {/* faq section */}
      <div className="mt-4 lg:mt-6 px-2 py-4 lg:pt-8 bg-gray-200">
        <div className="text-center">
          <h4 className="text-2xl lg:text-5xl font-extrabold text-primary-700 mb-2 lg:mb-4">
            Your Questions Answered! 🌍
          </h4>
          <p>
            In risus nec molestie at in pulvinar tellus. At integer id
            condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem
            erat et sit faucibus. Sollicitudin elit gravida tellus mattis
            porttitor. &nbsp;
            <span className="hidden lg:inline">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              eveniet quos quaerat consequatur quo quis ullam voluptas fugit?
              Quas harum illum accusamus facere nobis, reiciendis perferendis
              iusto veritatis eum magni. Molestiae saepe quam quod eos,
              consequatur omnis libero possimus corrupti.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4 my-4 lg:my-8 lg:w-11/12 lg:mx-auto">
          {faqInfo.map(({ title, subTitle }, index) => (
            <div key={index} className="p-2 lg:px-4 bg-gray-50 rounded-md">
              <button
                onClick={() =>
                  setFaqShow((prev) => (prev === index ? -1 : index))
                }
                className="flex items-center justify-between w-full h-8 lg:h-12"
              >
                <h6 className="font-semibold lg:text-lg">{title}</h6>
                <p
                  className={`${
                    faqShow === index && "rotate-180"
                  } text-primary-700 text-xl transition-all duration-500`}
                >
                  <FaChevronDown />
                </p>
              </button>
              <div
                className={`${
                  faqShow === index
                    ? "opacity-100 visible h-32"
                    : "opacity-0 h-0 invisible [&>p]:opacity-35"
                } leading-7 transition-all duration-300`}
              >
                <p className="line-clamp-4 px-2 py-1">{subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* banner */}
      <div className="h-[30rem] bg-primary-900 relative flex flex-col lg:flex-row items-center justify-center">
        {/* right fake user bubbles */}
        <div className="h-full overflow-hidden absolute w-full grid grid-cols-6 justify-items-center items-center">
          {bubbleImgs.map((url, i) => (
            <motion.div
              animate={{
                x: [200, (i + 1) * 10, (i + 1) * 15, (i + 1) * 10, 200],
                y: [200, (i + 1) * 10, (i + 1) * 15, (i + 1) * 10, 200], // Floating motion
                scale: [1, 1.2, 1, 1.1, 1], // Pulsating effect
                rotateZ: [0, 25, -15, 10, -50, 0], // Slight rotation wiggle
              }}
              transition={{
                delay: 0.5 * (i / 4),
                duration: 3 * (i + 1 * 4),
                repeat: Infinity,
                ease: "linear",
              }}
              key={i}
              className="size-16 odd:!mt-14 overflow-hidden rounded-full flex items-center justify-center"
            >
              <img
                src={url}
                alt="user-avatart"
                className="size-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        {/* main title */}
        <div className="z-10 size-full transition-all hover:backdrop-blur-sm flex flex-col items-center justify-center text-center gap-4 px-4 py-2">
          <h4 className="text-gray-200 inline text-3xl lg:text-6xl font-bold">
            <span className="bg-gray-500/50 leading-10 rounded-md">
              Become Part of the Eco Vibe Community
            </span>
          </h4>
          <p className="lg:text-xl rounded-md lg:w-1/2">
            <span className="bg-gray-500/50 text-gray-300 rounded-md">
              Join us in making sustainable choices and connecting with
              like-minded individuals. Together, we can create a positive impact
              on the planet
            </span>
          </p>
          <button
            onClick={() => navigate("/EcoVibe/Sellers/")}
            className="bg-primary-50 px-4 py-2 rounded-md text-primary-950 lg:px-6 lg:py-3 lg:text-xl hover:bg-primary-600 hover:text-gray-50 transition-all"
          >
            Sign Up Now
          </button>
        </div>
        {/* left fake user bubbles */}
        <div className="h-full overflow-hidden absolute w-full grid grid-cols-6 justify-items-center items-center">
          {bubbleImgs.map((url, i) => (
            <motion.div
              animate={{
                x: [-200, (i + 1) * -10, (i + 1) * -15, (i + 1) * -10, -200],
                y: [-200, (i + 1) * -10, (i + 1) * -15, (i + 1) * -10, -200], // Floating motion
                scale: [1, 1.2, 1, 1.1, 1], // Pulsating effect
                rotateZ: [0, 25, -15, 10, -50, 0], // Slight rotation wiggle
              }}
              transition={{
                delay: 0.5 * (i / 4),
                duration: 3 * (i + 1 * 4),
                repeat: Infinity,
                ease: "linear",
              }}
              key={i}
              className="size-16 odd:!mt-14 !mr-auto overflow-hidden rounded-full flex items-center justify-center"
            >
              <img
                src={url}
                alt="user-avatart"
                className="size-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
