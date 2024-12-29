import { useEffect, useState } from "react";
import { generateId } from "helpers";
import { updateUserData } from "authActions/updateUserData";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { checkUserAuthentication } from "helpers";
import BoxOptions from "./BoxOptions";
import BoxActions from "./BoxActions";

function OrderBox({ Options, productData }) {
  const [selectedOptions, setOptions] = useState([]); // selecyed options
  // current user data
  const { cartData, auth_status } = useSelector((state) => state.userData);
  // necessary data & hooks
  const dispatch = useDispatch();

  // set order info to default options
  useEffect(() => {
    if (Options) {
      const defaultOptions = [];
      // get selectable options and set them as default
      Options.forEach(({ title, options }) => {
        if (options.length > 1) {
          defaultOptions.push({ title, option: options[0] });
        }
      });

      setOptions(defaultOptions);
    }
  }, [Options]);

  // add order to cart
  function addOrderToCart() {
    try {
      checkUserAuthentication(auth_status);
      // set action ref
      setActionRef("orderProduct");
      //  create new order of product
      const order = {
        orderId: generateId(productData.id),
        orderData: Date.now(),
        productId: productData.id,
        Category: productData.Category,
        Name: productData.Name,
        Thumbnail: productData.Thumbnail,
        Seller: productData.SellerId,
        Price: productData.Price * orderQuantity,
        quantity: orderQuantity,
        selectedOption: selectedOptions,
        SellerId: productData.SellerId,
        SellerName: productData.SellerName,
        SellerProfile: productData.SellerProfile,
        SellerEmail: productData.SellerEmail,
      };

      // add product with default order to cart
      dispatch(
        updateUserData({ data: [...cartData, order], field: "cartData" })
      );
    } catch (error) {
      toast.remove();
      toast.error(error?.message);
    }
  }

  // remove order from cart
  function removeProductFromCart() {
    const updatedCart = cartData.filter((order) => order.orderId !== orderId);

    dispatch(updateUserData({ data: updatedCart, field: "cartData" }));
  }

  return (
    <div className="flex flex-col gap-y-4">
      {/* order total price */}
      <div className="flex items-center mb-2">
        <h6 className="text-2xl font-medium">
          Price: ${Number(productData.Price * orderQuantity).toFixed(2)}
        </h6>
      </div>
      {/* porduct options */}
      <BoxOptions {...{ Options, selectedOptions, setOptions }} />
      {/* order action buttons */}
      <BoxActions
        {...{
          selectedOptions,
          addOrderToCart,
          removeProductFromCart,
        }}
      />
    </div>
  );
}

export default OrderBox;
