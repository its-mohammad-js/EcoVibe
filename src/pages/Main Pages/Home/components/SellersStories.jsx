import { useState } from "react";
import SellerStoriesListLoader from "../../../../common/UI elements/Loaders/SellerStoriesListLoader";
import StoryListModal from "../../../../common/UI elements/StoriesList/StoryListModal";
import useGetStories from "../../../../common/hooks/useGetStories";


function SellersStories() {
  const [currentListIndex, setList] = useState(null);
  const { loading, groupedStories: storiesList } = useGetStories(
    undefined,
    currentListIndex !== null
  );


  if (loading) return <SellerStoriesListLoader />;

  if (!loading && storiesList.length)
    return (
      <>
        {/* stories list */}
        <div className="mx-auto 2xl:max-w-screen-2xl px-4 py-2 flex gap-x-2.5 items-center justify-start">
          {/* story lists */}
          {storiesList.map((list, listIndex) => {
            return (
              <div
                key={listIndex}
                onClick={() => setList(listIndex)}
                className="flex flex-col justify-center items-start cursor-pointer"
              >
                <img
                  src={list.profile_pic}
                  alt="author-profile"
                  className="size-20 rounded-full ring-2 ring-red-300"
                />
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
