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
import { orderBy, groupBy } from "lodash";
import { useSelector } from "react-redux";

const useGetStories = (ownerId, isModalOpen) => {
  const [loading, setLoading] = useState(false);
  const [groupedStories, setGroupedStories] = useState([]);
  const database = getDatabase();
  const { userId, loading: authLoading } = useSelector(
    (state) => state.userData
  );
  const orderListRef = useRef();

  const fetchStories = () => {
    const storiesRef = ref(database, "stories");
    const storiesQuery = ownerId
      ? query(storiesRef, orderByChild("authorId"), equalTo(ownerId))
      : storiesRef;

    onValue(storiesQuery, (snapshot) => {
      const stories = Object.values(snapshot.val() || {});

      setGroupedStories(stories);
    });
  };

  const groupAndSort = (stories) => {
    // Group slides by their authors into story (list) arrays
    const grouped = groupBy(stories, "authorId");

    // Add `isSeen` property to each slide and extract author details
    Object.keys(grouped).forEach((authorId) => {
      grouped[authorId] = grouped[authorId].map((slide) => ({
        ...slide,
        isSeen: slide.seenBy?.includes(userId),
      }));
    });

    // Sort authors with a custom sort function
    const sortedAuthors = orderBy(
      Object.keys(grouped),
      [
        (author) => author === userId, // User ID comes first
        (author) =>
          grouped[author].every(
            (slide) => slide.isSeen || slide.authorId === ownerId
          ), // Authors with unseen slides come first
      ],
      ["desc", "asc"] // Ensure userId is prioritized, then unseen slides
    );

    orderListRef.current = isModalOpen ? orderListRef.current : sortedAuthors;

    // Map sorted authors with their details
    return orderListRef.current.map((authorId, listIndex) => {
      const slides = grouped[authorId];

      return {
        authorId,
        first_name: slides[0]?.author?.first_name,
        last_name: slides[0]?.author?.last_name,
        profile_pic: slides[0]?.authorProfilePic,
        slides,
        isSeen: slides.every(({ isSeen }) => isSeen),
        listIndex,
      };
    });
  };

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
  }, [userId]);

  return {
    loading,
    groupedStories: groupAndSort(groupedStories),
  };
};

export default useGetStories;
