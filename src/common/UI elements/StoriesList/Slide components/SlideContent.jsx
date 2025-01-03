import { useEffect, useState } from "react";
import LoaderIcon from "../../Loaders/LoaderIcon";
import { useSlide } from "../StoryListModal";
import { getDatabase, ref, update } from "firebase/database";
import { useSelector } from "react-redux";
import ContentSwitcher from "../../ContentSwitcher/ContentSwitcher";

function SlideContent({
  setType, // set content type (for useTimer hook to update remaining time on pic type slides)
  setRemainingTime, // set remian time befor change slide
  loading, // loading process state
  changeStoryHandler, // change list || slide handler
  pause, // pause state
  handlePause, // change pause handler
  contextMenuShow, // context menu state
}) {
  const { story, slideindex, currentSlideIndex } = useSlide(); // slide data
  const [isLoaded, setLoaded] = useState(false); // load content state
  const { userId } = useSelector((state) => state.userData);

  useEffect(() => {
    setType(story.type);
  }, [currentSlideIndex]);

  function handleLoadContent() {
    setLoaded(true);
    handlePause();
    const database = getDatabase();
    const slideRef = ref(database, `stories/${story.id}`); // ref to slide
    // filters seen by, to avoid duplicating id
    const seenBy = story?.seenBy?.filter((id) => id !== userId);
    // update seen list of slide with current user id
    update(slideRef, { seenBy: [...(seenBy || []), userId] });
  }

  return (
    <div className="size-full relative z-40 overflow-hidden flex items-center justify-center p-6">
      {/* content loading icon */}
      {!isLoaded && <LoaderIcon style={{ position: "absolute" }} />}
      {/* slide content */}
      <ContentSwitcher
        pause={pause}
        loadingCallBack={handleLoadContent}
        contentUrl={story.contentUrl}
        contentType={story.type}
        autoPlayCondition={currentSlideIndex === slideindex}
        setRemainingTime={setRemainingTime}
      />
      {/* loading screen */}
      {loading && (
        <div className="absolute z-50 inset-0 flex flex-col text-gray-200 gap-y-4 font-medium bg-gray-900/80 rounded-xl items-center justify-center">
          <LoaderIcon />
          <p>Deleting story, please dont refresh page</p>
        </div>
      )}
      {/* touch blocks (next || prev) */}
      <div
        onTouchStart={() => handlePause(true)}
        onTouchEnd={() => handlePause(false)}
        className="absolute z-40 inset-0 flex lg:hidden"
      >
        <div
          onClick={() =>
            !contextMenuShow && !loading && changeStoryHandler("prev")
          }
          className="h-full w-2/5"
        ></div>
        <div
          onClick={() =>
            !contextMenuShow && !loading && changeStoryHandler("next")
          }
          className="h-full w-3/5"
        ></div>
      </div>
    </div>
  );
}

export default SlideContent;
