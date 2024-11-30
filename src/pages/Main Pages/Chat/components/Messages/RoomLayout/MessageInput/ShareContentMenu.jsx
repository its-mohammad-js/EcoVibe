import { FiPaperclip } from "react-icons/fi";
import { GoPin } from "react-icons/go";
import { VscListOrdered } from "react-icons/vsc";
import { BsBox } from "react-icons/bs";
import { useState } from "react";
import { useRoomsData } from "../../../RoomsContext";
import OrdersList from "../../../Modals/Share Content Types/OrdersList";
import SendLocation from "../../../Modals/Share Content Types/SendLocation";
import ShareProduct from "../../../Modals/Share Content Types/ShareProduct";

function ShareContentMenu() {
  const { messageMode } = useRoomsData(); // chat room data
  // share content modal state
  const [{ modalIsShow, type }, setContentModal] = useState({
    modalIsShow: false,
    type: null,
  });

  // close modal handler
  function onCloseModal() {
    setContentModal({ modalIsShow: false, type: null });
  }

  return (
    <>
      {/* share content btn (open menu) */}
      <button
        disabled={messageMode === "edit"}
        className="text-3xl disabled:opacity-50 text-gray-900 py-2 rounded-md peer"
      >
        <FiPaperclip />
      </button>
      {/* share content menu */}
      <div className="w-72 z-50 flex flex-col absolute bg-gray-100 -top-44 left-2 rounded-md opacity-0 invisible peer-disabled:hidden peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100 transition-all">
        <button
          onClick={() => setContentModal({ modalIsShow: true, type: "order" })}
          className="px-4 py-4 hover:bg-gray-200 transition-all rounded-md flex items-center justify-start gap-x-2"
        >
          <span>
            <VscListOrdered />
          </span>
          <p>Share Order</p>
        </button>
        <button
          onClick={() =>
            setContentModal({ modalIsShow: true, type: "location" })
          }
          className="px-4 py-4 hover:bg-gray-200 transition-all rounded-md flex items-center justify-start gap-x-2"
        >
          <span>
            <GoPin />
          </span>
          <p>Send Location</p>
        </button>
        <button
          onClick={() =>
            setContentModal({ modalIsShow: true, type: "product" })
          }
          className="px-4 py-4 hover:bg-gray-200 transition-all rounded-md flex items-center justify-start gap-x-2"
        >
          <span>
            <BsBox />
          </span>
          <p>Send Product</p>
        </button>
      </div>
      {/* share content modals */}
      <div
        className={`${
          modalIsShow ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-50 flex items-center justify-center transition-all`}
      >
        <div className="w-80 h-[70vh] max-h-[30rem] lg:size-96 p-2">
          {type === "order" ? (
            <OrdersList onCloseModal={onCloseModal} />
          ) : type === "location" ? (
            <SendLocation onCloseModal={onCloseModal} />
          ) : (
            <ShareProduct onCloseModal={onCloseModal} />
          )}
        </div>
        <div
          onClick={() => setContentModal({ modalIsShow: false, type: null })}
          className="absolute inset-0 bg-gray-950/50 -z-10"
        ></div>
      </div>
    </>
  );
}

export default ShareContentMenu;
