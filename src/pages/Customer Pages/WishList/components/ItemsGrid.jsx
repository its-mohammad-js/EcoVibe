import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "src/common/utils/filterPorducts";
import WishListLoader from "UI/Loaders/WishListLoader";
import { BsCartCheck } from "react-icons/bs";
import { BiCartAlt } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import { generateId, toggleElementInArray } from "helpers";
import { updateUserData } from "authActions/updateUserData";

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
  function addToCart(item) {
    // get default options of product
    let defaultOptions = [];
    item.Options.forEach(({ title, options }) => {
      if (options.length > 1)
        defaultOptions.push({ title, option: options[0] });
    });

    // order product with default options
    const defaultOrder = {
      orderId: generateId(item.id),
      orderDate: Date.now(),
      productId: item.id,
      Category: item.Category,
      Name: item.Name,
      Thumbnail: item.Thumbnail,
      Price: item.Price,
      quantity: 1,
      selectedOption: defaultOptions,
      SellerId: item.SellerId,
      SellerName: item.SellerName,
      SellerProfile: item.SellerProfile,
      SellerEmail: item.SellerEmail,
    };

    // update cart data with new order
    dispatch(
      updateUserData({ data: [...cartData, defaultOrder], field: "cartData" })
    );
  }

  if (loading) return <WishListLoader />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:px-2 md:max-h-[30rem] overflow-auto styled-scroll-bar">
      {filterProducts(data, { idList: wishlist }).map((item, index) => (
        <div
          className="flex flex-col items-center h-44 lg:h-56 xl:h-72 bg-gray-100 shadow-md rounded-md relative"
          key={index}
        >
          {/* remove product button */}
          <div className="absolute top-1.5 md:mx-2 right-1.5 md:right-0">
            <button
              onClick={() => removeProduct(item.id)}
              className="text-xl md:text-3xl text-red-500 hover:text-red-700 transition-all bg-red-500/10 backdrop-blur rounded-full"
            >
              <SlClose />
            </button>
          </div>
          {/* product image */}
          <div className="h-full w-full">
            <img
              src={item.Thumbnail}
              alt={item.Name}
              className="w-full h-full rounded-md object-cover cursor-pointer"
            />
          </div>
          {/* product summary & add to cart btn */}
          <div className="absolute w-11/12 h-16 md:h-20 bottom-1 rounded-md bg-gray-300/50 backdrop-blur hover:backdrop-blur-xl transition-all duration-700 flex items-center justify-between px-2 py-1.5 md:px-3 md:py-2 gap-x-4">
            {/* title , category , price */}
            <div className="flex flex-col items-start justify-evenly gap-y-0.5 md:gap-y-0 flex-1">
              <h6 className="text-sm md:text-lg font-bold text-gray-700 line-clamp-1 cursor-pointer hover:text-primary-600">
                {item.Name}
              </h6>
              <span className="text-xs md:text-base line-clamp-1 text-gray-900 cursor-pointer hover:text-primary-600">
                {item.Category}
              </span>
              <p className="text-xs md:text-base font-medium text-primary-600">
                ${item.Price}
              </p>
            </div>
            {/* add to cart btn */}
            <button
              onClick={() => {
                addToCart(item);
              }}
              disabled={cartData.find(({ productId }) => productId === item.id)}
              className="p-3 text-xl md:text-3xl bg-primary-500 hover:bg-primary-800 transition-all text-gray-50 rounded-xl disabled:bg-gray-600"
            >
              {cartData.find(({ productId }) => productId === item.id) ? (
                <BsCartCheck />
              ) : (
                <BiCartAlt />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsGrid;
