import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const inputOptions = {
  first_name: {
    required: "First Name Is Required",
    minLength: {
      value: 3,
      message: "Minimum Length Is 4 Characters",
    },
  },
  last_name: {
    required: "Last Name Is Required",
    minLength: {
      value: 3,
      message: "Minimum Length Is 3 Characters",
    },
  },
  address: {
    required: "Address Is Required",
    minLength: {
      value: 10,
      message: "Minimum Length Is 10 Characters",
    },
  },
  gender: {
    required: "Please Select Your Gender",
  },
};

function PersonalDetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center">
      {/* title */}
      <div className="my-2 px-4 py-2 text-center">
        <h4 className="text-2xl  font-bold mb-2 md:mb-4 md:text-5xl">
          Set Up Your <span className="text-primary-500">Information</span>
        </h4>
        <span className="text-primary-500 text-sm md:text-base font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, saepe.
        </span>
      </div>
      {/* personal information input's */}
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col md:gap-y-2"
      >
        {/* profile picker */}
        <div className="flex items-center justify-center md:mb-4">
          <div className="w-36 h-36 bg-gray-200 rounded-full relative">
            <button
              type="button"
              className="absolute bottom-0 right-4 p-1.5 bg-primary-600 rounded-full text-white text-lg"
            >
              <input
                type="file"
                className="absolute inset-0 opacity-0 bg-red-400 rounded-full"
              ></input>
              <FaPlus />
            </button>
          </div>
        </div>
        {/* first and family name */}
        <div className="md:flex items-center gap-x-4">
          {/* nick name */}
          <Input
            title={"Nick Name"}
            placeholder={"Your First Name"}
            register={register}
            name={"first_name"}
            errors={errors}
            validation={inputOptions.first_name}
          />
          {/* family name */}
          <Input
            title={"Family Name"}
            placeholder={"Your Last Name"}
            name="last_name"
            register={register}
            errors={errors}
            validation={inputOptions.last_name}
          />
        </div>
        {/* address */}
        <Input
          title={"Address"}
          name="address"
          register={register}
          validation={inputOptions.address}
          errors={errors}
          placeholder={"City, Street, Building, etc..."}
        />
        {/* gender */}
        <div className="mb-4 md:m-0">
          <h6 className="text-lg text-gray-600 mb-2">Gender</h6>

          <select
            name="gender"
            {...register("gender", inputOptions.gender)}
            className="bg-gray-50 border w-full border-gray-300 px-4 py-3 appearance-none rounded-md outline-none none"
          >
            <option className="bg-gray-200">Man</option>
            <option className="bg-gray-200">Women</option>
            <option className="bg-gray-200">Other</option>
          </select>
        </div>
        {/* brith day */}
        <div className="mb-4 md:m-0">
          <h6 className="text-lg text-gray-600 mb-2">Brith Day</h6>

          <input
            {...register("birthday")}
            type="date"
            className="appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-md w-full outline-none"
          />
        </div>

        <div className="w-full mt-2 flex items-center justify-end">
          <button
            type="submit"
            className="px-4 py-2 md:text-lg hover:bg-primary-800 bg-primary-500 transition-all text-white rounded-md w-fit"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;

const Input = ({ title, placeholder, register, name, validation, errors }) => {
  return (
    <div className="mb-4 md:m-0">
      <h6 className="text-lg text-gray-600 mb-2">{title}</h6>
      <div
        className={`${
          errors[name]?.message && "!border-red-500"
        } flex items-center justify-center border border-gray-300 rounded-md px-2 focus-within:border-gray-500 transition-all`}
      >
        <input
          type="text"
          {...register(name, validation)}
          className="px-2 py-2 text-lg flex-1 focus:outline-none peer"
          placeholder={placeholder}
        />
        <span className="text-2xl text-gray-300 transition-all">
          <FaCheck className={`${errors[name]?.message && "text-red-500"} `} />
        </span>
      </div>

      <p className="mt-1 text-red-500">{errors[name]?.message}</p>
    </div>
  );
};
