import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ReactStars from "react-stars";
import { db } from "src/config/firebase";
import { checkUserAuthentication, generateId } from "constants";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import TextInput from "/src/common/UI elements/Forms/TextInput";

const inputOptions = [
  { name: "first_name" },
  { name: "last_name" },
  { name: "header" },
];

function AddCommentInputs({
  mode,
  parentId,
  replyList,
  fetchComments,
  loading,
}) {
  // product data
  const { data: productData } = useSelector((state) => state.products);
  // form data
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    setValue,
  } = useForm();

  // necessary data & hooks
  const {
    personalInformation: { first_name, last_name, profilePic },
    userId,
    auth_status,
  } = useSelector((state) => state.userData);
  const params = useParams();
  const [submitLoading, setSubmitLoading] = useState(false);

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
      authorId: userId,
      type: "comment",
      date: Date.now(),
      commentId: generateId(userId),
      content: formdata,
      replies: [],
      sellerId: productData[0].SellerId,
    };
    // submit comment to produt comments
    try {
      checkUserAuthentication(auth_status);
      setSubmitLoading(true);
      // submit rate product
      await setDoc(doc(db, "Products", productData[0]?.id), {
        ...productData[0],
        Stars: [...(productData[0]?.Stars || []), getValues().stars],
      });
      // submit comment
      await setDoc(doc(db, "comments", commentData.commentId), commentData);
      fetchComments();
      reset();
    } catch (error) {
      toast.remove();
      toast.error(
        error?.message ||
          "Oops!, There was an error submitting your comment. Please try again later."
      );
      console.log(error);
    } finally {
      setSubmitLoading(false);
    }
  }

  async function onSubmitReply(formData) {
    try {
      checkUserAuthentication(auth_status);
      setSubmitLoading(true);
      const replyData = {
        authorProfile: profilePic,
        authorId: userId,
        date: Date.now(),
        commentId: generateId(userId),
        content: formData,
        type: "reply",
      };

      await setDoc(
        doc(db, "comments", parentId),
        { replies: [...replyList, replyData] },
        { merge: true, mergeFields: false }
      );
      fetchComments();
    } catch (error) {
      toast.remove();
      toast.error(
        error ||
          "Oops!, There was an error submitting your comment. Please try again later."
      );
      console.log(error);
    } finally {
      setSubmitLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit((e) => {
        mode !== "reply" ? onSubmitReview(e) : onSubmitReply(e);
      })}
      className="flex flex-col gap-2 bg-white"
    >
      {/* star ranger */}
      {mode !== "reply" && (
        <div className="flex flex-col">
          <div className="flex items-center justify-between lg:flex-col lg:items-start">
            <h6 className="text-sm font-medium lg:text-base">
              Click on start to review :
            </h6>
            {!loading && !submitLoading && (
              <ReactStars
                size={25}
                {...register("stars", {
                  required: { value: true, message: "Please Rate Product" },
                })}
                value={getValues("stars")}
                onChange={(e) => setValue("stars", e)}
              />
            )}
          </div>
          <p className="mx-1 text-sm text-red-500 font-semibold">
            {errors?.stars?.message}
          </p>
        </div>
      )}
      {/* user info & comment header */}
      <div className="my-1 grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-2">
        {inputOptions.map((input, index) => (
          <TextInput
            key={index}
            placeholder={input.name.replace("_", " ")}
            register={{
              ...register(input.name, {
                required: {
                  value: true,
                  message: "This Field Is Necessary",
                },
              }),
            }}
            style={`[&>p]:text-sm h-fit [&>input]:py-3 [&>input:disabled]:bg-gray-100/70 ${
              input.name === "header" ? "col-span-4" : "col-span-2"
            }`}
            disabled={loading || submitLoading}
            error={errors[input.name]?.message}
          />
        ))}
      </div>
      {/* review content */}
      <div className="flex flex-col w-full">
        <textarea
          {...register(mode !== "reply" ? "review" : "reply", {
            required: { value: true, message: "Please Type Your Comment" },
          })}
          disabled={loading || submitLoading}
          placeholder={`${mode !== "reply" ? "Review" : "Reply"} Text`}
          className={`${
            mode !== "reply" ? "h-52" : "h-24"
          } px-4 py-2 outline-none border disabled:animate-pulse border-gray-300 hover:border-gray-400 transition-all rounded-md resize-none`}
        />

        <p className="mx-1 text-sm text-red-500 mt-1 font-semibold">
          {errors?.review?.message}
        </p>
      </div>
      {/* action button */}
      <button
        disabled={loading || submitLoading}
        className="px-4 py-2.5 rounded-md text-gray-50 bg-primary-400 disabled:bg-gray-500"
      >
        <p>Submit {mode !== "reply" ? "Review" : "Reply"}</p>
      </button>
    </form>
  );
}

export default AddCommentInputs;