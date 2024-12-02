import { useEffect } from "react";
import { useSlide } from "../StoryListModal";
import { motion, useAnimation } from "framer-motion";

function ProgressBar({ remainingTime, pause }) {
  const controls = useAnimation(); // control progress bar animation
  const { list, currentSlideIndex } = useSlide(); // slide data

  // control progress base animation states (puase & play) , (update remaining time)
  useEffect(() => {
    if (pause) {
      controls.stop(); // Pause animation
    } else {
      controls.start({
        translateX: "0%", // Continue the animation
        transition: { duration: remainingTime / 1000, ease: "linear" }, // Update duration dynamically
      });
    }
  }, [pause, remainingTime]);

  return (
    <div className="flex gap-2 p-2">
      {/* all slide top bars */}
      {list.map((s, i) => (
        <p
          key={i}
          className={`${
            i === currentSlideIndex ? "bg-gray-50" : "bg-gray-400"
          } w-full h-1 rounded-xl overflow-hidden relative`}
        >
          {/* current story time line */}
          {i === currentSlideIndex && (
            <motion.div
              className="bg-primary-300 h-1 absolute left-0 top-0 w-full"
              initial={{ translateX: "-100%" }}
              animate={controls} // Attach animation controls
              transition={{
                duration: remainingTime / 1000,
                ease: "linear",
              }}
            />
          )}
        </p>
      ))}
    </div>
  );
}

export default ProgressBar;
