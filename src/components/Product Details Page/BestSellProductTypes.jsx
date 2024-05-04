import { useNavigate } from "react-router-dom";

const slidesinfo = [
  {
    title: "Men Winter Jacket",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fproduct-detail-product-type-banner-1-6630c70895a02.webp?alt=media&token=47d7eb67-9833-4434-9c8a-d7b5ca5385bb",
    query: "/EcoVibe/Explore-Products/productTypes=jackets",
    price: "$35",
  },
  {
    title: "Women Shoe's",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fproduct-detail-product-type-banner-3-6630c4276df2b.webp?alt=media&token=1ba22d59-4d3b-4715-90c6-a5bf3930a84f",

    query: "/EcoVibe/Explore-Products/productTypes=shoes",
    price: "$78",
  },
  {
    title: "Wireless Headphone's",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fproduct-detail-product-type-banner-2-6630c421ece4c.webp?alt=media&token=7df8f917-95f8-4096-ab5b-e12c5616ead6",

    query: "/EcoVibe/Explore-Products/productTypes=headphones",
    price: "$230",
  },
  {
    title: "Smart Phone's",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fproduct-detail-product-type-banner-4-6630c43f56549.webp?alt=media&token=7b797634-f18f-4d33-a390-7bf932b2139d",
    query: "/EcoVibe/Explore-Products/productTypes=smart phones",
    price: "$132",
  },
];

function BestSellProductTypes() {
  const navigate = useNavigate();

  return (
    <div>
      {/* title */}
      <div className="flex flex-col gap-y-2 items-center justify-center mt-6">
        <span className="font-medium lg:text-lg text-primary-500">
          Most Popular Product's
        </span>
        <h4 className="text-3xl lg:text-5xl font-semibold">
          Top Product Type's
        </h4>
        <p className="text-center md:text-base text-sm px-2 py-1">
          there are many variations of passages of Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      {/* slides */}
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4 mt-8 w-11/12 mx-auto">
        {slidesinfo.map(({ query, title, thumbnail, price }, index) => (
          <div key={index} className="w-full md:w-1/4 h-96">
            <div className="w-full h-5/6 bg-blue-200">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover hover:object-left-bottom transition-all duration-500"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-2">
              <h6
                onClick={() => navigate(query)}
                className="text-xl line-clamp-1 font-medium cursor-pointer hover:text-primary-600 transition-all"
              >
                {title}
              </h6>
              <p>
                start form <span className="underline">{price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellProductTypes;
