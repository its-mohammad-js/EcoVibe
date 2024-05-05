import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const stepsInfo = [
  {
    step: "first-step",
    num: 1,
    title: "Register",
    path: "/EcoVibe/sign-in/first-step/authentication",
  },
  {
    step: "second-step",
    num: 2,
    title: "set up Your Profile",
    path: "/EcoVibe/sign-in/second-step/personal-details",
  },
  {
    step: "third-step",
    num: 3,
    title: "Your Interests",
    path: "/EcoVibe/sign-in/third-step/user-intersets",
  },
];

function RegularUserSignIn() {
  const { currentStep } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  // naviagte to current step
  useEffect(() => {
    switch (currentStep) {
      case "first-step":
        navigate("/EcoVibe/Sign-in/first-step/authentication");
        break;
      case "second-step":
        navigate("/EcoVibe/Sign-in/second-step/personal-details");
        break;
      case "third-step":
        navigate("/EcoVibe/Sign-in/third-step/user-intersets");
        break;
      case "completed":
        navigate("/EcoVibe/");
        break;
      default:
        throw new Error("Error : Unknown Step");
    }
  }, [currentStep]);

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
                currentStep === step
                  ? "bg-primary-500 text-white"
                  : "text-primary-500 border-2 border-primary-500 bg-gray-50"
              } w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all`}
            >
              <p className="flex relative items-center justify-center">
                <span>{num}</span>
                {index !== 2 && (
                  <span
                    className={`${
                      step === currentStep ? "bg-primary-500" : "bg-gray-200"
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

export default RegularUserSignIn;
