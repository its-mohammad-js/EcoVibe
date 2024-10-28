import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRoomsData } from "../../RoomsContext";

function Contact({ user, searchType, orders, onCloseModal }) {
  // last order of this contact
  const [lastOrder, setLastOrder] = useState(null);
  // necessary data & hooks
  const { userType } = useSelector((state) => state.userData);
  const { personalInformation, businessInformation, userId } = user || {};
  const navigate = useNavigate();
  const { createNewChatRoom } = useRoomsData();

  useEffect(() => {
    if (searchType === "orders") {
      // all orders from this contact
      const contactOrders = orders?.filter(({ customerId, sellers }) =>
        userType !== "customer"
          ? // last order of current user from contact
            customerId === userId
          : // last order of contact from current seller
            sellers.includes(userId)
      );
      // last order of this contact
      const lastOrder = contactOrders.reduce((acc, curr) => {
        return curr.createdAt.seconds > acc.createdAt.seconds ? curr : acc;
      }, contactOrders[0]);
      // set last order
      setLastOrder(lastOrder);
    }
  }, [searchType, orders, user]);

  return (
    <div
      onClick={() => {
        createNewChatRoom(user);
        onCloseModal();
      }}
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
      <div className="flex flex-col gap-y-1.5">
        <h4 className="line-clamp-1 w-40 text-lg font-bold break-words">
          {personalInformation.first_name + " " + personalInformation.last_name}
        </h4>
        <p className="text-sm line-clamp-2 font-semibold">
          {/* business name or last purchase */}
          {searchType === "orders" ? (
            <div
              onClick={() =>
                navigate(
                  userType === "customer"
                    ? `/EcoVibe/bag/orders/${lastOrder.orderId.replace(
                        "#",
                        ""
                      )}/${userId}`
                    : `/EcoVibe/Dashboard/orders/${lastOrder.orderId.replace(
                        "#",
                        ""
                      )}`
                )
              }
              className="hover:opacity-80 transition-all"
            >
              last order:
              <p className="line-clamp-1 w-40 break-words">
                {lastOrder?.orderId}
              </p>
            </div>
          ) : (
            <>
              {businessInformation?.business_name ||
                businessInformation?.career_title ||
                "seller"}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Contact;
