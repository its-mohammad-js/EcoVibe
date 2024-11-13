import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "/src/config/firebase";
import StoryListModal from "/src/common/UI elements/StoriesList/StoryListModal";

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

  if (loading)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl flex items-center justify-center my-4">
        <h4 className="text-4xl font-bold">Loading...</h4>
      </div>
    );

  if (!loading && storiesList)
    return (
      <>
        <div className="mx-auto 2xl:max-w-screen-2xl px-4 py-2 flex gap-x-2.5 items-center justify-start">
          {/* story lists */}
          {storiesList.map((story, listIndex) => (
            <div
              key={listIndex}
              onClick={() => setList(listIndex)}
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              <img
                src={story[0].authorProfilePic}
                alt="author-profile"
                className="size-20 rounded-full ring-2"
              />
              <p className="font-semibold">{story[0].author.first_name}</p>
              <p className="text-sm">{story[0].author.last_name}</p>
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
