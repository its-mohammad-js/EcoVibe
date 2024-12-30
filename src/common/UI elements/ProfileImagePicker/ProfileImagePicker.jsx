import { FaPlus } from "react-icons/fa";
import { avatarsUrl } from "appData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase";
import LoaderIcon from "../Loaders/LoaderIcon";

function ProfileImagePicker({ onPicChange, onModalClose }) {
  // upload picture state
  const [{ picUrl, loading, error }, setPic] = useState({
    picUrl: "",
    loading: false,
    error: "",
  });
  // necessary data
  const {
    personalInformation: { profilePic },
  } = useSelector((state) => state.userData);

  // set selected avatar to user profile pic
  useEffect(() => {
    setPic((prev) => ({ ...prev, picUrl: profilePic }));
  }, [profilePic]);

  // upload new picture to firebase storage
  async function uploadProfilePic(selectedPic) {
    try {
      setPic((prev) => ({ ...prev, loading: true }));
      // ref to firebasestorage
      const storageRef = ref(
        storage,
        `/Profile Images/Users/${selectedPic.name}`
      );
      // upload selected picture to firebase
      await uploadBytes(storageRef, selectedPic);
      // get url of uploaded pic
      const picUrl = await getDownloadURL(storageRef);
      // pass profile picture to parent component & close modal
      onPicChange(picUrl);
      onModalClose();
    } catch (error) {
      console.log(error);
    } finally {
      setPic((prev) => ({ ...prev, loading: false }));
    }
  }

  if (loading)
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gray-950/50 backdrop-blur-lg">
        <LoaderIcon className="size-24 my-4" />
        <h6 className="text-xl md:text-2xl text-gray-300 font-bold text-center animate-pulse">
          Uplaoding your profile pic, please dont re-fresh page
        </h6>
      </div>
    );

  if (!loading)
    return (
      <div className="fixed inset-0  md:flex items-center justify-center z-50">
        {/* modal bg */}
        <div
          onClick={onModalClose}
          className="hidden md:block fixed inset-0 bg-gray-900/70 backdrop-blur-sm"
        ></div>
        {/* profile picker */}
        <div
          className={`${
            loading && "animate-pulse"
          } absolute inset-0 md:static md:inset-auto md:w-[40rem] md:h-64 lg:h-80 z-10 bg-gray-100 rounded-md md:shadow-2xl md:shadow-gray-600`}
        >
          {/* title */}
          <div className="flex items-center justify-between px-2 md:px-4 py-2">
            <h2 className="text-xl font-bold">Choose profile :</h2>

            <button
              onClick={() => {
                onPicChange(picUrl);
                onModalClose();
              }}
              type="button"
              className="px-4 py-2 bg-primary-500 text-gray-50 rounded-md"
            >
              Done
            </button>
          </div>
          {/* pic profile & avatar list */}
          <div className="grid grid-cols-2 md:grid-cols-4 overflow-auto styled-scroll-bar h-[95%] bg-gray-100">
            {/* upload new picture */}
            <div className="border relative flex items-center justify-center">
              <input
                onChange={(e) => uploadProfilePic(e.target?.files[0])}
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <span className=" text-2xl text-primary-800">
                <FaPlus />
              </span>
            </div>
            {/* avatar's list */}
            {avatarsUrl.map((url, index) => (
              <div
                onClick={() => setPic((prev) => ({ ...prev, picUrl: url }))}
                key={index}
                className={`${
                  picUrl === url && "bg-primary-200"
                } border transition-all cursor-pointer`}
              >
                <img
                  src={url}
                  alt="avatar-pic"
                  className="size-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ProfileImagePicker;
