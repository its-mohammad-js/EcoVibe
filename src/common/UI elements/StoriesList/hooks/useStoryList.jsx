import { useEffect, useRef, useState } from "react";
import useMediaQuery from "hooks/useMediaQuery";
import useDisableScroll from "hooks/UseDisableScroll";
import { useParams } from "react-router-dom";

const useStoryList = (currentListIndex, setList, storiesList) => {
  const [currentSlideIndex, setSlide] = useState(0);
  const containerRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [lastMove, setLastMove] = useState(null);
  const [isChangingSlide, setChangingSlide] = useState(false);
  useDisableScroll(780, false); // Lock/unlock body scroll on mobile
  const params = useParams();

  useEffect(() => {
    const lastSeenSlide = storiesList[currentListIndex]?.slides?.findIndex(
      ({ isSeen }) => !isSeen
    );
    setSlide(lastSeenSlide >= 0 ? lastSeenSlide : 0);
  }, [currentListIndex]);

  // Update current slide index and list index based on the swipe gesture
  useEffect(() => {
    const currentSlide = document.querySelector(".currentSlide"); // Select the current slide element

    // Create an IntersectionObserver to detect when the slide is out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the slide is no longer in view and a move was made
        if (!entry.isIntersecting && lastMove !== null) {
          // Calculate the next index based on the current movement (next or previous)
          const nextIndex =
            lastMove === "next"
              ? currentListIndex < storiesList.length - 1
                ? currentListIndex + 1
                : null // Move to next item, or null if at the end
              : currentListIndex - 1; // Move to previous item

          // Update state for the slide change
          setChangingSlide(true); // Set the flag to indicate a slide is changing
          setList(nextIndex); // Set the new list item index
          setSlide(0); // Reset slide position
          setLastMove(null); // Clear the last move direction
        }
      },
      { threshold: 0.05 } // Trigger when at least 5% of the slide is out of view
    );

    // Start observing the current slide element if it exists
    if (currentSlide) observer.observe(currentSlide);

    // Clean up the observer when the component is unmounted
    return () => observer.disconnect();
  }, [lastMove, currentListIndex]); // Re-run effect when these dependencies change

  // Reset slide change state after a brief timeout
  useEffect(() => {
    if (isChangingSlide) {
      const timer = setTimeout(() => setChangingSlide(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isChangingSlide]);

  // Center the current slide within the view
  useEffect(() => {
    // Function to scroll the container to the current slide
    const scrollToCurrentSlide = () => {
      if (!containerRef.current) return; // Check if the container reference exists
      // Select the current slide element
      const currentSlide = document.querySelector(".currentSlide");
      if (!currentSlide) return; // If the current slide doesn't exist, exit the function
      // Get position of slide & container
      const slideRect = currentSlide.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      // Calculate the offset to center the current slide in the container
      const offset =
        slideRect.left +
        slideRect.width / 2 -
        (containerRect.left + containerRect.width / 2);
      // Adjust the scroll position of the container by the calculated offset
      containerRef.current.scrollLeft += offset;
    };

    scrollToCurrentSlide();
  }, [currentListIndex, isMobile, isChangingSlide]);

  // Navigate between stories
  const changeStory = (action) => {
    const currentList = storiesList[currentListIndex]; // Get the current list of stories
    const isNext = action === "next"; // check action type
    // hanlde close action
    if (action === "close") {
      setList(null); // Clear the current list
      setSlide(0); // Reset the slide index to 0
      return;
    }
    // hanlde next || prev actions
    else {
      // Calculate the new slide index based on the action
      let newSlide = currentSlideIndex + (isNext ? 1 : -1);

      // Calculate the next list index based on the action
      const nextIndex = currentListIndex + (isNext ? 1 : -1);
      // Check if the new slide index is out of bounds (negative or beyond list length)
      if (newSlide < 0 || newSlide >= currentList.slides.length) {
        // Set the next list index if within valid range, otherwise null (close modal)
        setList(
          nextIndex >= 0 && nextIndex < storiesList.length ? nextIndex : null
        );
        newSlide = 0; // Reset slide index to 0 if out of bounds
      }
      // Update the slide index
      setSlide(newSlide);
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
    params?.id
      ? storiesList
      : storiesList.filter(
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

export default useStoryList;
