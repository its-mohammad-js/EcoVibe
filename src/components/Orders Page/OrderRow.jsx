function OrderRow({ orders, paymentInfo, shippingMethod, orderId }) {
  return (
    <div className="w-full h-28 bg-gray-100 flex items-center border border-gray-300">
      {/* orders thumbnails */}
      <div className="h-full basis-2/5 md:basis-2/12 grid grid-cols-2 grid-rows-2 rounded-md">
        {orders.map(
          (order, index) =>
            index < 4 && (
              <img
                src={order.Thumbnail}
                key={index}
                className="h-full w-full object-cover"
              />
            )
        )}
      </div>
      {/* order details */}
      <div className="px-2 py-1 flex flex-col justify-evenly h-full">
        <h4>{orderId}</h4>
        <p>date : 22/12/23 F</p>
      </div>
    </div>
  );
}

export default OrderRow;
