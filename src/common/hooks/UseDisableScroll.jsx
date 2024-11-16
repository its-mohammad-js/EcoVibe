import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";

const useDisableScroll = () => {
  // detect size screen
  const isMobile = useMediaQuery({ maxWidth: 480 });

  // hidden window scroll-bar on mount
  useEffect(() => {
    if (!isMobile) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);
};

export default useDisableScroll;
