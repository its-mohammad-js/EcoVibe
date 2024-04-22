import { useEffect } from "react";
import FilterProduct from "../../components/Explore Products Page/FilterProduct";
import FilteredProducts from "../../components/Explore Products Page/FilteredProducts";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../redux/products/productsSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { changeFilterReducer as setFilter } from "src/redux/filters/filterSlice";
import { queryToFilterObject } from "../../helpers/constants";

function ExploreProducts() {
  // redux dispatcher
  const dispatch = useDispatch();
  const queryParams = useParams();

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
        <FilteredProducts />
      </div>
    </>
  );
}

export default ExploreProducts;
