import { useEffect, useState } from "react";

const useMediaQuery = ({ maxWidth }) => {
  // width check state
  const [widthCheck, setWidthCheck] = useState(null);
  // check max width on app mount & resize events
  useEffect(() => {
    setWidthCheck(window.innerWidth <= maxWidth);

    function handleResize(e) {
      setWidthCheck(window.innerWidth <= maxWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth, window.innerWidth, window.innerHeight]);
  // return results
  return widthCheck || window.innerWidth <= maxWidth;
};

export default useMediaQuery;
