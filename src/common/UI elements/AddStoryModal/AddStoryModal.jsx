import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { generateId } from "helpers";
import { useSelector } from "react-redux";
import { storage } from "src/config/firebase";
import { AiOutlineCheck } from "react-icons/ai";
import { db } from "/src/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import {
  getDatabase,
  set,
  ref as databaseRef,
  serverTimestamp,
} from "firebase/database";
import ContentSwitcher from "../ContentSwitcher/ContentSwitcher";
import LoaderIcon from "../Loaders/LoaderIcon";

function AddStoryModal({ onModalChange }) {
  const [file, setFile] = useState(null);
  const [{ error, isUploaded, loading }, setUplaoding] = useState({
    loading: false,
    isUploaded: false,
    error: null,
  });
  const { userId, businessInformation, personalInformation } = useSelector(
    (state) => state.userData
  );

  async function uplaodStroyPic() {
    try {
      // dispatch loading
      setUplaoding({
        loading: true,
        isUploaded: false,
        error: null,
      });
      // check current user stories count
      const storiesRef = query(
        collection(db, "Stories"),
        where("authorId", "==", userId)
      );
      const storiesListCount = await getDocs(storiesRef).then(
        ({ docs }) => docs.length
      );
      // return if user uploaded 10 slides already
      if (storiesListCount >= 10) {
        toast.error(
          "You can upload a maximum of 10 slides every 10 hours. 📊⏳"
        );
        onModalChange(null);
        return;
      }
      // ref to storage
      const productPicRef = ref(storage, `Story Images/${generateId()}`);
      // upload image to storage
      const res = await uploadBytes(productPicRef, file);
      // get uploaded image url
      const url = await getDownloadURL(res.ref);
      // create a new story
      await createNewStory(url);
      // dispatch success
      setUplaoding({
        loading: false,
        isUploaded: true,
        error: null,
      });
      // close modal
      onModalChange(null);
    } catch (error) {
      // dispatch failure
      toast.error("there was an error on add story, please try again later");
      console.log(error);
      setUplaoding({
        loading: false,
        isUploaded: false,
        error: error,
      });
    }
  }

  async function createNewStory(contentUrl) {
    try {
      let storyId = generateId(userId).replace(".", "&");
      const dbRef = getDatabase();

      await set(databaseRef(dbRef, `stories/${storyId}`), {
        contentUrl: contentUrl,
        id: storyId,
        author: {
          first_name:
            businessInformation?.businessName ||
            personalInformation?.first_name ||
            personalInformation?.email,
          last_name:
            businessInformation?.career_title || personalInformation?.last_name,
        },
        createdAt: serverTimestamp(),
        authorId: userId,
        type: file?.type,
        authorProfilePic: personalInformation.profilePic,
      });
      setFile(null);
      toast.success("story created successfully");
    } catch (error) {
      console.log(error);
    }
  }

  function hanldeSelectContent(file) {
    if (file.size > 20 * 1024 * 1024) {
      toast.error("File size exceeds 20MB limit.");
      return;
    }
    const allowedTypes = [
      "image/jpeg",
      "image/webp",
      "image/png",
      "image/gif",
      "video/mp4",
      "video/webm",
      "video/ogg",
    ];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only image, GIF, and video files are allowed.");
      return;
    } else {
      setFile(file);
    }
  }

  return (
    <>
      {/* main modal */}
      <div className="px-4 z-20 bg-gray-50 py-2 lg:px-6 lg:py-4 w-[95vw] lg:w-[50vw] xl:w-[40vw] h-5/6 lg:h-[80vh] mx-auto lg:border border-gray-200 lg:shadow hover:shadow-2xl transition-all duration-300 rounded-md flex flex-col">
        {/* title */}
        <h4 className="text-2xl font-bold mb-2">Add New Story</h4>
        {/* select media form */}
        {!file ? (
          <div className="w-full h-full relative flex flex-col items-center justify-center gap-y-4">
            <input
              className="opacity-0 absolute inset-0 z-50 bg-red-300"
              accept="image/jpeg, image/webp, image/png, image/gif, video/mp4, video/webm, video/ogg"
              type="file"
              onChange={(e) => hanldeSelectContent(e.target.files[0])}
            />
            <MdAddCircle className="text-7xl text-primary-500" />
            <h6 className="text-xl font-bold">Add media</h6>
          </div>
        ) : (
          // change content form
          <div className="w-full h-5/6 relative flex flex-col items-center justify-center gap-y-4 py-3">
            {/* reomve content btn */}
            <button
              disabled={loading || isUploaded}
              onClick={() => setFile(null)}
              className="absolute disabled:hidden z-50 -top-3 -right-3 p-2 text-red-500 bg-gray-50 text-2xl rounded-full border border-gray-200"
            >
              <TbTrash />
            </button>
            {/* content */}
            <ContentSwitcher
              loading={loading}
              contentType={file?.type}
              contentUrl={URL.createObjectURL(file)}
              controls={true}
            />
            {/* loading screen */}
            <div
              className={`${
                loading ? "opacity-100 visible" : "opacity-0 invisible"
              } absolute w-full h-[95%] rounded-md gap-y-6 px-4 bg-gray-800/80 transition-all backdrop-blur flex flex-col items-center justify-center`}
            >
              <LoaderIcon />

              <h4 className="text-gray-50 text-center text-xl font-bold bg-gray-950/50 px-4 py-1 rounded-md">
                Please do not refresh the page while adding story.
              </h4>
            </div>
            {/* success screen */}
            <div
              className={`${
                isUploaded ? "opacity-100 visible" : "opacity-0 invisible"
              } absolute w-full h-[96%] rounded-md  bg-gray-800/80 transition-all backdrop-blur flex flex-col items-center justify-center`}
            >
              <p className="text-9xl text-green-600">
                <AiOutlineCheck />
              </p>
              <h4 className="text-gray-50 text-xl font-bold bg-gray-950/50 px-4 py-1 rounded-md">
                Added to your stories
              </h4>
            </div>
          </div>
        )}
        {/* action btn's */}
        <div className="w-full h-1/6 flex items-center justify-end gap-2">
          <button
            disabled={loading}
            onClick={() => {
              setFile(null);
              onModalChange(null);
            }}
            className="px-4 py-2 disabled:hidden bg-gray-50 rounded-md text-primary-500 border-2 border-primary-500"
          >
            Cancel
          </button>
          <button
            disabled={!file || loading}
            onClick={uplaodStroyPic}
            className="px-4 py-2 bg-primary-500 rounded-md text-gray-50 border-2 border-primary-500 disabled:opacity-50"
          >
            Upload
          </button>
        </div>
      </div>
      {/* close modal locker */}
      <div className={`${loading ? "block" : "hidden"} fixed inset-0`}></div>
    </>
  );
}

export default AddStoryModal;
