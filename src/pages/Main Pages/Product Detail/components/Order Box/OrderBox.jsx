import { useEffect, useState } from "react";
import { generateId } from "helpers";
import { updateUserData } from "authActions/updateUserData";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { checkUserAuthentication } from "helpers";
import BoxOptions from "./BoxOptions";
import BoxActions from "./BoxActions";
import { isEqual } from "lodash";

function OrderBox({ Options, productData }) {
  const [selectedOptions, setOptions] = useState([]); // selecyed options
  // current user data
  const { cartData, auth_status } = useSelector((state) => state.userData);
  // necessary data & hooks
  const dispatch = useDispatch();
  // order details
  const [currentOrder, setOrder] = useState({
    orderId: "",
    isOrdered: false,
    orderQuantity: 1,
  });
  // ref to last action
  const [actionRef, setActionRef] = useState("");
  // current user data
  const { loading } = useSelector((state) => state.userData);

  // reset action ref after each action
  useEffect(() => {
    if (actionRef !== "" && !loading) {
      setActionRef("");
    }
  }, [loading]);

  // check product is already ordered with this selected options
  useEffect(() => {
    // get order with same selected options
    const orderedOptions = cartData.find((order) => {
      if (
        order.productId === productData.id &&
        isEqual(order.selectedOption, selectedOptions)
      ) {
        return order;
      }
    });

    if (orderedOptions) {
      setOrder({
        isOrdered: true,
        orderId: orderedOptions.orderId,
        orderQuantity: orderedOptions.quantity,
      });
    } else {
      setOrder({ isOrdered: false, orderId: "", orderQuantity: 1 });
    }
  }, [cartData, selectedOptions]);

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
        orderDate: Date.now(),
        productId: productData.id,
        Category: productData.Category,
        Name: productData.Name,
        Thumbnail: productData.Thumbnail,
        Seller: productData.SellerId,
        Price: productData.Price * currentOrder.orderQuantity,
        quantity: currentOrder.orderQuantity,
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
    const updatedCart = cartData.filter(
      (order) => order.orderId !== currentOrder.orderId
    );

    dispatch(updateUserData({ data: updatedCart, field: "cartData" }));
  }

  return (
    <div className="flex flex-col gap-y-4">
      {/* order total price */}
      <div className="flex items-center mb-2">
        <h6 className="text-2xl font-medium">
          Price: $
          {Number(productData.Price * currentOrder.orderQuantity).toFixed(2)}
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
          currentOrder,
          setOrder,
          setActionRef,
          actionRef,
        }}
      />
    </div>
  );
}

export default OrderBox;
