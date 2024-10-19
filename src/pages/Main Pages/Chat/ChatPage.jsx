import { useState } from "react";
import RoomsContext from "./components/RoomsContext";
import ChatList from "./components/Chat List/ChatList";
import SideNav from "./components/SideNav";
import MessagesRoom from "./components/Messages/MessagesRoom";
import { getDatabase, ref, update, remove } from "firebase/database";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function ChatPage() {
  // side nav state
  const [sideNavShow, setSideNav] = useState(false);
  // contacts modal state
  const [contactsShow, setContactsShow] = useState(false);
  // necessary data
  const { userId } = useSelector((state) => state.userData);

  // delete chat room handler
  function deleteRoom(roomId, rooms) {
    console.log("ok");

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
        messageList: roomClone.messageList.map((message) => ({
          ...message,
          visibleTo: message.visibleTo.filter((id) => id !== userId),
        })),
      });
      // dispatch seccess
      toast.success("Room Is Deleted Successfully");
    }
  }

  return (
    <RoomsContext>
      <div className="mx-auto 2xl:max-w-screen-2xl bg-gray-50 z-50 fixed inset-0">
        {/* wrapper */}
        <div className="lg:flex justify-between h-screen">
          {/* side buttons */}
          <SideNav
            onCloseNav={() => setSideNav(false)}
            navIsShow={sideNavShow}
            openContacts={() => setContactsShow(true)}
          />
          {/* main comps */}
          <div className="flex-1 flex">
            {/* chats list */}
            <ChatList
              openSideNav={() => setSideNav(true)}
              deleteRoom={deleteRoom}
            />
            {/* messages */}
            <MessagesRoom deleteRoom={deleteRoom} />
            {/* search contacts modal */}
            {/* <ContactsModal
              modalIsShow={contactsShow}
              onCloseModal={() => setContactsShow(false)}
            /> */}
          </div>
        </div>
      </div>
    </RoomsContext>
  );
}

export default ChatPage;
