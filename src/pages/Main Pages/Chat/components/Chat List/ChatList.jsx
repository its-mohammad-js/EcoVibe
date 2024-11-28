import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { useRoomsData } from "../RoomsContext";
import { useState } from "react";
import ChatColumn from "./ChatColumn";
import useHorizontalTouchScroll from "hooks/useTouchScroll";
import { fakeArray } from "../../../../../common/utils/constants";

function ChatList({ openSideNav, deleteRoom }) {
  const [searchQuery, setQuery] = useState(""); // search query state
  const { rooms, setSelectedRoom, selectedRoom, status } = useRoomsData(); // chat room data
  useHorizontalTouchScroll(".contacts-container"); // horizontal touch for contacts list

  // search messages
  function searchMessages(query) {
    // lower case search query
    const queryLower = query.toLowerCase();
    // return messages match with search query
    return rooms.flatMap(({ messageList, roomId, reciver }) =>
      messageList
        .filter((message) =>
          message?.content?.toLowerCase().includes(queryLower)
        )
        .map((message) => ({ messageList: [message], roomId, reciver }))
    );
  }

  // search contacts
  function searchContacts(query) {
    const filteredRooms = rooms.filter(
      ({ reciver }) =>
        reciver?.business_name?.toLowerCase().includes(query) ||
        reciver?.first_name?.toLowerCase().includes(query) ||
        reciver?.last_name?.toLowerCase().includes(query)
    );

    return filteredRooms;
  }

  return (
    <div
      className={`${
        selectedRoom && "hidden"
      } lg:!block lg:w-1/4 w-full bg-blue-100 grid grid-rows-10`}
    >
      {/* header  */}
      <div className="pt-1.5 row-span-2">
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <div className="flex items-center justify-end gap-x-1.5 cursor-pointer relative">
            <h2 className="text-xl font-bold">Messages</h2>

            <button
              onClick={() => openSideNav()}
              className="absolute -left-2 p-1.5 rounded-full text-4xl hover:text-gray-700 transition-all"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
        {/* search input */}
        <div className="w-full px-4 pb-2 pt-3">
          <input
            onChange={({ target }) => {
              setQuery(target.value?.toLowerCase());
            }}
            type="text"
            value={searchQuery}
            placeholder="Search Messages & Contacts"
            className="py-2.5 bg-gray-200 w-full outline-none px-4 rounded-lg placeholder:text-gray-500"
          />
        </div>
      </div>
      {/* contact list */}
      <div
        className={`${
          !searchContacts(searchQuery).length || !searchQuery?.length
            ? "hidden"
            : "row-span-2"
        } overflow-x-auto overflow-y-hidden mx-auto pr-4 py-1 hidden-scroll-bar w-[20.5rem] contacts-container`}
      >
        {searchQuery && (
          <div className="flex items-center gap-x-4 select-none">
            {searchContacts(searchQuery).map((room, index) => (
              <div
                key={index}
                className="w-24 gap-y-1 flex flex-col items-center justify-center"
              >
                <div
                  onClick={() => setSelectedRoom(room)}
                  className="cursor-pointer"
                >
                  {room.reciver?.profilePic ? (
                    <img
                      src={room.reciver.profilePic}
                      className="size-20 bg-gray-100 rounded-full"
                    />
                  ) : (
                    <div className="size-16 lg:size-20 flex items-center justify-center group bg-gray-200 text-gray-500 rounded-full">
                      <AiOutlineUser className="text-6xl lg:text-7xl mt-3 group-hover:mt-2 transition-all rounded-full" />
                    </div>
                  )}
                </div>
                <p
                  onClick={() => setSelectedRoom(room)}
                  className="line-clamp-2 break-words w-10/12 text-sm text-center cursor-pointer"
                >
                  {room.reciver.userType === "customer"
                    ? room.reciver.first_name + " " + room.reciver.last_name
                    : room.reciver.business_name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* messages / rooms list */}
      <div
        className={`${
          searchQuery?.length ? "row-span-7" : "row-span-10"
        } flex flex-col overflow-auto relative styled-scroll-bar`}
      >
        <h2
          className={`${
            !searchQuery?.length && "hidden"
          } block px-4 sticky top-0 z-10 py-1 w-full bg-gray-200`}
        >
          Found {searchMessages(searchQuery).length} Messages
        </h2>
        {/* list of rooms and messages */}
        {status ? (
          <h4 className="px-2 py-1 absolute bottom-1/2 w-full flex justify-center">
            <p className="px-4 py-1 text-lg font-bold bg-gray-200/80 rounded-xl">
              {status}
            </p>
          </h4>
        ) : searchQuery ? (
          searchMessages(searchQuery).map((room, index) => (
            <ChatColumn key={index} room={room} mode="message" />
          ))
        ) : (
          rooms.map((room, index) => (
            <ChatColumn
              key={index}
              room={room}
              mode="user"
              deleteRoom={deleteRoom}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ChatList;
