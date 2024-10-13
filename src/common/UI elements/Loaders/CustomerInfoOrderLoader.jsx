import { fakeArray } from "constants";

function CustomerInfoOrderLoader() {
  return (
    <div className="w-full h-2/5 px-2 py-1 overflow-auto styled-scroll-bar">
      <div className="flex flex-col gap-y-4">
        {fakeArray(4).map((n, index) => (
          <div
            key={index}
            className="w-full h-20 animate-pulse bg-gray-300 cursor-pointer rounded-md px-2 py-1 flex flex-col justify-evenly"
          >
            <h4 className="w-full h-2 bg-gray-400 rounded-md"></h4>
            <div className="flex items-center justify-between">
              <p className="w-12 h-2 bg-gray-400 rounded-md"></p>
              <p className="w-12 h-2 bg-gray-400 rounded-md"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerInfoOrderLoader;
