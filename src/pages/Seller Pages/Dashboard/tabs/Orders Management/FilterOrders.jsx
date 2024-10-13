import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import { deliveryInfo, timestampToDate } from "constants";
import { filter } from "lodash";

const statusOptions = [
  { label: "All Orders", value: "" },
  ...deliveryInfo.getOptions(0),
];

function FilterOrders({ allOrders, onFilterChange }) {
  // filters data
  const [{ search, status, from, to }, setFilters] = useState({
    search: "",
    status: "",
    from: null,
    to: null,
  });
  // display all orders at component mount
  useEffect(() => {
    onFilterChange(allOrders);
  }, [allOrders]);

  // filter orders by searchQuery & sortKey & date (with another function)
  function sortOrders() {
    // store filterd / sorted orders
    let sortedOrders = [...allOrders];
    // effect filters on orders
    Object.entries({ search, status }).forEach(([key, value]) => {
      switch (key) {
        case "search":
          sortedOrders = sortedOrders.filter(
            ({ orderId, paymentInfo }) =>
              orderId.toLowerCase().includes(value) ||
              paymentInfo.full_Name.toLowerCase().includes(value)
          );
          break;
        case "status":
          if (value !== "")
            sortedOrders = sortedOrders.filter(
              ({ orders }) => orders.delivery_status === value
            );
          break;
        default:
          break;
      }
    });
    // update main state on with filtered / sorted orders
    onFilterChange(filterOrdersByDate(sortedOrders, from, to));
  }
  // update main state on each filters change
  useEffect(() => {
    sortOrders();
  }, [status, search, from, to]);

  // change filters date
  function changeDateFilter(e, action) {
    const selectedDate = new Date(e.target.value);

    const tranformedDate = {
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth(),
    };

    setFilters((prev) => ({ ...prev, [action]: tranformedDate }));
  }
  // filter orders by date
  function filterOrdersByDate(orders, fromDate, toDate) {
    if (!fromDate || !toDate) return orders;
    // read from & to years and months
    const fromYear = fromDate.year;
    const fromMonth = fromDate.month;
    const toYear = toDate.year;
    const toMonth = toDate.month;
    // filter order base from date to date
    return filter(orders, (order) => {
      const dateOrder = timestampToDate(order?.createdAt, {
        year: "numeric",
        month: "2-digit",
      }).split("/");
      const orderYear = Number(dateOrder[1]);
      const orderMonth = Number(dateOrder[0] - 1);

      return (
        orderYear >= fromYear &&
        (orderYear > fromYear || orderMonth >= fromMonth) &&
        orderYear <= toYear &&
        (orderYear < toYear || orderMonth <= toMonth)
      );
    });
  }

  return (
    <div className="my-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-2 gap-y-2">
      {/* search bar */}
      <div className="flex items-center px-4 py-2 gap-x-2 rounded-md border border-gray-300 xl:w-[55%]">
        <p className="text-gray-500 text-sm">
          <FaSearch />
        </p>
        <input
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, search: e.target.value }))
          }
          type="text"
          placeholder="Search orders by id or customer"
          className="bg-transparent outline-none flex-1"
        />
      </div>
      <div className="flex flex-col xl:w-[45%] xl:flex-row xl:items-center justify-between gap-2">
        <Select
          placeholder="All Orders"
          className="lg:[&>div]:py-0.5"
          options={statusOptions}
          onChange={({ value }) =>
            setFilters((prev) => ({ ...prev, status: value }))
          }
        />
        <div className="w-full xl:w-fit gap-x-4 flex items-center justify-between">
          <label htmlFor="FromDate" className="font-bold">
            From:
          </label>
          <input
            onChange={(e) => changeDateFilter(e, "from")}
            type="month"
            id="FromDate"
            className="outline-none border border-gray-300 px-2 rounded-md py-2"
          />
        </div>
        <div className="w-full xl:w-fit gap-x-4 flex items-center justify-between">
          <label htmlFor="ToDate" className="font-bold">
            To:
          </label>
          <input
            onChange={(e) => changeDateFilter(e, "to")}
            type="month"
            id="ToDate"
            className="outline-none border border-gray-300 px-2 rounded-md py-2"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterOrders;
