import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { ImImages } from "react-icons/im";
import { db, storage } from "src/config/firebase";
import { generateId, isInArray } from "constants";
import { IoReload } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
import { doc, setDoc } from "firebase/firestore";

function ProductImages({ getValues, setValue, isEdit }) {
  // prev uploaded images (only use on edit mode)
  const [prevImages, setPrevImages] = useState([]);
  // selected images by user
  const [imageFiles, setFiles] = useState([]);
  // images upload state
  const [{ uploading, uploadedImages, failed }, setUploading] = useState({
    uploading: false,
    // list of uploaded images
    uploadedImages: [],
    // list of failed images
    failed: [],
  });

  // store selected files with unique id
  function addPicFile(files) {
    const mergedFiles = files.map((file, index) => ({
      id: generateId(index),
      file,
    }));

    setFiles([...imageFiles, ...mergedFiles]);
  }

  // upload single image
  async function uploadSingleImage(file, id, counter = 0) {
    try {
      // set loading to true
      setUploading((prev) => ({ ...prev, uploading: true }));
      // ref to storage & set name for image
      const productPicRef = ref(
        storage,
        `Products Images/${getValues().Category}/${getValues().Name}${id}`
      );
      // upload image to storage
      await uploadBytes(productPicRef, file);
      // get image url
      const picUrl = await getDownloadURL(productPicRef);
      // set upload counter
      counter + 1;
      // dispatch success & save image url + image id
      setUploading((prev) => ({
        ...prev,
        uploading: false,
        uploadedImages: [...prev.uploadedImages, { url: picUrl, id }],
      }));
    } catch (error) {
      console.log("error on upload this id :", id);

      setUploading((prev) => ({
        ...prev,
        uploading: false,
        failed: [...prev.failed, id],
      }));
    }
  }

  // upload images (loop)
  function uploadImages() {
    let uploadCounter = 0;
    imageFiles.forEach(async ({ file, id }, index) => {
      // set loading false on end process
      if (uploadCounter === imageFiles.length) {
        setUploading((prev) => ({ ...prev, error: null, uploading: false }));
        return;
      }
      // upload each image
      await uploadSingleImage(file, id, uploadCounter);
    });
  }

  // set prev images (only on edit mode)
  useEffect(() => {
    if (isEdit && !prevImages?.length) {
      setPrevImages(getValues()?.Images);
    }
  }, [isEdit, prevImages]);

  // set image links to main form data
  useEffect(() => {
    // read all uploaded images url
    const uploadedImgsUrl = uploadedImages.map(({ url }) => url);
    // merge prev images with new images (only on edit mode)
    const allImages = isEdit
      ? [...uploadedImgsUrl, ...prevImages]
      : JSON.stringify(uploadedImgsUrl);
    // pass all images url to main form data
    setValue("Images", allImages);
  }, [uploadedImages]);

  async function removeImage(url, id, isPrev) {
    // Identify deleted product images from storage to update product database.
    let deletedPic = null;
    // check image is uploaded
    const isUploaded =
      [...uploadedImages, ...prevImages].find((img) => img.id === id) || url;
    // remove both from database & app state (on uploaded case)
    if (isUploaded) {
      try {
        setUploading((prev) => ({ ...prev, uploading: true }));
        // ref to image on database
        const imgRef = ref(storage, url);
        // delete image from database
        await deleteObject(imgRef);
        // remove image form app state
        if (!isPrev) {
          setFiles(imageFiles.filter((file) => file.id !== id));
        } else {
          // remove image from app state
          setPrevImages(prevImages.filter((img) => img !== url));
        }
      } catch (error) {
        // remove deleted product images from storage (outdated images) and update product database.
        if (error.code === "storage/object-not-found") {
          // ref to product data on data base
          const productRef = doc(db, "Products", getValues()?.id);
          // update product data with new images
          await setDoc(productRef, {
            ...getValues(),
            Images: getValues().Images.filter((img) => img !== url) || [],
            Thumbnail: getValues().Images.filter((img) => img !== url)[0] || "",
          });
          // remove image from app state
          setPrevImages(prevImages.filter((img) => img !== url));
          setValue(
            "Images",
            getValues().Images.filter((img) => img !== url)
          );
        }
      } finally {
        setUploading((prev) => ({ ...prev, uploading: false }));
      }
    }
    // remove from app state (on not uploaded case)
    else {
      setFiles(imageFiles.filter((file) => file.id !== id));
    }
  }

  return (
    <div className="lg:h-96 relative flex flex-col gap-3 lg:justify-between">
      {/* title */}
      <h4 className="text-xl font-bold">Select Images : </h4>
      {/* image picker */}
      <div className="w-full relative h-60 lg:flex-1 flex flex-col items-center justify-center border-2 border-dotted border-primary-300 rounded-md gap-y-2">
        <input
          multiple={true}
          onChange={(e) => addPicFile([...e.target.files])}
          accept="image/webp"
          type="file"
          className="absolute inset-0 bg-red-500 opacity-0"
        />
        <p className="text-4xl text-primary-400">
          <ImImages />
        </p>
        <h6 className="text-lg text-primary-400">Add New Image</h6>
        <p className="text-sm text-gray-500">
          Supports Only <span className="font-semibold">WEBP</span>
        </p>
      </div>
      {/* preview images */}
      <div className="overflow-x-auto overflow-y-hidden styled-scroll-bar w-60">
        <div className="inline-flex items-center gap-x-4">
          {/* prev uploaded images (displayed only on edit mode) */}
          {isEdit &&
            prevImages?.length > 0 &&
            prevImages?.length &&
            prevImages.map((url, i) => (
              <div
                className="relative my-4 size-16 lg:size-20 xl:size-24"
                key={i}
              >
                {/* delete image action btn */}
                <button
                  onClick={() => removeImage(url, "", true)}
                  className="absolute p-1 z-10 -top-2 -right-2 bg-gray-50 text-2xl text-red-500 rounded-full"
                >
                  <TbTrash />
                </button>
                {/* image */}
                <img
                  className={`${
                    uploading && "animate-pulse"
                  } size-full border border-gray-300 rounded-md object-cover`}
                  src={url}
                />
                {/* success screen */}
                <div className="absolute inset-0 bg-primary-600/10 backdrop-blur-sm rounded-md flex items-center justify-center text-9xl text-primary-500">
                  <BiCheck />
                </div>
              </div>
            ))}
          {/* selceted images (on both modes (add / edit)) */}
          {imageFiles.length > 0 &&
            imageFiles.map(({ file: data, id }, index) => (
              <div
                key={index}
                className="relative my-4 size-16 lg:size-20 xl:size-24"
              >
                {/* action buttons */}
                <div className="absolute -top-2 -right-2 z-10 transition-all">
                  {/* remove button */}
                  <button
                    disabled={isInArray(failed, id)}
                    type="button"
                    onClick={() => removeImage("", id)}
                    className="p-1 z-10 -top-2 -right-2 bg-gray-50 text-2xl text-red-500 rounded-full disabled:hidden"
                  >
                    <TbTrash />
                  </button>
                  {/* retry button */}
                  <button
                    type="button"
                    onClick={() => uploadSingleImage(data, id)}
                    className={`${
                      isInArray(failed, id) ? "block" : "hidden"
                    } p-1 text-lg border border-gray-400 bg-gray-50 rounded-full text-gray-800`}
                  >
                    <IoReload />
                  </button>
                </div>
                <img
                  src={URL.createObjectURL(data)}
                  className={`${
                    uploading && "animate-pulse"
                  } size-full lg:size-24 border border-gray-300 rounded-md object-cover`}
                />
                {/* success screen */}
                {isInArray(
                  uploadedImages.map(({ id }) => id),
                  id
                ) && (
                  <div className="absolute inset-0 bg-primary-600/10 backdrop-blur-sm rounded-md flex items-center justify-center text-9xl text-primary-500">
                    <BiCheck />
                  </div>
                )}
                {/* failed screen */}
                {isInArray(failed, id) && (
                  <div className="absolute inset-0 bg-primary-600/10 backdrop-blur-sm rounded-md flex items-center justify-center text-5xl text-red-500">
                    <p>!</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* action buttons */}
      <div className="flex justify-end gap-x-2">
        {/* <button
          disabled={!imageFiles.length}
          type="button"
          onClick={() => setFiles([])}
          className="px-4 py-2 bg-gray-50 text-primary-500 border-2 border-primary-400 rounded-md disabled:opacity-0 disabled:invisible opacity-100 visible transition-all"
        >
          Clear
        </button> */}
        <button
          disabled={!imageFiles.length}
          type="button"
          onClick={() => uploadImages()}
          className="px-4 py-2 bg-primary-500 border-2 border-gray-50 text-gray-50 rounded-md disabled:bg-gray-600 transition-all"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default ProductImages;
