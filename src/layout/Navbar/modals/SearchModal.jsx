import { useEffect, useState } from "react";
import { supportedCategories, isInArray } from "constants";
import { filterProducts } from "src/common/utils/filterPorducts";
import { BiSearch } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import useTouchScroll from "hooks/useTouchScroll";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "/src/config/firebase";
import { getFilteredProducts } from "/src/reducers/products/productsSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import NavbarSearchProductLoader from "UI/Loaders/NavbarSearchProductLoader";

// fetch isn't allowed on this routes
const notAllowRequestRoutes = ["/EcoVibe/", "/EcoVibe/Shop"];
// all supported collections
const allCollections = supportedCategories.flatMap(({ collections }) =>
  collections.map(({ title }) => title)
);

function SearchModal({ modalIsShow, onCloseModal }) {
  //  sellers data
  const [{ sellers }, setSellers] = useState({
    sellers: [],
    loading: false,
    error: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  // necessary hooks
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  // touch (Horizontal) scroll for wrappers
  useTouchScroll(".collction-wrapper");
  useTouchScroll(".categories-wrapper");
  useTouchScroll(".sellers-wrapper");

  const fetchData = async () => {
    try {
      // set loading true
      setSellers((prev) => ({ ...prev, loading: true }));
      // ref to seller users data
      const sellersQuery = query(
        collection(db, "users"),
        where("userType", "in", ["both", "seller"])
      );
      // fetch all sellers data
      const sellersData = await getDocs(sellersQuery).then(({ docs }) =>
        docs.map((doc) => doc.data())
      );
      // dispatch success
      setSellers({ loading: false, sellers: sellersData, error: null });
      // fetch products data in need case
      if (!isInArray(notAllowRequestRoutes, location.pathname)) {
        await dispatch(getFilteredProducts());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSellers((prev) => ({ ...prev, loading: false }));
    }
  };

  // search sellers by (email,business name,id)
  function matchedSellers() {
    if (sellers.length) {
      return [...sellers].filter(
        ({ userId, personalInformation, businessInformation }) =>
          userId === searchQuery ||
          businessInformation?.business_name?.includes(searchQuery) ||
          personalInformation?.email?.includes(searchQuery)
      );
    } else return [];
  }

  // fetch data on modal open
  useEffect(() => {
    if (modalIsShow) fetchData();
  }, [modalIsShow]);

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
            <div
              className={`${
                !matchedSellers()?.length && "hidden"
              } overflow-auto w-full sellers-wrapper hidden-scroll-bar`}
            >
              <h6 className="font-bold mb-1 sticky top-0 left-0">Shops:</h6>
              <div className="inline-flex items-center gap-x-2.5">
                {matchedSellers().map(
                  (
                    { personalInformation, businessInformation, userId },
                    index
                  ) => (
                    <div
                      key={index}
                      className="bg-gray-950/10 px-2 py-1 w-48 select-none rounded-md flex items-center gap-x-1 h-20"
                    >
                      {/* seller profile pic */}
                      <img
                        draggable={false}
                        src={personalInformation.profilePic}
                        alt="profile-pic"
                        className="size-16 min-w-16 rounded-full bg-gray-200"
                      />
                      {/* seller info */}
                      <div className="h-full w-2/3 flex flex-col justify-evenly">
                        <h6
                          onClick={() => navigate(`/EcoVibe/seller/${userId}`)}
                          className="line-clamp-1 w-11/12 font-bold hover:text-primary-500"
                        >
                          {businessInformation?.business_name ||
                            personalInformation?.first_name}
                        </h6>
                        <p className="text-sm line-clamp-1 w-11/12">
                          {personalInformation?.email ||
                            personalInformation?.last_name}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* products list */}
            <div className="w-full h-[72%] my-2 overflow-auto styled-scroll-bar scroll-smooth">
              <ProductsList searchQuery={searchQuery} />
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

const ProductsList = ({ searchQuery }) => {
  const navigate = useNavigate();
  // necessary data & hooks
  const { data: products, loading } = useSelector((state) => state.products);

  if (loading) return <NavbarSearchProductLoader />;

  if (!loading && !filterProducts(products, { searchQuery })?.length > 0)
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-xl font-bold text-center text-primary-900">
          There Is No Product Inclding
          <p className="line-clamp-1 w-64 text-primary-500">{searchQuery}</p> In
          Their Name
        </p>
      </div>
    );

  if (!loading && products?.length)
    return (
      <div className="flex flex-col gap-y-4 px-2 py-1">
        {filterProducts(products, { searchQuery }).map((item, index) => (
          <div
            key={index}
            className="w-full h-32 bg-gray-200 rounded-md px-3 py-1.5 flex items-center gap-x-2"
          >
            {/* product thumbnail */}
            <img
              src={item.Thumbnail}
              alt="item-thumbnail"
              className="w-1/2 sm:w-1/4 h-full object-cover bg-gray-100 rounded-xl"
            />
            {/* product info */}
            <div className="w-1/2 sm:w-3/4 h-full flex flex-col justify-between px-2 py-2 relative">
              <h4
                onClick={() => navigate(`/EcoVibe/Products/${item.id}`)}
                className="text-lg line-clamp-2 font-bold cursor-pointer hover:text-primary-700"
              >
                {item.Name}
              </h4>
              <p
                onClick={() =>
                  navigate(
                    `/EcoVibe/Explore-Products/category=${item.Category.toLowerCase()}`
                  )
                }
                className="font-semibold text-gray-800 cursor-pointer"
              >
                {item.Category}
              </p>
              <p>${item.Price}</p>
              {item?.Tags?.length > 0 && (
                <button
                  key={index}
                  onClick={() =>
                    navigate(
                      `/EcoVibe/Explore-Products/tags=${item.Tags[0].toLowerCase()}`
                    )
                  }
                  className="px-2 py-1 hidden lg:block absolute right-0 text-sm border border-gray-400 rounded-xl text-gray-800"
                >
                  #{item.Tags[0]}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
};
