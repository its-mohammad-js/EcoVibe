import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "src/reducers/auth/userDataSlice";
import { avatarsUrl } from "constants";
import { GrGithub } from "react-icons/gr";
import { RiDoorLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../../common/UI elements/Forms/TextInput";

const inputsInfo = [
  {
    name: "first_name",
    placeholder: "Please Enter Your Name",
    validation: {
      required: { value: true, message: "First name is required" },
      minLength: {
        value: 2,
        message: "First name must be at least 2 characters",
      },
    },
  },
  {
    name: "last_name",
    placeholder: "Enter Your Last name",
    validation: {
      required: { value: true, message: "Last name is required" },
      minLength: {
        value: 2,
        message: "Last name must be at least 2 characters",
      },
    },
  },
  {
    name: "email",
    placeholder: "Enter Your Mail",
    validation: {
      required: { value: true, message: "Email is required" },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email format",
      },
    },
  },
  {
    name: "password",
    placeholder: "Choose A Password",
    type: "password",
    validation: {
      required: { value: true, message: "Password is required" },
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
      pattern: {
        value:
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\|;:'"\?><.,\/\\`~])[^\s]{8,}$/,
        message:
          "Password needs at least one uppercase letter, lowercase letter, number, and symbol.",
      },
    },
  },
  {
    name: "password_repeat",
    placeholder: "Re-peat Password",
    type: "password",
    validation: {
      required: { value: true, message: "Repeat password is required" },
    },
  },
];

function SignUpSeller() {
  const { loading } = useSelector((state) => state.userData);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="lg:flex py-4 justify-evenly items-center">
      {/* sign up form */}
      <form
        onSubmit={handleSubmit((formData) => {
          dispatch(
            signUpUser({
              method: "signUpEmail",
              email: formData.email,
              password: formData.password,
              userType: "seller",
              personalInformation: {
                email: formData.email,
                profilePic: avatarsUrl[0],
                first_name: formData.first_name,
                last_name: formData.last_name,
              },
            })
          );
        })}
        className="px-3 py-1.5 flex flex-col gap-y-2 lg:basis-1/3 lg:bg-gray-50 lg:px-6 lg:py-4 lg:rounded-xl lg:border"
      >
        {/* header */}
        <div className="flex items-center justify-between">
          <h4 className="text-4xl text-center w-full lg:text-start font-bold text-black/80">
            Become a seller !
          </h4>
        </div>
        {/* inputs */}
        <div className="flex flex-col gap-y-2">
          {inputsInfo.map((input, index) => (
            <div className="flex flex-col gap-y-1" key={index}>
              <h6 className="first-letter:uppercase font-bold lg:text-lg text-gray-600">
                {input.name.replace("_", " ")}
              </h6>
              <TextInput
                placeholder={input.placeholder}
                register={{
                  // register input with name and validation
                  ...register(input.name, {
                    // all inputs validation
                    ...input.validation,
                    // only for (password_repeat) input
                    validate: (value) => {
                      if (input.name === "password_repeat")
                        return (
                          value === watch().password || "Passwords do not match"
                        );
                    },
                  }),
                }}
                error={errors[input.name]?.message}
                type={input?.type || "text"}
                style={"h-fit [&>input]:py-4"}
              />
            </div>
          ))}
        </div>
        {/* action buttons */}
        <div className="flex flex-col gap-y-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary-600 hover:bg-primary-800 text-gray-50 py-2 rounded-3xl text-lg transition-all disabled:animate-pulse"
          >
            Create New Account
          </button>
          <p className="text-center my-1 text-xl relative flex items-center justify-center">
            <p className="w-full h-0.5 bg-gray-300 absolute"></p>
            <p className="relative text-base bg-white lg:bg-gray-100 px-3 text-gray-700">
              Or, use your social media accounts
            </p>
          </p>
          <button
            type="button"
            disabled={loading}
            onClick={() =>
              dispatch(signUpUser({ method: "google", userType: "seller" }))
            }
            className="flex items-center justify-between gap-x-2 px-4 py-1 border-2 text-lg border-gray-300 rounded-3xl disabled:animate-pulse"
          >
            <p className="text-4xl">
              <FcGoogle />
            </p>
            <p>Continue with Google</p> &nbsp;
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={() =>
              dispatch(signUpUser({ method: "gitHub", userType: "seller" }))
            }
            className="flex items-center justify-between gap-x-2 px-4 py-1 border-2 text-lg border-gray-300 rounded-3xl disabled:animate-pulse"
          >
            <p className="text-4xl">
              <GrGithub />
            </p>
            <p>Continue with Github</p> &nbsp;
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/EcoVibe/sign-in");
            }}
            className="flex items-center gap-2 px-4 py-1 text-lg"
          >
            <p>Already have account?</p>
            <p className="font-semibold underline">login instead</p>
          </button>
        </div>
      </form>
      {/* logo */}
      <div className="hidden lg:flex basis-1/4 h-full items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2F%E7%A4%BE%E4%BA%A4210234509180930blue-01%201.png?alt=media&token=9476184e-43e1-41a4-9c30-7a215b7d035e"
          alt="side-banner"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}

export default SignUpSeller;
