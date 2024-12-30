import { getDatabase, ref, remove, update } from "firebase/database";
import { useState } from "react";
import { storage } from "/src/config/firebase";
import { deleteObject, ref as storageRef } from "firebase/storage";
import toast from "react-hot-toast";

function useRemoveStory(handlePause) {
  const [loading, setLoading] = useState(false);

  const onDeleteSlide = async (selectedSlide, finallyCallBack = () => {}) => {
    try {
      const database = getDatabase();
      // dispatch loading
      setLoading(true);
      // ref to story content on storage
      const contentRef = storageRef(storage, selectedSlide.contentUrl);
      // // delete story content from storage
      await deleteObject(contentRef);
      // ref to current story slide
      const slideRef = ref(database, `stories/${selectedSlide.id}`);
      // remove story slide
      remove(slideRef);
      // dispatch success
      setLoading(false);
      finallyCallBack();
    } catch (error) {
      // dispatch error
      toast.error("There was an error on delete story, please try again later");
      setLoading(false);
      finallyCallBack();
      console.log(error);
    }
  };

  const onRemoveHighlight = async (selectedSlide) => {
    try {
      // dispatch loading
      setLoading(true);
      handlePause(false);
      // ref to story slide
      const db = getDatabase();
      const storyRef = ref(db, `stories/${selectedSlide.id}`);
      update(storyRef, { highlightRef: null, title: null });
      // dispatch success
      toast.success("highlight removed successfully");
      setLoading(false);
      handlePause(true);
    } catch (error) {
      // dispatch error
      toast.error(
        "There was an error on remove highlight, please try again later"
      );
      setLoading(false);
      handlePause(false);
      console.log(error);
    }
  };

  return {
    loading,
    onDeleteSlide,
    onRemoveHighlight,
  };
}

export default useRemoveStory;
