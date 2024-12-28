import { useRef } from "react";
import { MdFilterList } from "react-icons/md";
import { useSelector } from "react-redux";
import useOutSideClick from "../../../../../../common/hooks/UseOutsideClick";

function FilterMenu({ searchQuery, setQuery, menuIsShow, setTab, searchType }) {
  // filter menu ref & hook
  const menuRef = useRef();
  useOutSideClick(menuRef, () =>
    setTab((prev) => ({ ...prev, menuIsShow: false }))
  );

  const { userType } = useSelector((state) => state.userData);

  return (
    <div className="flex bg-gray-200 rounded-md relative">
      <input
        type="text"
        value={searchQuery}
        onChange={({ target }) => setQuery(target.value.toLocaleLowerCase())}
        placeholder="search contacts"
        className="w-full px-4 py-2 bg-transparent placeholder:text-gray-600 outline-none rounded-md"
      />
      <div ref={menuRef}>
        <button
          onClick={() => setTab((prev) => ({ ...prev, menuIsShow: true }))}
          className="px-2 h-full text-2xl hover:text-gray-500 transition-all"
        >
          <MdFilterList />
        </button>

        <div
          className={`${
            menuIsShow
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-10 opacity-0 invisible"
          } absolute top-14 transition-all right-0 w-48 h-24 bg-gray-100 justify-evenly px-2 py-1 rounded-md flex flex-col`}
        >
          <div className="tooltip absolute -top-1 right-8 bg-gray-200"></div>
          <button
            onClick={() => setTab({ menuIsShow: false, searchType: "all" })}
            className={`${
              searchType === "all" && "bg-gray-300"
            } px-4 py-2 rounded-md hover:bg-gray-200 transition-all`}
          >
            All Sellers
          </button>
          <hr />
          <button
            onClick={() => setTab({ menuIsShow: false, searchType: "orders" })}
            className={`${
              searchType === "orders" && "bg-gray-300"
            } px-4 py-2 rounded-md hover:bg-gray-200 transition-all`}
          >
            {userType === "customer" ? "From my purchases" : "My Customers"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
