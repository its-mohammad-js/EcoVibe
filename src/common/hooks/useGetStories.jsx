import {
  equalTo,
  getDatabase,
  goOffline,
  goOnline,
  onValue,
  orderByChild,
  query,
  ref,
} from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { sortBy, groupBy } from "lodash";
import { useSelector } from "react-redux";

const useGetStories = (ownerId, isModalOpen) => {
  const [loading, setLoading] = useState(false);
  const [groupedStories, setGroupedStories] = useState([]);
  const unsortedStoriesRef = useRef([]); // Stores all stories without sorting
  const isModalOpenRef = useRef(isModalOpen); // Tracks modal open state
  const database = getDatabase();

  const {
    userId,
    auth_status,
    loading: authLoading,
  } = useSelector((state) => state.userData);

  const fetchStories = () => {
    const storiesRef = ref(database, "stories");
    const storiesQuery = ownerId
      ? query(storiesRef, orderByChild("authorId"), equalTo(ownerId))
      : storiesRef;

    onValue(storiesQuery, (snapshot) => {
      const stories = Object.values(snapshot.val() || {});
      unsortedStoriesRef.current = stories;

      if (!isModalOpenRef.current) {
        // Only sort when the modal is closed
        const sortedStories = groupAndSort(stories);
        setGroupedStories(sortedStories);
      }
    });
  };

  const groupAndSort = (stories) => {
    const grouped = groupBy(stories, "authorId");

    // Add `isSeen` property to each slide
    Object.keys(grouped).forEach((authorId) => {
      grouped[authorId] = grouped[authorId].map((slide) => ({
        ...slide,
        isSeen: slide.seenBy.includes(userId),
      }));
    });

    // Sort authors by "must-see slides" (authors with unseen slides come first)
    const sortedAuthors = sortBy(Object.keys(grouped), (authorId) =>
      grouped[authorId].every((slide) => slide.isSeen)
    );

    // Return authors with their slides (slides remain unsorted)
    return sortedAuthors.map((authorId) => ({
      authorId,
      slides: grouped[authorId],
    }));
  };

  useEffect(() => {
    isModalOpenRef.current = isModalOpen; // Keep modal state in sync
  }, [isModalOpen]);

  useEffect(() => {
    goOnline(database);
    const connectedRef = ref(database, ".info/connected");

    onValue(connectedRef, (snap) => {
      if (snap.val() === true && !authLoading) {
        fetchStories();
        setLoading(false);
      } else {
        setLoading(true);
      }
    });

    return () => {
      goOffline(database);
    };
  }, [auth_status, userId]);

  useEffect(() => {
    if (!isModalOpen) {
      // Re-sort when the modal closes
      const sortedStories = groupAndSort(unsortedStoriesRef.current);
      setGroupedStories(sortedStories);
    }
  }, [isModalOpen]);

  return {
    loading,
    groupedStories,
  };
};

export default useGetStories;
