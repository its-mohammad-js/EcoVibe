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
    // group slides based their authors into story (list) arrays
    const grouped = groupBy(stories, "authorId");

    // Add `isSeen` property to each slide and extract author details
    Object.keys(grouped).forEach((authorId) => {
      grouped[authorId] = grouped[authorId].map((slide) => ({
        ...slide,
        isSeen: slide.seenBy?.includes(userId),
      }));
    });

    // Sort authors by "must-see slides" (authors with unseen slides come first)
    const sortedAuthors = sortBy(Object.keys(grouped), (authorId) =>
      grouped[authorId].every((slide) => slide.isSeen)
    );

    orderListRef.current = isModalOpen ? orderListRef.current : sortedAuthors;

    // Map sorted authors with their details
    return orderListRef.current.map((authorId) => {
      const slides = grouped[authorId];

      return {
        authorId,
        first_name: slides[0]?.author?.first_name,
        last_name: slides[0]?.author?.last_name,
        profile_pic: slides[0]?.authorProfilePic,
        slides,
        isSeen: slides.every(({ isSeen }) => isSeen),
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
