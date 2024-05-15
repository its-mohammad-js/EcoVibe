import { SlClose } from "react-icons/sl";
import { fakeArray } from "../../helpers/constants";
import { BiCartAlt } from "react-icons/bi";

function WishListLoader({ length }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:px-2 md:max-h-[30rem] overflow-auto styled-scroll-bar">
      {fakeArray(length || 12).map((index) => (
        <div
          className="flex flex-col items-center h-44 lg:h-56 xl:h-72 bg-gray-100 shadow-md rounded-md relative animate-pulse"
          key={index}
        >
          {/* remove product button */}
          <div className="absolute top-1.5 md:mx-2 right-1.5 md:right-0">
            <button className="text-xl md:text-3xl text-gray-500 transition-all">
              <SlClose />
            </button>
          </div>
          {/* product image */}
          <div className="h-5/6 w-full bg-gradient-to-br from-gray-50 via-gray-400 to-gray-100 rounded-t-md"></div>
          {/* product summary & add to cart btn */}
          <div className="absolute w-11/12 h-16 md:h-20 bottom-1 rounded-md bg-gray-300/50 backdrop-blur hover:backdrop-blur-xl transition-all duration-700 flex items-center justify-between px-2 py-1.5 md:px-3 md:py-2 gap-x-4">
            {/* title , category , price */}
            <div className="flex flex-col items-start justify-evenly h-full flex-1">
              <h6 className="w-11/12 h-2 bg-gray-500 rounded-md">&nbsp;</h6>
              <span className="w-1/2 h-2 bg-gray-500 rounded-md">&nbsp;</span>
              <p className="w-1/5 h-2 bg-gray-500 rounded-md">&nbsp;</p>
            </div>
            {/* add to cart btn */}
            <button
              disabled
              className="p-3 text-xl md:text-3xl bg-gray-500 transition-all text-gray-50 rounded-xl"
            >
              <BiCartAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WishListLoader;
