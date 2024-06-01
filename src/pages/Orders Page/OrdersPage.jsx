import { useSelector } from "react-redux";
import OrderRow from "../../components/Orders Page/OrderRow";

function OrdersPage() {
  const { orders } = useSelector((state) => state.userData);

  console.log(orders);

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl lg:px-4 lg:py-2 gradient-background -mb-6 lg:-mb-8">
      <div
        id="wrapper"
        className="w-full border-2 lg:rounded-md bg-gray-50 py-2"
      >
        {/* <div className="flex justify-between px-4 py-2 border-y-2">
          <p>Item</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Date</p>
        </div> */}

        <div className="flex flex-col gap-y-2 px-2 py-1">
          {orders.map((order, index) => (
            <OrderRow {...order} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
