import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "/src/config/firebase";
import toast from "react-hot-toast";

function useGetOptions(productType) {
  // options list fetch data
  const [{ optionsList, loading, error }, setOptions] = useState({
    loading: false,
    optionsList: [],
    error: null,
  });

  // fetch product options
  async function getSupportedOptions() {
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
      const productOptions = !productType
        ? data[0].OptionData
        : data[0].OptionData.find((opt) => opt.productType === productType)
            .productOptions;

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
    const storedOptionList = JSON.parse(
      localStorage.getItem("productsOptions")
    );
    const allOptions = storedOptionList && storedOptionList[0]?.OptionData;

    if (storedOptionList?.length) {
      const productOptions = !productType
        ? allOptions
        : allOptions.find((opt) => opt.productType === productType)
            ?.productOptions;

      setOptions((prev) => ({ ...prev, optionsList: productOptions }));
    } else {
      getSupportedOptions();
    }
  }, [productType]);

  return {
    optionsList,
    loading,
    error,
    getSupportedOptions,
  };
}

export default useGetOptions;
