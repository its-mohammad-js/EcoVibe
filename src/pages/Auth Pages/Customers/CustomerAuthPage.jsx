import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import LoaderIcon from "UI/Loaders/LoaderIcon";

// customer authetication steps
const stepsInfo = [
  {
    step: "first-step",
    num: 1,
    title: "Register",
    path: "/EcoVibe/Customers/sign-up",
  },
  {
    step: "second-step",
    num: 2,
    title: "set up Your Profile",
    path: "/EcoVibe/Customers/personal-details",
  },
  {
    step: "third-step",
    num: 3,
    title: "Your Interests",
    path: "/EcoVibe/Customers/user-intersets",
  },
];

function CustomerAuthPage() {
  const { customer_step, auth_status, loading } = useSelector(
    (state) => state.userData
  ); // current user data
  const navigate = useNavigate(); // navigate hook

  // naviagte to current step page
  useEffect(() => {
    switch (customer_step) {
      case "first-step":
        navigate("/EcoVibe/Customers/sign-up");
        break;
      case "second-step":
        toast.success("Please Add Your Personal Information");
        navigate("/EcoVibe/Customers/personal-details");
        break;
      case "third-step":
        toast.success("Add Your Intersets");
        navigate("/EcoVibe/Customers/user-intersets");
        break;
      case "completed":
        toast.success("You Are Already signed in ");
        window.scrollTo(0, 0);
        navigate("/EcoVibe/");
        break;
      default:
        throw new Error("Error : Unknown Step");
    }
  }, [customer_step]);

  // loading screen (on check user auth status)
  if (loading && auth_status === 204)
    return (
      <div className="h-screen flex items-center justify-center flex-col gap-y-4">
        <LoaderIcon className="size-24" />
        <h4 className="my-2 text-2xl font-bold">
          {auth_status === 204
            ? "Just a moment while we get things ready..."
            : "Update Your Infomation..."}
        </h4>
      </div>
    );
  // main route steps
  else
    return (
      <div className="mx-auto 2xl:max-w-screen-2xl">
        {/* step bread crumb's */}
        <div className="mx-auto w-fit flex items-center justify-evenly gap-x-5 my-10 relative">
          {/* step's' */}
          {stepsInfo.map(({ step, title, num }, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-1/3 h-32 gap-y-2"
            >
              {/* step number's */}
              <div
                className={`${
                  customer_step === step
                    ? "bg-primary-500 text-white"
                    : "text-primary-500 border-2 border-primary-500 bg-gray-50"
                } w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all`}
              >
                <p className="flex relative items-center justify-center">
                  <span>{num}</span>
                  {index !== 2 && (
                    <span
                      className={`${
                        step === customer_step
                          ? "bg-primary-500"
                          : "bg-gray-200"
                      } w-14 -z-10 h-1 -right-20 absolute`}
                    ></span>
                  )}
                </p>
              </div>
              {/* step title */}
              <p className="text-center font-medium">{title}</p>
            </div>
          ))}
        </div>

        {/* step page's */}
        <Outlet />
      </div>
    );
}

export default CustomerAuthPage;
