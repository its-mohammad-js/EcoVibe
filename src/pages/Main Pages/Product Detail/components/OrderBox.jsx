import { useEffect, useState } from "react";
import Select from "react-select";
import { generateId } from "constants";
import { updateUserData } from "src/reducers/auth/userDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { isEqual } from "lodash";
import { TbMinus, TbPlus, TbTrash } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { checkUserAuthentication } from "constants";

function OrderBox({ Options, productData }) {
  const [selectedOptions, setOptions] = useState([]); // selecyed options
  // order details
  const [{ orderId, isOrdered, orderQuantity }, setOrder] = useState({
    orderId: "",
    isOrdered: false,
    orderQuantity: 1,
  });

  const { cartData, loading, auth_status } = useSelector(
    (state) => state.userData
  );
  // get selected color
  const selectedColor = selectedOptions.find(
    (opt) => opt.title.toLowerCase() === "color"
  )?.option;
  // get available color
  const productColors = Options.find(
    (opt) => opt.title.toLowerCase() === "color"
  );
  // necessary data & hooks
  const dispatch = useDispatch();
  const [actionRef, setActionRef] = useState("");
  const navigate = useNavigate();

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

  // reset action ref after each action
  useEffect(() => {
    if (actionRef !== "" && !loading) {
      setActionRef("");
    }
  }, [loading]);

  // change selected options
  function onOrderChange({ title, value }) {
    // find index of selected field
    const optionsIndex = selectedOptions.findIndex(
      (opt) => opt.title.toLowerCase() === title.toLowerCase()
    );
    // take a copy from selected field
    const updatedOptions = [...selectedOptions];
    updatedOptions[optionsIndex] = { title, option: value };
    // update selected field with new option
    setOptions(updatedOptions);
  }
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
  // change order quantity
  function onQuantityChange(type) {
    // set action ref
    setActionRef("quantityChange");
    // change order detail if product is not ordered
    if (!isOrdered && !orderId.length) {
      switch (type) {
        case "increase":
          setOrder((prev) => ({
            ...prev,
            orderQuantity: prev.orderQuantity + 1,
          }));
          break;
        case "decrease":
          setOrder((prev) => ({
            ...prev,
            orderQuantity: prev.orderQuantity - 1,
          }));
          break;
      }
    }
    // update qunatity of ordered product
    else {
      // find order index
      const orderIndex = cartData.findIndex(
        (order) => order.orderId === orderId
      );
      // update quantity of order
      const updatedOrder = {
        ...cartData[orderIndex],
        quantity:
          type === "increase"
            ? cartData[orderIndex].quantity + 1
            : cartData[orderIndex].quantity - 1,
      };
      // take a copy from cart & update it
      const updatedCart = [...cartData];
      updatedCart[orderIndex] = updatedOrder;
      // update user cart data with new order data
      dispatch(updateUserData({ data: updatedCart, field: "cartData" }));
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
      <div
        className={`${
          selectedOptions.length > 1 ? "justify-between gap-4" : "justify-start"
        } flex items-center flex-wrap`}
      >
        {/* product options (only display selectable options) */}
        <div className="grid grid-cols-2 xl:flex flex-wrap gap-4 xl:z-50">
          {Options.map(
            ({ title, options }, index) =>
              title.toLowerCase() !== "color" &&
              options.length > 1 && (
                <Select
                  key={index}
                  options={options.map((opt) => ({ label: opt, value: opt }))}
                  placeholder={title}
                  className="text-sm lg:text-base min-w-36"
                  onChange={({ value }) => {
                    onOrderChange({ title, value });
                  }}
                />
              )
          )}
        </div>
        {/* product colors */}
        {productColors && (
          <div className="flex w-full items-center gap-4">
            <h4 className="text-xl font-medium">Colors:</h4>
            <div className="flex flex-wrap gap-2">
              {productColors?.options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => onOrderChange({ title: "color", value: opt })}
                  style={{ backgroundColor: opt }}
                  className={`${
                    selectedColor === opt && "border-4 !border-gray-400"
                  } size-10 rounded-full border-4 transition-all`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* order action buttons */}
      <div className="fixed lg:static z-40 bottom-0 right-0 lg:mt-2 bg-gray-100 lg:bg-opacity-0 w-full rounded-t-xl px-4 lg:px-0 py-4 lg:py-2 flex items-center justify-between">
        {/* order product button */}
        <button
          onClick={() =>
            isOrdered ? navigate("/EcoVibe/bag/cart") : addOrderToCart()
          }
          className={`${
            loading &&
            actionRef === "orderProduct" &&
            "animate-pulse !bg-gray-400"
          } px-4 py-2.5 bg-primary-400 text-white lg:text-lg rounded-md disabled:bg-gray-500 transition-all size-fit`}
        >
          {isOrdered ? "Show In Cart" : "Add To Cart"}
        </button>
        {/* change quantity buttons */}
        <div
          className={`${
            loading && actionRef === "quantityChange" && "animate-pulse"
          } ${
            isOrdered
              ? "visible opacity-100 translate-y-0"
              : "opacity-0 invisible -translate-y-10"
          } flex transition-all items-center gap-x-4`}
        >
          <div className="flex gap-x-3">
            <button
              disabled={loading}
              onClick={() =>
                orderQuantity > 1
                  ? onQuantityChange("decrease")
                  : removeProductFromCart()
              }
              className="hover:bg-gray-950 px-2.5 hover:text-gray-50 rounded-md"
            >
              {orderQuantity === 1 && isOrdered ? (
                <TbTrash className="text-2xl" />
              ) : (
                <TbMinus className="text-xl" />
              )}
            </button>
            <span className="px-2 lg:px-4 py-1 border-b-2 border-gray-950 lg:text-lg">
              {orderQuantity}
            </span>
            <button
              disabled={loading}
              onClick={() => onQuantityChange("increase")}
              className="bg-gray-950 text-gray-50 p-2.5 rounded-md"
            >
              <TbPlus className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderBox;
