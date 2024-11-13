import { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

function StorySlide(props) {
  // change story timer state
  const [timer, setTimer] = useState(5000);
  // ref to timer function
  const timerRef = useRef();
  // ref to video content
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

  // set timer to change current slide
  useEffect(() => {
    if (isChangingSlide) {
      clearTimeout(timerRef.current);
      return;
    }

    const changeSlideTimeout = setTimeout(() => {
      changeStoryHandler("next");
    }, timer);

    timerRef.current = changeSlideTimeout;

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentListIndex, currentSlideIndex, isChangingSlide, timer]);

  // set timer duration on different slides
  useEffect(() => {
    function handleUpdateTime(e) {
      if (videoRef.current) {
        const duration = e.target.duration.toFixed();

        setTimer(duration <= 60 ? duration * 1000 : 60000);
      }
    }

    videoRef.current?.addEventListener("timeupdate", handleUpdateTime);

    return () => {
      videoRef.current?.removeEventListener("timeupdate", handleUpdateTime);
      setTimer(5000);
    };
  }, [currentSlideIndex, currentListIndex]);

  return (
    <div className="size-full relative bg-gray-950 lg:rounded-xl flex items-center">
      {/* prev btn */}
      <div
        className={`
            ${
              ""
              //   listIndex !== currentListIndex && "!hidden"
            }
         z-50 absolute -left-4 h-1/2 hidden xl:flex items-center `}
      >
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
                    animation: `increase-width ${timer / 1000}s linear`,
                  }}
                  className="bg-primary-300 h-1"
                ></div>
              )}
            </p>
          ))}
        </div>
        <div className="w-full px-2 flex items-center gap-2">
          <div className="size-10 bg-gray-50/20 rounded-full overflow-hidden flex items-center justify-center">
            {story?.authorProfilePic ? (
              <img src={story?.authorProfilePic} className="object-cover" />
            ) : (
              <BiUser className="text-4xl mt-2 text-gray-50" />
            )}
          </div>
          <h6 className="text-gray-50 text-lg">{story.author.first_name}</h6>
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
                onClick={() => changeStoryHandler("prev")}
                className="h-full w-2/5"
              ></div>
              <div
                onClick={() => changeStoryHandler("next")}
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
