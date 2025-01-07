import { useEffect, useRef, useState } from "react";
import useOutSideClick from "hooks/UseOutsideClick";
import toast from "react-hot-toast";
import { deliveryInfo } from "appData";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

function ChangeStatusMenu({ item, index, onStatusChange }) {
  const [{ selectedStatus, selectedItem }, setTry] = useState({
    selectedStatus: null,
    selectedItem: null,
  });
  // quick change order status menu
  const [menuIsShow, setMenu] = useState(null);
  // status menu ref
  const menuRef = useRef();
  // close change delivery status menu on outside click
  useOutSideClick(menuRef, () => setMenu(null));

  // reset try state on menu closing
  useEffect(() => {
    if (!menuIsShow) {
      setTry({
        selectedStatus: null,
        selectedItem: null,
      });
    }
  }, [menuIsShow]);

  // handle change status on two try
  function onTryChange(status) {
    if (selectedStatus !== status) {
      setTry({
        isFirstTry: false,
        selectedStatus: status,
        selectedItem: item.orderId,
      });
    } else {
      // change delivery status
      onStatusChange(item, status);
      // dispatch change req
      toast("Your request has been sent");
      // close menu
      setMenu(null);
      // reset try state
      setTry({
        selectedStatus: null,
        selectedItem: null,
      });
    }
  }

  return (
    <div
      ref={menuRef}
      className="flex items-center w-full justify-between gap-x-1 relative"
    >
      {/* status title */}
      <span
        style={{
          background: deliveryInfo[item.orders.delivery_status].color,
        }}
        className="p-1.5 rounded-full"
      ></span>
      <p
        style={{
          color: deliveryInfo[item.orders.delivery_status].color,
        }}
      >
        {deliveryInfo[item.orders.delivery_status].label}
      </p>
      {/* change menu btn */}
      <button
        className={`${item.orders.delivery_status >= 400 && "invisible"}`}
        onClick={() => setMenu((prev) => (prev === index ? null : index))}
      >
        <BsThreeDotsVertical className="lg:text-xl" />
      </button>

      <ul
        className={`${
          menuIsShow === index
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-4"
        } absolute top-6 z-10 lg:top-8 right-0 w-44 transition-all border border-gray-300 rounded-md`}
      >
        {deliveryInfo
          .getOptions(item.orders.delivery_status)
          .map(({ label, value }, index) => (
            <li
              onClick={() => onTryChange(value)}
              key={index}
              className={`${
                selectedStatus === value && selectedItem === item.orderId
                  ? "[&>span]:hidden !bg-primary-500 !text-gray-50"
                  : "[&>p]:hidden"
              } px-4 py-2 bg-gray-50 text-start cursor-pointer hover:text-gray-950 transition-all rounded-md border-b border-gray-300 hover:bg-gray-100`}
            >
              <span>{label}</span>
              <p className="flex items-center justify-between">
                <p className="">Click To Submit</p>
                <FaCheck />
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ChangeStatusMenu;
