import { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineRight } from "react-icons/ai";
import { useTimer } from "../hooks/useTimer";
import SlideContent from "./SlideContent";
import { useSlide } from "../StoryListModal";
import ProgressBar from "./ProgressBar";
import ContextMenu from "./ContextMenu";
import { BiUser } from "react-icons/bi";
import useRemoveStory from "../../../hooks/useRemoveSlide";
import { getDatabase, ref, update } from "firebase/database";
import { useSelector } from "react-redux";

function SlideFrame() {
  const { changeStoryHandler, listIndex, currentListIndex, story } = useSlide(); // slide data
  const { remainingTime, pause, handlePause, setRemainingTime } = useTimer(
    5000,
    () => changeStoryHandler("next")
  ); // timer data & functionlaties
  const [contextMenuShow, setContextMenu] = useState(false); //context menu state
  const { onDeleteSlide, loading, onRemoveHighlight } =
    useRemoveStory(handlePause);
  const { userId } = useSelector((state) => state.userData);
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    const isLikedbyUser = story?.likes?.includes(userId);

    setLiked(isLikedbyUser);
  }, [story]);

  function likeSlideHandler() {
    const updatedLikes = isLiked
      ? [...(story?.likes || [])].filter((id) => id !== userId)
      : [...(story?.likes || []), userId];
    // get database
    const db = getDatabase();
    // ref to story in database
    const storyRef = ref(db, `stories/${story.id}`);
    // update likes array
    update(storyRef, { likes: [...(story?.likes || []), userId] });
  }

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
              <h6 className="text-gray-50 text-lg">
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
            setRemainingTime,
            loading,
            changeStoryHandler,
            handlePause,
            pause,
            contextMenuShow,
          }}
        />
        <div className="absolute w-full bottom-0 left-0 h-5 flex items-center pb-8 gap-x-2 z-50">
          <input
            type="text"
            className="bg-transparent outline-none border flex-1 px-2 py-2 border-gray-400 rounded-2xl"
            placeholder="comment something"
          />
          <button onClick={likeSlideHandler} className="text-gray-400 text-4xl">
            <AiOutlineHeart />
            <p className="text-lg">{story?.likes?.length}</p>
          </button>
        </div>
        {/* next btn */}
        <div
          className={`${
            listIndex !== currentListIndex && "!hidden"
          } absolute -right-4 h-1/2 hidden xl:flex items-center`}
        >
          <button
            disabled={loading}
            onClick={() => changeStoryHandler("next")}
            className="text-2xl disabled:hidden disabled:bg-gray-500 disabled:opacity-50 rounded-full p-1.5 z-50 hover:bg-opacity-100 bg-gray-50 bg-opacity-50 transition-all top-1/2"
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
