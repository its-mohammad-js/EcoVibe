import { FaCheck } from "react-icons/fa";
import { isInArray } from "constants";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const FilterOptionRow = ({
  isMobile,
  title,
  filterKey,
  filterOptions,
  selectedFilters,
  changeFilterHandler,
  isOption,
}) => {
  // state of menu
  const [menuOptionOpen, setMenuOptions] = useState(false);

  return (
    <div className="relative px1">
      <button
        onClick={() => setMenuOptions((prev) => !prev)}
        className="flex w-full items-center justify-between absolute top-0 bg-gray-100 px-2"
      >
        <p className="text-xl md:text-lg font-semibold">{title}</p>
        {selectedFilters[filterKey] && (
          <p className="text-gray-400 w-36 md:w-fit text-sm line-clamp-1 text-end">
            {isMobile ? (
              `Select ${filterKey}`
            ) : (
              <span>
                <BiChevronDown
                  className={`${
                    menuOptionOpen && "rotate-180"
                  } text-3xl transition-all`}
                />
              </span>
            )}
          </p>
        )}
      </button>

      <ul
        className={`${
          menuOptionOpen ? "h-40" : "h-0 [&>li]:hidden"
        } py-5 text-lg overflow-auto styled-scroll-bar transition-all duration-500 border-b-2 border-gray-200`}
      >
        {filterOptions.map((option, index) => (
          <li
            key={index}
            // if isOption is true return a object from title and selected option (for product options)
            onClick={() =>
              changeFilterHandler({
                payload: isOption
                  ? {
                      title: title.toLowerCase(),
                      selectedOption: option.title.toLowerCase(),
                    }
                  : option.title.toLowerCase(),
                type: filterKey,
              })
            }
            className="flex items-center justify-between px-2 py-1 my-4 cursor-pointer"
          >
            <span>{option.title}</span>
            {selectedFilters[filterKey] && (
              <p
                className={`${
                  isInArray(
                    selectedFilters[filterKey],
                    isOption
                      ? {
                          title: title.toLowerCase(),
                          selectedOption: option.title.toLowerCase(),
                        }
                      : option.title.toLowerCase()
                  )
                    ? "bg-primary-950 p-1.5"
                    : "p-2 bg-gray-200"
                }  text-primary-50 rounded-full text-xs transition-all`}
              >
                <FaCheck />
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterOptionRow;
