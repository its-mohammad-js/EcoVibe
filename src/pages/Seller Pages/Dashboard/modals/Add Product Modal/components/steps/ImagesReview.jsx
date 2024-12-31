import { BiCheck } from "react-icons/bi";
import { IoReload } from "react-icons/io5";
import { TbTrash } from "react-icons/tb";

const ImagePreview = ({
  url,
  fileId,
  onRemove,
  onRetry,
  isFailed,
  isUploaded,
  loading: { isUploading, targetId },
}) => {
  const isLoading = isUploading && (targetId === url || targetId === fileId);

  return (
    <div className="relative bg-gray-300 size-24 flex-none overflow-hidden rounded-lg">
      <img
        src={url}
        alt="preview"
        className={`${
          isLoading && "animate-pulse"
        } w-full h-full object-cover rounded-md`}
      />
      <button
        type="button"
        onClick={onRemove}
        className="absolute z-10 top-1 right-1 text-xl bg-white text-red-500 p-1 rounded-full"
      >
        <TbTrash />
      </button>
      {isFailed && (
        <button
          type="button"
          onClick={onRetry}
          className="absolute bottom-1 right-1 bg-white text-gray-500 p-1 rounded-full"
        >
          <IoReload />
        </button>
      )}
      {isUploaded && !isLoading && (
        <div className="absolute inset-0 bg-primary-500/80 flex items-center justify-center text-white">
          <BiCheck className="text-7xl" />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
