import { FaUser } from "react-icons/fa";
import { fakeArray } from "/src/common/utils/constants";

function SellerProfilePageLoader() {
  return (
    <div className="flex flex-col gap-y-4 animate-pulse">
      <div className="h-[33rem]">
        {/* banner */}
        <div className="w-full h-1/2 bg-gray-200"></div>
        {/* seller infomation */}
        <div className="relative px-4 py-12">
          {/* profile pic */}
          <div className="size-24 lg:size-36 bg-gray-100 border-4 border-gray-200 rounded-full flex items-center justify-center absolute -top-14 lg:-top-28">
            <FaUser className="rounded-b-full text-7xl lg:text-9xl text-gray-400" />
          </div>
          {/* main infomtaion */}
          <div className="flex flex-col gap-y-3">
            {/* name & social media */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-y-2">
                <h4 className="w-36 h-3 bg-gray-300 rounded-md"></h4>

                <p className="w-20 h-3 bg-gray-300 rounded-md"></p>
              </div>
            </div>
            {/* about me */}
            <div className="flex flex-col gap-y-4">
              {fakeArray(7).map((n, i) => (
                <p
                  key={n * i}
                  className="h-3 bg-gray-300 rounded-md odd:mr-10"
                ></p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SellerLastProductLoader />
    </div>
  );
}

export default SellerProfilePageLoader;

export function SellerLastProductLoader() {
  return (
    <div className="bg-gray-200 px-4 py-8 my-4 animate-pulse">
      <h4 className="w-11/12 h-4 bg-gray-300 rounded-md lg:w-64"></h4>
      <div className="flex flex-col gap-y-4 my-4 lg:my-8">
        {fakeArray(7).map((n, i) => (
          <p key={n * i} className="h-2 bg-gray-300 rounded-md odd:mr-10"></p>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 my-2 lg:justify-evenly lg:px-12">
        {fakeArray(3).map((item, index) => (
          <div
            key={index}
            className="w-full bg-gray-50 rounded-md h-80 flex flex-col lg:w-80"
          >
            <div className="w-full h-4/6 rounded-t-md bg-gradient-to-br from-gray-400 via-gray-300 to-gray-800"></div>
            <div className="flex flex-col gap-y-1 h-2/6 justify-evenly lg:h-2/6 px-3 py-1 lg:py-2">
              <h4 className="w-36 h-4 bg-gray-300 rounded-md"></h4>
              <p className="w-24 h-2 bg-gray-300 rounded-md"></p>

              <p className="w-10 h-2 bg-gray-300 rounded-md"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
