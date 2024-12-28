import { fakeArray } from "constants";
import Select from "react-select/base";

function AddOptionsFormLoader() {
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
}

export default AddOptionsFormLoader;
