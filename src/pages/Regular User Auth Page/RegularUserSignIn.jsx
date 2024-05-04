import { Outlet, useLocation } from "react-router-dom";

const stepsInfo = [
  {
    step: 1,
    path: "/EcoVibe/sign-in/first-step/authentication",
    title: "Register",
  },
  {
    step: 2,
    path: "/EcoVibe/sign-in/second-step/personal-details",
    title: "set up Your Profile",
  },
  {
    step: 3,
    path: "/EcoVibe/sign-in/third-step/user-intersets",
    title: "Your Interests",
  },
];

function RegularUserSignIn() {
  const location = useLocation();
  const { step: currentStep } = stepsInfo.find(
    ({ path }) => path === location.pathname
  );

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl">
      {/* step bread crumb's */}
      <div className="mx-auto w-fit flex items-center justify-evenly gap-x-5 my-10 relative">
        {/* step's' */}
        {stepsInfo.map(({ step, title }, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-1/3 h-32 gap-y-2"
          >
            {/* step number's */}
            <div
              className={`${
                currentStep === step
                  ? "bg-primary-500 text-white"
                  : "text-primary-500 border-2 border-primary-500"
              } w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all`}
            >
              <p className="flex relative items-center justify-center">
                <span>{step}</span>
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
