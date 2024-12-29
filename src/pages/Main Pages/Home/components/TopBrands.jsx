import { brandsInfo } from "./constants";

function TopBrands() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:my-8">
      <div
        id="wrapper"
        className="flex flex-col md:flex-row gap-y-6 items-center justify-between px-2 py-2"
      >
        <div className="md:w-1/3 flex flex-col gap-y-8">
          <h2 className="text-3xl font-bold">
            Top <span className="border-b-4 border-primary-500">Brands</span>
          </h2>
          <p className="text-xl">
            Exploring the Elite: Unveiling the Top Brands of Today! 🌟 Discover
            the Pioneers: A Deep Dive into the Leading Top Brands! 🚀
            Championing Excellence: Uncovering the Top Brands Setting Trends! 💡
            Iconic Innovators: The Stories Behind the Top Brands Shaping
            Industries! 🏆 Legacy of Success: Top Brands that Define Quality and
            Craftsmanship!
          </p>

          <div className="flex items-center justify-start gap-x-4">
            <button className="px-4 py-2 md:px-6 md:py-3 transition-all rounded-md text-xl bg-primary-400 hover:bg-primary-700 border-2 border-transparent text-white">
              Know More
            </button>
            <button className="px-4 py-2 md:px-6 md:py-3 transition-all rounded-md text-xl border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-wrap items-center h-full justify-center">
          {brandsInfo.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-x-8 w-1/2 border hover:bg-primary-50 transition-all border-gray-600/15 px-4 py-2 h-24"
            >
              <img
                src={brand.iconSvg}
                alt={brand.name}
                className="w-1/5 h-full"
              />
              <h2 className=" md:text-2xl cursor-pointer line-clamp-1 text-primary-950 font-bold">
                {brand.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBrands;
