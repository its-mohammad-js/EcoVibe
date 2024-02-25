const brandsInfo = [
  {
    name: "Astra",
    iconSvg:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fastra-58827.svg?alt=media&token=3773d918-09c6-4434-a351-6297f7ab616a",
  },
  {
    name: "Paramedicos",
    iconSvg:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fparamedicos-policia.svg?alt=media&token=25e26a47-66ed-43a0-b5ca-20121cf22b98",
  },
  {
    name: "Peta",
    iconSvg:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fpeta-logo.svg?alt=media&token=d6bffc37-b79c-433b-82e5-e882e3c98825",
  },
  {
    name: "Doctolib",
    iconSvg:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Flogo-doctolib.svg?alt=media&token=8af252c5-8542-493d-ab1d-55bef616b21c",
  },
  {
    name: "AIT",
    iconSvg:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fait-group-42651.svg?alt=media&token=d83d5b83-c03d-4034-9cce-c200fc2620c7",
  },
  {
    name: "All Star",
    iconSvg:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fconverse-all-star-2.svg?alt=media&token=c5af88c9-88b9-40e4-8a96-13e568a1edd1",
  },
];

function TopBrands() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl mt-6 md:m-8">
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
              {/* <img
                src={brand.iconSvg}
                alt={brand.name}
                className="w-1/5 h-full"
              /> */}
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
