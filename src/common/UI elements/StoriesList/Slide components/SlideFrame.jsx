import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useTimer } from "../hooks/useTimer";
import SlideContent from "./SlideContent";
import { useSlide } from "../StoryListModal";
import ProgressBar from "./ProgressBar";
import ContextMenu from "./ContextMenu";
import { BiUser } from "react-icons/bi";
import useRemoveStory from "../../../hooks/useRemoveSlide";
import FeedbackActions from "./FeedbackActions";
import { useNavigate } from "react-router-dom";

function SlideFrame() {
  const { changeStoryHandler, listIndex, currentListIndex, story } = useSlide(); // slide data
  const { remainingTime, pause, handlePause, setRemainingTime, setType } =
    useTimer(5000, () => changeStoryHandler("next")); // timer data & functionlaties
  const [contextMenuShow, setContextMenu] = useState(false); //context menu state
  const { onDeleteSlide, loading, onRemoveHighlight } =
    useRemoveStory(handlePause);
  const navigate = useNavigate();

  return (
    <>
      {/* main slide */}
      <div className="size-full relative z-50 bg-gray-950 lg:rounded-xl flex items-center">
        {/* prev btn */}
        <div className="z-50 absolute -left-4 h-1/2 hidden xl:flex items-center">
          <button
            disabled={loading}
            onClick={() => changeStoryHandler("prev")}
            className="text-2xl disabled:hidden rounded-full p-1.5 hover:bg-opacity-100 bg-gray-50 bg-opacity-50 transition-all top-1/2 rotate-180"
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
          {/* progress bar */}
          <ProgressBar {...{ pause, remainingTime }} />
          {/* author / slide info / context menu */}
          <div className="w-full flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="size-10 bg-gray-50/20 rounded-full overflow-hidden flex items-center justify-center">
                {story?.authorProfilePic ? (
                  <img src={story?.authorProfilePic} className="object-cover" />
                ) : (
                  <BiUser className="text-4xl mt-2 text-gray-50" />
                )}
              </div>
              <h6
                onClick={() => navigate(`/EcoVibe/seller/${story?.authorId}`)}
                className="text-gray-50 text-lg cursor-pointer"
              >
                {story.author.first_name}
              </h6>
            </div>
            {/* context menu */}
            <ContextMenu
              {...{
                pause,
                onRemoveHighlight,
                handlePause,
                onDeleteSlide,
                loading,
                contextMenuShow,
                setContextMenu,
              }}
            />
          </div>
        </div>
        {/* main content */}
        <SlideContent
          {...{
            setType,
            setRemainingTime,
            loading,
            changeStoryHandler,
            handlePause,
            pause,
            contextMenuShow,
          }}
        />
        <FeedbackActions {...{ story, handlePause, changeStoryHandler }} />
        {/* next btn */}
        <div
          className={`${
            listIndex !== currentListIndex && "!hidden"
          } absolute -right-4 h-1/2 hidden xl:flex items-center`}
        >
          <button
            disabled={loading}
            onClick={() => changeStoryHandler("next")}
            className="text-2xl disabled:hidden disabled:bg-gray-500 disabled:opacity-50 rounded-full p-1.5 z-40 hover:bg-opacity-100 bg-gray-50 bg-opacity-50 transition-all top-1/2"
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
      {/* close locker on loading */}
      {loading && <div className="fixed inset-0 z-40"></div>}
    </>
  );
}

export default SlideFrame;
