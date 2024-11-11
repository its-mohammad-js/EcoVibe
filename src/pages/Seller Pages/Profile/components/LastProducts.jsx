import { useNavigate } from "react-router-dom";
import { useProfileData } from "../SellerProfilePage";

function LastProducts() {
  const {
    isOwner,
    sellerData: { products },
  } = useProfileData();
  const navigate = useNavigate();

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-0.5 pb-1">
      {products.map((product, i) => (
        <div key={i} className="h-36 relative group lg:h-56 bg-gray-200">
          <img
            src={product.Thumbnail}
            alt="product-thumbnail"
            className="size-full object-cover"
          />

          <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all inset-0 bg-gray-950/50 backdrop-blur-md flex items-center justify-evenly flex-col px-2 py-1">
            <p className="text-center line-clamp-5 text-xs lg:text-base text-gray-50 select-none break-words">
              {product.Description} Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Laborum dolores aut libero nemo quia nihil,
              quis, natus nobis dignissimos asperiores labore delectus magnam
              eveniet voluptates quo, laboriosam sed obcaecati ullam.
            </p>

            <button
              onClick={() =>
                navigate(
                  isOwner
                    ? `/EcoVibe/Dashboard/Products/${product.id}`
                    : `/EcoVibe/Products/${product.id}`
                )
              }
              className="px-4 py-2 text-xs lg:text-base bg-gray-950 text-gray-50 rounded-xl w-fit hover:bg-gray-200 hover:text-gray-950 transition-all"
            >
              {isOwner ? "Show in dashborad" : "More info"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LastProducts;
