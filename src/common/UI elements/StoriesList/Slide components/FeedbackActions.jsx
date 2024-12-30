import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toggleElementInArray } from "helpers";
import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, update } from "firebase/database";
import { useSelector } from "react-redux";
import useOutSideClick from "../../../hooks/UseOutsideClick";
import CommentsList from "./CommentsList";
import { MdOutlineModeComment } from "react-icons/md";

function FeedbackActions({ story, handlePause }) {
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
    <>
      <div
        ref={commentListRef}
        className="absolute w-full bottom-0 left-0 h-5 items-end flex gap-y-3 flex-col pb-36 gap-x-2 z-50 p-2"
      >
        <button onClick={likeSlideHandler} className="text-gray-400 text-4xl">
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
          className="text-gray-400 text-4xl"
        >
          <MdOutlineModeComment />
          <p className="text-lg">{story?.comments?.length || 0}</p>
        </button>

        {/* comments list & add comment input */}
        <CommentsList {...{ story, showComments }} />
      </div>
    </>
  );
}

export default FeedbackActions;
