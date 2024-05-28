import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileImagePicker from "../../ProfileImagePicker/ProfileImagePicker";
import { updateUserData } from "../../../redux/auth/regularUsers/regluarUsersSlice";
import { FaPencil } from "react-icons/fa6";
import { loadingIcon } from "../../../helpers/constants";

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

  return (
    <div className="flex items-center justify-between mb-4 relative">
      <div className="size-20 md:size-24 rounded-full bg-gray-300 relative">
        {loading ? (
          <img
            src={loadingIcon}
            className="size-full rounded-full"
            alt="loading icon"
          />
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
        } absolute transition-all duration-300`}
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
