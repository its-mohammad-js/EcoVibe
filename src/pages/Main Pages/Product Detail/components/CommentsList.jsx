import { useState } from "react";
import AddCommentInputs from "./AddCommentInputs";
import ReactStars from "react-stars";

function CommentsList({ commentsData, fetchComments }) {
  const [replyTo, setReplyTo] = useState("");
  const [showReplies, setShowReplies] = useState("");

  return (
    <div className="flex flex-col my-4 gap-y-4 max-h-[30rem] overflow-auto w-full styled-scroll-bar">
      {commentsData?.map((comment, index) => (
        <div key={index} className="mt-2 mb-4">
          <CommentRow
            {...comment}
            setReplyTo={setReplyTo}
            replyTo={replyTo}
            fetchComments={fetchComments}
          />
          {/* reply to component */}
          <div
            className={`${
              replyTo === comment.commentId &&
              "!visible !opacity-100 h-40 translate-x-0 mb-3 px-2"
            } transition-all py-2 duration-500 lg:px-4 invisible opacity-0 -translate-x-96 h-0`}
          >
            {replyTo === comment.commentId && (
              <AddCommentInputs
                mode="reply"
                parentId={comment.commentId}
                replyList={comment.replies}
                fetchComments={fetchComments}
              />
            )}
          </div>

          <div className="flex flex-col px-4 gap-y-4">
            {comment.replies.map((reply, index) => {
              if (showReplies !== comment.commentId)
                return (
                  index === 0 && (
                    <>
                      <CommentRow {...reply} key={index} />
                      <button
                        onClick={() => setShowReplies(comment.commentId)}
                        className={`${comment?.replies?.length <= 1 && "hidden"}
                           relative flex items-center justify-center`}
                      >
                        <p className="bg-white w-fit px-2 font-bold lg:text-lg">
                          Show All Replies
                        </p>
                        <span className="w-full h-0.5 bg-gray-200 absolute right-0 top-1/2 bottom-1/2 -z-10"></span>
                      </button>
                    </>
                  )
                );
              else return <CommentRow {...reply} key={index} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;

function CommentRow({
  content,
  authorProfile,
  setReplyTo,
  replyTo,
  commentId,
  type,
}) {
  return (
    <div className="">
      {/* author info */}
      <div className="w-full flex items-center gap-3">
        <img
          src={authorProfile}
          alt="author profile"
          className="size-16 object-contain rounded-full bg-gray-200"
        />

        <div className="flex flex-col">
          <h6 className="text-lg line-clamp-1 font-bold">
            {content.first_name} {content.last_name}
          </h6>
          {content.stars && (
            <div>
              <ReactStars value={content.stars} size={20} edit={false} />
            </div>
          )}
        </div>
      </div>
      {/* main content */}
      <div className="mt-1 flex flex-col gap-1 py-1">
        {content.header && (
          <h4 className="text-xl font-bold">{content.header}</h4>
        )}
        <p className="text-sm text-gray-700 leading-6">
          {content.review || content.reply}
        </p>
        {type === "comment" && (
          <button
            onClick={() => setReplyTo(replyTo === commentId ? "" : commentId)}
            className={`${
              replyTo === commentId ? "bg-gray-500" : " bg-primary-400"
            } px-4 py-2 rounded-md w-fit text-gray-50 transition-all`}
          >
            {replyTo === commentId ? "hide" : "Reply"}
          </button>
        )}
      </div>
    </div>
  );
}
