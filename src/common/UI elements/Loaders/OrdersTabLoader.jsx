import { fakeArray } from "helpers";

function OrdersTabLoader() {
  return (
    <div className="px-2 py-1 lg:px-4 lg:py-2 animate-pulse">
      {/* orders table */}
      <div className="relative">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-sm lg:text-base text-gray-50 uppercase bg-gray-400">
            <tr>
              <th scope="col" className="px-6 py-6">
                <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
              </th>
              <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
              </th>
              <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
              </th>
              <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
              </th>
              <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {fakeArray(20).map((item, index) => (
              <tr
                className="bg-gray-100 border-b text-sm lg:text-base"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  <button className="w-28 h-2 bg-gray-300 rounded-md"></button>
                </th>
                <td className="lg:table-cell">
                  <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
                </td>
                <td className="hidden lg:table-cell">
                  <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
                </td>
                <td className=" hidden lg:table-cell">
                  <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
                </td>
                <td className="hidden lg:table-cell">
                  <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
                </td>
                <td className="">
                  <p className="w-3/5 h-2 bg-gray-300 rounded-md"></p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTabLoader;
