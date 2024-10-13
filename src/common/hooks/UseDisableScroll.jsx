import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useDisableScroll = () => {
  // detect size screen
  const isMobile = useMediaQuery({ maxWidth: 480 });

  // hidden parent scroll-bar on mount
  useEffect(() => {
    if (!isMobile) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
};

export default useDisableScroll;
