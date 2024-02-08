import { BiHeart } from "react-icons/bi";
import { filterProducts } from "../../helpers/filterPorducts";
import { FaHeart } from "react-icons/fa";
import ReactStars from "react-stars";
import { calculateAverage } from "../../helpers/constants";
import CollectionGalleryLoader from "../Loader/CollectionGalleryLoader";

function CollectionsGallery({ products, isLoading }) {
  // get summer collectionfrom all products
  const summerCollection = filterProducts(products, {
    collections: ["Summer"],
  });

  if (isLoading) return <CollectionGalleryLoader />;

  if (summerCollection.length && !isLoading)
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl mt-6 bg-gray-50 py-4 lg:py-6 lg:px-4">
        {/* title */}
        <h2 className="px-2 text-2xl font-bold my-1 md:my-2 md:text-3xl">
          SPRING/SUMMER 2024
        </h2>
        {/* Gallery Wrapper */}
        <div
          id="wrapper"
          className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3 items-center px-1 py-0.5 lg:px-4 lg:py-2"
        >
          <CustomeProductCard product={summerCollection[0]} />

          <div className="flex items-center gap-x-3 w-full">
            <CustomeProductCard product={summerCollection[1]} minimal={true} />
            <CustomeProductCard product={summerCollection[2]} minimal={true} />
          </div>

          <CustomeProductCard product={summerCollection[3]} />
        </div>
      </div>
    );
}

export default CollectionsGallery;

const CustomeProductCard = ({ product, minimal }) => {
  return (
    <div className="w-full h-72 bg-gray-300/35 rounded-xl">
      <div className="w-full h-3/5 relative">
        <img
          src={product.Thumbnail}
          alt={product.Name}
          className="w-full h-full rounded-t-md object-cover"
        />

        <button className="absolute top-2 right-2 text-xl md:text-2xl bg-gray-50/60 p-1.5 hover:scale-110 transition-all duration-300 rounded-full group">
          <BiHeart className="group-hover:hidden" />
          <FaHeart className="hidden group-hover:block group-hover:text-red-600 transition-all" />
        </button>
      </div>

      <div className="flex flex-col items-start px-4 py-2">
        <span className="text-xs my-0.5">{product.Tags[0]}</span>
        <h2 className="font-bold">{product.Name}</h2>

        <p
          className={`${
            minimal && "hidden"
          } flex items-center justify-center gap-x-2 mt-2`}
        >
          {product.Options.Color.map((color, index) => (
            <span
              style={{ backgroundColor: color }}
              className="p-2 rounded-full border border-gray-400"
              key={index}
            ></span>
          ))}
          <span className="text-sm ml-0.5">+5 more ...</span>
        </p>

        <p className="mt-1 font-bold flex items-center w-full justify-between">
          <span>${product.Price}</span>
          <div>
            <ReactStars
              count={5}
              value={calculateAverage(product.Stars)}
              size={minimal ? 10 : 18}
              color2={"#ffd700"}
              edit={false}
            />
          </div>
        </p>
      </div>
    </div>
  );
};
