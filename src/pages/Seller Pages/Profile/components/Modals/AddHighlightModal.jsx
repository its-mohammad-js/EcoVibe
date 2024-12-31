import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useProfileData } from "../../SellerProfilePage";
import { FaCheck } from "react-icons/fa";
import { fakeArray, generateId, isInArray } from "helpers";
import toast from "react-hot-toast";
import { getDatabase, ref, update } from "firebase/database";
import ContentSwitcher from "../../../../../common/UI elements/ContentSwitcher/ContentSwitcher";

function AddHighlightModal({ onCloseModal, highlightsList }) {
  // selected slides for new highlight
  const [selectedSlides, setSlides] = useState([]);
  // highlight title state
  const [title, setTitle] = useState("");
  // necessary data & hooks
  const { storyLoading, storiesList } = useProfileData();

  // select slide handler
  function selectSlideHandler(slide) {
    if (!isInArray(selectedSlides, slide) && selectedSlides.length === 4) {
      toast("You can include up to 4 slides in each highlight list.");
      return;
    }

    setSlides((prev) =>
      isInArray(selectedSlides, slide)
        ? prev.filter((s) => s.id !== slide.id)
        : [...prev, slide]
    );
  }

  // create new highlight list
  async function addHighlight() {
    if (!title || title === "") {
      toast.error("Please set a title for highlight");
      return;
    }
    if (highlightsList?.length >= 5) {
      toast.error("you can add 5 highlight only...");
      return;
    }
    // generate an id for highlight
    const highlightId = generateId(title);
    // counter update operation for each slide
    let updateCount = 0;
    // add new highlight (add highlightId to slide object as highlightRef property)
    selectedSlides.forEach(async (slide) => {
      try {
        const db = getDatabase();
        const slideRef = ref(db, `stories/${slide.id}`);
        update(slideRef, {
          highlightRef: highlightId,
          title,
        });
        // increase update count
        updateCount = updateCount + 1;
        // dispatch success on end process
        if (updateCount === selectedSlides.length) {
          toast.success("highlight succesfully added");
          setSlides([]);
          setTitle("");
          onCloseModal();
        }
      } catch (error) {
        console.log("error on update slide");
      }
    });
  }

  return (
    <div className="w-96 z-50 h-[80vh] bg-gray-50 rounded-md px-4 pt-2 pb-4 flex flex-col gap-y-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold">Set Highlight</h4>
        <button onClick={() => onCloseModal()}>
          <AiOutlineClose className="text-3xl" />
        </button>
      </div>
      {/* all stories list */}
      <div className="w-full flex-1 overflow-auto styled-scroll-bar p-2.5">
        <div className="w-full grid grid-cols-2 gap-4">
          {!storyLoading ? (
            storiesList[0]?.slides?.map((story, i) => (
              <div
                key={i}
                onClick={() => {
                  if (story?.highlightRef) {
                    toast(
                      "slide is already part of the highlights. You can go ahead and remove it from the highlights list"
                    );
                  } else selectSlideHandler(story);
                }}
                className={`${
                  story?.highlightRef && "opacity-60 !bg-gray-400"
                } relative bg-gray-200 h-36 overflow-hidden rounded-lg`}
              >
                <ContentSwitcher
                  contentUrl={story?.contentUrl}
                  contentType={story.type}
                />
                {/* screen select slide */}
                <div
                  className={`${
                    isInArray(selectedSlides, story) || story?.highlightRef
                      ? "block"
                      : "hidden"
                  } ${
                    story?.highlightRef &&
                    "!bg-gray-950/80 !text-gray-200 cursor-pointer"
                  } absolute inset-0 bg-primary-500/50 transition-all flex flex-col gap-y-4 items-center justify-center text-7xl text-gray-50`}
                >
                  <FaCheck />
                  <p className="text-base">{story?.title}</p>
                </div>
              </div>
            ))
          ) : (
            <>
              {fakeArray(20).map((n) => (
                <div
                  key={n}
                  className="bg-gray-400 h-36 rounded-lg animate-pulse"
                ></div>
              ))}
            </>
          )}
        </div>
      </div>
      {/* title input & action buttons */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="highlight title"
        className="px-4 py-2 bg-gray-200 outline-none border-2 border-gray-200 rounded-md"
      />
      <div className="flex items-center justify-end gap-x-4">
        <button
          onClick={() => onCloseModal()}
          className="px-4 py-2 ring-2 ring-gray-950 text-gray-950 rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={() => addHighlight()}
          className="px-4 py-2 bg-primary-500 text-gray-50 ring-2 ring-primary-500 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddHighlightModal;
