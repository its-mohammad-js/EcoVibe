import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function ProductDetails({ selectedItem, onModalClose, setEditShow }) {
  // description state
  const [fullDescription, setDescription] = useState(false);
  // necessary data & hooks
  const imageGalleryRef = useRef();
  const navigate = useNavigate();

  return (
    <>
      {/* thumnail & title */}
      <div className="w-full bg-gray-200 rounded-md relative">
        <img
          src={selectedItem?.Thumbnail}
          alt="product-thumbnail"
          className="w-full object-cover rounded-md h-64"
        />
        <button
          onClick={() =>
            onModalClose({ modalIsShow: false, selectedItem: null })
          }
          className="absolute p-2 bg-gray-500/80 text-gray-50 rounded-full text-3xl top-2 left-2"
        >
          <BiChevronLeft />
        </button>
        <button
          onClick={() => setEditShow(true)}
          className="absolute p-2 bg-primary-500/80 text-gray-50 rounded-full text-3xl top-2 right-2"
        >
          <BiEdit />
        </button>
        <div className="absolute bottom-0 shadow-inner w-full px-4 py-2">
          <h4 className="text-2xl font-bold text-gray-50 bg-gray-700/20 backdrop-blur-sm px-1 w-fit">
            {selectedItem?.Name}
          </h4>
          <p className="bg-gray-700 w-fit text-gray-50 bg-gray-700/20 backdrop-blur-sm px-1">
            {selectedItem?.Category}
          </p>
        </div>
      </div>
      {/* description & price */}
      <div className="flex flex-col gap-y-1 my-2 items-start">
        <h6 className="text-3xl font-bold">Description</h6>
        {/* description */}
        <p
          className={`${
            fullDescription ? "line-clamp-none" : "line-clamp-4"
          } transition-all w-full`}
        >
          {selectedItem?.Description}
        </p>
        <button
          onClick={() => setDescription((prev) => !prev)}
          className={`${
            selectedItem?.Description.length < 240 && "hidden"
          } text-primary-500 font-semibold`}
        >
          {fullDescription ? "Less" : "Show More..."}
        </button>
        <h6 className="text-xl font-semibold">Price: {selectedItem?.Price}</h6>
      </div>
      {/* images gallery */}
      <div className="relative flex items-center justify-start">
        <button
          onClick={() => (imageGalleryRef.current.scrollLeft -= 200)}
          className="absolute left-0 mb-1.5 p-1 opacity-50 hover:opacity-100 transition-all bg-primary-800 rounded-full text-2xl text-gray-50"
        >
          <BiChevronLeft />
        </button>
        <div
          ref={imageGalleryRef}
          className="w-full overflow-x-scroll scroll-smooth hidden-scroll-bar md:px-4 my-4"
        >
          <div className="inline-flex items-center gap-5">
            {selectedItem?.Images.map((url, index) => (
              <div key={index} className="size-20 bg-gray-300 rounded-md">
                <img src={url} className="size-full rounded-md object-cover" />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => (imageGalleryRef.current.scrollLeft += 200)}
          className="absolute right-0 mb-1.5 p-1 opacity-50 hover:opacity-100 transition-all bg-primary-800 rounded-full text-2xl text-gray-50"
        >
          <BiChevronRight />
        </button>
      </div>
      {/* options list */}
      <div className="flex flex-col gap-y-2 mb-4">
        {selectedItem?.Options.map(({ title, options }, index) => (
          <div key={index} className="flex items-start justify-between gap-2">
            <h4 className="text-lg lg:text-lg font-bold">{title}:</h4>
            <div className="flex items-center gap-x-1 flex-wrap w-2/3">
              {options.map((op, i) => (
                <span key={i} className="text-sm lg:text-base">
                  {op},
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* tags list */}
      <div className="flex flex-wrap items-start justify-start gap-2 mb-20">
        {selectedItem?.Tags?.length > 0 &&
          selectedItem?.Tags.map((tag, index) => (
            <button
              onClick={() => navigate(`/EcoVibe/Explore-products/tags=${tag}`)}
              key={index}
              className="px-2.5 py-1 bg-primary-500 text-gray-50 rounded-md border border-gray-50 hover:text-primary-500 hover:bg-gray-50 transition-all hover:border-primary-500"
            >
              #{tag}
            </button>
          ))}
      </div>
    </>
  );
}

export default ProductDetails;
