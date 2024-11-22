import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "src/reducers/auth/userDataSlice";
import { useNavigate } from "react-router-dom";
import TextInput from "src/common/UI elements/Forms/TextInput";

const inputOptions = {
  email: {
    placeholder: "Ex@email.com",
    validation: {
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
  },
  password: {
    placeholder: "Enter Password",
    type: "password",
    validation: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Minimum Length Is 8 Characters",
      },
      pattern: {
        value:
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\|;:'"\?><.,\/\\`~])[^\s]{8,}$/,
        message:
          "Password needs at least one uppercase letter, lowercase letter, number, and symbol.",
      },
    },
  },
  password_repeat: {
    placeholder: "Re-peat Password",
    type: "password",
  },
};

const figureIcon =
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffisrt-step-figure-removebg-preview-6630e8a5af594.webp?alt=media&token=8e2e91b9-95a1-4416-866a-1bfe555ce0c9";

function SignUpCustomer() {
  const { loading } = useSelector((state) => state.userData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center gap-x-4 md:gap-x-6 lg:gap-x-14">
      {/* sign in form */}
      <div className="md:w-1/2">
        {/* title */}
        <div className="text-center flex flex-col gap-y-2 md:gap-y-6 md:mb-6 md:w-4/5 px-2">
          <h4 className="text-3xl font-medium md:text-start md:text-5xl">
            Welcome To <span className="text-primary-500">Eco Vibe</span>
          </h4>
          <p className="md:text-start">
            Join the Eco Vibe Community: Shop Sustainably, Live Mindfully! 🌍
          </p>
        </div>
        {/* user information input's */}
        <form
          onSubmit={handleSubmit((data) => {
            dispatch(
              signUpUser({
                method: "signUpEmail",
                userType: "customer",
                email: data.email,
                password: data.password,
              })
            );
          })}
          className="mt-4 flex flex-col items-center md:items-stretch gap-y-4 px-2"
        >
          <div className="grid lg:grid-rows-2 lg:grid-cols-2 gap-2 w-full">
            {Object.entries(inputOptions).map(
              ([name, { placeholder, validation, type }], index) => (
                <TextInput
                  key={index}
                  type={type}
                  placeholder={placeholder}
                  register={register(name, {
                    ...validation,
                    validate: (value) => {
                      if (name === "password_repeat")
                        return (
                          value === watch().password || "Passwords do not match"
                        );
                    },
                  })}
                  error={errors[name]?.message}
                  style={index === 0 && "lg:col-span-2"}
                />
              )
            )}
          </div>

          {/* action buttons */}
          <div className="flex flex-col gap-y-4 w-full">
            {/* submit button */}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center w-full justify-between gap-x-2 px-4 py-3 bg-primary-700 hover:bg-primary-600 disabled:bg-opacity-50 disabled:animate-pulse transition-all rounded-md"
            >
              <span className="text-gray-50 text-2xl md:text-3xl w-1/6 md:w-fit">
                <BiUser />
              </span>
              <span className="text-gray-50 flex-1 md:text-lg">
                Create New Account
              </span>
            </button>
            {/* naivgate to sign-in */}
            <button
              type="button"
              onClick={() => navigate("/EcoVibe/sign-in")}
              className="relative w-full flex items-center justify-center"
            >
              <p className="bg-white px-2 hover:font-bold transition-all ease-linear">
                Already have account? Sign in
              </p>
              <p className="w-full absolute h-0.5 bg-gray-300 -z-10 top-1/2"></p>
            </button>
            {/* sign in with github */}
            <button
              onClick={() => {
                dispatch(
                  signUpUser({ method: "gitHub", userType: "customer" })
                );
              }}
              disabled={loading}
              type="button"
              className="flex items-center justify-between gap-x-2 px-4 py-3 bg-gray-950 hover:bg-gray-800 disabled:bg-opacity-50 disabled:animate-pulse transition-all rounded-md"
            >
              <span className="text-gray-50 text-2xl md:text-3xl w-1/6 md:w-fit">
                <BsGithub />
              </span>
              <span className="text-gray-50 flex-1 md:text-lg">
                Sign Up with GitHub
              </span>
            </button>
            {/* sign in with google */}
            <button
              onClick={() => {
                dispatch(
                  signUpUser({ method: "google", userType: "customer" })
                );
              }}
              type="button"
              disabled={loading}
              className="flex items-center justify-between gap-x-2 px-4 py-2 border border-gray-300 bg-gray-50 disabled:bg-opacity-50 disabled:animate-pulse hover:bg-gray-100 transition-all rounded-md"
            >
              <span className="text-red-700 text-2xl md:text-3xl w-1/6 md:w-fit">
                <SiGmail />
              </span>
              <span className="text-gray-900 flex-1 md:text-lg">
                Sign Up with Gmail
              </span>
            </button>
          </div>
        </form>
      </div>
      {/* figure icon pic */}
      <div className="hidden lg:block w-1/3">
        <img src={figureIcon} alt="icon-figure" className="w-11/12" />
      </div>
    </div>
  );
}

export default SignUpCustomer;
