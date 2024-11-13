import { useEffect, useRef, useState } from "react";
import {
  AiOutlineMore,
  AiOutlinePause,
  AiOutlinePlus,
  AiOutlineRight,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { IoTrashBinOutline } from "react-icons/io5";
import useOutSideClick from "../../hooks/UseOutsideClick";

function StorySlide(props) {
  const [initialTimer] = useState(5000); // Default duration for each slide
  const [remainingTime, setRemainingTime] = useState(5000); // Time left to complete current slide
  const [pause, setPause] = useState(false); // Tracks if timer is paused
  const timerRef = useRef();
  const startTimeRef = useRef(); // Used to calculate elapsed time accurately
  const contextMenuRef = useRef();
  const [contextMenuShow, setContextMenu] = useState(false);
  useOutSideClick(contextMenuRef, () => setContextMenu(false));
  const videoRef = useRef();
  // destructure props
  const {
    changeStoryHandler,
    listIndex,
    currentListIndex,
    list,
    currentSlideIndex,
    slideindex,
    story,
    isChangingSlide,
  } = props;

  //   // set timer to change current slide
  //   useEffect(() => {
  //     if (isChangingSlide) {
  //       clearTimeout(timerRef.current);
  //       return;
  //     }

  //     const changeSlideTimeout = setTimeout(() => {
  //       changeStoryHandler("next");
  //     }, timer);

  //     timerRef.current = changeSlideTimeout;

  //     return () => {
  //       clearTimeout(timerRef.current);
  //     };
  //   }, [currentListIndex, currentSlideIndex, isChangingSlide, timer]);

  //   // set timer duration on different slides
  //   useEffect(() => {
  //     function handleUpdateTime(e) {
  //       if (videoRef.current) {
  //         const duration = e.target.duration.toFixed();

  //         setTimer(duration <= 60 ? duration * 1000 : 60000);
  //       }
  //     }

  //     videoRef.current?.addEventListener("timeupdate", handleUpdateTime);

  //     return () => {
  //       videoRef.current?.removeEventListener("timeupdate", handleUpdateTime);
  //       setTimer(5000);
  //     };
  //   }, [currentSlideIndex, currentListIndex]);

  // Timer effect: updates when remainingTime or pause changes

  //
  useEffect(() => {
    if (pause) {
      // Pause timer logic
      clearTimeout(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      changeStoryHandler("next");
    }, remainingTime);

    return () => clearTimeout(timerRef.current);
  }, [remainingTime, pause]);

  // Manage pause/resume when context menu is shown/hidden
  useEffect(() => {
    if (contextMenuShow) {
      // Pause: calculate remaining time and stop the timer
      const elapsedTime = Date.now() - startTimeRef.current;
      setRemainingTime((prev) => prev - elapsedTime);
      setPause(true);
    } else {
      // Resume: restart the timer with the remaining time
      setPause(false);
    }
  }, [contextMenuShow]);

  // Reset remainingTime when slide changes
  useEffect(() => {
    setRemainingTime(initialTimer);
  }, [currentSlideIndex]);

  return (
    <div className="size-full relative bg-gray-950 lg:rounded-xl flex items-center">
      {/* prev btn */}
      <div className="z-50 absolute -left-4 h-1/2 hidden xl:flex items-center">
        <button
          onClick={() => changeStoryHandler("prev")}
          className="text-2xl disabled:bg-gray-500 disabled:opacity-50 rounded-full p-1.5 hover:bg-opacity-100 bg-gray-50 bg-opacity-50 transition-all top-1/2 rotate-180"
        >
          <AiOutlineRight />
        </button>
      </div>
      {/* header */}
      <div
        className={`${
          listIndex === currentListIndex ? "block" : "hidden"
        } absolute z-50 top-0 w-full p-1`}
      >
        {/* time line */}
        <div className="flex gap-2 p-2">
          {list.map((s, i) => (
            <p
              key={i}
              className={`${
                i === currentSlideIndex ? "bg-gray-50" : "bg-gray-400"
              } w-full h-1 rounded-xl overflow-hidden`}
            >
              {i === currentSlideIndex && (
                <div
                  style={{
                    animation: `increase-width ${initialTimer / 1000}s linear`,
                    animationPlayState: contextMenuShow ? "paused" : "running",
                    // animation: `increase-width ${timer / 1000}s linear`,
                    // animationPlayState: contextMenuShow ? "paused" : "running",
                  }}
                  className="bg-primary-300 h-1"
                ></div>
              )}
            </p>
          ))}
        </div>
        {/* author / slide info */}
        <div className="w-full flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-gray-50/20 rounded-full overflow-hidden flex items-center justify-center">
              {story?.authorProfilePic ? (
                <img src={story?.authorProfilePic} className="object-cover" />
              ) : (
                <BiUser className="text-4xl mt-2 text-gray-50" />
              )}
            </div>
            <h6 className="text-gray-50 text-lg">{story.author.first_name}</h6>
          </div>
          {/* context menu */}
          <div
            ref={contextMenuRef}
            className="flex items-center gap-x-2 relative"
          >
            <button
              onClick={() => setContextMenu(true)}
              className="text-3xl text-gray-50"
            >
              <AiOutlineMore className="rotate-90" />
            </button>

            <div
              className={`${
                contextMenuShow ? "opacity-100 visible" : "opacity-0 invisible"
              } text-base flex top-8 p-1 flex-col bg-gray-50 text-gray-950 absolute right-0 rounded-lg overflow-hidden`}
            >
              <button className="flex hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all items-center gap-x-2 text-center text-nowrap px-4 py-2">
                <AiOutlinePlus className="rotate-45 text-xl" />

                <p>remove highlight</p>
              </button>

              <button className="flex hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all text-red-500 items-center gap-x-2 text-center text-nowrap px-4 py-2">
                <p>
                  <BsTrash3 />
                </p>
                <p>delete story</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="size-full relative z-40 overflow-hidden flex items-center justify-center p-6">
        {
          <div className="size-full">
            {story.type?.startsWith("image/") ? (
              <img
                src={story.contentUrl}
                alt="story-content"
                className="size-full object-contain"
              />
            ) : (
              <video
                ref={videoRef}
                autoPlay={currentSlideIndex === slideindex}
                className="size-full object-cover"
                src={story.contentUrl}
              ></video>
            )}

            <div className="absolute z-50 inset-0 flex">
              <div
                onClick={() => !contextMenuShow && changeStoryHandler("prev")}
                className="h-full w-2/5"
              ></div>
              <div
                onClick={() => !contextMenuShow && changeStoryHandler("next")}
                className="h-full w-3/5"
              ></div>
            </div>
          </div>
        }
      </div>
      {/* send message input */}
      <div className=""></div>
      {/* next btn */}
      <div
        className={`${
          listIndex !== currentListIndex && "!hidden"
        } absolute -right-4 h-1/2 hidden xl:flex items-center`}
      >
        <button
          onClick={() => changeStoryHandler("next")}
          className="text-2xl disabled:bg-gray-500 disabled:opacity-50 rounded-full p-1.5 z-50 hover:bg-opacity-100 bg-gray-50 bg-opacity-50 transition-all top-1/2"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}

export default StorySlide;
