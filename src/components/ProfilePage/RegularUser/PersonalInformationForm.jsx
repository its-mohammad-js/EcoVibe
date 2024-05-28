import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaPencil } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../redux/auth/regularUsers/regluarUsersSlice";

const inputOptions = {
  first_name: {
    minLength: {
      value: 3,
      message: "Minimum Length Is 3 Characters",
    },
  },
  last_name: {
    minLength: {
      value: 2,
      message: "Minimum Length Is 2 Characters",
    },
  },
};

function PersonalInformationForm() {
  const {
    register,
    formState: { errors, dirtyFields },
    setValue,
    handleSubmit,
  } = useForm({ mode: "all" });
  // necessary data
  const { personalInformation, loading } = useSelector(
    (state) => state.userData
  );
  const { first_name, last_name, address, birthday } = personalInformation;
  const dispatch = useDispatch();

  // set inputs value with personal info
  useEffect(() => {
    Object.entries({ first_name, birthday, last_name, address }).forEach(
      ([key, value]) => {
        setValue(key, value);
      }
    );
  }, [first_name, birthday, last_name, address]);

  function updateUserInfo(formData) {
    // take a local copy of personal info
    let updatedInfo = { ...personalInformation };
    // update local copy of personal info
    Object.entries(formData).forEach(([key, val]) => {
      updatedInfo[key] = val;
    });
    // update user data with new infomation
    dispatch(
      updateUserData({ data: updatedInfo, field: "personalInformation" })
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        updateUserInfo(data);
      })}
      className="bg-white px-4 py-2 border border-gray-400 rounded-md mt-2 flex flex-col gap-3 relative"
    >
      <button
        disabled={!Object.keys(dirtyFields).length}
        className="absolute right-3 -top-4 px-4 py-2 text-gray-50 rounded-md transition-all disabled:bg-gray-400 bg-primary-500"
      >
        Save Changes
      </button>

      {/* edit personal info inputs */}
      {Object.entries({ first_name, birthday, last_name, address }).map(
        ([name], index) => (
          <Input
            register={register}
            name={name}
            title={name}
            errors={errors}
            type={name !== "birthday" ? "text" : "date"}
            key={index}
            loading={loading}
          />
        )
      )}
    </form>
  );
}

export default PersonalInformationForm;

const Input = ({ register, name, title, errors, type, loading }) => {
  return (
    <div className="">
      <h6 className="text-base font-bold first-letter:uppercase">
        {title.replace("_", " ")}
      </h6>
      <input
        type={type || "text"}
        {...register(name, inputOptions[name])}
        disabled={loading}
        className={`${
          errors[name] ? "border-red-400" : "border-gray-300"
        } mt-1 border px-4 py-2 rounded-md outline-gray-400 w-full disabled:animate-pulse disabled:cursor-not-allowed`}
      />
      <p className="px-1 py-0.5 font-medium text-red-400">
        {errors[name]?.message}
      </p>
    </div>
  );
};
