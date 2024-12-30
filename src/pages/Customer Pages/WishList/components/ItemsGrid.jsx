import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../../../common/utils/filterPorducts";
import WishListLoader from "../../../../common/UI elements/Loaders/WishListLoader";
import { BsCartCheck } from "react-icons/bs";
import { BiCartAlt } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import {
  generateId,
  toggleElementInArray,
} from "../../../../common/utils/constants/helpers";
import { updateUserData } from "../../../../reducers/auth/authActions/updateUserData";

function ItemsGrid() {
  const { wishlist, cartData } = useSelector((state) => state.userData); // current user data
  // product list data
  const { loading, data } = useSelector((state) => state.products);
  // necessary data & hooks
  const dispatch = useDispatch();

  // remove product from wish list
  function removeProduct(productId) {
    const updatedWishList = toggleElementInArray(wishlist, productId);

    dispatch(updateUserData({ data: updatedWishList, field: "wishlist" }));
  }

  // add product to cart
  function addToCart({ Options, Name, Thumbnail, id, Price, Category }) {
    // get default options of product
    let defaultOptions = [];
    Options.forEach(({ title, options }) => {
      if (options.length > 1)
        defaultOptions.push({ title, option: options[0] });
    });
    // order product with default options
    const defaultOrder = {
      orderId: generateId(id),
      orderDate: Date.now(),
      productId: id,
      Category,
      Name,
      Thumbnail,
      Price,
      quantity: 1,
      selectedOption: defaultOptions,
    };
    // update cart data with new order
    dispatch(
      updateUserData({ data: [...cartData, defaultOrder], field: "cartData" })
    );
  }

  if (loading) return <WishListLoader />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:px-2 md:max-h-[30rem] overflow-auto styled-scroll-bar">
      {filterProducts(data, { idList: wishlist }).map(
        ({ Name, Thumbnail, Price, Options, Category, id }, index) => (
          <div
            className="flex flex-col items-center h-44 lg:h-56 xl:h-72 bg-gray-100 shadow-md rounded-md relative"
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
              <button
                onClick={() => {
                  addToCart({
                    Options,
                    Name,
                    Thumbnail,
                    id,
                    Price,
                    Category,
                  });
                }}
                disabled={cartData.find(({ productId }) => productId === id)}
                className="p-3 text-xl md:text-3xl bg-primary-500 hover:bg-primary-800 transition-all text-gray-50 rounded-xl disabled:bg-gray-600"
              >
                {cartData.find(({ productId }) => productId === id) ? (
                  <BsCartCheck />
                ) : (
                  <BiCartAlt />
                )}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ItemsGrid;