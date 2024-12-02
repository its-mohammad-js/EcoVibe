import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";

const useDisableScroll = (minWidth = 480, condition) => {
  // detect size screen
  const screenSize = useMediaQuery({ maxWidth: minWidth });


  // hidden window scroll-bar on mount
  useEffect(() => {
    document.body.style.overflow = !screenSize || condition ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [condition, screenSize]);
};

export default useDisableScroll;
