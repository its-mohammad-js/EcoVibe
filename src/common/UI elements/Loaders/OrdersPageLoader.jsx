import { fakeArray } from "helpers";
import { TbSearch } from "react-icons/tb";

function OrdersPageLoader() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl -mb-6 lg:-mb-8 px-2 py-1 lg:px-4 lg:py-2 animate-pulse">
      {/* search orders by product name  */}
      <div className="flex">
        <input
          disabled={true}
          type="text"
          className="w-full outline-none border px-4 py-2 rounded-tl-md lg:py-3 focus:border-gray-500"
          placeholder="Search By Product Name"
        />
        <button
          disabled={true}
          className="px-4 py-2 bg-gray-500 text-gray-50 rounded-tr-md text-lg lg:text-3xl"
        >
          <TbSearch />
        </button>
      </div>
      {/* ordered items list */}
      <div>
        {/* ordered items table */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm xl:text-lg text-left text-gray-700">
            <thead className="text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-6">
                  <p className="w-full h-2 bg-gray-400 rounded-md"></p>
                </th>
                <th scope="col" className="px-6 py-6 hidden lg:table-cell">
                  <p className="w-full h-2 bg-gray-400 rounded-md"></p>
                </th>
                <th scope="col" className="px-6 py-6 hidden lg:table-cell">
                  <p className="w-full h-2 bg-gray-400 rounded-md"></p>
                </th>
                <th scope="col" className="px-6 py-6 hidden lg:table-cell">
                  <p className="w-full h-2 bg-gray-400 rounded-md"></p>
                </th>
                <th scope="col" className="px-6 py-6">
                  <p className="w-full h-2 bg-gray-400 rounded-md"></p>
                </th>
                <th scope="col" className="px-6 py-6 hidden lg:table-cell">
                  <p className="w-full h-2 bg-gray-400 rounded-md"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {fakeArray(10).map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50 transition-all xl:text-lg"
                >
                  {/* product name & thumbnail */}
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center justify-evenly sm:justify-start gap-2"
                  >
                    <div className="size-14 bg-gray-300 rounded-full"></div>
                    <p className="flex flex-col gap-4">
                      <span className="w-12 h-2 bg-gray-400 rounded-md"></span>
                      <span className="w-16 h-2 rounded-md bg-gray-400"></span>
                    </p>
                  </th>
                  {/* seller info */}
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="size-11 bg-gray-300 rounded-full"></div>
                      <p className="flex flex-col gap-2">
                        <span className="w-10 h-2 rounded-md bg-gray-300"></span>
                        <span className="w-16 h-2 rounded-md bg-gray-300"></span>
                      </p>
                    </div>
                  </td>
                  {/* order date */}
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <p className="w-full h-2 bg-gray-300 rounded-md"></p>
                  </td>
                  {/* order quantity */}
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <p className="w-full h-2 bg-gray-300 rounded-md"></p>
                  </td>
                  {/* item price */}
                  <td className="px-6 py-4">
                    <p className="w-full h-2 bg-gray-300 rounded-md"></p>
                  </td>
                  {/* order delivery status */}
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="flex items-center justify-start gap-2">
                      <p className="w-full h-2 bg-gray-300 rounded-md"></p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrdersPageLoader;
