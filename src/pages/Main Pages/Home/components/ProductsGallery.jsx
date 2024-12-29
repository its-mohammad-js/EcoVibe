import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { galleryData } from "./constants";

function ProductsGallery() {
  const navigate = useNavigate(); // navigate hook

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-4 md:mt-10">
      {/* title */}
      <div className="w-full px-2 my-1 md:my-4 md:px-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">Top Products</h2>
        <button
          onClick={() => navigate("/EcoVibe/Explore-Products/tags=best sell")}
          className="flex items-center gap-x-1 md:gap-x-1.5 md:text-lg text-sm text-gray-500 hover:text-accent-300 transition-all cursor-pointer"
        >
          View All <FaArrowRight className="text-xs md:text-base" />
        </button>
      </div>
      {/* products gallery */}
      <div
        id="wrapper"
        className="flex flex-col md:flex-row w-full items-center gap-y-3 px-2 py-1 gap-x-4 md:h-[600px] lg:h-[700px]"
      >
        <div className="flex md:flex-col w-full md:h-full items-center justify-between gap-x-2">
          {/* mens t-shirts */}
          <div className="w-1/2 md:w-full h-48 md:h-1/2 rounded-md group">
            <div className="h-3/4 relative">
              <img
                src={galleryData.menTshirts.imgUrl}
                alt="men t-shirt pic"
                className="w-full h-full object-cover rounded-md"
              />

              <div className="inset-0 bg-gray-300/70 absolute rounded invisible h-0 group-hover:h-full group-hover:visible ease-linear duration-500 flex items-center justify-center">
                <Link
                  to={galleryData.menTshirts.query}
                  onClick={() => window.scrollTo(0, 0)}
                  className="px-2 py-1 bg-white/65 text-black font-bold border-2 border-gray-300 rounded-md text-sm hidden group-hover:block md:text-lg hover:scale-110 transition-all"
                >
                  view more ...
                </Link>
              </div>
            </div>

            <p className="flex flex-col items-center px-2 py-1 ">
              <span className="font-bold text-sm line-clamp-1 text-center md:text-lg">
                {galleryData.menTshirts.title}
              </span>
              <span className="px-2 py-1 bg-red-400 rounded-md text-white text-xs md:text-base">
                Up to {galleryData.menTshirts.offer} OFF
              </span>
            </p>
          </div>
          {/* men converse */}
          <div className="w-1/2 md:w-full h-48 md:h-1/2  group">
            <div className="h-3/4 relative">
              <img
                src={galleryData.menConverse.imgUrl}
                alt="men t-shirt pic"
                className="w-full h-full object-cover rounded-md"
              />

              <Link
                to={galleryData.menConverse.query}
                onClick={() => window.scrollTo(0, 0)}
                className="inset-0 bg-gray-300/70 absolute rounded invisible h-0 group-hover:h-full group-hover:visible ease-linear duration-500 flex items-center justify-center"
              >
                <span className="px-2 py-1 bg-white/65 text-black font-bold border-2 border-gray-300 rounded-md text-sm hidden group-hover:block md:text-lg hover:scale-110 transition-all">
                  view more ...
                </span>
              </Link>
            </div>

            <p className="flex flex-col items-center px-2 py-1 ">
              <span className="font-bold text-sm line-clamp-1 text-center md:text-lg">
                {galleryData.menConverse.title}
              </span>
              <span className="px-2 py-1 bg-red-400 rounded-md text-white text-xs md:text-base">
                Up to {galleryData.menConverse.offer} OFF
              </span>
            </p>
          </div>
        </div>
        {/* womens sweaters */}
        <div className="w-full h-72 md:h-full group">
          <div className="h-3/4 md:h-5/6 relative">
            <img
              src={galleryData.sweaterWomen.imgUrl}
              alt="men t-shirt pic"
              className="w-full h-full object-cover rounded-md"
            />

            <Link
              to={galleryData.sweaterWomen.query}
              onClick={() => window.scrollTo(0, 0)}
              className="inset-0 bg-gray-300/70 absolute rounded invisible h-0 group-hover:h-full group-hover:visible ease-linear duration-500 flex items-center justify-center"
            >
              <span className="px-2 py-1 bg-white/65 text-black font-bold border-2 border-gray-300 rounded-md text-sm hidden group-hover:block md:text-lg hover:scale-110 transition-all">
                view more ...
              </span>
            </Link>
          </div>

          <p className="flex flex-col h-1/4 md:h-1/6 items-center justify-center px-2 py-1 md:px-4 md:py-2">
            <span className="font-bold text-sm line-clamp-1 text-center md:text-lg">
              {galleryData.sweaterWomen.title}
            </span>
            <span className="px-2 py-1 bg-red-400 rounded-md text-white text-xs md:text-base">
              Up to {galleryData.sweaterWomen.offer} OFF
            </span>
          </p>
        </div>

        <div className="flex md:flex-col w-full md:h-full items-center justify-between gap-x-2">
          {/* womens t-shirt */}
          <div className="w-1/2 md:w-full h-48 md:h-1/2 group">
            <div className="h-3/4 relative">
              <img
                src={galleryData.womenTshirts.imgUrl}
                alt="men t-shirt pic"
                className="w-full h-full object-cover rounded-md"
              />

              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={galleryData.womenTshirts.query}
                className="inset-0 bg-gray-300/70 absolute rounded invisible h-0 group-hover:h-full group-hover:visible ease-linear duration-500 flex items-center justify-center"
              >
                <span className="px-2 py-1 bg-white/65 text-black font-bold border-2 border-gray-300 rounded-md text-sm hidden group-hover:block md:text-lg hover:scale-110 transition-all">
                  view more ...
                </span>
              </Link>
            </div>

            <p className="flex flex-col items-center px-2 py-1 ">
              <span className="font-bold text-sm line-clamp-1 text-center md:text-lg">
                {galleryData.womenTshirts.title}
              </span>
              <span className="px-2 py-1 bg-red-400 rounded-md text-white text-xs md:text-base">
                Up to {galleryData.womenTshirts.offer} OFF
              </span>
            </p>
          </div>
          {/* womens bag */}
          <div className="w-1/2 md:w-full h-48 md:h-1/2 group">
            <div className="h-3/4 relative">
              <img
                src={galleryData.fashionBags.imgUrl}
                alt="men t-shirt pic"
                className="w-full h-full object-cover rounded-md"
              />

              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={galleryData.fashionBags.query}
                className="inset-0 bg-gray-300/70 absolute rounded invisible h-0 group-hover:h-full group-hover:visible ease-linear duration-500 flex items-center justify-center"
              >
                <span className="px-2 py-1 bg-white/65 text-black font-bold border-2 border-gray-300 rounded-md text-sm hidden group-hover:block md:text-lg hover:scale-110 transition-all">
                  view more ...
                </span>
              </Link>
            </div>

            <p className="flex flex-col items-center px-2 py-1 ">
              <span className="font-bold text-sm line-clamp-1 text-center md:text-lg">
                {galleryData.fashionBags.title}
              </span>
              <span className="px-2 py-1 bg-red-400 rounded-md text-white text-xs md:text-base">
                Up to {galleryData.fashionBags.offer} OFF
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsGallery;
