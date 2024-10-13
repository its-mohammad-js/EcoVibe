import ReactStars from "react-stars";
import { fakeArray } from "constants";
import { useMediaQuery } from "react-responsive";

function ProductReviewLoader() {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <div>
      {fakeArray(isMobile ? 4 : 6).map((comment, index) => (
        <div key={index} className="mt-2 mb-4 animate-pulse">
          <div className="">
            {/* author info */}
            <div className="w-full flex items-center gap-3">
              <div className="size-16 object-contain rounded-full bg-gray-200"></div>

              <div className="flex flex-col">
                <h6 className="text-lg line-clamp-1 font-bold w-36 h-1 bg-gray-300 rounded-md"></h6>

                <div>
                  <ReactStars value={4} size={20} edit={false} />
                </div>
              </div>
            </div>
            {/* main content */}
            <div className="mt-1 flex flex-col gap-1 py-1">
              <p className="text-sm text-gray-700 flex flex-col gap-y-4">
                <p className="w-full h-1 bg-gray-400"></p>
                <p className="w-1/2 h-1 bg-gray-400"></p>
                <p className="w-2/3 h-1 bg-gray-400"></p>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductReviewLoader;
