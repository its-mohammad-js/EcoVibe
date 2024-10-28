import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "/src/config/firebase";

function SellersStories() {
  const [{ error, loading, stories }, setStoreis] = useState({
    stories: [],
    loading: false,
    error: null,
  });
  const [selectedStory, setSelectedStory] = useState(null);

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
      // dispatch success
      setStoreis({ stories: storiesData, error: null, loading: false });
    } catch (error) {
      // dispatch failure
      setStoreis({ error, loading: false, stories: [] });
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

  if (!loading && stories.length)
    return (
      <>
        <div className="mx-auto 2xl:max-w-screen-2xl px-4 py-2 flex items-center justify-start">
          {stories.map((story, index) => (
            <div
              key={index}
              onClick={() => setSelectedStory(story)}
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              <img
                src={story.contentUrl}
                alt="content-thumbnail"
                className="size-20 rounded-full"
              />
              <p className="font-semibold">{story.author.first_name}</p>
              <p className="text-sm">{story.author.last_name}</p>
            </div>
          ))}
        </div>

        <div
          className={`${
            selectedStory ? "opacity-100 visible" : "invisible opacity-0"
          } fixed inset-0 z-50 flex items-center transition-all justify-center`}
        >
          <div className="size-96 bg-gray-50 rounded-md overflow-hidden px-2 py-2 z-10">
            <img
              src={selectedStory?.contentUrl}
              alt="story-content"
              className="size-full rounded-md"
            />
          </div>

          <div
            onClick={() => setSelectedStory(null)}
            className="absolute inset-0 bg-gray-900/50 backdrop-blur"
          ></div>
        </div>
      </>
    );
}

export default SellersStories;
