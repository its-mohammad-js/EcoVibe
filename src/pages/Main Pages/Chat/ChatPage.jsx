import { useState } from "react";
import RoomsContext from "./components/RoomsContext";
import ChatList from "./components/Chat List/ChatList";
import SideNav from "./components/SideNav";
import MessagesRoom from "./components/Messages/MessagesRoom";
import { getDatabase, ref, update, remove } from "firebase/database";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import ContactsList from "./components/Modals/Contacts/ContactsList";

function ChatPage() {
  const [sideNavShow, setSideNav] = useState(false); // side nav state
  const [contactsShow, setContactsShow] = useState(false); // contacts modal state
  const { userId } = useSelector((state) => state.userData); // necessary data

  // delete chat room handler
  function deleteRoom(roomId, rooms) {
    // take a copy from selected room
    const roomIndex = rooms.findIndex((room) => room.roomId === roomId);
    const roomClone = { ...rooms[roomIndex] };
    // ref to selectedRoom
    const db = getDatabase();
    const roomsRef = ref(db, `rooms/${roomClone.roomId}`);
    // delete room for both sides when only one member is left
    if (roomClone.members?.length < 2) {
      remove(roomsRef);
    }
    // delete chat room & refactor messages just for this user
    else {
      // update message list
      update(roomsRef, {
        members: roomClone.members.filter((id) => id !== userId),
        messageList:
          roomClone.messageList?.map((message) => ({
            ...message,
            visibleTo: message.visibleTo.filter((id) => id !== userId),
          })) || [],
      });
      // dispatch seccess
      toast.success("Room Is Deleted Successfully");
    }
  }

  return (
    <RoomsContext>
      <div className="mx-auto 2xl:max-w-screen-2xl fixed inset-0 z-50">
        {/* wrapper */}
        <div className="lg:flex justify-between h-full">
          {/* side buttons */}
          <SideNav
            onCloseNav={() => setSideNav(false)}
            navIsShow={sideNavShow}
            openContacts={() => setContactsShow(true)}
          />
          {/* main comps */}
          <div className="flex-1 flex h-full">
            {/* chats list */}
            <ChatList
              openSideNav={() => setSideNav(true)}
              deleteRoom={deleteRoom}
            />
            {/* messages */}
            <MessagesRoom deleteRoom={deleteRoom} />
            {/* search contacts modal */}
            <div
              className={`${
                contactsShow ? "opacity-100 visible" : "opacity-0 invisible"
              } inset-0 fixed flex items-center justify-center z-50 transition-all`}
            >
              <ContactsList onCloseModal={() => setContactsShow(false)} />
              {/* bg (close modal) */}
              <div
                onClick={() => setContactsShow(false)}
                className="absolute inset-0 bg-gray-950/85 backdrop-blur-sm"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </RoomsContext>
  );
}

export default ChatPage;
