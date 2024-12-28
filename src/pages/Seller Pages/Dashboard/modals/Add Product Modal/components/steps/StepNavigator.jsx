import ProductImages from "./ProductImages";
import ProductInformation from "./ProductInformation";
import ProductOptions from "./ProductOptions";
import { useFormContext } from "react-hook-form";

function StepNavigator({ isEdit, onModalChange, currentStep, setCurrentStep }) {
  const { watch } = useFormContext();

  const prevStep = () =>
    currentStep === 1
      ? onModalChange()
      : setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <div className="max-h-96 lg:max-h-[55vh] overflow-y-auto overflow-x-hidden styled-scroll-bar scroll-smooth px-2 py-1.5 relative">
        {/* step 01: set general information's */}
        <div
          className={`${
            currentStep === 1
              ? "visible opacity-100 static translate-x-0"
              : "invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"
          } transition-all duration-500`}
        >
          <ProductInformation isEdit={isEdit} />
        </div>
        {/* step 02: set product option's */}
        <div
          className={`${
            currentStep === 2
              ? "visible opacity-100 static translate-x-0"
              : "invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"
          } transition-all duration-500`}
        >
          <ProductOptions isEdit={isEdit} currentStep={currentStep} />
        </div>
        {/* last step: set product images */}
        <div
          className={`${
            currentStep === 3
              ? "visible opacity-100 static translate-x-0"
              : "invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"
          } transition-all duration-500`}
        >
          <ProductImages isEdit={isEdit} />
        </div>
      </div>
      {/* action btn's */}
      <div className="flex items-center justify-end my-2 gap-x-2">
        <button
          type="button"
          disabled={
            (isEdit && currentStep === 3) ||
            (currentStep === 3 && watch().Images !== "[]")
          }
          onClick={prevStep}
          className="px-4 py-2 lg:w-1/6 border-2 rounded-md border-gray-600 text-gray-900 hover:border-primary-800 hover:text-primary-800 transition-all disabled:invisible"
        >
          {currentStep === 1 ? "Close" : "Back"}
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-primary-500 text-gray-50 rounded-md border-2 border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all lg:w-1/5"
        >
          {currentStep !== 3 ? "Next" : "Submit"}
        </button>
      </div>
    </>
  );
}

export default StepNavigator;
