import ProductInfoLoader from "UI/Loaders/ProductInfoLoader";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorIconUrl } from "appData";
import { closest } from "color-2-name";

function ProductInfo() {
  const {
    data: productData,
    loading,
    error,
  } = useSelector((state) => state.products); // product data
  const { Images, Name, Category, Options } = productData[0] || {}; // destructure product data
  const { auth_status } = useSelector((state) => state.userData); // current user data
  const navigate = useNavigate(); // navigate jook

  // loading screen
  if (loading || auth_status === 204) return <ProductInfoLoader />;

  // main component
  if ((productData.length && !loading) || false)
    return (
      <div id="wrapper">
        {/* bread crumbs */}
        <div className="flex items-center px-2 py-2 gap-2">
          <h4
            onClick={() => navigate("/EcoVibe/Explore-Products/")}
            className="cursor-pointer text-gray-600 hover:font-medium transition-all"
          >
            Products
          </h4>
          <p>/</p>
          <p
            onClick={() =>
              navigate(
                `/EcoVibe/Explore-Products/category=${Category.toLowerCase()}`
              )
            }
            className="line-clamp-1 w-20 xl:w-auto text-gray-600 hover:font-medium transition-all cursor-pointer"
          >
            {Category}
          </p>
          <p>/</p>
          <p className="line-clamp-1 w-24 xl:w-auto text-gray-600">{Name}</p>
        </div>
        {/* product information & order box */}
        <div className="md:flex xl:h-[40rem]">
          {/* product details */}
          <div className="flex flex-col md:flex-row justify-start w-full gap-4 xl:px-4 xl:py-2">
            {/* product image's */}
            <ProductImages Images={Images} />
            {/* product detail's & order box */}
            <ProductDescription />
          </div>
        </div>
        {/* options table */}
        <div className="mx-auto px-4 lg:px-6">
          {Options && (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 md:text-xl w-1/3 border">
                    Option Title
                  </th>
                  <th className="px-4 py-2 md:text-xl w-2/3 border">List</th>
                </tr>
              </thead>

              <tbody>
                {Options.map(({ title, options }, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border lowercase font-medium">
                      {title}
                    </td>
                    <td className="px-4 py-2 border md:flex gap-2">
                      {options.map((opt, index) => (
                        <p key={index} className="inline">
                          {title === "color" ? closest(opt)?.name : opt},
                        </p>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );

  // error screen
  if ((!loading && !productData?.length) || error)
    return (
      <div className="flex items-center justify-center">
        <img
          src={errorIconUrl}
          alt="error-icon"
          className="size-96 object-cover"
        />
        <div className="flex flex-col gap-y-4">
          <h4 className="text-8xl text-primary-800 font-bold">Oops!</h4>
          <p className="text-lg font-semibold">
            There was a problem connecting to our server. Please check your
            internet connection and try again.
          </p>
          <button
            onClick={() => navigate("/EcoVibe/Explore-Products/")}
            className="w-fit px-4 py-2 border border-primary-500 bg-primary-500 text-gray-50 rounded-md hover:bg-gray-50 hover:text-primary-500 transition-all"
          >
            Back to explore
          </button>
        </div>
      </div>
    );
}

export default ProductInfo;
