import { useEffect } from "react";

// This effect handles the touch interactions for the draggable element.
export function useTouchHandlers(selectedRoom, setSelectedRoom, setEl, navRef) {
  useEffect(() => {
    // handle touch actions
    const handleTouch = (e, type) => {
      // declare touch event
      const touch = type === "move" ? e.touches[0] : e.changedTouches[0];
      // declare delta y
      const deltaY = touch.screenY - touch.pageY;
      // adjust rotate & opacity of element on touch moves (scrolls)
      if (type === "move" && deltaY < 87) {
        const opacity = (touch.pageY - touch.screenY) / 50 + 1.5;
        const rotate = Math.min(Math.max(opacity * 85, 0), 180);
        // update element style
        setEl({
          opacity: opacity / 3,
          rotate,
        });
      }
      // finally decide on touch (scroll) end
      if (type === "end") {
        // close the chat room if user scrolls down completely
        if (deltaY < -20) {
          setSelectedRoom(null);
        }
        // scroll up if user hasn't enough scroll
        else if (deltaY < 87) {
          navRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
          setEl({ rotate: 0, opacity: 0 });
        }
      }
    };
    // declare & add event listeners
    const onTouchMove = (e) => handleTouch(e, "move");
    const onTouchEnd = (e) => handleTouch(e, "end");

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    // remove events on un-mount
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [selectedRoom, setSelectedRoom, setEl, navRef]);
}
