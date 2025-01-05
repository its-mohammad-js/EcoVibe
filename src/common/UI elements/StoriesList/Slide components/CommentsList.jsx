import { AiOutlineSend, AiOutlineUser } from "react-icons/ai";
import { getDatabase, ref, serverTimestamp, update } from "firebase/database";
import { useState } from "react";
import { useSelector } from "react-redux";

function CommentsList({ story, showComments, setShowComments }) {
  const { personalInformation, userId } = useSelector(
    (state) => state.userData
  );
  const [comment, setComment] = useState("");

  function addCommentHandler() {
    // get database
    const db = getDatabase();
    // ref to story in database
    const storyRef = ref(db, `stories/${story.id}`);
    // update comments with new comment
    update(storyRef, {
      comments: [
        ...(story?.comments || []),
        {
          createdAt: serverTimestamp(),
          authorId: userId,
          content: comment,
          authorProfile: personalInformation?.profilePic,
          authorName:
            personalInformation?.first_name +
            " " +
            personalInformation?.last_name,
          createdByUser: true,
        },
      ],
    });
    // reset comment value
    setComment("");
  }

  return (
    <>
      <div
        className={`${
          showComments
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute bottom-0 grid z-50 grid-rows-8 transition-all rounded-t-3xl px-2 pb-1 pt-3 overflow-hidden h-[25rem] w-screen md:w-full right-0 bg-gray-900/85 backdrop-blur-xl`}
      >
        <div className="w-full row-span-7 overflow-auto styled-scroll-bar flex flex-col gap-y-4">
          {story?.comments?.length ? (
            story?.comments?.map((comment, index) => (
              <div key={index} className="w-full flex items-start">
                <div className="size-14 rounded-full overflow-hidden flex items-center justify-center">
                  {comment?.authorProfile ? (
                    <img className="mt-1" src={comment?.authorProfile} />
                  ) : (
                    <AiOutlineUser className="text-4xl text-gray-400" />
                  )}
                </div>
                <div className="flex-col p-1 w-11/12">
                  <h4 className="text-lg font-semibold text-gray-300 line-clamp-1">
                    {comment.authorName}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-6">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h2 className="my-auto w-full text-center text-gray-300">
              no comments yet...
            </h2>
          )}
        </div>

        <div className="flex items-center border border-gray-400 rounded-2xl pl-1 pr-2">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter" && comment.length > 0) {
                e.preventDefault();
                addCommentHandler();
              }
            }}
            type="text"
            onChange={({ target }) => setComment(target.value)}
            value={comment}
            className="bg-transparent w-full outline-none border-transparent flex-1 px-2 py-2 text-gray-300"
            placeholder="comment something"
          />

          <button
            onClick={() => addCommentHandler()}
            disabled={comment.length <= 0}
            className="text-gray-300 disabled:opacity-0 transition-all text-3xl opacity-80 hover:opacity-100"
          >
            <AiOutlineSend />
          </button>
        </div>
      </div>

      {showComments && (
        <div
          onClick={() => setShowComments(false)}
          className="fixed inset-0 -z-10 md:hidden"
        ></div>
      )}
    </>
  );
}

export default CommentsList;
