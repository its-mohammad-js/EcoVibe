import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useCallback, useEffect, useState } from "react";
import { ImImages } from "react-icons/im";
import { db, storage } from "src/config/firebase";
import { generateId } from "helpers";
import { doc, setDoc } from "firebase/firestore";
import { useFormContext } from "react-hook-form";
import ImagePreview from "./ImagesReview";
import { validateFile } from "../../../../../../../common/utils/constants/helpers";
import toast from "react-hot-toast";

const ProductImages = ({ isEdit, uploadState, setUploading }) => {
  const { setValue, getValues, watch } = useFormContext();
  const [imageFiles, setImageFiles] = useState([]);
  // Watch the "Images" value
  const images = watch("Images") || [];

  // Add selected images to state
  const handleFileSelection = (files) => {
    if (
      watch("Images")?.length + files.length >= 6 ||
      watch("Images")?.length + imageFiles.length >= 6
    ) {
      toast.error("you can only add 5 images per product");
      return;
    }

    let validatedFiles = [];

    files.forEach((file, index) => {
      validateFile(file, 50, (validatedFile) => {
        validatedFiles.push({
          id: generateId(index),
          file: validatedFile,
        });
      });
    });

    setImageFiles((prev) => [...prev, ...validatedFiles]);
  };

  // Upload a single image
  const uploadImage = useCallback(
    async ({ file, id }) => {
      try {
        // dispatch loading
        setUploading({ isUploading: true, targetId: id });
        // ref to file in storage
        const imageRef = ref(
          storage,
          `Products Images/${watch("Category")}/${watch("name")}-${id}`
        );
        // upload file to storage
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);
        // Update form value directly
        setValue("Images", [...(watch("Images") || []), url]);
        // dispatch success
        setImageFiles((prevFiles) =>
          prevFiles.filter((image) => image.id !== id)
        );
        setUploading({ isUploading: false, targetId: null });
      } catch (error) {
        // dispatch error
        toast.remove();
        toast("there was an error on uploading, please try again later");
        console.log(error);
        setUploading({ isUploading: false, targetId: null });
      }
    },
    [getValues, images, setValue]
  );

  // Upload all selected images
  const uploadAllImages = async () => {
    for (const image of imageFiles) {
      await uploadImage(image);
    }
  };

  // Remove image from state or storage
  const removeImage = async (url, id, isPrev) => {
    try {
      if (url) {
        setUploading({ isUploading: true, targetId: url });
        const imgRef = ref(storage, url);
        await deleteObject(imgRef);
        if (isPrev) {
          const updatedImages = images.filter((img) => img !== url);
          setValue("Images", updatedImages);
        }
        setUploading({ isUploading: false, targetId: null });
      } else {
        setImageFiles((prev) => prev.filter((file) => file.id !== id));
      }
    } catch (error) {
      if (error.code === "storage/object-not-found") {
        const updatedImages = images.filter((img) => img !== url);
        const productRef = doc(db, "Products", getValues().id);
        await setDoc(productRef, {
          ...getValues(),
          Images: updatedImages,
          Thumbnail: updatedImages[0] || "",
        });
        setValue("Images", updatedImages);
      }
    }
  };

  useEffect(() => {
    if (isEdit && images.length) {
      const uniqueImages = [...new Set(images)];
      // Only update if there are differences
      if (
        uniqueImages.length !== images.length ||
        !uniqueImages.every((img, i) => img === images[i])
      ) {
        setValue("Images", uniqueImages);
      }
    }
  }, [images, isEdit, setValue]);

  return (
    <div className="lg:h-96 relative flex flex-col gap-3 lg:justify-between">
      <h4 className="text-xl font-bold">Select Images:</h4>
      {/* Image Picker */}
      <div className="w-full relative h-60 lg:flex-1 flex flex-col items-center justify-center border-2 border-dotted border-primary-300 rounded-md gap-y-2">
        <input
          type="file"
          multiple
          accept="image/jpeg, image/webp, image/png, image/gif"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => {
            handleFileSelection([...e.target.files]);
            e.target.value = "";
          }}
        />
        <ImImages className="text-4xl text-primary-400" />
        <h6 className="text-lg text-primary-400">Add New Image</h6>
        <p className="text-sm text-gray-500">
          Supports only <span className="font-semibold">WEBP</span>
        </p>
      </div>

      {/* Preview Images */}
      <div className="overflow-auto horizontal-scroll-bar w-full flex gap-x-4 py-2">
        {images.map((url, index) => (
          <ImagePreview
            key={index}
            url={url}
            onRemove={() => removeImage(url, null, true)}
            isUploaded={true}
            loading={uploadState}
          />
        ))}
        {imageFiles.map(({ id, file }) => (
          <ImagePreview
            key={id}
            fileId={id}
            url={URL.createObjectURL(file)}
            onRemove={() => removeImage(null, id, false)}
            onRetry={() => uploadImage({ id, file })}
            // isFailed={uploadState.failedImages.includes(id)}
            // pass loading only to images files
            loading={uploadState}
          />
        ))}
      </div>

      {/* Upload Button */}
      <button
        type="button"
        disabled={imageFiles.length === 0 || uploadState.isUploading}
        className="px-4 py-2 bg-primary-500 text-white rounded disabled:bg-gray-400"
        onClick={uploadAllImages}
      >
        {uploadState.isUploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default ProductImages;
