import { useState } from "react";
import RoomsContext from "./components/RoomsContext";
import ChatList from "./components/Chat List/ChatList";
import Messages from "./components/Messages/Messages";
import SideNav from "./components/SideNav";
import ContactsModal from "./components/Contacts/ContactsModal";

function ChatPage() {
  // side nav state
  const [sideNavShow, setSideNav] = useState(false);
  // contacts modal state
  const [contactsShow, setContactsShow] = useState(false);

  return (
    <RoomsContext>
      <div className="mx-auto 2xl:max-w-screen-2xl -mb-8 fixed inset-0 bg-gray-50 z-50">
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
            <ChatList openSideNav={() => setSideNav(true)} />
            {/* messages */}
            <Messages />
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
