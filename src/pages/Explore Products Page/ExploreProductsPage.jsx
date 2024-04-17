import FilterProduct from "../../components/Explore Products Page/FilterProduct";
import FilteredProducts from "../../components/Explore Products Page/FilteredProducts";

function ExploreProducts() {
  return (
    <>
      <div className="mx-auto 2xl:max-w-screen-2xl flex flex-col gap-y-6 md:px-2">
        {/* search / sort and filter product */}
        <FilterProduct />
        {/* filtered product */}
        <FilteredProducts />
      </div>
    </>
  );
}

export default ExploreProducts;
