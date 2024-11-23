import { useEffect, useRef, useState } from "react";
import { MdFilterList } from "react-icons/md";
import { useSelector } from "react-redux";
import useOutSideClick from "hooks/UseOutsideClick";
import { query } from "firebase/database";
import { collection, getDocs, where } from "firebase/firestore";
import { db } from "/src/config/firebase";
import { uniq } from "lodash";
import Contact from "./Contact";
import ContactsLoader from "UI/Loaders/ContactsLoader";

function ContactsList({ onCloseModal }) {
  // filter menu state
  const [{ menuIsShow, searchType }, setTab] = useState({
    searchType: "all",
    menuIsShow: false,
  });
  // search query state
  const [searchQuery, setQuery] = useState("");
  // contacts data
  const [{ loading, userList }, setUserList] = useState({
    userList: [],
    loading: false,
  });
  // orders data
  const [orders, setOrders] = useState([]);
  // necessary data
  const { userType, userId } = useSelector((state) => state.userData);
  // filter menu ref & hook
  const menuRef = useRef();
  useOutSideClick(menuRef, () =>
    setTab((prev) => ({ ...prev, menuIsShow: false }))
  );

  // get related contacts based on user type
  async function getAllowedUsers() {
    if (searchType !== "orders") return;
    try {
      // get orders based on user type
      const ordersQuery = query(
        collection(db, "Orders"),
        userType !== "customer"
          ? // orders of current sellers
            where("sellers", "array-contains", userId)
          : // get purchases of current user
            where("customerId", "==", userId)
      );
      // get array of related orders of current user
      const allowedOrders = await getDocs(ordersQuery).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      setOrders(allowedOrders);
      // get allowed user id list
      const idList = allowedOrders.flatMap(({ sellers, customerId }) => {
        return userType !== "customer" ? customerId : uniq(sellers);
      });
      // return allowed list
      return userType === "customer" ? idList : uniq(idList);
    } catch (error) {
      console.log(error);
    }
  }

  // get contacts on app mount
  useEffect(() => {
    async function getContacts() {
      try {
        // dispatch loading
        setUserList((prev) => ({ ...prev, loading: true }));
        // get contacts id list (on search type equal to orders case)
        const allowedUserIds = await getAllowedUsers();
        // get all users
        const refQuery = query(
          collection(db, "users"),
          searchType === "all"
            ? where("userType", "in", ["seller", "both"])
            : where("userId", "in", allowedUserIds)
        );
        // get contacts data
        const users = await getDocs(refQuery).then(({ docs }) =>
          docs.map((doc) => doc.data()).filter((user) => user.userId !== userId)
        );
        // dispatch success
        setUserList({ userList: users, loading: false, error: null });
      } catch (error) {
        setUserList({ userList: [], loading: false, error });
        console.log(error);
      }
    }

    getContacts();
  }, [searchType]);

  // search contacts by search query
  function filteredContacts(query) {
    let filteredUsers = [];

    filteredUsers = userList.filter((user) => {
      const { personalInformation, businessInformation } = user;
      const { first_name, last_name } = personalInformation || {};
      const { business_name } = businessInformation || {};

      if (
        first_name.toLowerCase().includes(query) ||
        last_name?.toLowerCase().includes(query) ||
        business_name?.toLowerCase().includes(searchQuery)
      ) {
        return user;
      }
    });

    return query !== "" ? filteredUsers : userList;
  }

  if (loading) return <ContactsLoader />;

  if (!loading)
    return (
      <div className="w-80 lg:w-96 h-[90vh] 2xl:h-[45rem] bg-gray-50 rounded-md z-10 p-2 flex flex-col">
        {/* search input */}
        <div className="flex bg-gray-200 rounded-md relative">
          <input
            type="text"
            value={searchQuery}
            onChange={({ target }) =>
              setQuery(target.value.toLocaleLowerCase())
            }
            placeholder="search contacts"
            className="w-full px-4 py-2 bg-transparent placeholder:text-gray-600 outline-none rounded-md"
          />
          <div ref={menuRef}>
            <button
              onClick={() => setTab((prev) => ({ ...prev, menuIsShow: true }))}
              className="px-2 h-full text-2xl hover:text-gray-500 transition-all"
            >
              <MdFilterList />
            </button>

            <div
              className={`${
                menuIsShow
                  ? "translate-y-0 opacity-100 visible"
                  : "-translate-y-10 opacity-0 invisible"
              } absolute top-14 transition-all right-0 w-48 h-24 bg-gray-100 justify-evenly px-2 py-1 rounded-md flex flex-col`}
            >
              <div className="tooltip absolute -top-1 right-8 bg-gray-200"></div>
              <button
                onClick={() => setTab({ menuIsShow: false, searchType: "all" })}
                className={`${
                  searchType === "all" && "bg-gray-300"
                } px-4 py-2 rounded-md hover:bg-gray-200 transition-all`}
              >
                All Sellers
              </button>
              <hr />
              <button
                onClick={() =>
                  setTab({ menuIsShow: false, searchType: "orders" })
                }
                className={`${
                  searchType === "orders" && "bg-gray-300"
                } px-4 py-2 rounded-md hover:bg-gray-200 transition-all`}
              >
                {userType === "customer" ? "From my purchases" : "My Customers"}
              </button>
            </div>
          </div>
        </div>
        {/* contacts list */}
        <div className="flex-1 overflow-auto h-[27rem] xl:h-[35rem] styled-scroll-bar my-2">
          <div className="inline-flex flex-col w-full gap-y-4 h-full">
            {userList.length ? (
              filteredContacts(searchQuery).map((user, i) => (
                <Contact
                  key={i}
                  user={user}
                  searchType={searchType}
                  orders={orders}
                  onCloseModal={onCloseModal}
                />
              ))
            ) : (
              <h4 className="text-xl font-bold text-center flex-1 flex items-center justify-center">
                You have no &nbsp;
                {userType === "customer" ? "order yet..." : "customer yet"}, you
                can change filter to all sellers
              </h4>
            )}
          </div>
        </div>
      </div>
    );
}

export default ContactsList;
