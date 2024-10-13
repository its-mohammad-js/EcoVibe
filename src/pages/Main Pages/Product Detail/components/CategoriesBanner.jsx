import { useNavigate } from "react-router-dom";

const slidesInfo = [
  {
    subTitle: "Trend-Setter Chronicles",
    title: "Strutting in Style",
    desc: "In a world where fashion evolves like the seasons, one outfit at a time, join us on a journey of self-expression through clothing, accessories, and everything in between!",
    query: "/EcoVibe/Explore-Products/category=fashion",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fproduct-detail-categories-banner-3-6630cf4b8113d.webp?alt=media&token=4a434c73-a709-4055-a7cd-a1946da0322e",
  },
  {
    subTitle: "Living Spaces Revival",
    title: "cozy Corners & Chic Designs",
    desc: "Step into the realm of home decor magic where cushions become clouds to lounge on, walls whisper tales of beauty, and every corner tells a story of love and comfort! ",
    query: "/EcoVibe/Explore-Products/category=home decor",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fproduct-detail-categories-banner-2-6630cf3cd309d.webp?alt=media&token=43fd16f3-91c7-4ba4-8c80-f84f861b33a8",
  },
  {
    subTitle: "Wellness Warriors Unite",
    title: "Nourishing Mind, Body & Soul",
    desc: "From mindful mornings to serene nights, let's explore the art of balancing mind, body, and soul while embracing the journey to a healthier and happier you!",
    query: "/EcoVibe/Explore-Products/category=health and wellness",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fproduct-detail-categories-banner-1-6630cf37bd7c1.webp?alt=media&token=f4b657d0-ee13-45eb-b427-2e5c92475a7f",
  },
];

function CategoriesBanner() {
  const navigate = useNavigate();

  return (
    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-y-4 lg:justify-evenly">
      {slidesInfo.map(({ desc, query, subTitle, thumbnail, title }, index) => (
        <div
          key={index}
          className="w-11/12 md:w-1/3 lg:w-1/4 h-36 md:h-96 relative group"
        >
          {/* summary */}
          <div className="absolute inset-0 invisible md:px-4 md:py-2 mx-4 my-2 bg-primary-500/75 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-1.5 md:gap-y-2.5 lg:gap-y-4">
            <p className="text-white font-medium text-sm md:text-base">
              {subTitle}
            </p>
            <h6 className="text-xl text-center text-white font-bold line-clamp-1 lg:text-2xl">
              {title}
            </h6>
            <span className="hidden md:inline text-center text-white text-sm">
              {desc}
            </span>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(query);
              }}
              className="px-4 py-2 font-medium hover:bg-primary-600 hover:text-white rounded-md bg-white text-primary-950 text-sm md:text-base lg:text-lg transition-all"
            >
              Discover More
            </button>
          </div>
          {/* thumbnail */}
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default CategoriesBanner;
