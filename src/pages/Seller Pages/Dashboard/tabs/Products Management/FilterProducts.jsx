import Select from "react-select/base";
import { supportedCategories } from "appData";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const categoryOptions = supportedCategories.map(({ title }) => ({
  label: title,
  value: title,
}));

function FilterProducts({ setItems, products }) {
  // selected filters state
  const [{ searchQuery, selectedCategory }, setFilters] = useState({
    searchQuery: "",
    selectedCategory: "",
  });

  // search items by name & sort them by cateogry
  function searchSortItems() {
    // loop on all products
    const filteredProducts = products.filter(({ Name, Category }) => {
      if (selectedCategory === "")
        return Name.toLowerCase().includes(searchQuery.toLowerCase());
      else
        return (
          Name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          Category === selectedCategory
        );
    });
    // display filtered items
    setItems(filteredProducts);
  }

  return (
    <div className="w-full px-2 xl:px-4 py-1">
      <div className="flex items-center justify-center bg-white rounded-md border border-gray-300 lg:h-14">
        {/* main input */}
        <input
          type="text"
          className="outline-none px-2 w-[50%] lg:w-full bg-transparent lg:text-lg "
          placeholder="search"
          value={searchQuery}
          onChange={(e) => {
            setFilters((prev) => ({
              ...prev,
              searchQuery: e.target.value,
            }));
          }}
        />
        {/* sort options */}
        <Select
          placeholder="Sort By"
          className="text-sm lg:text-base [&>div]:lg:py-2 [&>div]:border-none border-l border-gray-300 [&>div]:rounded-none max-w-[40%] lg:w-2/12"
          options={[{ label: "All", value: "" }, ...categoryOptions]}
          onChange={({ value }) =>
            setFilters((prev) => ({ ...prev, selectedCategory: value }))
          }
        />
        {/* action button */}
        <button
          onClick={searchSortItems}
          className="px-4 py-3 rounded-r-md bg-primary-500 text-gray-50 lg:py-4 lg:text-2xl"
        >
          <BiSearch />
        </button>
      </div>
    </div>
  );
}

export default FilterProducts;
