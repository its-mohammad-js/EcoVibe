import { fakeArray } from "constants";
import { useEffect, useRef, useState } from "react";
import { AiOutlineFilter, AiOutlineUser } from "react-icons/ai";
import { MdFilterList } from "react-icons/md";
import { useSelector } from "react-redux";
import useOutSideClick from "../../../../../common/hooks/UseOutsideClick";
import { query } from "firebase/database";
import { collection, getDocs, where, orderBy } from "firebase/firestore";
import { db } from "/src/config/firebase";
import { uniq } from "lodash";

function ContactsModal({ modalIsShow, onCloseModal }) {
  const { userType, userId } = useSelector((state) => state.userData);
  const [{ menuIsShow, searchType }, setTab] = useState({
    searchType: "all users",
    menuIsShow: false,
  });
  const menuRef = useRef();
  useOutSideClick(menuRef, () =>
    setTab((prev) => ({ ...prev, menuIsShow: false }))
  );
  // by order type (sells || purchases)
  const [byOrderType, setOrderType] = useState("sells");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    switch (userType) {
      case "customer":
        setTab((prev) => ({ ...prev, searchType: "" }));
        setOrderType("purchases");
        break;
      case "seller":
        setOrderType("sells");
        console.log("seller mode");
        break;
      case "both":
        console.log("both mode");
        break;

      default:
        break;
    }
  }, [userType]);

  // get related contacts based on order type
  async function getAllowedUsers() {
    if (searchType !== "orders") return;
    try {
      // get orders by order type
      const ordersQuery = query(
        collection(db, "Orders"),
        byOrderType === "sells"
          ? where("sellers", "array-contains", userId)
          : where("customerId", "==", userId)
      );
      // get array of related user's
      const allowedUsers = await getDocs(ordersQuery).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      console.log(allowedUsers);

      return allowedUsers.flatMap(({ sellers, customerId }) =>
        byOrderType === "sells" ? customerId : sellers
      );
    } catch (error) {
      console.log(error);
    }
  }

  // get contacts on app mount
  useEffect(() => {
    async function getContacts() {
      try {
        const allowedUserIds = await getAllowedUsers();
        // get all users
        const refQuery = query(
          collection(db, "users"),
          searchType === "orders"
            ? where("userId", "in", uniq(allowedUserIds))
            : where(
                "userType",
                "in",
                userType === "customer"
                  ? ["both", "seller"]
                  : ["customer", "both", "seller"]
              )
        );
        const users = await getDocs(refQuery).then(({ docs }) =>
          docs.map((doc) => doc.data())
        );
        setUserList(users);
      } catch (error) {
        console.log(error);
      }
    }

    getContacts();
  }, [searchType, byOrderType]);

  return (
    <div
      className={`${
        modalIsShow ? "" : ""
      } inset-0 fixed flex items-center justify-center z-50`}
    >
      {/* main wrapper */}
      <div className="w-96 h-[90vh] 2xl:h-[45rem] bg-gray-50 rounded-md z-10 p-2 flex flex-col">
        {/* search input */}
        <div className="flex bg-gray-200 rounded-md relative">
          <input
            type="text"
            placeholder="search contacts"
            className="w-full px-4 py-2 bg-transparent placeholder:text-gray-600 outline-none rounded-md"
          />
          <div ref={menuRef} className={`${userType !== "both" && "hid den"}`}>
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
                onClick={() => {
                  setTab((prev) => ({ ...prev, searchType: "all users" }));
                }}
                className={`${
                  searchType === "all users" && "bg-gray-300"
                } px-4 py-2 rounded-md hover:bg-gray-200 transition-all`}
              >
                All Users
              </button>
              <hr />
              <button
                onClick={() => {
                  setTab((prev) => ({ ...prev, searchType: "orders" }));
                }}
                className={`${
                  searchType === "orders" && "bg-gray-300"
                } px-4 py-2 rounded-md hover:bg-gray-200 transition-all`}
              >
                Based on my orders
              </button>
            </div>
          </div>
        </div>
        {/* results list */}
        <div className="flex-1">
          {/* header  */}
          <div
            className={`${
              searchType === "all users" && "hidden"
            } my-1 flex items-center gap-x-2`}
          >
            <button
              onClick={() => setOrderType("purchases")}
              className={`${
                byOrderType === "purchases" && "!border-b-gray-950"
              } px-4 py-2 w-1/2 text-center border-b border-b-gray-300 transition-all hover:text-gray-700`}
            >
              Seller's
            </button>
            <button
              onClick={() => setOrderType("sells")}
              className={`${
                byOrderType === "sells" && "!border-b-gray-950"
              } px-4 py-2 w-1/2 text-center border-b border-b-gray-300 transition-all hover:text-gray-700`}
            >
              {userType === "customer" ? "Based on My orders" : "My Customer's"}
            </button>
          </div>
          {/* contacts list */}
          <div className="overflow-auto h-[27rem] xl:h-[35rem] styled-scroll-bar py-0.5">
            <div className="inline-flex flex-col w-full gap-y-4">
              {userList.length &&
                userList.map(({ personalInformation, userType }, i) => (
                  <div
                    key={i}
                    className="w-full h-28 flex items-center px-4 py-2 gap-x-4 cursor-pointer hover:bg-gray-200 transition-all rounded-xl"
                  >
                    {personalInformation.profilePic ? (
                      <img
                        src={personalInformation.profilePic}
                        className="size-20 bg-gray-100 rounded-full"
                      />
                    ) : (
                      <div className="size-16 lg:size-20 flex items-center justify-center group bg-gray-200 text-gray-500 rounded-full">
                        <AiOutlineUser className="text-6xl lg:text-7xl mt-3 group-hover:mt-2 transition-all rounded-full" />
                      </div>
                    )}
                    <div className="">
                      <h4 className="line-clamp-1 text-lg font-bold w-11/12">
                        {personalInformation.first_name +
                          " " +
                          personalInformation.last_name}
                      </h4>
                      <p className="text-sm line-clamp-2">
                        {/* business name or last purchase */}
                        {userType}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* bg (close modal) */}
      <div
        onClick={() => onCloseModal()}
        className="absolute inset-0 bg-gray-950/50 backdrop-blur-sm"
      ></div>
    </div>
  );
}

export default ContactsModal;
