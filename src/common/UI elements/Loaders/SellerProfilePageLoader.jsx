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
    <div className="mx-auto 2xl:max-w-screen-2xl">
      {/* header */}
      <div className="flex items-center justify-between bg-red-300 px-4 py-2">
        <button className="text-2xl">
          <AiOutlineLeft />
        </button>
        <h6 className="font-bold">seller-name</h6>
        <button className="text-2xl">
          <IoIosMore />
        </button>
      </div>
      {/* seller info */}
      <div className="px-4 py-2 bg-yellow-200">
        {/* header */}
        <div className="flex items-center justify-evenly gap-x-4 lg:w-1/3 lg:mx-auto">
          <div className="size-16 lg:size-24 bg-red-300 rounded-full"></div>
          <div className="flex items-center justify-center flex-col">
            <h6 className="text-center">1234</h6>
            <p className="text-center">stars</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h6 className="text-center">1234</h6>
            <p className="text-center">products</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h6 className="text-center">1234</h6>
            <p className="text-center">customers</p>
          </div>
        </div>
        {/* biography */}
        <div className="my-2">
          <h4 className="text-lg font-bold">Name</h4>
          <p className="">business name</p>
          <p className="">creer-title</p>
          <p className="line-clamp-2">
            biography Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur hic quod placeat dolore dolorem quidem debitis
            molestiae, vel dolor sed assumenda odit eius sit voluptatibus minima
            ipsa illum optio. Expedita?
          </p>
        </div>
        {/* action btns */}
        <div className="flex items-center justify-evenly my-2 lg:w-1/4 lg:mx-auto">
          <button className="px-4 py-2 text-sm bg-primary-500 text-gray-50 rounded-lg">
            Products
          </button>
          <button className="px-4 py-2 text-sm bg-red-600 text-gray-50 rounded-lg">
            Message
          </button>
          <button className="px-4 py-2 text-sm bg-red-600 text-gray-50 rounded-lg">
            Email
          </button>
        </div>
      </div>
      {/* highlights */}
      <div className="flex items-center bg-blue-100 gap-x-4 overflow-auto px-2 py-2 scroll-smooth">
        {fakeArray(8).map((n, i) => (
          <div
            key={i}
            className="size-14 rounded-full bg-red-300 flex-none ring-4"
          ></div>
        ))}
      </div>
      {/* products / reviews / orders */}
      <div className="">
        {/* action buttons */}
        <div className="flex items-center justify-between bg-gray-300 px-1 lg:w-1/3 lg:mx-auto">
          <button className="text-base lg:text-lg px-4 py-2 bg-gray-50 ring-2 font-bold">
            Products
          </button>
          <button className="text-base lg:text-lg px-4 py-2">Reviews</button>
          <button className="text-base lg:text-lg px-4 py-2">My Orders</button>
        </div>
        {/* grids */}
        <div className="flex flex-wrap">
          {fakeArray(20).map((n, i) => (
            <div
              key={i}
              className="w-1/2 lg:w-1/4 lg:h-72 h-40 border-2 border-gray-950 bg-gray-200"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
