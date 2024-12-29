import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "authActions/updateUserData";
import TextInput from "UI/Forms/TextInput";

function PersonalInformationForm() {
  const {
    register,
    formState: { isDirty },
    setValue,
    handleSubmit,
  } = useForm();
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
      className="bg-white px-4 h-96 pt-4 border border-gray-400 rounded-md mt-2 flex flex-col gap-10 relative"
    >
      <button className="absolute right-3 -top-4 px-4 py-2 text-gray-50 rounded-md transition-all bg-primary-500">
        Save Changes
      </button>

      {/* edit personal info inputs */}
      {Object.entries({ first_name, last_name, birthday, address }).map(
        ([name], index) => (
          <TextInput
            label={name.replace("_", " ")}
            key={index}
            register={register(name, { required: "this field is required" })}
            placeholder={name}
            disable={loading}
            type={name !== "birthday" ? "text" : "date"}
            style="[&>label]:text-base m t-6"
          />
        )
      )}
    </form>
  );
}

export default PersonalInformationForm;
