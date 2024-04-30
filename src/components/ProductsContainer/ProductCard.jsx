import { BiHeart } from "react-icons/bi";
import { calculateAverage } from "../../helpers/constants";
import ReactStars from "react-stars";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  // destructur product data from props
  const { Thumbnail, Name, Price, Stars } = props;

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between hover:-translate-y-0.5 duration-500 h-72 md:h-80 md:w-56 w-44 bg-gray-50 rounded-lg hover:shadow-md transition-all cursor-pointer">
      {/* product cover */}
      <div className="w-full h-3/5 relative">
        <img
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/EcoVibe/Products/${props.id}`);
          }}
          src={Thumbnail}
          alt={Name}
          className="rounded-lg h-full w-full object-cover"
        />
        {/* like button */}
        <button className="absolute top-2 right-2 text-xl md:text-2xl bg-gray-50/60 p-1.5 hover:scale-110 transition-all duration-300 rounded-full group">
          <BiHeart className="group-hover:hidden" />
          <FaHeart className="hidden group-hover:block group-hover:text-red-600 transition-all" />
        </button>
      </div>
      {/* product description */}
      <div className="flex flex-col justify-between px-3 py-1.5 md:px-4 md:py-2 h-2/5 w-full">
        <h2
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/EcoVibe/Products/${props.id}`);
          }}
          className="font-bold line-clamp-2 md:mt-1 hover:text-primary-700 transition-all"
        >
          {Name}
        </h2>

        <div className="w-full flex items-center justify-between py-1">
          <div className="">
            <ReactStars
              count={5}
              value={calculateAverage(Stars)}
              size={18}
              color2={"#ffd700"}
              edit={false}
            />
          </div>

          <p className="font-semibold ">
            <span>${Price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
