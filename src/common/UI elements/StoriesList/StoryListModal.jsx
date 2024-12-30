import { BiUser } from "react-icons/bi";
import { createContext, useContext } from "react";
import SlideFrame from "./Slide components/SlideFrame";
import useStoryList from "./hooks/useStoryList";

// create slide data context provider
const SlideContext = createContext();

function StoryListModal({ currentListIndex, setList, storiesList }) {
  const {
    containerRef, // ref to list container
    isChangingSlide, // is changing slide state
    changeStory, // chage (slide/list) hanlder
    handleTouch, // list touch events hanlder
    getPaginatedLists, // pagination list functionality
    currentSlideIndex, // current list index
  } = useStoryList(currentListIndex, setList, storiesList); // stories list data & list functionality

  // console.log(currentListIndex);

  return (
    <div
      ref={containerRef}
      className={`${
        isChangingSlide ? "overflow-hidden" : "overflow-auto"
      } fixed bg-gray-950/80 hidden-scroll-bar inset-0 z-50 lg:flex items-center justify-center snap-x snap-mandatory lg:snap-none`}
    >
      {/* list wrapper */}
      <div
        // detect touch actions (next | prev list), see useStory hook
        onTouchMove={(e) => handleTouch(e, "move")}
        onTouchStart={(e) => handleTouch(e, "start")}
        className="inline-flex items-center lg:gap-x-8 size-full lg:px-[500vw]"
      >
        {/* all lists */}
        {getPaginatedLists().map(({ slides: list, listIndex }) => {
          if (list)
            return (
              <div
                key={listIndex}
                className={`${
                  listIndex === currentListIndex
                    ? "lg:h-[95vh] currentSlide"
                    : "lg:h-[80vh]"
                } flex-none h-full select-none w-full lg:relative lg:w-96 transition-all duration-500 z-40 snap-end`}
              >
                {/* slides of selected list */}
                {list.map((story, slideindex) =>
                  currentListIndex === listIndex ? (
                    currentSlideIndex === slideindex && (
                      // current slide (provider renders just once when slideIndex is equal to currentSlideIndex)
                      <SlideContext.Provider
                        value={{
                          changeStoryHandler: changeStory,
                          listIndex,
                          currentListIndex,
                          list,
                          currentSlideIndex,
                          slideindex,
                          story,
                        }}
                      >
                        <SlideFrame key={slideindex} />
                      </SlideContext.Provider>
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
          id="list-background"
          className="fixed inset-0 bg-gray-950/80 hidden lg:block"
        ></div>
      </div>
    </div>
  );
}

export default StoryListModal;

// serve provider data as a hook
export const useSlide = () => {
  return useContext(SlideContext);
};
