import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../redux/products/productsSlice";
import { filterProducts } from "../../helpers/filterPorducts";
import { SlClose } from "react-icons/sl";
import { avatarsUrl, toggleElementInArray } from "../../helpers/constants";
import { updateUserData } from "../../redux/auth/regularUsers/regluarUsersSlice";
import { BiCartAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import WishListLoader from "../../components/Loaders/WishListLoader";

function WishListPage() {
  // user data
  const {
    wishlist,
    loading: listLoading,
    userName,
    personalInformation,
    uid,
  } = useSelector((state) => state.userData);
  // product list data
  const { data, error, loading } = useSelector((state) => state.products);
  // redux dispatcher
  const dispatch = useDispatch();
  // sort product list by :
  const [sortList, setSortList] = useState("High To Low");

  // remove product from wish list
  function removeProduct(productId) {
    const updatedWishList = toggleElementInArray(wishlist, productId);

    dispatch(updateUserData({ data: updatedWishList, field: "wishlist" }));
  }

  // get selected products data
  useEffect(() => {
    dispatch(getFilteredProducts({ sortBy: "" }));
  }, []);

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      <div
        id="wrapper"
        className="px-2
         py-2 flex flex-col gap-y-4"
      >
        {/* header (user profile) */}
        <div className="h-32 relative">
          {/* gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-500 to-primary-950 rounded-md -z-10"></div>
          {/* user info */}
          <div className="w-full h-full bg-primary-50/50 backdrop-blur-sm rounded-md flex items-center justify-between gap-x-2">
            {/* profile pic */}
            <div className="h-full w-1/4 md:size-28 flex items-center justify-center px-2">
              {personalInformation.profilePic ? (
                <img
                  src={personalInformation.profilePic}
                  alt="profile-pic"
                  className="rounded-full bg-gray-50/50"
                />
              ) : (
                <FaUser className="bg-gray-50/50 text-6xl p-3 rounded-full" />
              )}
            </div>
            {/* personal information */}
            <div className="h-full flex-1 flex flex-col items-start justify-center gap-y-1">
              <h4 className="text-2xl md:text-3xl font-medium">
                {uid ? userName : "Guest User"}
              </h4>
              <p className="text-primary-800">
                wish-list&nbsp;(<span>{wishlist.length}</span>)
              </p>
            </div>
          </div>
        </div>
        {/* products container */}
        {!loading ? (
          <div className="flex w-full items-center justify-between md:px-6 md:py-2 gap-y-4 md:gap-x-4 md:gap-y-6 flex-wrap md:mx-auto md:max-h-[30rem] md:overflow-auto styled-scroll-bar">
            {filterProducts(data, { idList: wishlist, sortBy: sortList }).map(
              (
                { Name, Thumbnail, Price, Description, Category, id },
                index
              ) => (
                <div
                  className="flex flex-col items-center w-[48%] md:w-1/4 lg:w-1/5 h-44 lg:h-56 xl:h-72 bg-gray-100 shadow-md rounded-md relative"
                  key={index}
                >
                  {/* remove product button */}
                  <div className="absolute top-1.5 md:mx-2 right-1.5 md:right-0">
                    <button
                      onClick={() => removeProduct(id)}
                      className="text-xl md:text-3xl text-red-500 hover:text-red-700 transition-all bg-red-500/10 backdrop-blur rounded-full"
                    >
                      <SlClose />
                    </button>
                  </div>
                  {/* product image */}
                  <div className="h-full w-full">
                    <img
                      src={Thumbnail}
                      alt={Name}
                      className="w-full h-full rounded-md object-cover cursor-pointer"
                    />
                  </div>
                  {/* product summary & add to cart btn */}
                  <div className="absolute w-11/12 h-16 md:h-20 bottom-1 rounded-md bg-gray-300/50 backdrop-blur hover:backdrop-blur-xl transition-all duration-700 flex items-center justify-between px-2 py-1.5 md:px-3 md:py-2 gap-x-4">
                    {/* title , category , price */}
                    <div className="flex flex-col items-start justify-evenly gap-y-0.5 md:gap-y-0 flex-1">
                      <h6 className="text-sm md:text-lg font-bold text-gray-700 line-clamp-1 cursor-pointer hover:text-primary-600">
                        {Name}
                      </h6>
                      <span className="text-xs md:text-base line-clamp-1 text-gray-900 cursor-pointer hover:text-primary-600">
                        {Category}
                      </span>
                      <p className="text-xs md:text-base font-medium text-primary-600">
                        ${Price}
                      </p>
                    </div>
                    {/* add to cart btn */}
                    <button className="p-3 text-xl md:text-3xl bg-primary-500 hover:bg-primary-800 transition-all text-gray-50 rounded-xl">
                      <BiCartAlt />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <WishListLoader />
        )}
      </div>
    </div>
  );
}

export default WishListPage;
