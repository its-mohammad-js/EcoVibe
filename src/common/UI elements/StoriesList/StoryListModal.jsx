import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { BiUser } from "react-icons/bi";
import StorySlide from "./StorySlide";

function StoryListModal({ currentListIndex, setList, storiesList }) {
  const [currentSlideIndex, setSlide] = useState(0);
  const containerRef = useRef();
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
      { threshold: 0.05 }
    ); // Observe when the slide is 100% out of view
    if (currentSlide) {
      observer.observe(currentSlide);
    }
    return () => observer.disconnect(); // Clean up on unmount
  }, [currentSlideRef, lastMove, currentListIndex]);

  // reset is changing slide state after list changed
  useEffect(() => {
    setTimeout(() => {
      setChangingSlide(false);
    }, 500);
  }, [currentListIndex]);

  // hidden parent scroll-bar on mount
  useEffect(() => {
    if (isMobile) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // scroll to current list
  useEffect(() => {
    const currentSlide = document.querySelector(".currentSlide");

    if (currentSlide) {
      const targetRect = currentSlide.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const targetCenterX = targetRect.left + targetRect.width / 2;
      const containerCenterX = containerRect.left + containerRect.width / 2;

      const scrollOffset = targetCenterX - containerCenterX;
      containerRef.current.scrollLeft += scrollOffset;
    }
  }, [currentListIndex, isMobile, isChangingSlide]);

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

  // handle touch events (for mobile screens)
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

  // paginate stories list based on current list index
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

  return (
    <div
      ref={containerRef}
      className={`${
        isChangingSlide ? "overflow-hidden" : "overflow-auto"
      } fixed bg-gray-950/80 hidden-scroll-bar inset-0 z-50 lg:flex items-center justify-center snap-x snap-mandatory lg:snap-none`}
    >
      <div
        onTouchMove={(e) => onContainerTouchEvents(e, "move")}
        onTouchStart={(e) => onContainerTouchEvents(e, "start")}
        className="inline-flex items-center lg:gap-x-8 size-full lg:px-[500vw]"
      >
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
                {list.map((story, slideindex) =>
                  currentListIndex === listIndex ? (
                    currentSlideIndex === slideindex && (
                      // current slide
                      <StorySlide
                        key={slideindex}
                        {...{
                          changeStoryHandler,
                          listIndex,
                          currentListIndex,
                          list,
                          currentSlideIndex,
                          slideindex,
                          story,
                        }}
                      />
                    )
                  ) : (
                    // next || prev slide
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
                          {story.author?.first_name}
                        </h4>
                      </div>
                    </div>
                  )
                )}
              </div>
            );
        })}
        {/* scroll limiter on touch evenets */}
        <div
          className={`${
            isChangingSlide ? "opacity-100 visible" : "invisible opacity-0"
          } fixed inset-0 z-50 transition-all`}
        ></div>
        {/* modal bg */}
        <div
          onClick={() => setList(null)}
          className="fixed inset-0 bg-gray-950/80 hidden lg:block"
        ></div>
      </div>
    </div>
  );
}

export default StoryListModal;
