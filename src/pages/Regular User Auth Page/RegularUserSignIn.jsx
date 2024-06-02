import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signInUser } from "../../redux/auth/regularUsers/regluarUsersSlice";

// input validation condition's
const inputsOptions = {
  email: {
    required: "Email Is Required",
    minLength: {
      value: 4,
      message: "Minimum Length Is 4 Characters",
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email format",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Minimum Length Is 8 Characters",
    },
  },
};

const bannerUrl =
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Flogin-form-banner-66386d0ae74ba.webp?alt=media&token=a11080f5-ffd1-4e5f-b412-2735684bb9a1";

function RegularUserSignIn() {
  const { currentStep, loading, personalInformation } = useSelector(
    (state) => state.userData
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // redirect authenticated user to home page
  useEffect(() => {
    if (currentStep === "second-step") {
      navigate("/EcoVibe/Sign-up/second-step/personal-details");
    }
    if (currentStep === "completed") {
      navigate("/EcoVibe/");
    }
  }, [currentStep]);

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl relative min-h-screen md:-mb-8 flex items-center justify-center">
      {/* screen background */}
      <div className="absolute -z-10 left-0 hidden md:block w-1/3 max-w-[30rem] h-full bg-primary-500/85"></div>
      {/* form conntainer */}
      <div className="w-11/12 md:w-2/3 md:max-w-[60rem] md:h-[40rem] md:shadow-xl shadow-gray-900 md:rounded-md bg-gray-50 z-10 md:relative md:flex items-center justify-between md:hover:scale-[1.02] transition-all duration-500">
        {/* simple banner */}
        <div className="md:h-full md:w-1/2 bg-primary-100 rounded-l-md absolute md:static inset-0 w-full -mb-8 md:mb-0 top-0 -z-10">
          <img
            src={bannerUrl}
            alt="banner"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        {/* main form */}
        <div className="bg-gray-50 shadow-xl rounded-md h-full md:w-1/2 py-2">
          {/* title */}
          <div className="px-4 py-8 flex flex-col gap-y-3">
            <h4 className="text-2xl md:text-3xl">Wecome Back :)</h4>

            <p className="text-sm md:text-base">
              Become part of the Eco Vibe community! Sign in to your account to
              explore sustainable fashion.
            </p>
          </div>
          {/* sign up form */}
          <form
            onSubmit={handleSubmit((formData) => {
              dispatch(signInUser({ ...formData, method: "emailPass" }));
            })}
            className="mt-2 px-4 py-2"
          >
            {/* log in with email & password */}
            <div className="flex flex-col items-center gap-y-4 md:gap-y-4">
              <div className="w-full">
                <input
                  {...register("email", inputsOptions.email)}
                  type="text"
                  disabled={loading}
                  placeholder="Email"
                  className={`${
                    errors?.email?.message
                      ? "border-red-500"
                      : "border-gray-300"
                  } w-full px-4 py-2 transition-all outline-none bg-transparent border-b text-sm md:text-lg disabled:opacity-50`}
                />
                <p className="text-sm ml-2 mt-2 text-red-500">
                  {errors?.email?.message}
                </p>
              </div>
              <div className="w-full">
                <input
                  {...register("password", inputsOptions.password)}
                  type="text"
                  disabled={loading}
                  placeholder="Password"
                  className={`${
                    errors?.email?.message
                      ? "border-red-500"
                      : "border-gray-300"
                  } w-full px-4 py-2 transition-all outline-none bg-transparent border-b text-sm md:text-lg disabled:opacity-50`}
                />
                <p className="text-sm ml-2 mt-2 text-red-500">
                  {errors?.password?.message}
                </p>
              </div>
              {/* action button */}
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-3 bg-primary-500 md:text-lg hover:bg-primary-600 transition-all text-white rounded-md w-full disabled:!bg-gradient-to-br disabled:from-gray-200 disabled:via-gray-500/90 disabled:animate-pulse disabled:to-gray-400"
              >
                Login
              </button>
            </div>
            {/* log in with quick action's */}
            <div className="mt-6">
              <div className="flex items-center justify-center">
                <span className="absolute bg-gray-50 text-gray-700">
                  Sign In with Social Account
                </span>
                <span className="w-full h-0.5 bg-gray-200"></span>
              </div>
              {/* sign up with social account buttons */}
              <div className="flex items-center justify-center gap-x-4 mt-6">
                <button
                  disabled={loading}
                  onClick={() => {
                    dispatch(signInUser({ method: "google" }));
                  }}
                  type="button"
                  className="px-2 py-2 border-2 border-gray-200 text-2xl md:text-3xl md:hover:-translate-y-2 transition-all hover:shadow-2xl rounded-xl shadow-md text-red-700 disabled:opacity-70 disabled:hover:translate-y-0 disabled:animate-pulse"
                >
                  <FaGoogle />
                </button>
                <button
                  disabled={loading}
                  onClick={() => {
                    dispatch(signInUser({ method: "github" }));
                  }}
                  type="button"
                  className="px-2 py-2 border-2 border-gray-200 text-2xl md:text-3xl md:hover:-translate-y-2 transition-all hover:shadow-2xl rounded-xl shadow-md disabled:opacity-70 disabled:hover:translate-y-0 disabled:animate-pulse"
                >
                  <FaGithub />
                </button>
              </div>
              <div
                onClick={() =>
                  navigate("/EcoVibe/Sign-up/first-step/authentication")
                }
                className="flex items-center justify-center mt-6 mb-2"
              >
                <span className="absolute bg-gray-50 text-gray-700">
                  Create New Account
                </span>
                <span className="w-full h-0.5 bg-gray-200"></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegularUserSignIn;
