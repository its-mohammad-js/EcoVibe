import { useRef, useState } from "react";
import SellerStoriesListLoader from "../../../../common/UI elements/Loaders/SellerStoriesListLoader";
import StoryListModal from "../../../../common/UI elements/StoriesList/StoryListModal";
import useGetStories from "../../../../common/hooks/useGetStories";
import useHorizontalTouchScroll from "../../../../common/hooks/useTouchScroll";

function SellersStories() {
  const [currentListIndex, setList] = useState(null);
  const { loading, groupedStories: storiesList } = useGetStories(
    undefined,
    currentListIndex !== null
  );
  const containerRef = useRef();
  useHorizontalTouchScroll(null, storiesList, containerRef);

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
                onClick={() => setList(listIndex)}
                className="flex select-none flex-col justify-center items-start cursor-pointer flex-none"
              >
                <div className="flex items-center justify-center mb-1 relative">
                  <div
                    className={`${
                      list.isSeen ? "bg-slate-400" : "gradient-background"
                    } absolute size-[5.4rem] -z-10 rounded-full`}
                  ></div>
                  <img
                    src={list.profile_pic}
                    alt="author-profile"
                    draggable={false}
                    className="size-20 rounded-full bg-gray-50 border-4 border-gray-50"
                  />
                </div>
                <p className="font-semibold w-24 text-start break-words line-clamp-1">
                  {list.first_name}
                </p>
                <p className="text-sm text-center w-20 line-clamp-1">
                  {list.last_name}
                </p>
              </div>
            );
          })}
        </div>

        {/* selected story modal */}
        {currentListIndex !== null && (
          <StoryListModal {...{ currentListIndex, setList, storiesList }} />
        )}
      </>
    );
}

export default SellersStories;
