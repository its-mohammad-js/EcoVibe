import ReactStars from "react-stars";

function ProductCardLoader() {
  return (
    <div className="flex flex-col items-center justify-between hover:-translate-y-0.5 duration-500 h-72 md:h-80 md:w-56 w-44 bg-gray-50 rounded-lg hover:shadow-md transition-all">
      {/* product cover */}
      <div className="w-full h-3/5 relative">
        <div className="rounded-lg h-full w-full object-cover bg-gray-300" />
      </div>
      {/* product description */}
      <div className="flex flex-col justify-between px-3 py-1.5 md:px-4 md:py-2 h-2/5 w-full">
        <h2 className="font-bold line-clamp-2 bg-gray-300 mt-2.5 w-3/5 h-4 rounded-full">
          &nbsp;
        </h2>

        <div className="w-full flex items-center justify-between py-1">
          <div className="">
            <ReactStars count={5} size={18} color2={"gray"} edit={false} />
          </div>

          <p className="font-semibold bg-gray-300 w-11 h-4 rounded-full">
            <span>&nbsp;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCardLoader;
