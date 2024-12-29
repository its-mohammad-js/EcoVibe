import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useFormContext } from "react-hook-form";
import AddOptionsFormLoader from "UI/Loaders/AddOptionsFormLoader";
import { map, filter } from "lodash";
import useGetOptions from "../../../../../../../common/hooks/useGetOptions";

function ProductOptions({ isEdit }) {
  const { setValue, getValues, watch } = useFormContext();
  // selected options data
  const [selectedOptions, setSelectedOptions] = useState([]);
  // necessary data
  const { Type } = getValues();
  // options list data
  const { error, getSupportedOptions, loading, optionsList } =
    useGetOptions(Type);
  const optionMenuRef = useRef();

  // get options for select component
  function getOptionValues(options, title) {
    return options.map((opt) =>
      title.toLowerCase() === "color"
        ? { label: opt.name, value: opt.code }
        : { label: opt, value: opt }
    );
  }

  // reset option values on product type | category change
  useEffect(() => {
    if (isEdit) return;
    setSelectedOptions([]);
    setValue("Options", []);
  }, [watch()?.Type, watch()?.Category]);

  // set selected options to main form state on each change
  useEffect(() => {
    // set options to main form state
    setValue("Options", selectedOptions);
  }, [selectedOptions]);

  // change selected options
  function onSelectOptions(title, options) {
    // merge options data into single object
    const mergedOptions = { title, options: map(options, "value") };
    // add | remove options from selected options
    setSelectedOptions((prev) =>
      options.length
        ? [...filter(prev, (opt) => opt.title !== title), mergedOptions]
        : filter(prev, (opt) => opt.title !== title)
    );
  }

  // display prev options on edit mode
  useEffect(() => {
    if (isEdit && getValues()?.Options?.length) {
      setSelectedOptions(getValues()?.Options);
    }
  }, [getValues()?.Options?.length]);

  // error screen
  if (error && !optionsList.length)
    return (
      <div className="h-80 flex flex-col items-center justify-center gap-y-4">
        <h6 className="text-2xl font-bold">Failed To Get Product Options...</h6>
        <button
          onClick={() => getSupportedOptions()}
          className="px-4 py-2 rounded-md bg-primary-500 text-gray-50"
        >
          Try Again
        </button>
      </div>
    );

  // loading screen
  if (loading) return <AddOptionsFormLoader />;

  // main form
  if (!loading && optionsList?.length)
    return (
      <div>
        {/* title */}
        <div className="text-center my-2">
          <h4 className="text-3xl font-bold">Select Options</h4>
          <p className="leading-6 text-sm">
            This user-friendly interface allows admins to quickly add new
            products or update existing ones with ease ✏️. Key fields like
            product name, price, description, and category are neatly organized
            🛍️.
            <span className="hidden lg:inline">
              &nbsp; Admins can upload product images 📸 and set stock
              availability directly from the modal. Validation ensures correct
              data entry ✅, while real-time previews offer clarity 👀. Whether
              launching a new item or tweaking details, the modal streamlines
              operations for a smooth e-commerce experience 💼.
            </span>
          </p>
        </div>
        {/* options list */}
        <div key={watch()?.Type} className="">
          <h6 className="text-xl font-bold">Options List :</h6>

          <div ref={optionMenuRef} className="flex flex-col gap-y-4 my-2">
            {optionsList.map(({ title, options, once }, index) => {
              return (
                <div key={index} className="option">
                  <Select
                    onChange={(e) => onSelectOptions(title, once ? [e] : e)}
                    isMulti={!once}
                    options={getOptionValues(options, title)}
                    placeholder={`Choose ${title}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default ProductOptions;
