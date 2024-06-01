import { useState } from "react";
import ReactStars from "react-stars";
import AddCommentInputs from "./AddCommentInputs";

function CommentRow({
  content,
  authorProfile,
  setReplyTo,
  replyTo,
  commentId,
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
          <div>
            <ReactStars value={content.stars} size={20} edit={false} />
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="mt-1 flex flex-col gap-1 py-1">
        <h4 className="text-xl font-bold">{content.header}</h4>
        <p className="text-sm text-gray-700 leading-6">{content.review}</p>
        <button
          onClick={() => setReplyTo(replyTo === commentId ? "" : commentId)}
          className={`${
            replyTo === commentId ? "bg-gray-500" : " bg-primary-400"
          } px-4 py-2 rounded-md w-fit text-gray-50 transition-all`}
        >
          {replyTo === commentId ? "hide" : "Reply"}
        </button>
      </div>
    </div>
  );
}

export default CommentRow;
