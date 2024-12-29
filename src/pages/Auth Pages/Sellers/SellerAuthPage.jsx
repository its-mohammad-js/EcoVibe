import { useEffect } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

// seller authetication steps
const stepsInfo = [
  {
    step: "first-step",
    num: 1,
    title: "Register",
  },
  {
    step: "second-step",
    num: 2,
    title: "Your Bussines Info",
  },
  {
    step: "third-step",
    num: 3,
    title: "Add First Product",
  },
];

function SellerAuthPage() {
  // current user data
  const { seller_step, loading, auth_status } = useSelector(
    (state) => state.userData
  );
  const navigate = useNavigate(); // navigate hook

  // naviagte to current step page or home page if steps are completed
  useEffect(() => {
    switch (seller_step) {
      case "first-step":
        navigate("/EcoVibe/Sellers/sign-up");
        break;
      case "second-step":
        toast.success("Please add your business Information");
        navigate("/EcoVibe/Sellers/business-details");
        break;
      case "third-step":
        toast.success("You are already a seller");
        navigate("/EcoVibe/dashboard/Analytics/add-product");
        break;
      default:
        throw new Error("Error : Unknown Step");
    }
  }, [seller_step]);

  // loading screen (on check user auth status)
  if (loading && auth_status === 204)
    return (
      <div className="h-screen flex items-center justify-center flex-col">
        <LoaderIcon className="size-24" />
        <h4 className="my-2 text-2xl font-bold">
          Just a moment while we get things ready...
        </h4>
      </div>
    );
  // main route steps
  else
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl">
        {/* step bread crumb's */}
        <div className="mx-auto w-fit flex items-center justify-evenly gap-x-5 my-6 relative">
          {/* step's' */}
          {stepsInfo.map(({ step, title, num }, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-1/3 h-32 gap-y-2"
            >
              {/* step number's */}
              <div
                className={`${
                  seller_step === step
                    ? "bg-primary-500 text-white"
                    : "text-primary-500 border-2 border-primary-500 bg-gray-50"
                } size-16 rounded-full flex items-center justify-center text-3xl transition-all`}
              >
                <p className="flex relative items-center justify-center">
                  <span>{num}</span>
                  {index !== 2 && (
                    <span
                      className={`${
                        step === seller_step ? "bg-primary-500" : "bg-gray-200"
                      } w-24 -z-10 h-1 -right-24 absolute`}
                    ></span>
                  )}
                </p>
              </div>
              {/* step title */}
              <p className="text-center font-medium line-clamp-2">{title}</p>
            </div>
          ))}
        </div>

        <Outlet />
      </div>
    );
}

export default SellerAuthPage;
