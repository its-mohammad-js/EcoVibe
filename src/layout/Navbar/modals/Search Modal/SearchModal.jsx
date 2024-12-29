import { useEffect, useState } from "react";
import { supportedCategories } from "appData";
import { BiSearch } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import useTouchScroll from "hooks/useTouchScroll";
import { useLocation, useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import ProductsList from "./ProductsList";
import SellersList from "./SellersList";

// all supported collections
const allCollections = supportedCategories.flatMap(({ collections }) =>
  collections.map(({ title }) => title)
);

function SearchModal({ modalIsShow, onCloseModal }) {
  const [searchQuery, setSearchQuery] = useState("");
  // necessary hooks
  const location = useLocation();
  const navigate = useNavigate();
  // touch (Horizontal) scroll for wrappers
  useTouchScroll(".collction-wrapper");
  useTouchScroll(".categories-wrapper");
  useTouchScroll(".sellers-wrapper");

  // hidden body scroll bar on modal open
  useEffect(() => {
    document.body.style.overflow = modalIsShow ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalIsShow]);

  return (
    <>
      {/* search container */}
      <div
        id="container"
        className={`${
          modalIsShow
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 translate-y-96"
        } absolute top-0 w-full h-screen z-50 lg:h-[90vh] transition-all duration-300 lg:!translate-y-0`}
      >
        {/* modal wrapper */}
        <div className="size-full bg-gray-50 rounded-md pt-2 px-2 lg:py-1 shadow-2xl z-50">
          {/* search input */}
          <div className="flex items-center border border-gray-300 rounded-xl h-12">
            <button
              onClick={onCloseModal}
              className="text-2xl rounded-l-xl lg:rounded-r-md h-full flex items-center pl-2 lg:hidden"
            >
              <CgClose />
            </button>
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent lg:bg-gray-100 px-4 w-full rounded-l-md py-2.5 lg:border border-gray-300 h-full focus:outline-none xl:w-full"
              placeholder="Im Shopping For..."
            />
            <button
              onClick={() =>
                navigate(`/EcoVibe/Explore-Products/searchQuery=${searchQuery}`)
              }
              className="lg:bg-primary-500 lg:text-white text-2xl rounded-l-xl lg:rounded-l-none lg:rounded-r-md h-full flex items-center px-2 lg:px-4"
            >
              <BiSearch />
            </button>
          </div>
          {/* suggest badges */}
          <div className="py-2 overflow-auto hidden-scroll-bar categories-wrapper">
            <h6 className="font-bold mb-1 sticky top-0 left-0">
              ✨All Categories:
            </h6>
            <div className="flex items-center gap-x-2">
              {supportedCategories.map(({ title }, index) => (
                <button
                  onClick={() => {
                    onCloseModal();
                    navigate(
                      `/EcoVibe/Explore-Products/category=${title.toLowerCase()}`
                    );
                  }}
                  key={index}
                  className="flex gap-x-2 hover:bg-gray-950 select-none hover:border-gray-950 hover:text-gray-50 transition-all text-nowrap items-center px-2 py-1 border border-gray-500 rounded-2xl"
                >
                  {title}
                  <FaChevronRight />
                </button>
              ))}
            </div>
          </div>
          {/* search results */}
          <div className="h-[65%] lg:h-[68%]">
            {/* seller account list */}
            <SellersList searchQuery={searchQuery} />
            {/* products list */}
            <div className="w-full h-[72%] my-2 overflow-auto styled-scroll-bar scroll-smooth">
              <ProductsList
                searchQuery={searchQuery}
                getProducts={modalIsShow}
              />
            </div>
          </div>
          {/* trend tags */}
          <div className="overflow-auto hidden-scroll-bar collction-wrapper">
            <h6 className="font-bold mb-1 sticky top-0 left-0">
              🔥Trend Collections:
            </h6>
            <div className="flex items-center gap-x-2">
              {allCollections.map((title, index) => (
                <button
                  onClick={() => {
                    onCloseModal();
                    navigate(
                      `/EcoVibe/Explore-Products/collections=${title.toLowerCase()}`
                    );
                  }}
                  key={index}
                  className="flex gap-x-2 text-nowrap hover:bg-gray-950 select-none hover:border-gray-950 hover:text-gray-50 transition-all items-center px-2 py-1 border border-gray-500 rounded-2xl"
                >
                  {title}
                  <FaChevronRight />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* modal bg */}
      <div
        onClick={() => onCloseModal()}
        className={`${
          modalIsShow ? "opacity-100 visible" : "opacity-0 invisible"
        } ${
          location.pathname === "/EcoVibe/" ? "top-[7.5rem]" : "top-20"
        } hidden lg:block transition-all duration-300 fixed inset-0 bg-gray-900/80 z-40`}
      ></div>
    </>
  );
}

export default SearchModal;
