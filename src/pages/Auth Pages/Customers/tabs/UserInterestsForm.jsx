import { FaCheck } from "react-icons/fa";
import { supportedCategories } from "appData";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "authActions/updateUserData";
import { useNavigate } from "react-router-dom";

function UserInterestsForm() {
  const [selectedTypes, setSelectedTypes] = useState([]); // selected product types state
  const { userType } = useSelector((state) => state.userData); // current user data
  // necessary hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // select type hanlder
  function changeTypesHandler(type) {
    let isSelcted = selectedTypes.find((t) => t === type);

    setSelectedTypes((prev) =>
      isSelcted ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  // submit user interests
  function submitInterests() {
    dispatch(
      updateUserData({
        data: selectedTypes,
        field: "interests",
        customer_step: "completed",
        userType:
          userType === "seller" || userType === "both" ? "both" : "customer",
      })
    );
  }

  return (
    <>
      {/* title */}
      <div className="flex flex-col gap-y-4 items-center">
        <h4 className="text-3xl font-bold md:text-5xl">
          Select Your <span className="text-primary-500">interests</span>
        </h4>
        <p className="text-sm text-center md:text-start md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
          quos?
        </p>
      </div>
      {/* product type picker */}
      <div className="w-full md:w-2/3 md:mx-auto mt-4 md:mt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 px-2 justify-items-center">
          {/* type buttons */}
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
                <h6 className="lg:text-lg font-medium text-start line-clamp-1">
                  {title}
                </h6>
              </button>
            ))
          )}
        </div>
        {/* action buttons */}
        <div className="mt-4 w-full flex items-center justify-end gap-x-4 px-4">
          <button
            disabled={!selectedTypes.length}
            onClick={() => submitInterests()}
            className="px-4 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all bg-primary-500 rounded-md text-white md:text-lg"
          >
            Done
          </button>
          <button
            onClick={() => navigate("/EcoVibe/")}
            className="text-primary-500 md:text-lg"
          >
            Skip...
          </button>
        </div>
      </div>
    </>
  );
}

export default UserInterestsForm;
