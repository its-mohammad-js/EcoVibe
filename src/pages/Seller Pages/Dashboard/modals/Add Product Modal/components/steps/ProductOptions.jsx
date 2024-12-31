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
    if (options)
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

  // change selected options
  function onSelectOptions(title, options) {
    // merge options data into single object
    const mergedOptions = { title, options: map(options, "value") };
    const finalOptions = options.length
      ? [
          ...filter(selectedOptions, (opt) => opt.title !== title),
          mergedOptions,
        ]
      : filter(selectedOptions, (opt) => opt.title !== title);

    // add | remove options from selected options
    setSelectedOptions(finalOptions);
    setValue("Options", finalOptions);
  }

  // get prev selected options
  function getPrevOptions(title) {
    // get all available colors for this product
    const allColorOptions = optionsList.filter(
      ({ title }) => title?.toLowerCase() === "color"
    )[0]?.options;

    const options = watch("Options")
      ?.filter(({ title: label }) => label === title)[0]
      ?.options?.map((opt) => {
        // use color label instead of color code
        const label =
          title?.toLowerCase() === "color"
            ? allColorOptions.filter(({ code }) => code === opt)[0]?.name
            : opt;

        return { label: label, value: opt };
      });

    return options;
  }

  // // display prev options on edit mode
  // useEffect(() => {
  //   if (isEdit && getValues()?.Options?.length) {
  //     setSelectedOptions(getValues()?.Options);
  //   }
  // }, [getValues()?.Options?.length]);

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
                    value={getPrevOptions(title)}
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
