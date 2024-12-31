import SellerInfo from "./SellerInfo";
import CustomerInfo from "./CustomerInfo";
import { useEffect, useState } from "react";
import { useRoomsData } from "../../RoomsContext";
import { AiOutlineLeft } from "react-icons/ai";

function UserInfo({ modalShow, onCloseModal }) {
  const [infoTab, setInfo] = useState(null);
  const {
    selectedRoom: { reciver },
  } = useRoomsData();

  useEffect(() => {
    setInfo(reciver?.userType === "customer" ? "customer" : "seller");
  }, [reciver?.userType]);

  console.log(reciver?.userType);

  if (infoTab)
    return (
      <>
        {/* user info container */}
        <div
          className={`${
            !modalShow
              ? "invisible opacity-0 translate-x-28"
              : "visible opacity-100 translate-x-0"
          } w-full lg:w-96 fixed top-0 right-0 ease-in-out h-screen bg-gray-100 z-50 transition-all px-2.5 lg:px-4 py-2`}
        >
          <button
            onClick={() => onCloseModal()}
            className="absolute left-2 text-3xl lg:hidden z-50"
          >
            <AiOutlineLeft />
          </button>
          <div
            className={`${
              reciver.userType === "both" ? "block" : "hidden"
            } w-full flex py-2 items-center justify-between`}
          >
            <button
              onClick={() => setInfo("seller")}
              className={`${
                infoTab === "seller" && "text-gray-950"
              } px-4 hover:text-gray-700 rounded-md w-1/2`}
            >
              Seller Info
            </button>
            <button
              onClick={() => setInfo("customer")}
              className={`${
                infoTab === "customer" && "text-gray-950"
              } px-4 text-gray-500 lg:hover:text-gray-700 rounded-md w-1/2`}
            >
              Customer Info
            </button>
          </div>
          {/* user information */}
          {infoTab === "customer" ? <CustomerInfo /> : <SellerInfo />}
        </div>

        {/* modal bg */}
        <div
          onClick={() => onCloseModal()}
          className={`${
            !modalShow ? "invisible opacity-0" : "visible opacity-100"
          } fixed inset-0 bg-gray-950/60 backdrop-blur-sm z-40 transition-all`}
        ></div>
      </>
    );
}

export default UserInfo;
