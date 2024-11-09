import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { fakeArray } from "../../../../common/utils/constants";
import { useEffect, useRef, useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import useDisableScroll from "../../../../common/hooks/UseDisableScroll";
import { BiUser } from "react-icons/bi";

function StoryModal({ currentListIndex, setList, storiesList }) {
  const [currentSlideIndex, setSlide] = useState(0);
  const containerRef = useRef();
  const [timer, setTimer] = useState(5000);
  const timerRef = useRef();
  const sliderRef = useRef();
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const currentSlideRef = useRef();
  const [touchStart, setTouch] = useState(null);
  const [lastMove, setLastMove] = useState(null);
  const [isChangingSlide, setChangingSlide] = useState(false);

  // set current slide ref
  useEffect(() => {
    const currentSlide = document.querySelector(".currentSlide");

    currentSlideRef.current = currentSlide;
  }, [currentListIndex, currentSlideIndex]);

  // change list index on left / right touch moves
  useEffect(() => {
    const currentSlide = document.querySelector(".currentSlide");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          // Update your state here (e.g., set a flag)
          if (lastMove !== null) {
            const result =
              lastMove === "next"
                ? currentListIndex === storiesList.length - 1
                  ? null
                  : currentListIndex + 1
                : currentListIndex - 1;
            setChangingSlide(true);
            setList(result);
            setSlide(0);
            setLastMove(null);
          }
        }
      },
      { threshold: 0.09 }
    ); // Observe when the slide is 100% out of view
    if (currentSlide) {
      observer.observe(currentSlide);
    }
    return () => observer.disconnect(); // Clean up on unmount
  }, [currentSlideRef, lastMove, currentListIndex]);

  useEffect(() => {
    setTimeout(() => {
      setChangingSlide(false);
    }, 800);
  }, [currentListIndex]);

  console.log(isChangingSlide ? "ok now it changing" : "stoped");

  // hidden parent scroll-bar on mount
  useEffect(() => {
    if (isMobile) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // set timer to change current slide
  // useEffect(() => {
  //   const changeSlideTimeout = setTimeout(() => {
  //     changeStoryHandler("next");
  //   }, timer);

  //   timerRef.current = changeSlideTimeout;

  //   return () => {
  //     clearTimeout(timerRef.current);
  //   };
  // }, [currentListIndex, currentSlideIndex, timer]);

  // set timer duration on different slides
  // useEffect(() => {
  //   function handleUpdateTime(e) {
  //     if (videoRef.current) {
  //       const duration = e.target.duration.toFixed();

  //       setTimer(duration <= 60 ? duration * 1000 : 60000);
  //     }
  //   }

  //   videoRef.current?.addEventListener("timeupdate", handleUpdateTime);

  //   return () => {
  //     videoRef.current?.removeEventListener("timeupdate", handleUpdateTime);
  //     setTimer(5000);
  //   };
  // }, [currentSlideIndex, currentListIndex]);

  // scroll to current list
  useEffect(() => {
    // if (isMobile) {
    //   return;
    // }
    const currentSlide = document.querySelector(".currentSlide");

    if (currentSlide) {
      const targetRect = currentSlide.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const targetCenterX = targetRect.left + targetRect.width / 2;
      const containerCenterX = containerRect.left + containerRect.width / 2;

      const scrollOffset = targetCenterX - containerCenterX;
      containerRef.current.scrollLeft += scrollOffset;
    }
  }, [currentListIndex, isMobile]);

  // on change story / story list
  function changeStoryHandler(payload) {
    const selectedList = storiesList[currentListIndex];

    if (payload === "next" && currentSlideIndex !== selectedList.length - 1) {
      setSlide((prev) => prev + 1);
    } else if (payload === "next") {
      setList(
        currentListIndex < storiesList.length - 1 ? currentListIndex + 1 : null
      );
      setSlide(0);
    }

    if (payload === "prev" && currentSlideIndex !== 0) {
      setSlide((prev) => prev - 1);
    } else if (payload === "prev") {
      setList(currentListIndex > 0 ? currentListIndex - 1 : null);
    }
  }

  function onContainerTouchEvents(e, type) {
    const eventType = e.type;
    const touch = e.touches[0];
    const currentX = touch?.clientX;
    const deltaX = currentX - touchStart;
    if (eventType === "touchstart") {
      setLastMove(null);
      setTouch(currentX);
    } else {
      if (deltaX > -20) {
        setLastMove("prev");
      } else {
        setLastMove("next");
      }
    }
  }

  const paginatedLists = () => {
    return storiesList.map((list, listIndex) => {
      if (
        listIndex === currentListIndex - 1 || // Previous list
        listIndex === currentListIndex || // Current list
        listIndex === currentListIndex + 1 // Next list
      ) {
        return list;
      } else {
        return null;
      }
    });
  };

  // console.log(paginatedLists());

  return (
    <div
      ref={containerRef}
      className={`${
        isChangingSlide ? "overflow-hidden" : "overflow-auto"
      } fixed bg-gray-950/80 inset-0 z-50 lg:flex items-center justify-center snap-x snap-mandatory lg:snap-none`}
    >
      <div
        onTouchMove={(e) => onContainerTouchEvents(e, "move")}
        onTouchStart={(e) => onContainerTouchEvents(e, "start")}
        className="inline-flex items-center lg:gap-x-8 size-full lg:px-[500vw]"
      >
        {/* <button
          onClick={() => setList(null)}
          className="absolute lg:hidden z-50 text-gray-50 top-6 right-4 text-3xl bg-gray-600 p-2 rounded-full"
        >
          <AiOutlineClose />
        </button> */}

        {/* all lists */}
        {paginatedLists().map((list, listIndex) => {
          if (list)
            return (
              <div
                key={listIndex}
                className={`${
                  listIndex === currentListIndex
                    ? "lg:h-[95vh] currentSlide"
                    : "lg:h-[80vh]"
                } flex-none h-full select-none w-full lg:relative lg:w-96 transition-all z-40 snap-end`}
              >
                {/* slides of selected list */}
                {list.map((story, slideindex) => {
                  return currentListIndex === listIndex ? (
                    currentSlideIndex === slideindex && (
                      //
                      <div
                        key={slideindex}
                        className="size-full relative bg-gray-950 lg:rounded-xl flex items-center"
                      >
                        {/* prev btn */}
                        <div
                          className={`${
                            listIndex !== currentListIndex && "!hidden"
                          } z-50 absolute -left-4 h-1/2 hidden xl:flex items-center `}
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
                                  i === currentSlideIndex
                                    ? "bg-gray-50"
                                    : "bg-gray-400"
                                } w-full h-1 rounded-xl overflow-hidden`}
                              >
                                {i === currentSlideIndex && (
                                  <div
                                    style={{
                                      animation: `increase-width ${
                                        timer / 1000
                                      }s linear`,
                                    }}
                                    className="bg-red-400 h-1"
                                  ></div>
                                )}
                              </p>
                            ))}
                          </div>
                          <div className="w-full px-2 flex items-center gap-2">
                            <div className="size-10 bg-gray-50/20 rounded-full overflow-hidden flex items-center justify-center">
                              {story?.authorProfilePic ? (
                                <img
                                  src={story?.authorProfilePic}
                                  className="object-cover"
                                />
                              ) : (
                                <BiUser className="text-4xl mt-2 text-gray-50" />
                              )}
                            </div>
                            <h6 className="text-gray-50 text-lg">
                              {story.author.first_name}
                            </h6>
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
                    )
                  ) : (
                    <div
                      key={slideindex}
                      className="size-full first-of-type:flex hidden relative bg-gray-950 lg:rounded-xl items-center"
                    >
                      <div
                        onClick={() => setList(listIndex)}
                        className="size-full select-none flex flex-col gap-y-2 items-center justify-center"
                      >
                        <div className="size-28 bg-gray-50/20 overflow-hidden rounded-full">
                          {story?.authorProfilePic ? (
                            <img
                              src={story?.authorProfilePic}
                              className="object-cover"
                            />
                          ) : (
                            <BiUser className="text-4xl mt-2 text-gray-50" />
                          )}
                        </div>
                        <h4 className="text-gray-50">
                          current : {currentListIndex} <br />
                          own index : {listIndex}
                          {/* {story.author?.first_name} */}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
        })}

        <div
          className={`${
            isChangingSlide ? "opacity-100 visible" : "invisible opacity-0"
          } fixed inset-0 bg-red-300/50 z-50 transition-all`}
        ></div>

        <div
          onClick={() => setList(null)}
          className="fixed inset-0 bg-gray-950/80 hidden lg:block"
        ></div>
      </div>
    </div>
  );
}

export default StoryModal;
