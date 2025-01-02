import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { useRoomsData } from "../RoomsContext";
import { useState } from "react";
import ChatColumn from "./ChatListItem";
import useHorizontalTouchScroll from "hooks/useTouchScroll";
import { useSelector } from "react-redux";
import { fakeArray } from "../../../../../common/utils/constants/helpers";

function ChatList({ openSideNav, deleteRoom }) {
  const [searchQuery, setQuery] = useState(""); // search query state
  const { rooms, setSelectedRoom, selectedRoom, status } = useRoomsData(); // chat room data
  const { loading } = useSelector((state) => state.userData);
  useHorizontalTouchScroll(".contacts-container"); // horizontal touch for contacts list

  // search messages
  function searchMessages(query) {
    // lower case search query
    const queryLower = query.toLowerCase();
    // return messages match with search query
    return rooms.flatMap(({ messageList, roomId, receiver }) =>
      messageList
        ?.filter((message) =>
          message?.content?.toLowerCase().includes(queryLower)
        )
        .map((message) => ({ messageList: [message], roomId, receiver }))
    );
  }

  // search contacts
  function searchContacts(query) {
    // Convert the query to lowercase
    const queryLower = query.toLowerCase();

    // Check if any of the receiver's names match the query
    return rooms.filter(({ receiver }) =>
      [receiver?.business_name, receiver?.first_name, receiver?.last_name].some(
        (name) => name?.toLowerCase().includes(queryLower)
      )
    );
  }

  return (
    <div
      className={`${
        selectedRoom && "hidden"
      } lg:!flex lg:w-1/4 w-full h-screen bg-gray-50 flex flex-col`}
    >
      {/* header  */}
      <div className="">
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
            : "basis-[19%] min-h-32"
        } overflow-x-auto overflow-y-hidden mx-auto flex px-4 gap-3 py-1 hidden-scroll-bar w-full contacts-container`}
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
                  {room.receiver?.profilePic ? (
                    <img
                      src={room.receiver.profilePic}
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
                  {room.receiver.userType === "customer"
                    ? room.receiver.first_name + " " + room.receiver.last_name
                    : room.receiver.business_name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* messages / rooms list */}
      <div
        className={`${
          searchQuery?.length
            ? "basis-[55%] lg:basis-[65%]"
            : "basis-[76%] lg:basis-[83%]"
        } flex flex-col flex-none overflow-auto relative styled-scroll-bar`}
      >
        {fakeArray(200).map((a) => (
          <div key={a} className="w-full h-24 bg-gray-200 flex-none">
            dic
          </div>
        ))}

        <h2
          className={`${
            !searchQuery?.length && "hidden"
          } block px-4 sticky top-0 z-10 py-1 w-full bg-gray-200`}
        >
          Found {searchMessages(searchQuery).length} Messages
        </h2>
        {/* list of rooms and messages */}
        {loading || status ? (
          <h4 className="px-2 py-1 w-full flex justify-center">
            <p className="px-4 py-1 text-lg font-bold bg-gray-200/80 rounded-xl">
              loading...
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
