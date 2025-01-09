import { useNavigate } from "react-router-dom";

const categoriesInfo = [
  {
    title: "Fashion",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(3).webp?alt=media&token=0274a5e4-a2cb-40e1-8d23-863122540a7e",
    query: "/EcoVibe/Explore-Products/category=fashion",
  },
  {
    title: "Electronics",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(4).webp?alt=media&token=808a32db-2350-440e-9c99-a95c0278663c",
    query: "/EcoVibe/Explore-Products/category=electronics",
  },
  {
    title: "Home Decor",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(5).webp?alt=media&token=c7991f41-f904-4840-8a89-12233566fdc0",
    query: "/EcoVibe/Explore-Products/category=home decor",
  },
  {
    title: "Health and Wellness",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(1).webp?alt=media&token=5d1daa08-cf2e-4c43-8e35-df0e03a1381d",
    query: "/EcoVibe/Explore-Products/category=health and wellness",
  },
  {
    title: "Beauty and Personal Care",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(2).webp?alt=media&token=e6fb720a-ba2f-4888-82b7-ebf301e2e207",
    query: "/EcoVibe/Explore-Products/category=beauty and personal care",
  },
];

function ShopByCategory() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8">
      <div
        id="wrapper"
        className="flex flex-col items-center gap-y-4 md:gap-y-8 px-2.5 md:px-4 py-2"
      >
        {/* title */}
        <div className="text-center flex flex-col gap-y-1.5 md:gap-y-2">
          <p className="text-base md:text-xl text-primary-400 font-semibold">
            All Categories
          </p>
          <h4 className="text-3xl md:text-5xl font-bold">Shop By Category</h4>
          <span className="text-sm text-gray-600 md:text-lg">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Deserunt blanditiis provident dicta.
          </span>
        </div>

        {/* categories */}
        <div className="flex flex-col md:flex-row gap-x-4 items-center w-full gap-y-4">
          {categoriesInfo.map((category, index) => (
            <div
              key={index}
              className="w-full h-72 flex flex-col items-center justify-center gap-y-4 relative bg-gray-950 bg-opacity-40 hover:bg-opacity-50 group"
            >
              {/* thumbnail */}
              <div className="absolute inset-0 -z-10">
                <img
                  src={category.thumbnail}
                  alt="category thumbnail"
                  className="w-full h-full object-cover group-hover:object-right-bottom transition-all duration-1000"
                />
              </div>

              {/* category description */}
              <div className="w-full text-center text-white flex flex-col items-center h-full justify-center gap-y-6">
                <h4 className="text-xl font-bold md:text-2xl">
                  {category.title}
                </h4>
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "instant",
                    });
                    navigate(category.query);
                  }}
                  className="bg-primary-900 px-4 py-2 rounded-md w-fit text-base md:text-lg hover:bg-primary-50 transition-all hover:text-primary-950 text-white font-semibold"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory;
