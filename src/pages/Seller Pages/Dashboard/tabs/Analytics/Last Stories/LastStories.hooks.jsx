import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "src/config/firebase";
import { deleteObject, ref } from "firebase/storage";
import toast from "react-hot-toast";

// manage story list request
export function useStories(userId, setCurrentStory, setAlert) {
  // stories data
  const [{ loading, storyList }, setLastStories] = useState({
    storyList: [],
    loading: false,
  });

  // get stories from firestore
  async function getLastStories() {
    try {
      // dispatch loading
      setLastStories((prev) => ({ ...prev, loading: true }));
      // ref to current seller stories in firestore
      const storyRef = query(
        collection(db, "Stories"),
        where("authorId", "==", userId)
      );
      // get last story
      const lastStories = await getDocs(storyRef).then(({ docs }) =>
        docs.map((doc) => doc.data()).sort((a, b) => a.createdAt > b.createdAt)
      );
      // dispatch success
      setLastStories({ error: null, loading: false, storyList: lastStories });
      setCurrentStory((prev) => ({ ...prev, currentStory: lastStories[0] }));
    } catch (error) {
      // dispatch failure
      setLastStories({ error, loading: false, storyList: null });
      console.log(error);
    }
  }

  // delete story functionality
  async function deleteStory(currentStory) {
    try {
      // dispatch loading
      setCurrentStory((prev) => ({ ...prev, deleting: true }));
      // ref to story content on storage
      const contentRef = ref(storage, currentStory.contentUrl);
      // delete story content from storage
      await deleteObject(contentRef);
      // ref to story on firestore
      const docRef = doc(collection(db, "Stories"), currentStory.id);
      // delete story from firestore
      await deleteDoc(docRef);
      // dispatch success
      setCurrentStory((prev) => ({ ...prev, deleting: false }));
      setAlert(false);
      getLastStories();
    } catch (error) {
      // dispatch error
      toast.error("There was an error on delete story, please try again later");
      setCurrentStory((prev) => ({ ...prev, deleting: false }));
      setAlert(false);
      console.log(error);
    }
  }

  // read user stories on mount
  useEffect(() => {
    getLastStories();
  }, []);

  return {
    loading,
    storyList,
    deleteStory,
  };
}
