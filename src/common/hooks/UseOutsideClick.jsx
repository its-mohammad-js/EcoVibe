import { useEffect } from "react";

const useOutSideClick = (elRef, callBack, defaultState) => {
  useEffect(() => {
    if (defaultState) {
      return;
    }

    const handleOutside = (e) => {
      if (elRef.current && !elRef.current.contains(e.target)) {
        callBack();
      }
    };

    document.addEventListener("click", handleOutside);

    return () => {
      removeEventListener("click", handleOutside);
    };
  }, [elRef, defaultState]);

  return elRef;
};

export default useOutSideClick;
