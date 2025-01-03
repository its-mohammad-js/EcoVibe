import { useRef } from "react";
import { AiOutlineMore, AiOutlinePlus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoPauseOutline } from "react-icons/io5";
import useOutSideClick from "hooks/UseOutsideClick";
import { CiFileOn } from "react-icons/ci";
import { useSlide } from "../StoryListModal";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function ContextMenu({
  onRemoveHighlight,
  pause, // pause state
  handlePause, // change pause handler
  onDeleteSlide, // remove story slide
  loading, // loading process state
  contextMenuShow, // context menu state
  setContextMenu, // change context menu hanlder
}) {
  const { changeStoryHandler, story } = useSlide(); // slide data
  const contextMenuRef = useRef(); // ref to context menu
  // handle outside click event on context menu open
  useOutSideClick(contextMenuRef, onOutsideClick, !contextMenuShow);
  const { userId } = useSelector((state) => state.userData); // current user data

  // on outside of context menu click event
  function onOutsideClick() {
    handlePause(); // pause story
    setContextMenu(false); // close context menu
  }

  // delete story function
  async function removeSlideHandler() {
    try {
      handlePause(true);
      // remove slide from server
      await onDeleteSlide(story, () => changeStoryHandler("close"));
      // dispatch success
      toast.success("story removed successfully");
      handlePause(false);
    } catch (error) {
      // dispatch error
      toast.remove();
      toast.error("There was an error on delete story, please try again later");
      handlePause(false);
      console.log(error);
    }
  }

  return (
    <div ref={contextMenuRef} className="flex items-center gap-x-2 relative">
      {/* pause btn */}
      <button onClick={() => handlePause()} className="text-gray-50">
        {pause ? (
          <FaPlay className="text-xl" />
        ) : (
          <IoPauseOutline className="text-2xl" />
        )}
      </button>
      {/* open conext menu btn */}
      <button
        onClick={() => {
          handlePause(true);
          setContextMenu(true);
        }}
        className="text-3xl text-gray-50"
      >
        <AiOutlineMore className="rotate-90" />
      </button>
      {/* context menu */}
      <div
        className={`${
          contextMenuShow ? "opacity-100 visible" : "opacity-0 invisible"
        } ${
          loading && "hidden"
        } text-base flex top-8 p-1 flex-col bg-gray-50 text-gray-950 absolute right-0 rounded-lg overflow-hidden`}
      >
        {/* remove slide form highlights */}
        <button
          onClick={() => {
            onRemoveHighlight(story);
            setContextMenu(false);
          }}
          disabled={!story?.highlightRef || story.authorId !== userId}
          className="flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all items-center gap-x-2 text-center text-nowrap px-4 py-2"
        >
          <CiFileOn className="text-xl" />

          <p>Remove highlight</p>
        </button>
        {/* delete story */}
        <button
          disabled={story.authorId !== userId}
          onClick={() => {
            removeSlideHandler();
            setContextMenu(false);
          }}
          className="flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all items-center gap-x-2 text-center text-nowrap px-4 py-2"
        >
          <p>
            <BsTrash3 />
          </p>
          <p>Delete story</p>
        </button>
        {/* close list modal */}
        <button
          onClick={() => {
            changeStoryHandler("close");
          }}
          className="flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all text-red-500 items-center gap-x-2 text-center text-nowrap px-4 py-2"
        >
          <AiOutlinePlus className="rotate-45 text-xl" />

          <p>Close</p>
        </button>
      </div>
    </div>
  );
}

export default ContextMenu;
