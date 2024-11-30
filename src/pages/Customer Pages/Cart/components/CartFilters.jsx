import { FaSearch } from "react-icons/fa";
import Select from "react-select";

// sort options info
const sortOptions = [
  { label: "High to Low Price", value: "high_price" },
  { label: "Low to High Price", value: "low_price" },
  { label: "Oldest to Newest", value: "oldest" },
  { label: "Newest to Oldest", value: "newest" },
];

function CartFilters({ onFiltersChange }) {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      {/* search input */}
      <div className="p-2 gap-x-2 rounded-md md:flex-1 flex items-center bg-gray-50 border border-gray-300">
        <FaSearch className="text-gray-500 text-lg" />
        <input
          onChange={(e) => onFiltersChange("searchQuery", e.target.value)}
          type="text"
          className="bg-transparent h-full flex-1 outline-none"
          placeholder="Search In Your Cart"
        />
      </div>
      {/* sort section */}
      <Select
        placeholder={"Sort Orders By"}
        isSearchable={false}
        options={sortOptions}
        onChange={({ value }) => {
          onFiltersChange("sortValue", value);
        }}
      />
    </div>
  );
}

export default CartFilters;
