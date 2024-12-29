import { supportedSortOptions } from "./filterOptionsInfo";
import useOutSideClick from "hooks/UseOutsideClick";
import { useRef, useState } from "react";
import { BiSort } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { TbCheck } from "react-icons/tb";
import { useSelector } from "react-redux";

function SortMenu({ changeFilterHandler }) {
  const selectedFilters = useSelector((state) => state.filters); // selected filters
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // ref to menu & outside click hook
  const sortMenuRef = useRef();
  useOutSideClick(sortMenuRef, () => setMenuIsOpen(false), !menuIsOpen.sort);

  return (
    <div
      ref={sortMenuRef}
      className="row-start-2 md:row-start-1 md:col-span-1 relative"
    >
      {/* sort button */}
      <button
        onClick={() => setMenuIsOpen((prev) => ({ ...prev, sort: !prev.sort }))}
        className="bg-gray-50 md:bg-transparent w-full border-2 border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-x-2 md:font-medium"
      >
        <span>{menuIsOpen.sort ? <MdClose /> : <BiSort />}</span>
        <span className="line-clamp-1">{selectedFilters.sortBy}</span>
      </button>
      {/* sort menu */}
      <div
        className={`${
          menuIsOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-96 md:-translate-y-10 opacity-0 md:opacity-0"
        } fixed cursor-pointer md:absolute bottom-0 before:invisible md:before:visible tooltip md:top-14 md:w-64 left-0 w-full h-96 md:h-56 bg-gray-200 rounded-t-2xl md:rounded-2xl z-50 transition-all duration-500 px-4 py-6 md:py-4 gap-y-4 md:gap-0 flex flex-col justify-between`}
      >
        <h6 className="text-3xl md:text-xl font-bold">Sort By</h6>
        <ul className="h-full flex flex-col justify-center gap-y-3 md:gap-y-1.5">
          {supportedSortOptions.map((sortOpt, index) => (
            <li
              onClick={() =>
                changeFilterHandler({
                  payload: sortOpt.value,
                  type: "sortBy",
                })
              }
              key={index}
              className="px-2 py-1 md:p-0 w-full h-1/5 flex items-center justify-between text-lg md:text-base font-semibold transition-all"
            >
              <span>{sortOpt.title}</span>
              <p
                className={`${
                  selectedFilters.sortBy === sortOpt.value
                    ? "p-2 bg-primary-950"
                    : "p-3 [&>span]:hidden bg-gray-300"
                } text-primary-50  rounded-full text-xs transition-all duration-500`}
              >
                <span>
                  <TbCheck />
                </span>
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setMenuIsOpen(false)}
          className="px-4 p-2 md:hidden bg-primary-600 border-2 border-transparent hover:text-primary-950 hover:bg-gray-200 hover:border-primary-950 rounded-md transition-all text-primary-50 text-lg"
        >
          Apply Changes
        </button>
      </div>
      {/* modal background (visible only in mobile screens) */}
      <div
        onClick={() => setMenuIsOpen(false)}
        className={`${
          !menuIsOpen && "hidden"
        } fixed inset-0 z-10 bg-gray-950/65 lg:hidden`}
      ></div>
    </div>
  );
}

export default SortMenu;
