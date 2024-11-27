import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "/src/config/firebase";
import StoryListModal from "/src/common/UI elements/StoriesList/StoryListModal";
import SellerStoriesListLoader from "../../../../common/UI elements/Loaders/SellerStoriesListLoader";

function SellersStories() {
  const [{ error, loading, storiesList }, setStoreis] = useState({
    storiesList: [],
    loading: false,
    error: null,
  });
  const [currentListIndex, setList] = useState(null);

  // get stories function
  async function getStories() {
    try {
      // dispatch loading
      setStoreis((prev) => ({ ...prev, loading: true }));
      // ref to firestore
      const storiesRef = collection(db, "Stories");
      // get story list
      const storiesData = await getDocs(storiesRef).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      const storiesByAuthor = storiesData.reduce((acc, story) => {
        const { authorId } = story;
        acc[authorId] = (acc[authorId] || []).concat(story);
        return acc;
      }, {});

      // dispatch success
      setStoreis({
        storiesList: Object.values(storiesByAuthor),
        error: null,
        loading: false,
      });
    } catch (error) {
      // dispatch failure
      setStoreis({ error, loading: false, storiesList: [] });
      console.log(error);
    }
  }

  // get stories list on app mount
  useEffect(() => {
    getStories();
  }, []);

  if (loading) return <SellerStoriesListLoader />;

  if (!loading && storiesList)
    return (
      <>
        {/* stories list */}
        <div className="mx-auto 2xl:max-w-screen-2xl px-4 py-2 flex gap-x-2.5 items-center justify-start">
          {/* story lists */}
          {storiesList.map((story, listIndex) => (
            <div
              key={listIndex}
              onClick={() => setList(listIndex)}
              className="flex flex-col justify-center items-start cursor-pointer"
            >
              <img
                src={story[0].authorProfilePic}
                alt="author-profile"
                className="size-20 rounded-full ring-2"
              />
              <p className="font-semibold w-24 text-start break-words line-clamp-1">
                {story[0].author.first_name}
              </p>
              <p className="text-sm text-center w-20 line-clamp-1">
                {story[0].author.last_name}
              </p>
            </div>
          ))}
        </div>

        {/* selected story modal */}
        {currentListIndex !== null && (
          <StoryListModal {...{ currentListIndex, setList, storiesList }} />
        )}
      </>
    );
}

export default SellersStories;
