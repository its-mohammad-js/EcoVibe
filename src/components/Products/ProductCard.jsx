import { BiHeart } from "react-icons/bi";
import { calculateAverage } from "../../helpers/constants";
import ReactStars from "react-stars";
import { FaHeart } from "react-icons/fa";

function ProductCard(props) {
  // destructur product data from props
  const { Thumbnail, Name, Price, Stars } = props;

  return (
    <div className="flex flex-col items-center h-72 md:h-80 md:w-56 w-44 bg-gray-50 rounded-lg hover:shadow-md transition-all">
      {/* product cover */}
      <div className="w-full h-3/5 relative">
        <img
          src={Thumbnail}
          alt={Name}
          className="object-cover rounded-lg h-full w-full"
        />
        {/* like button */}
        <button className="absolute top-2 right-2 text-xl md:text-2xl bg-gray-50/60 p-1.5 hover:scale-110 transition-all duration-300 rounded-full group">
          <BiHeart className="group-hover:hidden" />
          <FaHeart className="hidden group-hover:block group-hover:text-red-600 transition-all" />
        </button>
      </div>
      {/* product description */}
      <div className="flex flex-col justify-between px-3 py-1.5 h-2/5 w-full">
        <h2 className="font-bold">{Name}</h2>

        <p>
          <span>${Price}</span>
        </p>

        <div className="">
          <ReactStars
            count={5}
            value={calculateAverage(Stars)}
            size={20}
            color2={"#ffd700"}
            edit={false}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
