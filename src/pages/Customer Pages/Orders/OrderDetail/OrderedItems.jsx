function OrderedItems({ delivery_status, orders }) {
  return (
    <div
      className={`${
        delivery_status === 900 && "!row-start-2 [&>div]:max-h-96 mt-12 xl:mt-0"
      } bg-gray-50 px-2 py-1 rounded-md col-span-3 row-span-2 col-start-1 row-start-3`}
    >
      <h4 className="text-xl font-medium my-1">Orders Items</h4>
      <div className="flex flex-col gap-y-2 max-h-64 overflow-auto styled-scroll-bar">
        {orders.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1 w-full h-32 bg-gray-100 border border-gray-300 rounded-md"
          >
            {/* item thumbnail */}
            <div className="w-5/12 lg:w-1/5 h-full flex items-center justify-center">
              <img
                src={item.Thumbnail}
                alt="item-thumbnail"
                className="size-11/12 rounded-md object-cover"
              />
            </div>
            {/* item deteils */}
            <div className="w-3/5 h-full flex flex-col items-start py-2 justify-between">
              <h6 className="line-clamp-1 text-lg lg:text-xl font-medium text-gray-900">
                {item.Name}
              </h6>
              <p className="text-sm font-medium">
                Total Price: ${item.Price * item.quantity}
              </p>
              <div className="">
                {item.selectedOption.map(
                  ({ title, option }, index) =>
                    index < 3 && (
                      <div
                        key={index}
                        className="flex items-center line-clamp-1"
                      >
                        <p className="text-sm font-medium line-clamp-1 max-w-[60%]">
                          {title}: &nbsp;
                        </p>
                        <span className="text-xs text-gray-800 flex-1">
                          {option}
                        </span>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderedItems;
