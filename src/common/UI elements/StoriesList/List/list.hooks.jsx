import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";

const useStoryListModal = (currentListIndex, setList, storiesList) => {
  const [currentSlideIndex, setSlide] = useState(0);
  const containerRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [lastMove, setLastMove] = useState(null);
  const [isChangingSlide, setChangingSlide] = useState(false);

  // Update current slide index and list index based on the swipe gesture
  useEffect(() => {
    if (lastMove) {
      const nextIndex =
        lastMove === "next"
          ? currentListIndex + 1 < storiesList.length
            ? currentListIndex + 1
            : null
          : currentListIndex > 0
          ? currentListIndex - 1
          : null;

      if (nextIndex !== null) {
        setChangingSlide(true);
        setList(nextIndex);
        setSlide(0);
      }
      setLastMove(null);
    }
  }, [lastMove]);

  // Reset slide change state after a brief timeout
  useEffect(() => {
    if (isChangingSlide) {
      const timer = setTimeout(() => setChangingSlide(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isChangingSlide]);

  // Lock/unlock body scroll on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isMobile]);

  // Center the current slide within the view
  useEffect(() => {
    const currentSlide = document.querySelector(".currentSlide");
    if (currentSlide && containerRef.current) {
      const slideRect = currentSlide.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const offset =
        slideRect.left +
        slideRect.width / 2 -
        (containerRect.left + containerRect.width / 2);
      containerRef.current.scrollLeft += offset;
    }
  }, [currentListIndex, isMobile, isChangingSlide]);

  // Navigate between stories
  const changeStory = (action) => {
    const currentList = storiesList[currentListIndex];
    if (action === "close") {
      setList(null);
      setSlide(0);
    } else if (action === "next") {
      if (currentSlideIndex + 1 < currentList.length) {
        setSlide((prev) => prev + 1);
      } else {
        setList(
          currentListIndex + 1 < storiesList.length
            ? currentListIndex + 1
            : null
        );
        setSlide(0);
      }
    } else if (action === "prev") {
      if (currentSlideIndex > 0) {
        setSlide((prev) => prev - 1);
      } else if (currentListIndex > 0) {
        setList(currentListIndex - 1);
        setSlide(0);
      }
    }
  };

  // Handle touch gestures for mobile
  const handleTouch = (e, type) => {
    if (type === "start") {
      setLastMove(null);
      containerRef.current.dataset.touchStart = e.touches[0].clientX;
    } else if (type === "move") {
      const deltaX =
        e.touches[0].clientX - containerRef.current.dataset.touchStart;
      setLastMove(deltaX > 20 ? "prev" : "next");
    }
  };

  // Get relevant lists for rendering
  const getPaginatedLists = () =>
    storiesList.filter(
      (_, index) =>
        index === currentListIndex - 1 ||
        index === currentListIndex ||
        index === currentListIndex + 1
    );

  return {
    containerRef,
    isChangingSlide,
    changeStory,
    handleTouch,
    getPaginatedLists,
    currentSlideIndex,
  };
};

export default useStoryListModal;
