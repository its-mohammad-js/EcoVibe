import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "src/config/firebase";
import { useSelector } from "react-redux";
import { generateId } from "helpers";
import { useNavigate } from "react-router-dom";
import useDisableScroll from "hooks/UseDisableScroll";
import StepNavigator from "./components/steps/StepNavigator";
import { uniq } from "lodash";
import LoaderIcon from "UI/Loaders/LoaderIcon";

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
  const { userId, businessInformation, personalInformation } = useSelector(
    (state) => state.userData
  );
  const [loading, setLoading] = useState(false);
  const formMethods = useForm({
    defaultValues: {
      Collection: "",
      Tags: [],
    },
  });
  const [currentStep, setCurrentStep] = useState(1);
  const { setValue, watch, handleSubmit } = formMethods;
  const navigate = useNavigate();
  useDisableScroll(480);

  useEffect(() => {
    if (isEdit) {
      Object.entries(selectedProduct).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [isEdit, selectedProduct, setValue]);

  function nextStep() {
    const { Name, Type, Category, Price } = watch();
    const Options = watch().Options;

    if (currentStep === 1 && (!Name?.length || !Type || !Category || !Price)) {
      toast.error("Please complete the product information form");
      return;
    } else if (currentStep === 2 && !Options.length) {
      toast("Add at least one option");
      return;
    } else if (currentStep === 3) {
      if (watch()?.Images.length > 0) {
        onSubmitProduct();
        return;
      } else {
        toast.error("add one image at least");
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, 3));
  }

  // add new product to data base
  async function onSubmitProduct(e) {
    if (currentStep !== 3) {
      nextStep();
      return;
    }
    // define product id
    const productId = !isEdit ? generateId(userId) : watch().id;
    // main product data
    const productData = {
      ...watch(),
      Images: uniq(watch("Images") || []),
      Thumbnail: watch()?.Images[0] || "",
      SellerId: userId,
      SellerName:
        businessInformation?.business_name ||
        personalInformation?.fisrt_name ||
        "",
      SellerEmail: personalInformation?.email || "",
      SellerProfile: personalInformation?.profilePic || "",
      createdByUser: true,
      createdAt: serverTimestamp(),
    };

    // add new product to data base
    try {
      setLoading(true);
      // add new product to data base
      await setDoc(doc(db, "Products", productId), productData);
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
  }

  return (
    <FormProvider {...formMethods}>
      {/* main add/edit product form */}
      <form
        onSubmit={handleSubmit(onSubmitProduct)}
        className="px-4 size-full bg-gray-50 relative py-2 lg:px-6 lg:py-4 flex flex-col lg:gap-4 lg:w-[50vw] xl:w-[40vw] md:h-5/6 lg:h-auto mx-auto lg:border border-gray-200 lg:shadow hover:shadow-2xl transition-all duration-300 rounded-md"
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
          <div className="absolute inset-0 bg-gray-50 z-50 flex items-center gap-4 justify-center flex-col">
            <LoaderIcon className="size-24" />
            <h4 className="text-2xl font-bold text-center">
              {isEdit
                ? "Update product info, please dont refresh page"
                : "Add new product, please dont refresh page"}
              ...
            </h4>
          </div>
        )}
        {/* main form steps */}
        <StepNavigator
          {...{
            isEdit,
            onModalChange,
            currentStep,
            setCurrentStep,
            onSubmitProduct: handleSubmit(onSubmitProduct),
          }}
        />
      </form>
      {/* background (close modal) */}
      <div
        onClick={() => {
          if (isEdit) {
            if (currentStep !== 3 || !watch("Images")?.length) {
              onModalChange();
            } else {
              toast.remove();
              toast.error("Plase submit your changes...");
              return;
            }
          }
          onModalChange();
        }}
        className="absolute inset-0 bg-gray-950/70 backdrop-blur cursor-pointer -z-10"
      ></div>
    </FormProvider>
  );
}

export default AddEditProductForm;
