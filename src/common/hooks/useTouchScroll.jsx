import { useState, useEffect } from "react";

function useHorizontalTouchScroll(elClass, renderTime, elRef) {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [container, setContainer] = useState(null);

  // set container
  useEffect(() => {
    // note : when a ref attribute is not applicable, we can reference an element by its class name.
    const containerRef = document.querySelector(elClass);

    setContainer(elRef?.current ? elRef?.current : containerRef);
  }, [elClass, renderTime, elRef]);

  // set event listener's to container
  useEffect(() => {
    if (!container) {
      return;
    }

    // on mouse down event
    const setWalk = (e) => {
      setIsDown(true);
      container.classList.add("active");
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };
    container.addEventListener("mousedown", setWalk);
    // on mouse leave/up event
    const removeWalk = () => {
      setIsDown(false);
      container.classList.remove("active");
    };
    container.addEventListener("mouseleave", removeWalk);
    container.addEventListener("mouseup", removeWalk);
    // scroll event (on mouse move)
    const walkScroll = (e) => {
      if (!isDown || ![...container.classList].includes("active")) return;
      else {
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        container.scrollLeft = scrollLeft - walk;
      }
    };
    container.addEventListener("mousemove", walkScroll);
    // remove all events on component unmount
    return () => {
      container.removeEventListener("mousedown", setWalk);
      container.removeEventListener("mouseleave", removeWalk);
      container.removeEventListener("mouseup", removeWalk);
      container.removeEventListener("mousemove", walkScroll);
    };
  }, [container, isDown, startX, scrollLeft]);

  return container;
}

export default useHorizontalTouchScroll;
