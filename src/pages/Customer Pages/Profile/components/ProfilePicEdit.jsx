import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileImagePicker from "UI/ProfileImagePicker/ProfileImagePicker";
import { updateUserData } from "src/reducers/auth/userDataSlice";
import { FaPencil } from "react-icons/fa6";
import { loadingIcon } from "constants";
import { LoaderIcon } from "react-hot-toast";

function ProfilePicEdit() {
  // profile picker modal is Show
  const [{ modalIsShow }, setProfilePicker] = useState({
    profilePicUrl: "",
    modalIsShow: false,
  });
  // necessary data & hooks
  const { loading, personalInformation } = useSelector(
    (state) => state.userData
  );
  const dispatch = useDispatch();

  // change profile pic handler
  function profilePicChangeHandle(picUrl) {
    const updatedPersonalInformation = {
      ...personalInformation,
      profilePic: picUrl,
    };

    dispatch(
      updateUserData({
        data: updatedPersonalInformation,
        field: "personalInformation",
      })
    );
  }

  if (loading)
    return (
      <div className="fixed inset-0 backdrop-blur bg-gray-950/70 gap-y-4 flex flex-col items-center justify-center z-50">
        <LoaderIcon className="size-24" />
        <h4 className="text-2xl text-gray-50 font-bold animate-pulse">
          Update you info, please don't refresh page...
        </h4>
      </div>
    );

  return (
    <div className="flex items-center justify-between mb-4 relative">
      <div className="size-20 flex items-center justify-center md:size-24 rounded-full bg-gray-100 relative">
        {loading ? (
          <LoaderIcon className="size-12" />
        ) : (
          <img
            src={personalInformation.profilePic}
            alt="profile picture"
            className="size-full rounded-full"
          />
        )}

        <button
          onClick={() => {
            setProfilePicker((prev) => ({ ...prev, modalIsShow: true }));
          }}
          className="p-2 md:text-lg bg-primary-600 text-gray-50 rounded-full absolute -bottom-1.5 right-0"
        >
          <FaPencil />
        </button>
      </div>
      {/* profile picker modal */}
      <div
        className={`${
          modalIsShow ? "visible opacity-100" : "invisible opacity-0"
        } absolute transition-all duration-300 z-50`}
      >
        <ProfileImagePicker
          onPicChange={profilePicChangeHandle}
          onModalClose={() => {
            setProfilePicker((prev) => ({ ...prev, modalIsShow: false }));
          }}
        />
      </div>
    </div>
  );
}

export default ProfilePicEdit;
