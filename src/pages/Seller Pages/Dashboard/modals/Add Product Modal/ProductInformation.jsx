import { CgClose } from "react-icons/cg";
import {
  isInArray,
  supportedCategories,
  toggleElementInArray,
} from "constants";
import Select from "react-select";
import { useEffect, useState } from "react";

const categoryOptions = supportedCategories.map(({ title }) => ({
  label: title,
  value: title,
}));

const supportedTags = [
  "Popular",
  "Special",
  "Trend",
  "2024",
  "New Release",
  "Best Sell",
  "Coming Soon",
  "Featured",
];

const inputsValidation = {
  Name: {
    required: "Please choose a name",
    minLength: { value: 3, message: "Min length is 3 characters" },
    pattern: {
      value: /^[a-zA-Z0-9 ]+$/,
      message: "Name can only contain letters and numbers",
    },
  },
  Category: {
    required: "Select Cateogry",
  },
  Type: {
    required: "Choose Product Type",
  },
  Description: {
    required: "This field is reqired",
  },
  Price: {
    required: "This field is reqired",
    max: {
      value: 1000,
      message: "Max price is $1000",
    },
    min: {
      value: 1,
      message: "Max price is $1",
    },
    pattern: {
      value: /^(?!0\d)(\d+(\.\d{1,2})?)$/,
      message: "Invalid number, please enter price in N.NN format",
    },
  },
};

const getCategoryOptions = (category, key) => {
  return supportedCategories
    .find(({ title }) => title === category)
    ?.[key]?.filter(({ used }) => !used)
    .map(({ title }) => ({ label: title, value: title }));
};

function ProductInformation({ register, setValue, getValues, errors, isEdit }) {
  const [tags, setTags] = useState([]);

  // set tags to main (parent) form data
  useEffect(() => {
    setValue("Tags", JSON.stringify(tags));
  }, [tags]);

  return (
    <div className="flex flex-col gap-y-2 mb-6 lg:basis-2/5">
      <div className="grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4">
        {/* product title input */}
        <div className="flex flex-col gap-y-2">
          <h6 className="font-semibold lg:text-lg">Product Name :</h6>
          <input
            autoFocus={isEdit}
            type="text"
            {...register("Name", { ...inputsValidation.Name })}
            className="px-3 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-primary-400/50 transition-all"
            placeholder="Enter Your Product Title"
          />
          <p className="text-red-500 px-1">{errors?.Name?.message}</p>
        </div>
        {/* category select */}
        <div className="flex flex-col gap-y-2">
          <h6 className="font-semibold lg:text-lg">Category :</h6>
          <Select
            menuShouldScrollIntoView={false}
            options={categoryOptions}
            {...register("Category", { ...inputsValidation.Category })}
            onChange={({ value }) => setValue("Category", value)}
            placeholder={isEdit ? getValues()?.Category : "Add Category"}
            isDisabled={isEdit}
          />
          <p className="text-red-500 px-1">{errors?.Category?.message}</p>
        </div>
        {/* type select */}
        <div className="flex flex-col gap-y-2">
          <h6 className="font-semibold lg:text-lg">Product Type :</h6>
          <Select
            menuShouldScrollIntoView={false}
            {...register("Type", { ...inputsValidation.Type })}
            onChange={({ value }) => setValue("Type", value)}
            options={getCategoryOptions(getValues()?.Category, "productTypes")}
            placeholder={isEdit ? getValues()?.Type : "Select Product Type"}
            isDisabled={isEdit}
          />
          <p className="text-red-500 px-1">{errors?.Type?.message}</p>
        </div>
        {/* collection select */}
        <div className="flex flex-col gap-y-2">
          <h6 className="font-semibold lg:text-lg">Collection :</h6>
          <Select
            menuShouldScrollIntoView={false}
            {...register("Collection")}
            onChange={({ value }) => setValue("Collection", value)}
            options={getCategoryOptions(getValues()?.Category, "collections")}
            placeholder={isEdit ? getValues()?.Collection : "Add Collection"}
          />
        </div>
      </div>
      {/* tags select */}
      <div className="flex flex-col gap-y-2">
        <h6 className="font-semibold lg:text-lg">Tags :</h6>
        <div className="flex flex-wrap gap-2">
          {supportedTags.map((tag, index) => (
            <button
              type="button"
              onClick={() => setTags(toggleElementInArray(tags, tag))}
              key={index}
              className={`${
                isInArray(tags, tag)
                  ? "bg-primary-500 text-gray-50 border-gray-50 [&>span]:inline"
                  : "border-primary-300 bg-gray-50 text-primary-500 [&>span]:hidden"
              } flex items-center gap-1 px-2 py-1 rounded-md border transition-all`}
            >
              <p>{tag}</p>
              <span>
                <CgClose />
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* description input */}
      <div className="flex flex-col gap-y-2">
        <h6 className="font-semibold lg:text-lg">Description :</h6>
        <textarea
          type="text"
          rows={8}
          {...register("Description", { ...inputsValidation.Description })}
          className="px-3 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-primary-400/50 transition-all resize-none"
          placeholder="Write About Your Product"
        />
        <p className="text-red-500 px-1">{errors?.Description?.message}</p>
      </div>
      {/* price changer */}
      <div className="flex flex-col gap-y-2">
        <h6 className="font-semibold lg:text-lg">Price :</h6>
        <input
          type="number"
          step="0.01"
          rows={8}
          {...register("Price", { ...inputsValidation.Price })}
          className="px-3 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-primary-400/50 transition-all resize-none"
          placeholder="Add Product Price"
        />
        <p className="text-red-500 px-1">{errors?.Price?.message}</p>
      </div>
    </div>
  );
}
export default ProductInformation;
