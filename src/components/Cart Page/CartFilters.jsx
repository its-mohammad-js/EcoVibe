import React from "react";
import { BiSort } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

function CartFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="p-2.5 gap-x-2 rounded-md md:flex-1 flex items-center bg-gray-50 border border-gray-300">
        <FaSearch className="text-gray-500 text-lg" />
        <input
          type="text"
          className="bg-transparent h-full flex-1 outline-none"
          placeholder="Search In Your Cart"
        />
      </div>
      <button className="px-4 py-2 rounded-md bg-gray-50 border border-gray-300 flex items-center justify-center gap-x-0.5">
        <BiSort />
        <span>Sort By</span>
      </button>
    </div>
  );
}

export default CartFilters;
