import { useEffect, useState } from "react";

const useMediaQuery = ({ maxWidth }) => {
  const [widthCheck, setWidthCheck] = useState(null);

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

  return widthCheck || window.innerWidth <= maxWidth;
};

export default useMediaQuery;
