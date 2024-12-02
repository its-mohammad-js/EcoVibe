import { useRef } from "react";
import { AiOutlineMore, AiOutlinePlus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoPauseOutline } from "react-icons/io5";
import useOutSideClick from "hooks/UseOutsideClick";
import { CiFileOn } from "react-icons/ci";
import { useSlide } from "../StoryListModal";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db, storage } from "/src/config/firebase";
import { deleteObject, ref } from "firebase/storage";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function ContextMenu({
  pause, // pause state
  handlePause, // change pause handler
  setLoading, // set loading process
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
            removeHighlight();
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
