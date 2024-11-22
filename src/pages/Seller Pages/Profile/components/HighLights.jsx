import { FaCheck, FaPlus } from "react-icons/fa";
import useHorizontalTouchScroll from "../../../../common/hooks/useTouchScroll";
import {
  fakeArray,
  generateId,
  isInArray,
} from "../../../../common/utils/constants";
import { AiOutlineClose } from "react-icons/ai";
import { useProfileData } from "../SellerProfilePage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "/src/config/firebase";
import StoryListModal from "/src/common/UI elements/StoriesList/StoryListModal";

function HighLights() {
  // seller stories modal state
  const [isStoriesShow, setStorieModal] = useState(null);
  // highlights state
  const [highlightsList, setHighLightsList] = useState([]);
  // selected slides for new highlight
  const [selectedSlides, setSlides] = useState([]);
  // highlight title state
  const [title, setTitle] = useState("");
  // add new highlight modal state
  const [modalIsShow, setModalShow] = useState(false);
  // necessary data & hooks
  const {
    sellerStories: { storiesList, loading },
  } = useProfileData();
  // horizontal rouch scroll for highlights list on desktop
  useHorizontalTouchScroll(".highlights-wrapper");

  // update highlight list
  useEffect(() => {
    // store highlight as object
    let highlights = {};
    // seperate highlights base on highlightRef into properties
    storiesList[0]?.forEach((slide) => {
      // check slides highlightRef
      if (slide.highlightRef) {
        // set highlightRef as property & add all slides related to this ref into property
        highlights[slide.highlightRef] = [
          ...(highlights[slide.highlightRef] || []),
          slide,
        ];
      }
    });
    // set highlights object as a array into highlightList state
    setHighLightsList(
      Object.entries(highlights).map(([k, v]) => ({
        // set title for list
        title: v[0].title,
        slides: v.map((slide) => ({
          ...slide,
          // set title instead of author name
          author: { ...slide.author, first_name: slide.title },
        })),
      }))
    );
  }, [storiesList]);

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
    // generate an id for highlight
    const highlightId = generateId(title);
    // counter update operation for each slide
    let updateCount = 0;
    // add new highlight (add highlightId to slide object as highlightRef property)
    selectedSlides.forEach(async (slide) => {
      try {
        // ref to story slide on database
        const slideRef = doc(db, "Stories", slide.id);
        // update slide with new highlight id
        await updateDoc(slideRef, { highlightRef: highlightId, title });
        // increase update count
        updateCount = updateCount + 1;
        // dispatch success on end process
        if (updateCount === selectedSlides.length) {
          toast.success("highlight succesfully added");
          setModalShow(false);
          window.location.reload();
        }
      } catch (error) {
        console.log("error on update slide");
      }
    });
  }

  return (
    <>
      {/* highlights list */}
      <div className="flex items-center select-none highlights-wrapper gap-x-4 overflow-auto px-2 py-2 scroll-smooth hidden-scroll-bar">
        <>
          {highlightsList.map((highlight, i) => (
            <div
              onClick={() => setStorieModal(i)}
              key={i}
              className="flex flex-col items-center justify-center"
            >
              <div className="size-16 cursor-pointer overflow-hidden rounded-full bg-gray-200 flex-none flex items-center justify-center text-3xl text-gray-500">
                {highlight?.slides[0]?.type?.includes("image") ? (
                  <img
                    src={highlight?.slides[0]?.contentUrl}
                    alt="story thumnail"
                    className="size-full object-cover"
                  />
                ) : (
                  <video
                    width="400"
                    controls={false}
                    preload="metadata"
                    className="object-contain size-full"
                  >
                    <source
                      src={`${highlight?.slides[0]?.contentUrl}#t=0.1`}
                      type="video/mp4"
                    ></source>
                  </video>
                )}
              </div>

              <h4 className="font-bold text-sm line-clamp-1 text-center w-20 break-words">
                {highlight?.title}
              </h4>
            </div>
          ))}
        </>
        {/* add new highlight btn */}
        <div
          onClick={() => setModalShow(true)}
          className="size-16 cursor-pointer mb-5 rounded-full bg-gray-200 flex-none flex items-center justify-center text-3xl text-gray-500"
        >
          <FaPlus />
        </div>
      </div>
      {/* add new highlight modal */}
      <div
        className={`${
          modalIsShow ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all fixed inset-0  z-50 flex items-center justify-center`}
      >
        {/* add highlight modal */}
        <div className="w-96 z-50 h-[80vh] bg-gray-50 rounded-md px-4 pt-2 pb-4 flex flex-col gap-y-4">
          {/* header */}
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold">Set Highlight</h4>
            <button onClick={() => setModalShow(false)}>
              <AiOutlineClose className="text-3xl" />
            </button>
          </div>
          {/* all stories list */}
          <div className="w-full flex-1 overflow-auto styled-scroll-bar p-2.5">
            <div className="w-full grid grid-cols-2 gap-4">
              {!loading ? (
                storiesList[0]?.map((story, i) => (
                  <div
                    key={i}
                    onClick={() => selectSlideHandler(story)}
                    className="relative bg-gray-200 h-36 overflow-hidden rounded-lg"
                  >
                    {story.type.includes("image") ? (
                      <img
                        src={story?.contentUrl}
                        alt="story thumnail"
                        className="size-full object-cover"
                      />
                    ) : (
                      <video
                        width="400"
                        controls={false}
                        preload="metadata"
                        className="object-contain size-full"
                      >
                        <source
                          src={`${story?.contentUrl}#t=0.1`}
                          type="video/mp4"
                        ></source>
                      </video>
                    )}
                    {/* screen select slide */}
                    <div
                      className={`${
                        isInArray(selectedSlides, story)
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      } absolute inset-0 bg-primary-500/50 transition-all flex items-center justify-center text-7xl text-gray-50`}
                    >
                      <FaCheck />
                    </div>
                    {/* display prev highlight ref */}
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
              onClick={() => setModalShow(false)}
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

        {/* modal bg */}
        <div
          onClick={() => setModalShow(false)}
          className="absolute inset-0 z-40 bg-gray-950/70"
        ></div>
      </div>

      {/* seller highlights modal */}
      {isStoriesShow !== null && (
        <StoryListModal
          {...{
            currentListIndex: isStoriesShow,
            setList: setStorieModal,
            storiesList: highlightsList.map(({ slides }) => slides),
          }}
        />
      )}
    </>
  );
}

export default HighLights;
