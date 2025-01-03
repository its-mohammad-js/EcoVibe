import { FaPlus } from "react-icons/fa";
import useHorizontalTouchScroll from "hooks/useTouchScroll";
import { useEffect, useState } from "react";
import AddHighlightModal from "../Modals/AddHighlightModal";
import StoryListModal from "../../../../../common/UI elements/StoriesList/StoryListModal";
import { useProfileData } from "../../SellerProfilePage";
import ContentSwitcher from "../../../../../common/UI elements/ContentSwitcher/ContentSwitcher";

function HighLights() {
  // seller stories modal state
  const [isStoriesShow, setStorieModal] = useState(null);
  // add new highlight modal state
  const [modalIsShow, setModalShow] = useState(false);
  // horizontal rouch scroll for highlights list on desktop
  useHorizontalTouchScroll(".highlights-wrapper");
  // highlights state
  const [highlightsList, setHighLightsList] = useState([]);
  const { storiesList } = useProfileData();

  // update highlight list
  useEffect(() => {
    const allSlides = storiesList[0]?.slides;

    if (!allSlides?.length) return;
    // store highlight as object
    let highlights = {};
    // seperate highlights base on highlightRef into properties
    allSlides.forEach((slide) => {
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
      Object.entries(highlights).map(([k, v], index) => ({
        // set title for list
        title: v[0].title,
        slides: v.map((slide) => ({
          ...slide,
          // set title instead of author name
          author: { ...slide.author, first_name: slide.title },
        })),
        listIndex: index,
      }))
    );
  }, [storiesList]);

  return (
    <>
      {/* highlights list */}
      <div className="flex px-4 items-center select-none highlights-wrapper gap-x-4 overflow-auto lg:px-2 py-2 scroll-smooth hidden-scroll-bar">
        <>
          {highlightsList.map((highlight, i) => (
            <div
              onClick={() => setStorieModal(i)}
              key={i}
              className="flex flex-col items-center justify-center"
            >
              <div className="size-16 cursor-pointer overflow-hidden rounded-full bg-gray-200 flex-none flex items-center justify-center text-3xl text-gray-500">
                <ContentSwitcher
                  contentType={highlight?.slides[0]?.type}
                  contentUrl={highlight?.slides[0]?.contentUrl}
                />
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
        <AddHighlightModal
          onCloseModal={() => setModalShow(false)}
          highlightsList={highlightsList}
        />

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
            storiesList: highlightsList,
          }}
        />
      )}
    </>
  );
}

export default HighLights;
