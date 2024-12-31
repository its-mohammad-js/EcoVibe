import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toggleElementInArray } from "helpers";
import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, update } from "firebase/database";
import { useSelector } from "react-redux";
import useOutSideClick from "../../../hooks/UseOutsideClick";
import CommentsList from "./CommentsList";
import { MdClose, MdOutlineModeComment } from "react-icons/md";

function FeedbackActions({ story, handlePause, changeStoryHandler }) {
  const { userId, auth_status } = useSelector((state) => state.userData);
  const [isLiked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(null);
  const commentListRef = useRef();
  useOutSideClick(
    commentListRef,
    () => {
      setShowComments(false);
      if (showComments !== null) handlePause();
    },
    showComments === null
  );

  useEffect(() => {
    setLiked(story?.likes?.includes(userId));
  }, [story]);

  function likeSlideHandler() {
    // get database
    const db = getDatabase();
    // ref to story in database
    const storyRef = ref(db, `stories/${story.id}`);
    // update likes array
    update(storyRef, { likes: toggleElementInArray(story?.likes, userId) });
  }

  return (
    <div
      ref={commentListRef}
      className="absolute w-fit md:w-full bottom-0 right-0 gap-y-3 pb-4 gap-x-2 z-50 p-2"
    >
      <div className="flex flex-col items-end px-1 py-0.5">
        <button onClick={likeSlideHandler} className="text-gray-400 text-3xl">
          {isLiked ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart className="text-gray-400" />
          )}
          <p className="text-lg">{story?.likes?.length || 0}</p>
        </button>

        <button
          disabled={auth_status !== 200}
          onClick={() => {
            handlePause(true);
            setShowComments(true);
          }}
          className="text-gray-400 text-3xl"
        >
          <MdOutlineModeComment />
          <p className="text-lg">{story?.comments?.length || 0}</p>
        </button>

        <button
          onClick={() => {
            changeStoryHandler("close");
          }}
          className="text-gray-400 text-3xl text-center"
        >
          <MdClose />
          <p className="text-xs">close</p>
        </button>
      </div>
      {/* comments list & add comment input */}
      <CommentsList {...{ story, showComments }} />
    </div>
  );
}

export default FeedbackActions;
