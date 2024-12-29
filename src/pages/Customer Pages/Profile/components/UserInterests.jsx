import { useDispatch, useSelector } from "react-redux";
import { supportedCategories } from "appData";
import { useEffect, useState } from "react";
import { updateUserData } from "authActions/updateUserData";
import { isInArray } from "helpers";

function UserInterests() {
  // selected types state
  const [selectedTypes, setTypes] = useState([]);
  // necessary data
  const { interests, loading } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  // set types to user interests
  useEffect(() => {
    setTypes(interests);
  }, [interests]);

  // change type list handler
  function changeTypeHandle(type) {
    setTypes((prev) =>
      isInArray(prev, type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function updateInterests() {
    dispatch(updateUserData({ data: selectedTypes, field: "interests" }));
  }

  return (
    <div
      className={`${
        loading && "animate-pulse"
      } bg-white px-4 py-2 border border-gray-400 rounded-md mt-2`}
    >
      <div className="flex items-center justify-between mb-2">
        <h6 className="text-base font-bold">Your Interests :</h6>
        <button
          onClick={updateInterests}
          className="text-sm px-3 py-1.5 bg-primary-500 text-gray-50 rounded-md transition-all"
        >
          Update interests
        </button>
      </div>
      <div className="w-full grid grid-cols-2 gap-2 py-2">
        {supportedCategories.map(({ productTypes }) =>
          productTypes.map(({ title }, index) => (
            <button
              key={index}
              onClick={() => changeTypeHandle(title)}
              disabled={loading}
              className={`${
                isInArray(selectedTypes, title)
                  ? "border-primary-500 text-primary-500"
                  : "border-gray-300 text-gray-400"
              } border-2 rounded-md px-4 py-2 flex items-center justify-center transition-all disabled:animate-pulse disabled:cursor-wait`}
            >
              <p className="text-xs text-center line-clamp-1 font-medium">
                {title}
              </p>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default UserInterests;
