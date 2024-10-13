import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { generateId } from "constants";
import { useSelector } from "react-redux";
import { storage } from "src/config/firebase";

function AddStoryModal({ onModalChange }) {
  const [file, setFile] = useState(null);
  const [{ error, isUploaded, loading }, setUplaoding] = useState({
    loading: false,
    isUploaded: false,
    error: null,
  });
  const { userId } = useSelector((state) => state.userData);

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
      await uploadBytes(productPicRef, file);
      setUplaoding({
        loading: false,
        isUploaded: true,
        error: null,
      });
    } catch (error) {
      console.log(error);
      setUplaoding({
        loading: false,
        isUploaded: false,
        error: error,
      });
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
            disabled={loading}
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
