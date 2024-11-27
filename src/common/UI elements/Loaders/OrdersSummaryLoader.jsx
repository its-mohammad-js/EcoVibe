import { fakeArray } from "constants";
import { TbEye } from "react-icons/tb";

function OrdersSummaryLoader({ animate }) {
  return (
    <>
      <h4 className="text-xl font-bold">Order's Summary</h4>

      <div className="overflow-x-scroll overflow-y-hidden hidden-scroll-bar scroll-smooth w-full">
        <div className={`px-8 inline-flex items-center gap-x-8 py-1 lg:py-2`}>
          {fakeArray(20).map((num, index) => (
            <div
              key={index}
              className={`${
                animate && "animate-pulse"
              } w-44 lg:w-52 h-28 relative bg-gray-300 px-3 py-1.5 rounded-md flex flex-col justify-evenly`}
            >
              <button className="absolute top-2.5 right-2 text-lg lg:text-xl text-gray-700">
                <TbEye />
              </button>
              <p className="w-10 h-2 bg-gray-400 rounded-md"></p>
              <p className="line-clamp-1 w-full h-2 bg-gray-500 rounded-md"></p>
              <p className="text-sm text-gray-950/60 w-8 h-2 bg-gray-400 rounded-md"></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OrdersSummaryLoader;
