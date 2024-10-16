import { fakeArray } from "/src/common/utils/constants";

function OrderShareListLoader() {
  return (
    <>
      {fakeArray(3).map((n, i) => (
        <div
          key={i}
          className="w-full cursor-pointer animate-pulse hover:bg-gray-300 transition-all h-24 bg-gray-200 rounded-md flex items-center px-2 py-2 gap-x-2.5 relative"
        >
          {/* order thumbnail */}
          <div className="w-1/4 h-20 bg-gray-100 overflow-hidden grid z-10 rounded-full grid-cols-2 grid-rows-2"></div>
          {/* order title & total price */}
          <div className="w-4/6">
            <h4 className="w-3/4 h-2 mb-4 bg-gray-400 rounded-md"></h4>
            <p className="w-1/4 h-2 bg-gray-400 rounded-md"></p>
          </div>
          {/* order info & date */}
          <p className="absolute right-2.5 bottom-2 w-14 h-2 bg-gray-400 rounded-md"></p>
        </div>
      ))}
    </>
  );
}

export default OrderShareListLoader;
