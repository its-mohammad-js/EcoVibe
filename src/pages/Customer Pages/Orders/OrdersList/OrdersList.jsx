import { useEffect, useState } from "react";
import { paginateElements } from "helpers";
import { FaChevronLeft } from "react-icons/fa";
import OrdersTable from "./OrdersTable";

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
      <div className="h-screen flex items-center justify-center text-3xl text-primary-950 font-bold text-center">
        <h6>There is No Ordered item With This Name...</h6>
      </div>
    );

  if (paginetedItems.length)
    return (
      <div>
        {/* ordered items table */}
        <OrdersTable {...{ onOrderDetail, paginetedItems, pageNum }} />
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
            (n, index) =>
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
