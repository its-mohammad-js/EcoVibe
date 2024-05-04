import { FaCheck } from "react-icons/fa";
import { supportedCategories } from "../../../helpers/constants";
import { useState } from "react";

function UserInterestsForm() {
  const [selectedTypes, setSelectedTypes] = useState([]);

  function changeTypesHandler(type) {
    let isSelcted = selectedTypes.find((t) => t === type);

    setSelectedTypes((prev) =>
      isSelcted ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  return (
    <div className="">
      {/* title */}
      <div className="flex flex-col gap-y-4 items-center">
        <h4 className="text-3xl font-bold md:text-5xl">
          Select Your <span className="text-primary-400">interests</span>
        </h4>
        <p className="text-sm text-center md:text-start md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
          quos?
        </p>
      </div>
      {/* category picker */}
      <div className="flex flex-col items-center my-4 gap-4 md:flex-row md:flex-wrap md:justify-center md:w-2/3 md:mx-auto md:mt-6">
        {supportedCategories.map(({ productTypes }) =>
          productTypes.map(({ title }, index) => (
            <button
              onClick={() => changeTypesHandler(title)}
              key={index}
              className={`${
                selectedTypes.find((t) => t === title) &&
                "!border-primary-400 text-primary-400"
              } flex items-center border-2 rounded-md border-gray-400 text-gray-400 hover:border-primary-300 hover:text-primary-300 transition-all px-3 py-2 w-11/12 md:w-56 gap-x-2`}
            >
              <span className="text-xl">
                <FaCheck />
              </span>
              <h6 className="text-lg font-medium line-clamp-1">{title}</h6>
            </button>
          ))
        )}
        <div className="mt-4 w-full flex items-center justify-end gap-x-4 px-4">
          <button
            disabled={!selectedTypes.length}
            className="px-4 py-2 disabled:bg-gray-300 cursor-not-allowed transition-all bg-primary-500 rounded-md text-white md:text-lg"
          >
            Done
          </button>
          <button className="text-primary-500 md:text-lg">Skip...</button>
        </div>
      </div>
    </div>
  );
}

export default UserInterestsForm;
