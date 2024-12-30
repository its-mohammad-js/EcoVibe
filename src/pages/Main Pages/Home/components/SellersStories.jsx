import { useRef, useState } from "react";
import SellerStoriesListLoader from "../../../../common/UI elements/Loaders/SellerStoriesListLoader";
import StoryListModal from "../../../../common/UI elements/StoriesList/StoryListModal";
import useGetStories from "../../../../common/hooks/useGetStories";
import useHorizontalTouchScroll from "../../../../common/hooks/useTouchScroll";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import AddStoryModal from "../../../../common/UI elements/AddStoryModal/AddStoryModal";

function SellersStories() {
  const [currentListIndex, setList] = useState(null);
  const { loading, groupedStories: storiesList } = useGetStories(
    undefined,
    currentListIndex !== null
  );
  const { userId } = useSelector((state) => state.userData);
  const containerRef = useRef();
  useHorizontalTouchScroll(null, storiesList, containerRef);
  const [showAddStory, setModal] = useState(false);

  if (loading) return <SellerStoriesListLoader />;

  if (!loading && storiesList.length)
    return (
      <>
        <div
          ref={containerRef}
          className="mx-auto lists 2xl:max-w-screen-2xl px-4 flex gap-x-1.5 items-center justify-start hidden-scroll-bar py-2 overflow-y-hidden overflow-x-auto"
        >
          {/* story lists */}
          {storiesList.map((list, listIndex) => {
            return (
              <div
                key={listIndex}
                className="flex select-none flex-col justify-center items-start cursor-pointer flex-none"
              >
                <div className="flex items-center justify-center mb-1 relative">
                  <div
                    className={`${
                      list.isSeen ? "bg-slate-400" : "gradient-background"
                    } absolute size-[5.4rem] -z-10 rounded-full`}
                  ></div>
                  <img
                    onClick={() => setList(listIndex)}
                    src={list.profile_pic}
                    alt="author-profile"
                    draggable={false}
                    className="size-20 rounded-full bg-gray-50 border-4 border-gray-50"
                  />
                  {list.authorId == userId && (
                    <button
                      onClick={() => setModal(true)}
                      className="absolute hover:scale-125 transition-all -bottom-1 -right-1 p-1.5 bg-primary-500 rounded-full text-gray-50"
                    >
                      <FaPlus />
                    </button>
                  )}
                </div>
                <p
                  onClick={() => setList(listIndex)}
                  className="font-semibold w-24 text-start break-words line-clamp-1"
                >
                  {list.first_name}
                </p>
                <p
                  onClick={() => setList(listIndex)}
                  className="text-sm text-center w-20 line-clamp-1"
                >
                  {list.last_name}
                </p>
              </div>
            );
          })}
        </div>

        {/* add story for owners */}
        <div
          className={`${
            showAddStory ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-all fixed inset-0 z-50 flex items-center justify-center`}
        >
          <AddStoryModal onModalChange={() => setModal(false)} />
          <div
            onClick={() => setModal(false)}
            className="absolute inset-0 bg-gray-950/80"
          ></div>
        </div>

        {/* stories list modal */}
        {currentListIndex !== null && (
          <StoryListModal {...{ currentListIndex, setList, storiesList }} />
        )}
      </>
    );
}

export default SellersStories;
