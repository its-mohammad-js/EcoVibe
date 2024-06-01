import { FieldValue, doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ReactStars from "react-stars";
import { db } from "../../config/firebase";
import { generateId } from "../../helpers/constants";
import { useParams } from "react-router-dom";

function AddCommentInputs({ mode, parentId, replyList, fetchComments }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  // necessary data & hooks
  const {
    personalInformation: { first_name, last_name, profilePic },
    uid,
  } = useSelector((state) => state.userData);
  const params = useParams();

  // set user info
  useEffect(() => {
    if (first_name && last_name) {
      setValue("first_name", first_name);
      setValue("last_name", last_name);
    }
  }, [first_name, last_name]);

  async function onSubmitReview(formdata) {
    // create comment object model
    const commentData = {
      productId: params?.productId,
      authorProfile: profilePic,
      authorId: uid,
      date: Date.now(),
      commentId: generateId(uid),
      content: formdata,
      replies: [],
    };
    // submit comment to produt comments
    try {
      await setDoc(doc(db, "comments", commentData.commentId), commentData);
      fetchComments();
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmitReply(formData) {
    try {
      const replyData = {
        authorProfile: profilePic,
        authorId: uid,
        date: Date.now(),
        commentId: generateId(uid),
        content: formData,
      };

      await setDoc(
        doc(db, "comments", parentId),
        { replies: [...replyList, replyData] },
        { merge: true, mergeFields: false }
      );
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit((e) => {
        mode !== "reply" ? onSubmitReview(e) : onSubmitReply(e);
      })}
      className="flex flex-col gap-2"
    >
      {/* star ranger */}
      {mode !== "reply" && (
        <div className="flex flex-col">
          <div className="flex items-center justify-between lg:flex-col lg:items-start">
            <h6 className="text-sm font-medium lg:text-base">
              Click on start to review :
            </h6>
            <ReactStars
              size={25}
              {...register("stars", {
                required: { value: true, message: "Please Rate Product" },
              })}
              onChange={(e) => setValue("stars", e)}
            />
          </div>
          <p className="mx-1 text-sm text-red-400">{errors?.stars?.message}</p>
        </div>
      )}
      {/* user info */}
      {mode !== "reply" && (
        <div className="grid grid-cols-2 gap-4 w-full">
          <Input
            register={register}
            name="first_name"
            placeholder="First name"
            errors={errors}
          />
          <Input
            register={register}
            name="last_name"
            placeholder="Last Name"
            errors={errors}
          />
        </div>
      )}
      {/* review data */}
      {mode !== "reply" && (
        <Input
          register={register}
          name="header"
          placeholder="Type Review Heading"
          errors={errors}
        />
      )}

      <div className="flex flex-col w-full">
        <textarea
          {...register(mode !== "reply" ? "review" : "reply", {
            required: { value: true, message: "Please Type Your Comment" },
          })}
          placeholder={`${mode !== "reply" ? "Review" : "Reply"} Text`}
          className={`${
            mode !== "reply" ? "h-52" : "h-24"
          } px-4 py-2 outline-none border rounded-md resize-none`}
        />

        <p className="mx-1 text-sm text-red-400 mt-1">
          {errors?.review?.message}
        </p>
      </div>

      <button className="px-4 py-2.5 rounded-md text-gray-50 bg-primary-400">
        <p>Submit {mode !== "reply" ? "Review" : "Reply"}</p>
      </button>
    </form>
  );
}
const Input = ({ name, placeholder, register, errors }) => {
  return (
    <div className="flex flex-col">
      <input
        {...register(name, {
          required: { value: true, message: "This Field Is Required" },
        })}
        className="px-4 py-2 outline-none border rounded-md"
        placeholder={placeholder}
        type="text"
      />

      <p className="mx-1 text-sm text-red-400 mt-1">
        {errors?.[name]?.message}
      </p>
    </div>
  );
};

export default AddCommentInputs;
