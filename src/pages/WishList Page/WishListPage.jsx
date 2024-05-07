import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../redux/products/productsSlice";
import { filterProducts } from "../../helpers/filterPorducts";
import { IoCloseOutline } from "react-icons/io5";
import { toggleElementInArray } from "../../helpers/constants";
import { updateUserData } from "../../redux/auth/regularUsers/regluarUsersSlice";

function WishListPage() {
  const { wishlist, loading: listLoading } = useSelector(
    (state) => state.userData
  );
  const { data, error, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function removeProductFromCart(productId) {
    const updatedWishList = toggleElementInArray(wishlist, productId);

    dispatch(updateUserData({ data: updatedWishList, field: "wishlist" }));
  }

  // get selected products data
  useEffect(() => {
    dispatch(getFilteredProducts({ sortBy: "" }));
  }, []);

  if (!loading && data.length)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl">
        <div
          id="wrapper"
          className="px-2
         py-2 flex flex-col gap-y-4"
        >
          {/* title */}
          <div className="text-center my-4">
            <h4 className="text-3xl font-medium">My Wishlist</h4>
            <p className="mt-2">
              {wishlist.length
                ? `there are ${wishlist.length} products in this list`
                : "wishlist is empty"}
            </p>
          </div>
          {/* products container */}

          <div className="flex flex-col gap-y-4">
            {filterProducts(data, { idList: wishlist }).map(
              (
                { Name, Thumbnail, Price, Description, Category, id },
                index
              ) => (
                <div
                  key={index}
                  className={`${
                    listLoading && "animate-pulse"
                  } w-full h-32 md:h-44 border border-gray-200 bg-gray-50/50 shadow-md rounded-md flex items-center md:px-4 md:py-2`}
                >
                  {/* product image */}
                  <div className="w-[40%] md:w-40 h-full">
                    <img
                      src={Thumbnail}
                      alt={Name}
                      className="w-full h-full object-cover rounded-md md:rounded-full"
                    />
                  </div>
                  {/* product summary */}
                  <div className="h-full flex justify-evenly flex-col flex-1 px-2">
                    <p className="text-lg">${Price}</p>
                    <span className="line-clamp-2 text-sm">{Description}</span>
                    <button className="bg-primary-500 text-gray-50 py-1 px-3 w-fit rounded-md text-sm">
                      Move To Cart
                    </button>
                  </div>
                  {/* remove button */}
                  <div className="h-full px-2 py-1.5">
                    <button onClick={() => removeProductFromCart(id)}>
                      <IoCloseOutline className="text-2xl" />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
}

export default WishListPage;
