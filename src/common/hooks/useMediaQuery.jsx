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
  }, [maxWidth]);

  return widthCheck;
};

export default useMediaQuery;
