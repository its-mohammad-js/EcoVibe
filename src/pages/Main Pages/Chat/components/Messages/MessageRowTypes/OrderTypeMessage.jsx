import { timestampToDate } from "/src/common/utils/constants";

function OrderTypeMessage({ message }) {
  return (
    <div className=" lg:w-72 h-20 border-l-4 relative border-gray-600 flex items-center gap-x-2.5 px-2 py-1">
      {/* order thumbnail */}
      <div className="size-16 lg:size-20 bg-gray-100 hover:bg-gray-100/90 transition-all overflow-hidden grid z-0 rounded-full grid-cols-2 grid-rows-2">
        {message.order.thumbnails.map(
          (src, i) =>
            i < 3 && (
              <img key={i} className="size-full object-cover -z-10" src={src} />
            )
        )}
      </div>
      {/* order details */}
      <div className="w-4/6 flex flex-col gap-y-2.5">
        <h4 className="line-clamp-1 break-words w-11/12 font-bold text-sm hover:underline">
          {message.order.orderId.slice(0, 20)}...
        </h4>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold">${message.order.totalPrice}</p>
          <p className="font-semibold text-xs">
            date: &nbsp;
            {timestampToDate(message.order.createdAt, {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderTypeMessage;
