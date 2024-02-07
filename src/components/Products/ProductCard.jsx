import { calculateAverage } from "../../helpers/constants";
import ReactStars from "react-stars";

function ProductCard(props) {
  // destructur product data from props
  const { Thumbnail, Name, Price, Stars } = props;

  return (
    <div className="flex flex-col items-center h-72 md:h-80 md:w-56 w-44 bg-gray-50 rounded-lg hover:shadow-md transition-all">
      {/* product cover */}
      <div className="w-full h-3/5">
        <img
          src={Thumbnail}
          alt={Name}
          className="object-cover rounded-lg h-full w-full"
        />
      </div>
      {/* product description */}
      <div className="flex flex-col justify-between px-3 py-1.5 h-2/5 w-full">
        <h2 className="font-bold">{Name}</h2>

        <p>
          <span>${Price}</span>
        </p>

        <p className="">
          {/* <ReactStars
            count={5}
            value={calculateAverage(Stars)}
            size={20}
            color2={"#ffd700"}
            edit={false}
          /> */}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
