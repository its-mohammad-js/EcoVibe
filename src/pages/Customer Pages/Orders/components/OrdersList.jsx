import { useEffect, useState } from "react";
import { deliveryInfo, paginateElements, timestampToDate } from "constants";
import { FaChevronLeft } from "react-icons/fa";

function OrdersList({ ordersData, onOrderDetail }) {
  const [{ paginetedItems, pageNum }, setItems] = useState({
    paginetedItems: [],
    pageNum: 0,
  });

  // paginate items
  useEffect(() => {
    setItems((prev) => ({
      ...prev,
      paginetedItems: paginateElements(ordersData, 8),
    }));
  }, [ordersData]);
  // scroll up on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNum]);

  if (!ordersData?.length)
    return (
      <div className="h-screen flex items-center justify-center text-3xl text-primary-400">
        <h6>There is No Ordered item With This Name</h6>
      </div>
    );

  if (paginetedItems.length)
    return (
      <div>
        {/* ordered items table */}
        <div className=" overflow-x-auto">
          <table className="w-full text-sm xl:text-lg text-left text-gray-700">
            <thead className="text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  Seller
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              {paginetedItems[pageNum].items.map((item, index) => (
                <tr
                  onClick={() =>
                    onOrderDetail("open", item.orderId, item.SellerId)
                  }
                  key={index}
                  className="bg-white border-b hover:bg-gray-50 transition-all xl:text-lg cursor-pointer"
                >
                  {/* product name & thumbnail */}
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center justify-evenly sm:justify-start gap-2"
                  >
                    <div className="size-14 bg-gray-300 rounded-full">
                      <img
                        src={item.Thumbnail}
                        alt="product-thumbnail"
                        className="size-full rounded-full object-cover"
                      />
                    </div>
                    <p className="flex flex-col gap-1">
                      <span className="hover:underline line-clamp-1 max-w-24 lg:max-w-56 cursor-pointer">
                        {item.Name}
                      </span>
                      <span className="text-xs line-clamp-1 w-28 xl:text-base">
                        {item.Category}
                      </span>
                    </p>
                  </th>
                  {/* seller info */}
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="size-11 bg-gray-100 rounded-full">
                        <img
                          src={item.SellerProfile}
                          alt="seller-avatar"
                          className="size-full rounded-full object-cover"
                        />
                      </div>
                      <p className="flex flex-col gap-1">
                        <span>{item.SellerName}</span>
                        <span>{item.SellerEmail}</span>
                      </p>
                    </div>
                  </td>
                  {/* order date */}
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {timestampToDate(item.date)}
                  </td>
                  {/* order quantity */}
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {item.quantity}
                  </td>
                  {/* item price */}
                  <td className="px-6 py-4">${item.Price}</td>
                  {/* order delivery status */}
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="flex items-center justify-start gap-2">
                      <p
                        style={{
                          background:
                            deliveryInfo?.[item.delivery_status].color,
                        }}
                        className="p-2 rounded-full"
                      ></p>
                      <p
                        style={{
                          color: deliveryInfo?.[item.delivery_status].color,
                        }}
                      >
                        {deliveryInfo?.[item.delivery_status].label}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* change page btn's */}
        <div className="flex items-center px-2 py-1 lg:px-4 lg:py-2 justify-center lg:justify-end gap-2 my-1">
          {/* prev page btn */}
          <button
            onClick={() =>
              setItems((prev) => ({ ...prev, pageNum: pageNum - 1 }))
            }
            disabled={pageNum === 0}
            className="p-3 -z-10 bg-gray-200 border border-gray-400 disabled:bg-gray-200 disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          {paginetedItems.map(
            (num, index) =>
              index > pageNum - 3 &&
              index <= pageNum + 1 && (
                <button
                  onClick={() =>
                    setItems((prev) => ({ ...prev, pageNum: index }))
                  }
                  disabled={index === pageNum}
                  key={index}
                  className="px-4 py-2 bg-gray-200 border border-gray-400 disabled:bg-gray-400 disabled:text-gray-50 transition-all"
                >
                  {index + 1}
                </button>
              )
          )}
          {/* next page btn */}
          <button
            onClick={() =>
              setItems((prev) => ({ ...prev, pageNum: pageNum + 1 }))
            }
            disabled={pageNum === paginetedItems.length - 1}
            className="p-3 -z-10 bg-gray-200 border border-gray-400 disabled:bg-gray-200 disabled:opacity-50"
          >
            <FaChevronLeft className="rotate-180" />
          </button>
        </div>
      </div>
    );
}

export default OrdersList;
