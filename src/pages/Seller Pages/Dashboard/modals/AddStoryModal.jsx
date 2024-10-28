import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { generateId } from "constants";
import { useSelector } from "react-redux";
import { storage } from "src/config/firebase";
import { AiOutlineCheck } from "react-icons/ai";
import { db } from "/src/config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { serverTimestamp } from "firebase/database";

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
      setUplaoding({
        loading: true,
        isUploaded: false,
        error: null,
      });
      // ref to storage
      const productPicRef = ref(storage, `Story Images/${generateId()}`);
      // upload image to storage
      const res = await uploadBytes(productPicRef, file);
      const url = await getDownloadURL(res.ref);
      setUplaoding({
        loading: false,
        isUploaded: true,
        error: null,
      });
      createNewStory(url);
    } catch (error) {
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
      let storyId = generateId(userId);
      // ref to firestore
      const storyRef = doc(collection(db, "Stories"), storyId);
      // set a new story
      await setDoc(storyRef, {
        contentUrl: contentUrl,
        id: storyId,
        author: {
          first_name:
            businessInformation?.businessName ||
            personalInformation?.first_name ||
            personalInformation?.email,
          last_name:
            businessInformation?.career_title || personalInformation?.last_name,
          createdAt: serverTimestamp(),
        },
        authorId: userId,
      });
      toast.success("story created successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="px-4 bg-gray-50 py-2 lg:px-6 lg:py-4 w-[95vw] lg:w-[50vw] xl:w-[40vw] h-5/6 lg:h-[80vh] mx-auto lg:border border-gray-200 lg:shadow hover:shadow-2xl transition-all duration-300 rounded-md flex flex-col">
      {/* title */}
      <h4 className="text-2xl font-bold">Add Story</h4>
      {/* select media form */}
      {!file ? (
        <div className="w-full h-full relative  flex flex-col items-center justify-center gap-y-4">
          <input
            className="opacity-0 absolute inset-0 z-50 bg-red-300"
            accept="image/jpeg, image/png, image/gif"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <MdAddCircle className="text-7xl text-primary-500" />
          <h6 className="text-xl font-bold">Add media</h6>
        </div>
      ) : (
        <div className="w-full h-5/6 relative flex flex-col items-center justify-center gap-y-4 py-3">
          <button
            disabled={loading || isUploaded}
            onClick={() =>
              loading ? setFile(null) : console.log("remove pic from storage")
            }
            className="absolute disabled:hidden z-50 -top-3 -right-3 p-2 text-red-500 bg-gray-50 text-2xl rounded-full border border-gray-200"
          >
            <TbTrash />
          </button>
          <img
            className={`${
              loading && "animate-pulse"
            } size-full object-cover rounded-md`}
            src={URL.createObjectURL(file)}
            alt=""
          />
          <div
            className={`${
              isUploaded ? "opacity-100 visible" : "opacity-0 invisible"
            } absolute inset-0 bg-gray-800/80 transition-all backdrop-blur flex flex-col items-center justify-center`}
          >
            <p className="text-9xl text-green-600">
              <AiOutlineCheck />
            </p>
            <h4 className="text-gray-50 text-xl font-bold bg-gray-950/50 px-4 py-1 rounded-md">
              Content Successfully uploaded
            </h4>
          </div>
        </div>
      )}
      {/* action btn's */}
      <div className="w-full h-1/6 flex items-center justify-end gap-2">
        <button
          onClick={() => onModalChange(null)}
          className="px-4 py-2 bg-gray-50 rounded-md text-primary-500 border-2 border-primary-500"
        >
          Cancel
        </button>
        <button
          disabled={!file}
          onClick={uplaodStroyPic}
          className="px-4 py-2 bg-primary-500 rounded-md text-gray-50 border-2 border-primary-500 disabled:opacity-50"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default AddStoryModal;