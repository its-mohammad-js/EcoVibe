import { BiHeart } from "react-icons/bi";
import { calculateAverage } from "helpers";
import ReactStars from "react-stars";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductCard({ productData, onProductLike, isLiked }) {
  const { Thumbnail, Name, Price, Stars, id } = productData; // destructur product data from props
  const { loading } = useSelector((state) => state.userData); // get loading state
  const navigate = useNavigate(); // navigate hooks

  return (
    <div className="flex select-none flex-col items-center justify-between hover:-translate-y-0.5 duration-500 h-72 md:h-80 md:w-56 w-44 bg-gray-50 rounded-lg hover:shadow-md transition-all cursor-pointer">
      {/* product cover */}
      <div className="w-full h-3/5 relative">
        <img
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant",
            });
            navigate(`/EcoVibe/Products/${id}`);
          }}
          draggable={false}
          src={Thumbnail}
          alt={Name}
          className="rounded-lg h-full w-full object-cover"
        />
        {/* like button */}
        <button
          onClick={() => onProductLike(id)}
          disabled={loading}
          className="absolute top-2 right-2 text-xl md:text-2xl bg-gray-50/60 p-1.5 hover:scale-110 transition-all duration-300 rounded-full group disabled:opacity-70 disabled:cursor-progress"
        >
          <BiHeart className={`${isLiked && "!hidden"} group-hover:hidden`} />
          <FaHeart
            className={`${
              isLiked ? "!block text-red-600" : ""
            } hidden group-hover:block group-hover:text-red-500/75 transition-all`}
          />
        </button>
      </div>
      {/* product description */}
      <div className="flex flex-col justify-between px-3 py-1.5 md:px-4 md:py-2 h-2/5 w-full">
        <h2
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant",
            });
            navigate(`/EcoVibe/Products/${id}`);
          }}
          className="font-bold line-clamp-2 w-fit md:mt-1 hover:text-primary-700 transition-all"
        >
          {Name}
        </h2>

        <div className="w-full flex items-center justify-between py-1">
          <div className="">
            <ReactStars
              count={5}
              value={calculateAverage(Stars || [0])}
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
