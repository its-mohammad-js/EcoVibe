import { CgClose } from "react-icons/cg";
import TextInput from "/src/common/UI elements/Forms/TextInput";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loadingIcon } from "constants";
import { updateUserData } from "/src/reducers/auth/userDataSlice";
import { useEffect } from "react";

const inputOptions = [
  {
    name: "business_name",
    placeholder: "What Should We Call You?",
  },
  {
    name: "career_title",
    placeholder: "Your Career Title",
  },
];

function EditBusinessInfoForm({ onModalClose }) {
  const { loading, businessInformation } = useSelector(
    (state) => state.userData
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(businessInformation).map(([key, value]) => {
      setValue(key, value);
    });
  }, [businessInformation]);

  if (loading)
    return (
      <div className="z-40 size-full flex items-center justify-center flex-col bg-gray-50/80">
        <img
          src={loadingIcon}
          alt="loading-icon"
          className="size-40 lg:size-64 animate-pulse"
        />
        <h4 className="text-2xl lg:text-4xl font-bold text-center">
          Update Your Business Information...
        </h4>
      </div>
    );

  if (!loading)
    return (
      <form
        onSubmit={handleSubmit(async (e) => {
          await dispatch(
            updateUserData({
              field: "businessInformation",
              data: { ...businessInformation, ...e },
            })
          );

          onModalClose();
          window.location.reload();
        })}
        className="bg-gray-50 rounded-lg w-full h-full lg:w-96 lg:max-h-[80vh] z-50 px-4 py-2 relative"
      >
        {/* title and close modal btn */}
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-primary-900">
            Edit Business Information
          </h4>
          <button
            type="button"
            onClick={() => onModalClose()}
            className="p-1.5 text-xl rounded-full bg-gray-200 hover:bg-gray-950 hover:text-gray-50 transition-all"
          >
            <CgClose />
          </button>
        </div>
        {/* main inputs */}
        <div className="flex flex-col gap-y- pt-6">
          {inputOptions.map((input, index) => (
            <TextInput
              key={index}
              placeholder={input.placeholder}
              label={input.name.replace("_", " ")}
              register={register(input.name, {
                required: "This Field Is Required",
              })}
              error={errors[input.name]?.message}
              style="h-fit [&>input]:py-3"
            />
          ))}

          <div className="">
            <label
              htmlFor="biography"
              className="font-semibold xl:text-lg text-gray-800 hover:text-gray-950 transition-all"
            >
              Biography
            </label>
            <textarea
              id="biography"
              rows={5}
              {...register("biography", { required: "This Field Is Required" })}
              placeholder="Write About Yourself"
              className={`placeholder:first-letter:uppercase size-full outline-none mt-1 px-4 py-2 order-2 disabled:animate-pulse bg-transparent border border-gray-300 hover:border-gray-400 transition-all group focus:!border-gray-500 rounded-lg`}
            ></textarea>
            <p className="text-sm md:text-base mt-0.5 px-1 text-red-500 font-medium">
              {errors?.biography?.message}
            </p>
          </div>
        </div>
        {/* add social media links */}
        <div className=""></div>
        {/* submit btn */}
        <div className="absolute bottom-0 rounded-b-lg w-full right-0 px-2 py-1">
          <button className="px-4 py-2 w-full bg-primary-500 text-gray-50 rounded-lg border-2 xl:text-lg border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all">
            Submit
          </button>
        </div>
      </form>
    );
}

export default EditBusinessInfoForm;
