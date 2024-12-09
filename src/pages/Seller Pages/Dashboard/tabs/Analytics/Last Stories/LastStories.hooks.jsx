import { storage } from "src/config/firebase";
import { deleteObject, ref } from "firebase/storage";
import toast from "react-hot-toast";
import { getDatabase, ref as databaseRef, remove } from "firebase/database";
import useGetStories from "../../../../../../common/hooks/useGetStories";

// manage story list request
export function useStories(userId, setCurrentStory, setAlert) {
  const { loading, groupedStories: storiesList } = useGetStories(userId);
  const database = getDatabase();

  // delete story functionality
  async function deleteStory(currentStory) {
    try {
      // dispatch loading
      setCurrentStory((prev) => ({ ...prev, deleting: true }));
      // ref to story content on storage
      const contentRef = ref(storage, currentStory.contentUrl);
      // delete story content from storage
      await deleteObject(contentRef);
      // ref to current story slide
      const slideRef = databaseRef(database, `stories/${currentStory.id}`);
      // remove story slide
      remove(slideRef);
      // dispatch success
      setCurrentStory((prev) => ({ ...prev, deleting: false }));
      setAlert(false);
    } catch (error) {
      // dispatch error
      toast.error("There was an error on delete story, please try again later");
      setCurrentStory((prev) => ({ ...prev, deleting: false }));
      setAlert(false);
      console.log(error);
    }
  }

  return {
    loading,
    storyList: storiesList[0]?.slides,
    deleteStory,
  };
}
