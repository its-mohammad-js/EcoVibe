import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../../../../config/firebase";

function LastStories() {
  const [{ error, loading, storyData }, setLastStory] = useState({
    storyData: {},
    loading: false,
    error: null,
  });
  const { userId } = useSelector((state) => state.userData);

  async function getLastStory() {
    try {
      // dispatch loading
      setLastStory((prev) => ({ ...prev, loading: true }));
      // ref to current seller stories in firestore
      const storyRef = query(
        collection(db, "Stories"),
        where("authorId", "==", userId)
      );
      // get last story
      const lastStory = await getDocs(storyRef).then(
        ({ docs }) =>
          docs
            .map((doc) => doc.data())
            .sort((a, b) => a.createdAt > b.createdAt)[0]
      );
      // dispatch success
      setLastStory({ error: null, loading: false, storyData: lastStory });
    } catch (error) {
      // dispatch failure
      setLastStory({ error, loading: false, storyData: null });
      console.log(error);
    }
  }

  useEffect(() => {
    getLastStory();
  }, []);

  if (loading)
    return (
      <div className="size-full flex items-center animate-pulse justify-center">
        <h4 className="text-3xl font-bold">loading...</h4>
      </div>
    );

  if (!loading && storyData)
    return (
      <div className="size-full overflow-hidden rounded-xl relative">
        <img
          src={storyData.contentUrl}
          alt="content-thumbnail"
          className="size-full object-cover"
        />

        <div className="w-full absolute bottom-0 bg-gray-900/80 backdrop-blur h-20 px-4 py-2">
          <h4 className="text-2xl font-bold text-gray-50">some title</h4>
          <p className="text-lg font-semibold text-gray-300">story date</p>
        </div>
      </div>
    );
}

export default LastStories;
