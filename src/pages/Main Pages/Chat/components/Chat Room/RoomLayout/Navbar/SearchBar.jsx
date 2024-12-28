import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import { useRoomsData } from "../../../RoomsContext";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SearchBar({ barIsShow, setBarIsShow }) {
  // search bar & search query data
  const [searchQuery, setQuery] = useState("");
  // selected message index & results
  const [{ results, selectedIndex }, setResults] = useState({
    selectedIndex: 0,
    results: [],
  });
  const { setSelectedMessage, selectedRoom, messageMode } = useRoomsData();
  const { userId } = useSelector((state) => state.userData);

  // update results on search bar actions
  useEffect(() => {
    // rest to inital on search bar closed
    if (!barIsShow) {
      setQuery("");
    }
    // find results and update state
    if (searchQuery.length > 0) {
      // filtered messages based on search query
      const filteredMessages = selectedRoom?.messageList.filter(
        ({ content, type, visibleTo }) =>
          visibleTo.includes(userId) &&
          type === "text" &&
          content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // update results
      setResults({ selectedIndex: 0, results: filteredMessages.reverse() });
    } else {
      // reset query and close search bar
      setResults({ selectedIndex: 0, results: [] });
    }
  }, [searchQuery, barIsShow, selectedRoom]);

  // scroll to message on search navigator actions
  const scrollToMessage = (direction) => {
    setResults((prev) => ({
      ...prev,
      selectedIndex:
        direction === "up" ? prev.selectedIndex + 1 : prev.selectedIndex - 1,
    }));
  };

  //   close search bar on change room
  useEffect(() => {
    setBarIsShow(false);
  }, [selectedRoom, messageMode]);

  // scroll to navigated message based on selected index
  useEffect(() => {
    if (barIsShow) setSelectedMessage(results[selectedIndex]);
  }, [selectedIndex, results]);

  return (
    <>
      <div
        className={`${
          barIsShow
            ? "visible opacity-100 translate-y-0"
            : "opacity-0 invisible translate-y-10"
        } absolute top-0 w-full right-0 h-[4.5rem] bg-gray-100 transition-all flex items-center justify-center px-4`}
      >
        <button
          onClick={() => {
            setBarIsShow(false);
            setSelectedMessage(null);
          }}
          className="text-3xl"
        >
          <AiOutlineLeft />
        </button>
        <input
          onChange={({ target }) => setQuery(target.value)}
          value={searchQuery}
          type="text"
          placeholder="search messages"
          className="flex-1 px-4 py-2 bg-transparent outline-none text-lg"
        />
        <button className="text-3xl">
          <AiOutlineSearch />
        </button>
      </div>

      {barIsShow && (
        <div className="w-full absolute right-0 bottom-0 z-50 h-16 bg-gray-50 flex items-center px-4 py-2 transition-all lg:opacity-100">
          <h4 className="text-lg font-bold">
            {searchQuery?.length
              ? selectedIndex
                ? `${selectedIndex + 1} of ${results?.length}`
                : `${results?.length} Messages Find`
              : `Search Between ${
                  selectedRoom.messageList?.length
                    ? selectedRoom.messageList?.length
                    : 0
                } Messages`}
          </h4>

          <div
            className={`${
              results.length <= 0 && "hidden"
            } flex flex-col absolute bg-gray-50/40 rounded-3xl backdrop-blur-sm right-8 gap-y-2 -top-28`}
          >
            <button
              disabled={selectedIndex === results.length - 1}
              onClick={() => scrollToMessage("up")}
              className="p-2.5 text-2xl rounded-full bg-gray-100 -rotate-90 disabled:opacity-50 transition-all"
            >
              <AiOutlineRight />
            </button>
            <button
              disabled={!selectedIndex}
              onClick={() => scrollToMessage("down")}
              className="p-2.5 text-2xl rounded-full bg-gray-100 rotate-90 disabled:opacity-50 transition-all"
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBar;
