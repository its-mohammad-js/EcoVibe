import { useEffect, useState } from "react";

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
