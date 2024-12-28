import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { query } from "firebase/database";
import { collection, getDocs, where } from "firebase/firestore";
import { db } from "/src/config/firebase";
import { uniq } from "lodash";
import Contact from "./Contact";
import ContactsLoader from "UI/Loaders/ContactsLoader";
import FilterMenu from "./FilterMenu";

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
        <FilterMenu
          {...{ searchQuery, setQuery, menuIsShow, setTab, searchType }}
        />
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
