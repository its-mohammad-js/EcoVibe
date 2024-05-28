import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { storage } from "../../../config/firebase";
import { avatarsUrl } from "../../../helpers/constants";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../redux/auth/regularUsers/regluarUsersSlice";
import ProfileImagePicker from "../../ProfileImagePicker/ProfileImagePicker";

const inputOptions = {
  first_name: {
    required: "First Name Is Required",
    minLength: {
      value: 3,
      message: "Minimum Length Is 4 Characters",
    },
  },
  last_name: {
    required: "Last Name Is Required",
    minLength: {
      value: 3,
      message: "Minimum Length Is 3 Characters",
    },
  },
  address: {
    required: "Address Is Required",
    minLength: {
      value: 10,
      message: "Minimum Length Is 10 Characters",
    },
  },
  gender: {
    required: "Please Select Your Gender",
  },
};

function PersonalDetailsForm() {
  const { loading, personalInformation } = useSelector(
    (state) => state.userData
  );
  // profile picture state
  const [profilePicUrl, setProfile] = useState("");
  // avatar picker modal state
  const [modalShow, setModalShow] = useState(false);
  // form state
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const dispatch = useDispatch();

  // change profile state if profile already set
  useEffect(() => {
    if (personalInformation?.profilePic) {
      setProfile(personalInformation?.profilePic);
    }
  }, [personalInformation]);

  // change profile pic handler
  function changeProfilePic(picUrl) {
    setProfile(picUrl);
  }

  return (
    <div className="flex flex-col items-center">
      {/* title */}
      <div className="my-2 px-4 py-2 text-center">
        <h4 className="text-2xl  font-bold mb-2 md:mb-4 md:text-5xl">
          Set Up Your <span className="text-primary-500">Information</span>
        </h4>
        <span className="text-primary-500 text-sm md:text-base font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, saepe.
        </span>
      </div>
      {/* personal information input's */}
      <form
        onSubmit={handleSubmit((data) => {
          const personalInfo = {
            ...data,
            profilePic: profilePicUrl || avatarsUrl[0],
          };

          dispatch(
            updateUserData({
              data: personalInfo,
              field: "personalInformation",
              step: "third-step",
            })
          );
        })}
        className="flex flex-col md:gap-y-2"
      >
        {/* profile picker */}
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <div
            className={`${
              loading ? "animate-pulse" : ""
            } w-36 h-36 flex justify-center bg-gradient-to-tr from-primary-200 via-gray-100 to-primary-500 rounded-full relative`}
          >
            {/* default image */}
            <img
              src={profilePicUrl || avatarsUrl[0]}
              alt="default-avatar-pic"
              className="w-full h-full object-cover mb-10 rounded-full"
            />
            {/* open modal btn */}
            <button
              type="button"
              onClick={() => setModalShow(true)}
              className="absolute -bottom-1 right-3 bg-primary-500 text-gray-50 rounded-full text-xl p-2 disabled:bg-gray-400"
            >
              <FaPlus />
            </button>
            {/* profile picker */}
            <div
              className={`${
                modalShow ? "visible opacity-100" : "invisible opacity-0"
              } transition-all duration-200`}
            >
              <ProfileImagePicker
                onPicChange={changeProfilePic}
                onModalClose={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
        {/* first and family name */}
        <div className="md:flex items-start gap-x-4">
          {/* nick name */}
          <Input
            title={"Nick Name"}
            placeholder={"Your First Name"}
            register={register}
            name={"first_name"}
            errors={errors}
            validation={inputOptions.first_name}
            isLoading={loading}
          />
          {/* family name */}
          <Input
            title={"Family Name"}
            placeholder={"Your Last Name"}
            name="last_name"
            register={register}
            errors={errors}
            validation={inputOptions.last_name}
            isLoading={loading}
          />
        </div>
        {/* address */}
        <Input
          title={"Address"}
          name="address"
          register={register}
          validation={inputOptions.address}
          errors={errors}
          placeholder={"City, Street, Building, etc..."}
          isLoading={loading}
        />
        {/* gender */}
        <div className="mb-4 md:m-0">
          <h6 className="text-lg text-gray-600 mb-2">Gender</h6>

          <select
            name="gender"
            {...register("gender", inputOptions.gender)}
            className="bg-gray-50 border w-full border-gray-300 px-4 py-3 appearance-none rounded-md outline-none none"
          >
            <option className="bg-gray-200">Man</option>
            <option className="bg-gray-200">Women</option>
            <option className="bg-gray-200">Other</option>
          </select>
        </div>
        {/* brith day */}
        <div className="mb-4 md:m-0">
          <h6 className="text-lg text-gray-600 mb-2">Brith Day</h6>

          <input
            {...register("birthday")}
            type="date"
            className="appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-md w-full outline-none"
          />
        </div>
        {/* action buttons */}
        <div className="w-full mt-2 flex items-center justify-end gap-x-2">
          {/* submit button */}
          <button
            // disabled={profilePic.isLoading || !isValid}
            type="submit"
            className="px-4 disabled:bg-gray-300 py-2 md:text-lg hover:bg-primary-800 bg-primary-500 transition-all text-white rounded-md w-fit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;

const Input = ({
  title,
  placeholder,
  register,
  name,
  validation,
  errors,
  isLoading,
}) => {
  return (
    <div className="mb-4 md:m-0">
      <h6 className="text-lg text-gray-600 mb-2">{title}</h6>
      <div
        className={`${
          (errors[name]?.message && "!border-red-500") ||
          (isLoading && "animate-pulse shadow-md")
        } flex items-center justify-center border border-gray-300 rounded-md px-2 focus-within:border-gray-500 transition-all`}
      >
        <input
          disabled={isLoading}
          type="text"
          {...register(name, validation)}
          className="px-2 py-2 text-lg flex-1 focus:outline-none peer disabled:animate-pulse bg-transparent disabled:cursor-not-allowed"
          placeholder={placeholder}
        />
        <span className="text-2xl text-gray-300 transition-all">
          {!errors[name]?.message ? (
            <FaCheck />
          ) : (
            <CgClose className="text-red-500" />
          )}
        </span>
      </div>

      <p className="mt-1 text-red-500">{errors[name]?.message}</p>
    </div>
  );
};
