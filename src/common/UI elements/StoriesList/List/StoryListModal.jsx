import { BiUser } from "react-icons/bi";
import StorySlide from "../Slide/StorySlide";
import useStoryListModal from "./list.hooks";

function StoryListModal({ currentListIndex, setList, storiesList }) {
  const {
    containerRef,
    isChangingSlide,
    changeStory,
    onTouchEvents,
    getPaginatedLists,
    currentSlideIndex,
  } = useStoryListModal(currentListIndex, setList, storiesList);

  return (
    <div
      ref={containerRef}
      className={`${
        isChangingSlide ? "overflow-hidden" : "overflow-auto"
      } fixed bg-gray-950/80 hidden-scroll-bar inset-0 z-50 lg:flex items-center justify-center snap-x snap-mandatory lg:snap-none`}
    >
      <div
        onTouchMove={(e) => onTouchEvents(e, "move")}
        onTouchStart={(e) => onTouchEvents(e, "start")}
        className="inline-flex items-center lg:gap-x-8 size-full lg:px-[500vw]"
      >
        {/* all lists */}
        {getPaginatedLists().map((list, listIndex) => {
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
                          changeStoryHandler: changeStory,
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
                    // next || prev slides
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
