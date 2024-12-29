import { FaCheck } from "react-icons/fa";
import { isInArray } from "helpers";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";
import useMediaQuery from "hooks/useMediaQuery";

const FilterOptionRow = ({
  title,
  filterKey,
  filterOptions,
  changeFilterHandler,
  isOption,
}) => {
  // state of menu
  const isMobile = useMediaQuery({ maxWidth: 768 }); // detect screen size
  const [menuOptionOpen, setMenuOptions] = useState(false); // options menu state
  const selectedFilters = useSelector((state) => state.filters); // selected filters

  // on select filter option
  const onSelectOption = (option) => {
    // if isOption is true return a object from title and selected option (for product options)
    const payload = isOption
      ? {
          title: title.toLowerCase(),
          selectedOption: option.title.toLowerCase(),
        }
      : option.title.toLowerCase();

    changeFilterHandler({ payload, type: filterKey });
  };

  // check options is selected
  function checkIsSelected(option) {
    return isInArray(
      selectedFilters[filterKey],
      isOption
        ? {
            title: title.toLowerCase(),
            selectedOption: option.title.toLowerCase(),
          }
        : option.title.toLowerCase()
    );
  }

  return (
    <div className="relative px1">
      {/* option title & open menu btn */}
      <button
        onClick={() => setMenuOptions((prev) => !prev)}
        className="flex w-full items-center justify-between bg-gray-100 px-2"
      >
        {/* option title */}
        <p className="text-xl md:text-lg font-semibold">{title}</p>
        {/* subtitle */}
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
      {/* options list */}
      <ul
        className={`${
          menuOptionOpen ? "h-40 py-1.5" : "h-0 [&>li]:hidden py-1"
        } text-lg overflow-auto styled-scroll-bar flex flex-col gap-y-5 transition-all duration-500 border-b-2 border-gray-200`}
      >
        {filterOptions.map((option, index) => (
          <li
            key={index}
            onClick={() => onSelectOption(option)}
            className="flex items-center justify-between px-2 cursor-pointer"
          >
            <span>{option.title}</span>
            {selectedFilters[filterKey] && (
              <p
                className={`${
                  checkIsSelected(option)
                    ? "bg-primary-950 p-1.5"
                    : "p-2 bg-gray-200"
                }  text-gray-200 rounded-full text-xs transition-all`}
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
