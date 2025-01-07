import { useEffect, useRef, useState } from "react";
import UserInfo from "../../../Modals/User Info/UserInfo";
import useOutSideClick from "hooks/UseOutsideClick";
import { useRoomsData } from "../../../RoomsContext";
import { getDatabase, onValue, ref } from "firebase/database";
import UserSummary from "./UserSummary";
import ContextMenu from "./ContextMenu";
import SearchBar from "./SearchBar";

function Navbar({ setShowAlert }) {
  // user info modal state
  const [userDetails, setUserDetails] = useState(null);
  // context menu state
  const [contextMenu, setContextMenu] = useState(false);
  const contextMenuRef = useRef();
  useOutSideClick(contextMenuRef, () =>
    setContextMenu(() => setContextMenu(false))
  );
  const { selectedRoom } = useRoomsData();
  const { last_name, business_name, userType, career_title, last_seen } =
    selectedRoom?.receiver || {};
  const lastStatus = useRef("");
  const [barIsShow, setBarIsShow] = useState(false);

  // update last seen
  useEffect(() => {
    if (!last_seen) {
      lastStatus.current =
        userType !== "customer" ? career_title || business_name : last_name;
      return;
    }

    const db = getDatabase();
    const serverTimeRef = ref(db, ".info/serverTimeOffset");

    let intervalId;

    const fetchServerTime = () => {
      onValue(
        serverTimeRef,
        (snapshot) => {
          // Get the current server time
          const serverTime = Date.now() + snapshot.val();
          // Step B-1 & B-2: Calculate the difference between lastSeen.date and serverTime
          const timeDifference = serverTime - last_seen?.date;
          const timeDifferenceInSeconds = Math.floor(timeDifference / 1000);
          // Update the lastStatus based on the difference
          lastStatus.current =
            timeDifferenceInSeconds >= 30 || last_seen?.offline
              ? `last seen at ${calculateLastseen(last_seen?.date)}`
              : "online";
        },
        { onlyOnce: true } // Make sure this reads only once for each fetch
      );
    };

    // Start an interval to fetch server time repeatedly
    fetchServerTime(); // Fetch immediately
    intervalId = setInterval(fetchServerTime, 15000); // Check every 30 seconds

    // Cleanup interval and Firebase listener on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [last_seen]);

  function calculateLastseen(date) {
    // Create a Date object from the timestamp
    const dateToCheck = new Date(date);

    return dateToCheck.toLocaleTimeString("en-us", {
      year: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setContextMenu(true);
      }}
      className="w-full bg-gray-100 p-2 lg:px-4 flex items-center justify-between z-30 transition-all"
    >
      {/* user summary info & close room btn */}
      <UserSummary {...{ lastStatus, setUserDetails }} />
      {/* context menu */}
      <ContextMenu
        {...{
          contextMenu,
          setContextMenu,
          setShowAlert,
          setUserDetails,
          setBarIsShow,
        }}
      />
      {/* user info side modal */}
      <UserInfo
        modalShow={userDetails}
        onCloseModal={() => setUserDetails(null)}
      />
      {/* search bar */}
      <SearchBar {...{ barIsShow, setBarIsShow }} />
    </div>
  );
}

export default Navbar;
