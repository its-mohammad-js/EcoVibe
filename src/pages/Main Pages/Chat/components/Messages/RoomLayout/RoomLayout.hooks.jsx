import { useEffect, useState } from "react";

// room search bar data & functionality
export function useSearchBar(selectedRoom) {
  // search bar & search query data
  const [searchBar, setSearchBar] = useState({
    barIsShow: false,
    searchQuery: "",
  });
  // selected message index & results
  const [{ results, selectedIndex }, setResults] = useState({
    selectedIndex: 0,
    results: [],
  });

  // update results on search bar actions
  useEffect(() => {
    // rest to inital on search bar closed
    if (!searchBar.barIsShow) {
      setSearchBar({ barIsShow: false, searchQuery: "" });
    }
    // find results and update state
    if (searchBar.searchQuery.length > 0) {
      // filtered messages based on search query
      const filteredMessages = selectedRoom?.messageList.filter(
        ({ content, type }) =>
          type === "text" &&
          content.toLowerCase().includes(searchBar.searchQuery.toLowerCase())
      );
      // update results
      setResults({ selectedIndex: 0, results: filteredMessages.reverse() });
    } else {
      // reset query and close search bar
      setResults({ selectedIndex: 0, results: [] });
    }
  }, [searchBar.searchQuery, searchBar.barIsShow, selectedRoom]);

  // scroll to message on search navigator actions
  const scrollToMessage = (direction) => {
    setResults((prev) => ({
      ...prev,
      selectedIndex:
        direction === "up" ? prev.selectedIndex + 1 : prev.selectedIndex - 1,
    }));
  };

  return {
    searchBar,
    results,
    selectedIndex,
    updateSearchBar: setSearchBar,
    scrollToMessage,
  };
}

// set room height on resizes
// note: This effect is used because of the unexpected screen resize behavior, particularly when focusing on the message input and the keyboard is displayed on Android devices.
export function useResizeListener() {
  const [roomHeight, setHeight] = useState(null);

  useEffect(() => {
    const getHeight = () => setHeight(window.visualViewport.height);

    window.addEventListener("resize", getHeight);
    getHeight();

    return () => {
      window.removeEventListener("resize", getHeight);
    };
  }, []);

  return roomHeight;
}

// This effect handles the touch interactions for the draggable element.
export function useTouchHandlers(selectedRoom, setSelectedRoom, setEl, navRef) {
  useEffect(() => {
    const handleTouch = (e, type) => {
      const touch = type === "move" ? e.touches[0] : e.changedTouches[0];
      const deltaY = touch.screenY - touch.pageY;

      if (type === "move" && deltaY < 87) {
        const opacity = (touch.pageY - touch.screenY) / 50 + 1.5;
        const rotate = Math.min(Math.max(opacity * 85, 0), 180);

        setEl({
          opacity: opacity / 3,
          rotate,
        });
      }

      if (type === "end") {
        if (deltaY < -20) {
          setSelectedRoom(null);
        } else if (deltaY < 87) {
          navRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
          setEl({ rotate: 0, opacity: 0 });
        }
      }
    };

    const onTouchMove = (e) => handleTouch(e, "move");
    const onTouchEnd = (e) => handleTouch(e, "end");

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [selectedRoom, setSelectedRoom, setEl, navRef]);
}
