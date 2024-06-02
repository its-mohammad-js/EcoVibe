import { useForm } from "react-hook-form";
import { BiLock, BiUser } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../redux/auth/regularUsers/regluarUsersSlice";
import { useNavigate } from "react-router-dom";

const figureIcon =
  "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffisrt-step-figure-removebg-preview-6630e8a5af594.webp?alt=media&token=8e2e91b9-95a1-4416-866a-1bfe555ce0c9";

function SignUp() {
  const { loading } = useSelector((state) => state.userData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputOptions = {
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
      pattern: {
        value:
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\|;:'"\?><.,\/\\`~])[^\s]{8,}$/,
        message:
          "Password needs at least one uppercase letter, lowercase letter, number, and symbol.",
      },
    },
    password_repeat: {
      validate: (value) =>
        value === watch().password || "Passwords do not match",
    },
  };

  return (
    <div className="flex items-center justify-center gap-x-4 md:gap-x-6 lg:gap-x-14">
      {/* sign in form */}
      <div className="md:w-1/2">
        {/* title */}
        <div className="text-center flex flex-col gap-y-2 md:gap-y-6 md:mb-6 md:w-4/5 px-2">
          <h4 className="text-2xl font-medium md:text-start md:text-5xl">
            Welcome To <span className="text-primary-500">Eco Vibe</span>
          </h4>
          <p className="md:text-start">
            Sign In to continue
            <span>
              &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, nisi.
            </span>
          </p>
        </div>
        {/* user information input's */}
        <form
          onSubmit={handleSubmit((data) => {
            dispatch(
              signUp({
                email: data.email,
                password: data.password,
                method: "emailPass",
              })
            );
          })}
          className="mt-4 flex flex-col items-center md:items-stretch gap-y-4"
        >
          {/* email input */}
          <Input
            name="email"
            isLoading={loading}
            placeholder={"Example@ex.com"}
            register={register}
            validation={inputOptions.email}
            errors={errors}
          />
          {/* password inputs */}
          <div className="w-full flex flex-col items-center gap-4 lg:flex-row lg:items-start">
            <Input
              name="password"
              isLoading={loading}
              placeholder={"Enter Password"}
              register={register}
              validation={inputOptions.password}
              errors={errors}
            />

            <Input
              name="password_repeat"
              isLoading={loading}
              placeholder={"Re-peat Password"}
              register={register}
              validation={inputOptions.password_repeat}
              errors={errors}
            />
          </div>

          {/* sumbit button */}
          <button
            type="submit"
            disabled={loading}
            className="flex  items-center w-11/12 md:w-full justify-between gap-x-2 px-4 py-3 bg-primary-700 hover:bg-primary-600 disabled:bg-opacity-50 disabled:animate-pulse transition-all rounded-md"
          >
            <span className="text-gray-50 text-2xl md:text-3xl w-1/6 md:w-fit">
              <BiUser />
            </span>
            <span className="text-gray-50 flex-1 md:text-lg">
              Create New Account
            </span>
          </button>
          {/* quick sign in button's */}
          <hr />
          <div className="flex flex-col gap-y-4 w-11/12 md:w-full">
            <button
              type="button"
              onClick={() => navigate("/EcoVibe/sign-in")}
              className="relative w-full flex items-center justify-center"
            >
              <p className="bg-white px-2">Already have account ? </p>
              <p className="w-full absolute h-0.5 bg-gray-300 -z-10 top-1/2"></p>
            </button>
            {/* sign in with github */}
            <button
              onClick={() => {
                dispatch(signUp({ method: "gitHub" }));
              }}
              disabled={loading}
              type="button"
              className="flex items-center justify-between gap-x-2 px-4 py-3 bg-gray-950 hover:bg-gray-800 disabled:bg-opacity-50 disabled:animate-pulse transition-all rounded-md"
            >
              <span className="text-gray-50 text-2xl md:text-3xl w-1/6 md:w-fit">
                <BsGithub />
              </span>
              <span className="text-gray-50 flex-1 md:text-lg">
                Sign In with GitHub
              </span>
            </button>
            {/* sign in with google */}
            <button
              onClick={() => {
                dispatch(signUp({ method: "google" }));
              }}
              type="button"
              disabled={loading}
              className="flex items-center justify-between gap-x-2 px-4 py-2 border border-gray-300 bg-gray-50 disabled:bg-opacity-50 disabled:animate-pulse hover:bg-gray-100 transition-all rounded-md"
            >
              <span className="text-red-700 text-2xl md:text-3xl w-1/6 md:w-fit">
                <SiGmail />
              </span>
              <span className="text-gray-900 flex-1 md:text-lg">
                Sign In with Gmail
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

export default SignUp;

const Input = ({
  register,
  name,
  validation,
  errors,
  placeholder,
  isLoading,
}) => {
  return (
    <div className="w-11/12 md:w-full">
      <div
        className={`${
          (errors[name]?.message && "!border-red-500") ||
          (isLoading && "animate-pulse shadow-md")
        } flex items-center justify-center border border-gray-300 rounded-md px-2 focus-within:border-gray-500 transition-all`}
      >
        <input
          disabled={isLoading}
          type="text"
          {...register(name, validation)}
          className="px-4 py-2 text-lg flex-1 focus:outline-none peer order-2 bg-transparent"
          placeholder={placeholder}
        />
        <span className="text-2xl text-gray-300 peer-focus:text-gray-500 order-1">
          {name === "email" ? <MdOutlineEmail /> : <BiLock />}
        </span>
      </div>

      <p className="text-sm md:text-base mt-1 px-1 text-red-500 font-medium">
        {errors[name]?.message}
      </p>
    </div>
  );
};
