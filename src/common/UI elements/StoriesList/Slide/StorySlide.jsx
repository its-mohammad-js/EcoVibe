import { useEffect, useRef, useState } from "react";
import { AiOutlineMore, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import useOutSideClick from "../../../hooks/UseOutsideClick";
import { motion, useAnimation } from "framer-motion";
import { IoPauseOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
import { storage, db } from "/src/config/firebase";
import { deleteObject, ref } from "firebase/storage";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import toast, { LoaderIcon } from "react-hot-toast";
import { CiFileOn } from "react-icons/ci";
import { useTimer } from "./useTimer";

function StorySlide(props) {
  // destructure props
  const {
    changeStoryHandler,
    listIndex,
    currentListIndex,
    list,
    currentSlideIndex,
    slideindex,
    story,
  } = props;
  const [loading, setLoading] = useState(false);
  const { remainingTime, pause, handlePause, setRemainingTime } = useTimer(
    5000,
    () => changeStoryHandler("next")
  );

  const contextMenuRef = useRef(); // ref to context menu
  const [contextMenuShow, setContextMenu] = useState(false); //context menu state
  useOutSideClick(contextMenuRef, () => setContextMenu(false)); // handle outside click event on context menu open
  const videoRef = useRef(); // ref to video content
  const controls = useAnimation(); // control progress bar animation
  const { userId } = useSelector((state) => state.userData); // current user id

  // control progress base animation states (puase & play) , (update remaining time)
  useEffect(() => {
    if (pause) {
      controls.stop(); // Pause animation
    } else {
      controls.start({
        translateX: "0%", // Continue the animation
        transition: { duration: remainingTime / 1000, ease: "linear" }, // Update duration dynamically
      });
    }
  }, [pause, remainingTime]);

  // Update video playback based on pause state
  useEffect(() => {
    if (videoRef.current) {
      if (pause) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [pause]);

  // delete story function
  async function deleteStory() {
    try {
      // dispatch loading
      setLoading(true);
      handlePause(false);
      // ref to story content on storage
      const contentRef = ref(storage, story.contentUrl);
      // delete story content from storage
      await deleteObject(contentRef);
      // ref to story on firestore
      const docRef = doc(collection(db, "Stories"), story.id);
      // delete story from firestore
      await deleteDoc(docRef);
      // dispatch success
      toast.success("story removed successfully");
      window.location.reload();
    } catch (error) {
      // dispatch error
      toast.remove();
      toast.error("There was an error on delete story, please try again later");
      setLoading(false);
      handlePause(false);
      console.log(error);
    }
  }

  // remove story from highlight
  async function removeHighlight() {
    try {
      // dispatch loading
      setLoading(true);
      handlePause(false);
      // ref to story on firestore
      const docRef = doc(collection(db, "Stories"), story.id);
      // delete story from firestore
      await setDoc(docRef, { ...story, highlightRef: null });
      // dispatch success
      toast.success("highlight removed successfully");
      window.location.reload();
    } catch (error) {
      // dispatch error
      toast.error(
        "There was an error on remove highlight, please try again later"
      );
      setLoading(false);
      handlePause(false);
      console.log(error);
    }
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
          <div className="flex gap-2 p-2">
            {list.map((s, i) => (
              <p
                key={i}
                className={`${
                  i === currentSlideIndex ? "bg-gray-50" : "bg-gray-400"
                } w-full h-1 rounded-xl overflow-hidden relative`}
              >
                {i === currentSlideIndex && (
                  <motion.div
                    className="bg-primary-300 h-1 absolute left-0 top-0 w-full"
                    initial={{ translateX: "-100%" }}
                    animate={controls} // Attach animation controls
                    transition={{
                      duration: remainingTime / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </p>
            ))}
          </div>
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
            <div
              ref={contextMenuRef}
              className="flex items-center gap-x-2 relative"
            >
              <button onClick={() => handlePause()} className="text-gray-50">
                {pause ? (
                  <FaPlay className="text-xl" />
                ) : (
                  <IoPauseOutline className="text-2xl" />
                )}
              </button>

              <button
                onClick={() => setContextMenu(true)}
                className="text-3xl text-gray-50"
              >
                <AiOutlineMore className="rotate-90" />
              </button>

              <div
                className={`${
                  contextMenuShow
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                } text-base flex top-8 p-1 flex-col bg-gray-50 text-gray-950 absolute right-0 rounded-lg overflow-hidden`}
              >
                <button
                  onClick={() => {
                    removeHighlight();
                    setContextMenu(false);
                  }}
                  disabled={!story?.highlightRef || story.authorId !== userId}
                  className="flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all items-center gap-x-2 text-center text-nowrap px-4 py-2"
                >
                  <CiFileOn className="text-xl" />

                  <p>Remove highlight</p>
                </button>

                <button
                  disabled={story.authorId !== userId}
                  onClick={() => {
                    deleteStory();
                    setContextMenu(false);
                  }}
                  className="flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all items-center gap-x-2 text-center text-nowrap px-4 py-2"
                >
                  <p>
                    <BsTrash3 />
                  </p>
                  <p>Delete story</p>
                </button>

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
                  onPlaying={(e) => {
                    const currentDuration = Math.max(
                      0,
                      (e.target.duration - e.target.currentTime) * 1000
                    );

                    setRemainingTime(currentDuration);
                  }}
                  autoPlay={currentSlideIndex === slideindex}
                  className="size-full object-cover"
                  src={story.contentUrl}
                ></video>
              )}
              {loading && (
                <div className="absolute z-50 inset-0 flex flex-col text-gray-200 gap-y-4 font-medium bg-gray-900/80 rounded-xl items-center justify-center">
                  <LoaderIcon className="size-24" />
                  <p>Deleting story, please dont refresh page</p>
                </div>
              )}
              <div
                onTouchStart={() => handlePause(true)}
                onTouchEnd={() => handlePause(false)}
                className="absolute z-50 inset-0 flex"
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
          }
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
      {/* close modal locker on loading */}
      {loading && <div className="fixed z-40 inset-0"></div>}
    </>
  );
}

export default StorySlide;
