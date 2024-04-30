import { useSelector } from "react-redux";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import { motion } from "framer-motion";
import { filterProducts } from "../../helpers/filterPorducts";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

function OfferdProducts() {
  const { loading, data } = useSelector((state) => state.products);
  // filter prdoucts (only return bakground less pics)
  const offeredProducts = filterProducts(data, { tags: ["background"] });
  // detect screen size
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const navigate = useNavigate();

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl flex flex-col gap-y-6">
      {/* offerd products */}
      <div className="w-full">
        <ProductsContainer
          isLoading={loading}
          products={data}
          title="2024 Products"
          filterObject={{ tags: "2024" }}
        />
      </div>
      {/* offer banner */}
      <div className="h-20 md:h-28 mx-2 rounded-3xl bg-gray-200 flex items-center justify-between px-1.5">
        {/* title */}
        <div className="h-full flex items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Foffer%20banner.webp?alt=media&token=0aeb869f-11c9-4aa6-8476-e445f30f03fa"
            alt="banner image"
            className="w-20 h-16 object-cover"
          />
          <div className="flex-1 h-full flex flex-col items-start justify-evenly ml-2 md:ml-4 cursor-pointer">
            <h6 className="text-xl font-bold relative md:flex gap-x-1.5 items-center md:text-3xl">
              Big <span className="border-b-2 border-primary-500">Savings</span>{" "}
              Alert!
              <p className="text-sm absolute -top-6 -right-4 md:relative md:text-xl md:top-0 rotate-6 bg-primary-800 rounded-md text-white p-1">
                Up to 20% off
              </p>
            </h6>
          </div>
        </div>
        {/* random products */}
        <div className="h-full w-1/3 flex items-center justify-end md:justify-center gap-x-2 md:gap-x-6">
          {/* offer some random product */}
          {!loading &&
            offeredProducts.length &&
            offeredProducts.map(
              (product, index) =>
                (isMobile && index > 0) || (
                  <motion.div
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/EcoVibe/Products/${product.id}`);
                    }}
                    initial={{ scale: 0, rotateX: 180 }}
                    whileInView={{ scale: 1, rotateX: 0 }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      delay: index / 2,
                    }}
                    key={index}
                    className="w-16 h-16 bg-gray-50 md:w-20 md:h-20 rounded-full relative cursor-pointer"
                  >
                    <img
                      src={product.Thumbnail}
                      className="w-full h-full object-cover"
                    />

                    {/* fake offer badge with random index */}
                    <p className="bg-primary-400 w-fit rotate-6 absolute -bottom-5 rounded-md p-1 text-white text-xs md:bottom-0">
                      <span>{index + 100 / 2}</span>%
                    </p>
                  </motion.div>
                )
            )}
        </div>
      </div>
    </div>
  );
}

export default OfferdProducts;
