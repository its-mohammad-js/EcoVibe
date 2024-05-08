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
          {/* header */}
          <div className="text-center my-4">
            <h4 className="text-3xl font-medium">My Wishlist</h4>
            <p className="mt-2">
              {wishlist.length
                ? `there are ${wishlist.length} products in this list`
                : "wishlist is empty"}
            </p>
          </div>
          {/* products container */}
          <div className="flex items-center justify-between gap-y-4 flex-wrap">
            {filterProducts(data, { idList: wishlist }).map(
              (
                { Name, Thumbnail, Price, Description, Category, id },
                index
              ) => (
                <div
                  className="flex flex-col items-center w-[48%] h-44 bg-red-700 rounded-md relative"
                  key={index}
                >
                  {/* product image */}
                  <div className="h-full w-full">
                    <img
                      src={Thumbnail}
                      alt={Name}
                      className="w-full h-full rounded-md object-cover"
                    />
                  </div>
                  {/* product dtails */}
                  <div className="absolute w-11/12 h-20"></div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
}

export default WishListPage;
