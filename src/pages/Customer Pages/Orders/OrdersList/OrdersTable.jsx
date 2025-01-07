import { timestampToDate } from "helpers";
import { deliveryInfo } from "appData";

function OrdersTable({ onOrderDetail, paginetedItems, pageNum }) {
  return (
    <div className=" overflow-x-auto">
      <table className="w-full text-sm xl:text-lg text-left text-gray-700">
        <thead className="text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3 hidden lg:table-cell">
              Seller
            </th>
            <th scope="col" className="px-6 py-3 hidden lg:table-cell">
              Date
            </th>
            <th scope="col" className="px-6 py-3 hidden lg:table-cell">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3 hidden lg:table-cell">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {paginetedItems[pageNum].items.map((item, index) => (
            <tr
              onClick={() => onOrderDetail("open", item.orderId, item.SellerId)}
              key={index}
              className="bg-white border-b hover:bg-gray-50 transition-all xl:text-lg cursor-pointer"
            >
              {/* product name & thumbnail */}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center justify-evenly sm:justify-start gap-2"
              >
                <div className="size-14 bg-gray-300 rounded-full">
                  <img
                    src={item.Thumbnail}
                    alt="product-thumbnail"
                    className="size-full rounded-full object-cover"
                  />
                </div>
                <p className="flex flex-col gap-1">
                  <span className="hover:underline line-clamp-1 max-w-24 lg:max-w-56 cursor-pointer">
                    {item.Name}
                  </span>
                  <span className="text-xs line-clamp-1 w-28 xl:text-base">
                    {item.Category}
                  </span>
                </p>
              </th>
              {/* seller info */}
              <td className="px-6 py-4 hidden lg:table-cell">
                <div className="flex items-center gap-2">
                  <div className="size-11 bg-gray-100 rounded-full">
                    <img
                      src={item.SellerProfile}
                      alt="seller-avatar"
                      className="size-full rounded-full object-cover"
                    />
                  </div>
                  <p className="flex flex-col gap-1">
                    <span>{item.SellerName}</span>
                    <span>{item.SellerEmail}</span>
                  </p>
                </div>
              </td>
              {/* order date */}
              <td className="px-6 py-4 hidden lg:table-cell">
                {timestampToDate(item.date)}
              </td>
              {/* order quantity */}
              <td className="px-6 py-4 hidden lg:table-cell">
                {item.quantity}
              </td>
              {/* item price */}
              <td className="px-6 py-4">${item.Price}</td>
              {/* order delivery status */}
              <td className="px-6 py-4 hidden lg:table-cell">
                <div className="flex items-center justify-start gap-2">
                  <p
                    style={{
                      background: deliveryInfo?.[item.delivery_status].color,
                    }}
                    className="p-2 rounded-full"
                  ></p>
                  <p
                    style={{
                      color: deliveryInfo?.[item.delivery_status].color,
                    }}
                  >
                    {deliveryInfo?.[item.delivery_status].label}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
