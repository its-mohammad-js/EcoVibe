import { useEffect, useState } from "react";
import Select from "react-select";
import { generateId, isInArray } from "../../helpers/constants";
import { updateUserData } from "../../redux/auth/regularUsers/regluarUsersSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

function OrderBox({ Options, productData }) {
  // order details
  const [selectedOptions, setOptions] = useState([]);
  // order details
  const [{ orderId, isOrdered, orderQuantity }, setOrder] = useState({
    orderId: "",
    isOrdered: false,
    orderQuantity: 1,
  });
  // necessary data & hooks
  const dispatch = useDispatch();
  const { cartData, loading } = useSelector((state) => state.userData);
  // get selected color
  const selectedColor = selectedOptions.find(
    (opt) => opt.title.toLowerCase() === "color"
  )?.option;
  // get available color
  const productColors = Options.find(
    (opt) => opt.title.toLowerCase() === "color"
  );
  const [actionRef, setActionRef] = useState("");

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
    // get ordered options of this product
    const orderedOptions = cartData.find((order) => {
      if (
        order.productId === productData.id &&
        isInArray([order.selectedOption], selectedOptions)
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
      Price: productData.Price * orderQuantity,
      quantity: orderQuantity,
      selectedOption: selectedOptions,
    };

    // add product with default order to cart
    dispatch(updateUserData({ data: [...cartData, order], field: "cartData" }));
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
    <div className="">
      <div className="flex items-center mb-2">
        <h6 className="text-2xl font-medium">
          ${productData.Price * orderQuantity}
        </h6>
      </div>
      {/* porduct orders */}
      <div
        className={`${
          selectedOptions.length > 1 ? "justify-between gap-2" : "justify-start"
        } flex items-center flex-wrap`}
      >
        {/* product options (only display selectable options) */}
        <div className="flex flex-wrap gap-2">
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
        <div className="flex gap-4">
          {productColors?.options.map((opt, index) => (
            <button
              key={index}
              onClick={() => onOrderChange({ title: "color", value: opt })}
              style={{ backgroundColor: opt }}
              className={`${
                selectedColor === opt && "border-4 !border-gray-500"
              } size-10 rounded-full border-4 transition-all`}
            ></button>
          ))}
        </div>
      </div>
      {/* order actions */}
      <div className="fixed lg:static z-50 bottom-0 right-0 lg:mt-2 bg-gray-100 lg:bg-opacity-0 w-full rounded-t-xl px-4 lg:px-0 py-4 lg:py-2 flex items-center justify-between">
        {/* order product button */}
        <button
          disabled={isOrdered}
          onClick={addOrderToCart}
          className={`${
            loading &&
            actionRef === "orderProduct" &&
            "animate-pulse !bg-gray-400"
          } px-4 py-2.5 bg-primary-400 text-white text-sm lg:text-lg rounded-md disabled:bg-gray-500 transition-all size-fit`}
        >
          {isOrdered ? "Already Ordered" : "Add New Order"}
        </button>
        {/* change quantity buttons */}
        <div
          className={`${
            loading && actionRef === "quantityChange" && "animate-pulse"
          } flex items-center gap-x-4`}
        >
          <div className="flex gap-x-2">
            <button
              disabled={loading}
              onClick={() => {
                // decrease order quantity
                if (orderQuantity > 1 && !isOrdered)
                  onQuantityChange("decrease");
                // remove order if qunatity is equal to 1
                else if (isOrdered && orderQuantity >= 1) {
                  removeProductFromCart();
                }
              }}
              className="border border-black text-sm lg:text-base rounded-full p-2.5"
            >
              {orderQuantity === 1 && isOrdered ? <FaTrash /> : <FaMinus />}
            </button>
            <span className="px-6 py-1 border border-black lg:text-lg rounded-full">
              {orderQuantity}
            </span>
            <button
              disabled={loading}
              onClick={() => onQuantityChange("increase")}
              className="bg-black text-sm lg:text-base text-gray-50 p-2.5 rounded-full"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderBox;
