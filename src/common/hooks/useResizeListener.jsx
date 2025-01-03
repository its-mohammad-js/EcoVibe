// set room height on resizes

import { useEffect, useState } from "react";

// note: This effect is used because of the unexpected screen resize behavior, particularly when focusing on the message input and the keyboard is displayed on Android devices.
export function useResizeListener() {
  const [appHeight, setHeight] = useState(null);

  useEffect(() => {
    const getHeight = () => setHeight(window.visualViewport.height);

    window.addEventListener("resize", getHeight);
    getHeight();

    return () => {
      window.removeEventListener("resize", getHeight);
    };
  }, []);

  return { appHeight };
}
