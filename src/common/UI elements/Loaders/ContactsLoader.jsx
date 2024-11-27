
import { fakeArray } from "constants";
import { AiOutlineUser } from "react-icons/ai";

function ContactsLoader() {
  return (
    <div className="w-80 lg:w-96 h-[90vh] 2xl:h-[45rem] bg-gray-50 rounded-md z-10 p-2 flex flex-col">
      {/* search input */}
      <div className="flex bg-gray-200 rounded-md relative">
        <input
          disabled
          type="text"
          placeholder="search contacts"
          className="w-full px-4 py-2 bg-transparent placeholder:text-gray-600 outline-none rounded-md"
        />
      </div>
      {/* contacts list */}
      <div className="flex-1 overflow-auto h-[27rem] xl:h-[35rem] styled-scroll-bar my-2">
        <div className="inline-flex flex-col w-full gap-y-4 h-full">
          {fakeArray(20).map((n, i) => (
            <div
              key={i}
              className="w-full animate-pulse h-28 flex items-center px-4 py-2 gap-x-4 cursor-pointer hover:bg-gray-200 transition-all rounded-xl"
            >
              <div className="size-16 lg:size-20 flex items-center justify-center group bg-gray-200 text-gray-500 rounded-full">
                <AiOutlineUser className="text-6xl lg:text-7xl mt-3 group-hover:mt-2 transition-all rounded-full" />
              </div>

              <div className="flex flex-col gap-y-2.5">
                <p className="w-36 h-2 bg-gray-300 rounded-md"></p>
                <p className="w-24 h-2 bg-gray-300 rounded-md"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactsLoader;
