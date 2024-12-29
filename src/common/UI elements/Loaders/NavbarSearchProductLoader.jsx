import { fakeArray } from "helpers";

function NavbarSearchProductLoader() {
  return (
    <div className="flex flex-col gap-y-4 px-2 py-1 animate-pulse">
      {fakeArray(14).map((item, index) => (
        <div
          key={index}
          className="w-full h-32 bg-gray-200 rounded-md px-3 py-1.5 flex items-center gap-x-2"
        >
          {/* product thumbnail */}
          <div
            alt="item-thumbnail"
            className="w-1/2 sm:w-1/4 h-full object-cover bg-gray-300 rounded-xl"
          />
          {/* product info */}
          <div className="w-1/2 sm:w-3/4 h-full flex flex-col justify-center gap-y-6 px-2 py-2 relative">
            <h4 className="w-2/3 h-2 rounded-md bg-gray-400"></h4>
            <p className="w-1/3 h-2 rounded-md bg-gray-300"></p>
            <p className="w-1/4 h-2 rounded-md bg-gray-300"></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavbarSearchProductLoader;
