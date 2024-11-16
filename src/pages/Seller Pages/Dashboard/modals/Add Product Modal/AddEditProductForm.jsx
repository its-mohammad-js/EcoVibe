import { useEffect, useState } from "react";
import ProductImages from "./ProductImages";
import ProductInformation from "./ProductInformation";
import ProductOptions from "./ProductOptions";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";
import { db } from "src/config/firebase";
import { useSelector } from "react-redux";
import { generateId, loadingIcon } from "constants";
import { useNavigate } from "react-router-dom";
import useDisableScroll from "hooks/UseDisableScroll";

const stepsInfo = [
  { step: 1, title: "General Info" },
  { step: 2, title: "Options" },
  { step: 3, title: "Images" },
];

function AddEditProductForm({
  onModalChange,
  isEdit,
  selectedProduct,
  getProducts,
}) {
  const [currentStep, setStep] = useState(1);
  const { userId, businessInformation } = useSelector(
    (state) => state.userData
  );
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm();
  const navigate = useNavigate();
  useDisableScroll();

  useEffect(() => {
    if (isEdit) {
      Object.entries(selectedProduct).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, []);

  // add new product to data base
  async function uploadProduct() {
    // parse images url json file to array
    const Images = !isEdit
      ? JSON.parse(getValues().Images)
      : getValues().Images;
    const productId = !isEdit ? generateId(userId) : getValues().id;

    if (Images.length > 0) {
      // add new product to data base
      try {
        setLoading(true);
        // add new product to data base
        await setDoc(doc(db, "Products", productId), {
          Category: getValues().Category,
          Collection: getValues().Collection || "",
          Description: getValues().Description,
          Images,
          Name: getValues().Name,
          Options: !isEdit
            ? JSON.parse(getValues()?.Options)
            : getValues()?.Options,
          Price: getValues().Price,
          Stars: [0],
          Tags: getValues()?.Tags?.length ? JSON.parse(getValues()?.Tags) : [],
          Thumbnail: Images[0] || "",
          Type: getValues().Type,
          SellerId: userId,
          SellerName: businessInformation?.first_name || "",
          SellerEmail: "test mail",
          SellerProfile: businessInformation?.profilePic || "",
        });
        // dispatch success on each modes (edit || add)
        if (isEdit) {
          toast.success("your changes sumbitted");
          getProducts();
          onModalChange();
        } else {
          toast.success("Product Uploaded Succesfully !");
          navigate(`/EcoVibe/Products/${productId}`);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      toast.error("add one image at least");
    }
  }

  // change tab handler
  function changeTab() {
    // stay on current step if current form isn't valid
    if (!isValid) {
      return;
    }
    // general informations
    const { Name, Type, Category, Price } = getValues();
    // // options data
    const Options = !isEdit
      ? JSON.parse(getValues().Options)
      : getValues().Options;
    // submit form data on last step
    if (currentStep === 3) {
      uploadProduct();
      return;
    }
    // change tab
    if (
      currentStep === 1 &&
      (!Name?.length || !Type || !Category || !Category || !Price)
    ) {
      toast.error("Please complete the product information form");
      return;
    } else if (currentStep === 2 && !Options.length) {
      toast("Add at least one option");
      return;
    } else if (currentStep !== 3) {
      setStep((prev) => prev + 1);
      return;
    }
  }

  return (
    <>
      {/* main add/edit product form */}
      <form
        onSubmit={handleSubmit(() => changeTab())}
        className="px-4 bg-gray-50 relative py-2 lg:px-6 lg:py-4 flex flex-col lg:gap-4 w-[95vw] lg:w-[50vw] xl:w-[40vw] h-5/6 lg:h-auto mx-auto lg:border border-gray-200 lg:shadow hover:shadow-2xl transition-all duration-300 rounded-md"
      >
        {/* step counter */}
        <div className="flex items-center justify-evenly lg:justify-center lg:gap-x-6 my-4">
          {stepsInfo.map(({ step, title }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-2 transition-all"
            >
              <p
                className={`${
                  currentStep === step
                    ? "bg-primary-500 text-gray-50"
                    : "border border-primary-500 text-primary-500 bg-gray-50"
                } size-14 rounded-full flex items-center justify-center text-2xl relative`}
              >
                {step}
                {step < 3 && (
                  <p
                    className={`${
                      step === currentStep ? "bg-primary-500" : "bg-gray-300"
                    } absolute -right-9 -z-10 w-10 h-1`}
                  ></p>
                )}
              </p>
              <span
                className={`${
                  currentStep === step
                    ? "text-primary-500 font-bold"
                    : "text-primary-400"
                } text-sm`}
              >
                {title}
              </span>
            </div>
          ))}
        </div>
        {/* loading screen */}
        {loading && (
          <div className="absolute inset-0 bg-gray-50 z-50 flex items-center justify-center flex-col">
            <img
              src={loadingIcon}
              alt="loading-icon"
              className="size-24 object-cover animate-pulse"
            />
            <h4 className="text-3xl font-bold">
              {isEdit ? "Update product info" : "Add new product"}...
            </h4>
          </div>
        )}
        {/* main forms */}
        <div className="max-h-96 lg:max-h-[55vh] overflow-y-auto overflow-x-hidden styled-scroll-bar scroll-smooth px-2 py-1.5 relative">
          {/* step 01: set general information's */}
          <div
            className={`${
              currentStep === 1
                ? "visible opacity-100 static translate-x-0"
                : "invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"
            } transition-all duration-500`}
          >
            <ProductInformation
              register={register}
              setValue={setValue}
              getValues={watch}
              errors={errors}
              isEdit={isEdit}
            />
          </div>
          {/* step 02: set product option's */}
          <div
            className={`${
              currentStep === 2
                ? "visible opacity-100 static translate-x-0"
                : "invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"
            } transition-all duration-500`}
          >
            <ProductOptions
              getValues={getValues}
              setValue={setValue}
              isEdit={isEdit}
            />
          </div>
          {/* last step: set product images */}
          <div
            className={`${
              currentStep === 3
                ? "visible opacity-100 static translate-x-0"
                : "invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"
            } transition-all duration-500`}
          >
            <ProductImages
              getValues={getValues}
              setValue={setValue}
              isEdit={isEdit}
            />
          </div>
        </div>
        {/* action btn's */}
        <div className="flex items-center justify-end my-2 gap-x-2">
          <button
            type="button"
            disabled={isEdit && currentStep === 3}
            onClick={() => {
              currentStep === 1
                ? onModalChange(null)
                : setStep((prev) => prev - 1);
            }}
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
      </form>
      {/* background (close modal) */}
      <div
        onClick={() => {
          if (isEdit) {
            if (currentStep !== 3) {
              onModalChange();
            } else {
              toast.remove();
              toast.error("Plase Submit Your Changes...");
            }
          }
        }}
        className="absolute inset-0 bg-gray-950/70 backdrop-blur cursor-pointer -z-10"
      ></div>
    </>
  );
}

export default AddEditProductForm;
