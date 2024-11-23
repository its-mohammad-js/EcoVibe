import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { deliveryInfo, paginateElements, timestampToDate } from "constants";
import useOutSideClick from "hooks/UseOutsideClick";
import toast from "react-hot-toast";

function OrdersTable({ filteredOrders, onOrderDetail, onStatusChange }) {
  // paginated orders list
  const paginatedOrders = paginateElements(filteredOrders, 8);
  // orders page index
  const [pageIndex, setPage] = useState(0);

  // on no order fined case
  if (!filteredOrders.length)
    return (
      <div className="h-screen flex items-center flex-col text-primary-900 font-medium gap-4 justify-center text-4xl">
        <h4>There is no order with these details :)</h4>
      </div>
    );

  // orders table
  if (filteredOrders.length)
    return (
      <>
        {/* main table */}
        <div className="relative">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm lg:text-base text-gray-50 uppercase bg-primary-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders[pageIndex].items.map((item, index) => (
                <tr
                  className="bg-gray-100 border-b text-sm lg:text-base"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <button
                      onClick={() =>
                        onOrderDetail({
                          selectedOrder: item,
                          detailShow: true,
                        })
                      }
                      className="line-clamp-1 w-28 xl:w-auto lg:max-w-full hover:underline font-semibold"
                    >
                      {item.orderId}
                    </button>
                  </th>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {item.paymentInfo.full_Name}
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {timestampToDate(item.createdAt)}
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    $
                    {item.orders.items.reduce(
                      (acc, num) => acc + Number(num.Price),
                      0
                    )}
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {item.orders.items.reduce(
                      (acc, num) => acc + Number(num.quantity),
                      0
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {/* status & change status menu */}
                    <ChangeStatusMenu
                      item={item}
                      index={index}
                      onStatusChange={onStatusChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* pagination numbers */}
        <div
          className={`${
            filteredOrders.length < 8 && "hidden"
          } flex items-center justify-center lg:justify-end my-2`}
        >
          <button
            disabled={pageIndex === 0}
            onClick={() => setPage(pageIndex - 1)}
            className="p-3 bg-gray-50 border border-gray-300 disabled:bg-gray-200"
          >
            <FaChevronLeft />
          </button>
          {paginatedOrders.map(
            (num, index) =>
              index > pageIndex - 3 &&
              index <= pageIndex + 1 && (
                <button
                  onClick={() => setPage(index)}
                  key={index}
                  className={`${
                    pageIndex === index &&
                    "!bg-primary-400 text-gray-50 border-primary-400"
                  } px-4 py-2 bg-gray-50 border border-gray-300`}
                >
                  {index + 1}
                </button>
              )
          )}
          <button
            disabled={pageIndex === paginatedOrders.length - 1}
            onClick={() => setPage(pageIndex + 1)}
            className="p-3 bg-gray-50 border  border-gray-300 disabled:bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </>
    );
}

export default OrdersTable;

const ChangeStatusMenu = ({ item, index, onStatusChange }) => {
  //
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
};
