import { useSelector } from "react-redux";

function OrdersPage() {
  const { orders } = useSelector((state) => state.userData);

  console.log(orders);

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl px-4 py-2">
      <div id="wrapper" className="w-full border-2 rounded-md">
        {/* header */}
        <div className="">
          <div className="flex items-center justify-between py-4 px-2">
            <h6 className="text-lg font-bold">Order Details</h6>

            <p className="font-medium">Total Price : 0</p>
          </div>

          <div className="w-full border-y border-gray-300 px-1 py-0.5">
            <h6 className="text-lg font-medium">Items :</h6>
          </div>
        </div>

        {/* orders */}
        <div className="">{orders?.length}</div>
      </div>
    </div>
  );
}

export default OrdersPage;
