import { useEffect } from "react";
import FilterProduct from "../../components/Explore Products Page/FilterProduct";
import ProductGrid from "../../components/Explore Products Page/ProductGrid";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { changeFilterReducer as setFilter } from "src/redux/filters/filterSlice";
import { queryToFilterObject } from "../../helpers/constants";

function ExploreProducts() {
  // redux dispatcher
  const dispatch = useDispatch();
  const queryParams = useParams();

  // effect query params to products rquest
  useEffect(() => {
    // destructure qeury to key / value array
    const query = queryToFilterObject(queryParams);
    // dispatch filters
    if (query.length) {
      query.forEach((filter) => {
        dispatch(setFilter(filter));
      });
    } else if (!query?.length) {
      // clear filters
      dispatch(setFilter({ type: "clear" }));
    }
    // clear filters
    return () => {
      dispatch(setFilter({ type: "clear" }));
    };
  }, [queryParams]);

  return (
    <>
      <div className="mx-auto min-h-screen 2xl:max-w-screen-2xl flex flex-col md:gap-y-2 md:px-2">
        {/* search / sort and filter product */}
        <FilterProduct />
        {/* filtered product */}
        <ProductGrid />
      </div>
    </>
  );
}

export default ExploreProducts;
