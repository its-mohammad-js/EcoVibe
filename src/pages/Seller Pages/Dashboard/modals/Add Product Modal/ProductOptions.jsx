import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { db } from "../../../../../config/firebase";
import toast from "react-hot-toast";
import { fakeArray, isInArray } from "constants";

function ProductOptions({ getValues, setValue, isEdit }) {
  // selected options data
  const [selectedOptions, setSelectedOptions] = useState([]);
  // options list fetch data
  const [{ optionsList, loading, error }, setOptions] = useState({
    loading: false,
    optionsList: [],
    error: null,
  });
  // necessary data
  const { Type } = getValues();
  const optionMenuRef = useRef();

  // fetch product options
  async function fetchOptions() {
    try {
      // set loading
      setOptions((prev) => ({ ...prev, loading: true }));
      // refrence to collection of produscts in database
      const optionsCollectionRef = collection(db, "ProductsOptions");
      // send request to database
      const data = (await getDocs(optionsCollectionRef))?.docs.map((doc) =>
        doc.data()
      );
      // store data in local storage
      localStorage.setItem("productsOptions", JSON.stringify(data));
      // read selected product options
      const productOptions = data[0].OptionData.find(
        (opt) => opt.productType === Type
      ).productOptions;

      // dispatch success
      setOptions({
        optionsList: productOptions || [],
        loading: false,
        error: null,
      });
    } catch (error) {
      toast.error(error?.message);
      setOptions((prev) => ({
        ...prev,
        error: error?.message,
        loading: false,
      }));
    }
  }

  // read product options from local storage or from data-base
  useEffect(() => {
    if (!Type) return;

    const storedOptionList = JSON.parse(
      localStorage.getItem("productsOptions")
    );

    if (storedOptionList?.length) {
      const productOptions = storedOptionList[0].OptionData.find(
        (opt) => opt.productType === Type
      )?.productOptions;

      setOptions((prev) => ({ ...prev, optionsList: productOptions }));
    } else {
      fetchOptions();
    }
  }, [Type]);

  // change selected options
  function onSelectOptions(title, options) {
    // merge options data into single object
    const mergedOptions = {
      title,
      options: options.map(({ value }) => value),
    };
    // filter selcted options
    const filteredOptions = selectedOptions.filter(
      (opt) => opt.title !== title
    );
    // add | remove options from selected options
    setSelectedOptions(() =>
      options.length ? [...filteredOptions, mergedOptions] : filteredOptions
    );
  }

  // set selected options to main form state on each change
  useEffect(() => {
    // set options to main form state
    setValue(
      "Options",
      !isEdit ? JSON.stringify(selectedOptions) : selectedOptions
    );
  }, [selectedOptions]);

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
          onClick={() => fetchOptions()}
          className="px-4 py-2 rounded-md bg-primary-500 text-gray-50"
        >
          Try Again
        </button>
      </div>
    );

  // loading screen
  if (loading)
    return (
      <div className="w-full h-80 animate-pulse">
        <h6 className="text-center text-3xl font-bold text-primary-300">
          Load Options...
        </h6>
        <div className="flex flex-col gap-y-4 my-4">
          {fakeArray(4).map((num, index) => (
            <Select key={index} isDisabled={true} />
          ))}
        </div>
      </div>
    );

  // main form
  if (!loading && optionsList?.length)
    return (
      <div>
        {/* title */}
        <div className="text-center my-2">
          <h4 className="text-3xl font-bold">Select Options</h4>
          <p className="leading-6 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
            voluptas illo voluptatum rem corrupti pariatur omnis, quidem tempora
            tempore quis quisquam!
            <span className="hidden lg:inline">
              &nbsp; Repellendus inventore quod quas repudiandae aliquam
              voluptate quae unde, vero nostrum fugiat earum laborum nobis
              obcaecati nesciunt vitae molestias.
            </span>
          </p>
        </div>
        {/* options list */}
        <div className="">
          <h6 className="text-xl font-bold">Options List :</h6>

          <div ref={optionMenuRef} className="flex flex-col gap-y-4 my-2">
            {optionsList.map(({ title, options }, index) => {
              return (
                <div key={index} className="option">
                  <Select
                    onChange={(e) => onSelectOptions(title, e)}
                    value={selectedOptions
                      .filter(({ title: label }) => label === title)[0]
                      ?.options?.map((opt) => ({ label: opt, value: opt }))}
                    isMulti={true}
                    options={options.map((opt) => ({ label: opt, value: opt }))}
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
