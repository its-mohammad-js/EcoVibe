import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { avatarsUrl } from "appData";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "authActions/updateUserData";
import ProfileImagePicker from "UI/ProfileImagePicker/ProfileImagePicker";
import TextInput from "UI/Forms/TextInput";
import { personalFormInputs } from "./formInputsInfo";
import Select from "react-select";

const genders = [
  { label: "Man", value: "man" },
  { label: "Women", value: "women" },
  { label: "Other", value: "other" },
];

function PersonalDetailsForm() {
  const { loading, personalInformation, userType } = useSelector(
    (state) => state.userData
  ); // current user data
  const [profilePicUrl, setProfile] = useState(""); // profile picture state
  const [modalShow, setModalShow] = useState(false); // avatar picker modal state
  // form state
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch(); // dispatch hook
  console.log(userType);

  // change profile state if profile already set
  useEffect(() => {
    if (personalInformation) {
      setProfile(personalInformation?.profilePic);
      setValue("first_name", personalInformation?.first_name);
    }
  }, [personalInformation]);

  // submit personal info on user profile
  function submitPersonalDetails(formData) {
    // merge personal info with form data
    const personalInfo = {
      ...personalInformation,
      ...formData,
      profilePic: profilePicUrl || avatarsUrl[0],
    };
    // update it on database
    dispatch(
      updateUserData({
        userType: userType === "customer" ? "customer" : "both",
        data: personalInfo,
        field: "personalInformation",
        customer_step: "third-step",
      })
    );
  }

  return (
    <div className="flex flex-col items-center">
      {/* title */}
      <div className="my-2 px-4 py-2 text-center">
        <h4 className="text-3xl  font-bold mb-2 md:mb-4 md:text-5xl">
          Set Up Your <span className="text-primary-500">Information</span>
        </h4>
        <span className="text-primary-800 text-sm md:text-base font-medium">
          Fill out your personal information to create an eco-friendly account
          and start your sustainable shopping journey! 🌍✨
        </span>
      </div>
      {/* personal information input's */}
      <form
        onSubmit={handleSubmit((data) => submitPersonalDetails(data))}
        className="flex flex-col w-11/12 md:gap-y-2 lg:w-[34rem]"
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
                onPicChange={(picUrl) => setProfile(picUrl)}
                onModalClose={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
        {/* main inputs (first name,last name,address) */}
        <div className="grid lg:grid-cols-4 lg:grid-rows-2 gap-2 mb-1">
          {personalFormInputs.map((input, index) => (
            <TextInput
              key={index}
              placeholder={input.placeholder || input.name.replace("_", " ")}
              label={input.name.replace("_", " ")}
              id={input.name}
              register={register(input.name, input.validation)}
              error={errors[input.name]?.message}
              style={`!h-fit [&>input]:py-3 ${
                input.name === "address" ? "lg:col-span-4" : "lg:col-span-2"
              }`}
            />
          ))}
        </div>
        {/* gender */}
        <div className="mb-4 md:m-0">
          <label
            htmlFor="gender"
            className="font-semibold xl:text-lg text-gray-800 hover:text-gray-950 transition-all"
          >
            Gender
          </label>

          <Select
            placeholder="Select Your Gender"
            styles={{
              control: (provided, state) => ({
                ...provided,
                borderColor: state.menuIsOpen ? "#6b7280" : "#d1d5db", // Change border color when menu is open
                boxShadow: "none", // Optional: Add focus shadow
                "&:hover": {
                  borderColor: state.menuIsOpen ? "#6b7280" : "#d1d5db", // Ensure consistent color on hover
                },
              }),
            }}
            options={genders}
            className="[&>div]:p-1.5 [&>div]:rounded-lg"
            onChange={({ value }) => setValue("gender", value)}
          />
          <p className="text-sm md:text-base mt-1 px-1 text-red-500 font-medium">
            {errors?.gender?.message}
          </p>
        </div>
        {/* brith day */}
        <div className="mb-4 md:m-0">
          <label
            htmlFor="date"
            className="font-semibold xl:text-lg text-gray-800 hover:text-gray-950 transition-all"
          >
            Brith Day
          </label>

          <input
            id="date"
            {...register("birthday")}
            type="date"
            className="mt-1 px-4 py-3 border border-gray-300 rounded-md w-full outline-none"
          />
        </div>

        {/* action buttons */}
        <div className="w-full mt-2 flex items-center justify-end gap-x-2">
          {/* submit button */}
          <button
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
