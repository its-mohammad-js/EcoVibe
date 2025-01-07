import { useSelector } from "react-redux";
import { FaInfoCircle } from "react-icons/fa";
import FilterOptionRow from "./FilterOptionRow";
import useMediaQuery from "hooks/useMediaQuery";
import { BiSort } from "react-icons/bi";
import { getProductOption } from "./filterOptionsInfo";
import useGetOptions from "hooks/useGetOptions";

function ProductOptions({ onSelectOption }) {
  // selected product types
  const selectedFilters = useSelector((state) => state.filters);
  // supported product option's data
  const { optionsList, loading } = useGetOptions();
  // check screen size of user device
  const isMobile = useMediaQuery({ maxWidth: 768 });
  //  product options
  const productOptions = getProductOption(
    selectedFilters.productTypes[0],
    optionsList
  );

  if (loading)
    return (
      <div className="text-lg animate-pulse h-full flex items-center justify-center">
        Load Options ...
      </div>
    );

  // if (false)
  if (optionsList?.length) {
    return (
      <div>
        <h4 className="text-2xl font-bold flex items-center my-2">
          <span>
            <BiSort />
          </span>
          <span>Product Options :</span>
        </h4>
        <div className="flex flex-col gap-y-4">
          {selectedFilters.productTypes.length === 1 ? (
            productOptions.map(({ title, options }, index) => (
              <FilterOptionRow
                isMobile={isMobile}
                key={index}
                title={title}
                filterKey={"selectedOptions"}
                filterOptions={options}
                selectedFilters={selectedFilters}
                changeFilterHandler={onSelectOption}
                isOption={true}
              />
            ))
          ) : (
            <div className="w-full h-10 gap-x-1.5 font-medium flex items-center justify-center">
              <span className="mb-0.5">
                <FaInfoCircle />
              </span>
              <span className="text-sm">
                Please Select A Specific Product Type !
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductOptions;
