import TextInput from "UI/Forms/TextInput";

const inputsOptions = [
  // full-name
  {
    name: "full_Name",
    placeholder: "John Doe",
    validation: {
      required: {
        value: true,
        message: "test",
      },
      minLength: {
        value: 4,
        message: "Min Length Is 4 Characters",
      },
    },
    cols: 3,
  },
  // phone-number
  {
    name: "phone_Number",
    placeholder: "892-345-145",
    validation: {
      minlength: {
        value: 8,
        message: "Please Enter 8 Numbers At Least",
      },
    },
    cols: 3,
  },
  // email
  {
    name: "email",
    placeholder: "Example@mail.com",
    validation: {
      minLength: {
        value: 4,
        message: "Minimum Length Is 4 Characters",
      },
      pattern: {
        value: {},
        message: "Invalid email format",
      },
    },
    cols: 3,
  },
  // address
  {
    name: "address",
    placeholder: "Plsease Enter A Valid Address",
    validation: {
      minLength: {
        value: 15,
        message: "Minimum Length Is 15 Characters",
      },
    },
    cols: 3,
  },
  // post-code
  {
    name: "post_Code",
    placeholder: "XX-XX",
    validation: {
      minLength: {
        value: 4,
        message: "Minimum Length Is 4 Characters",
      },
      max: {
        value: 9999,
        message: "Invalide code format",
      },
    },
  },
  // country
  {
    name: "Country",
    placeholder: "Iran",
  },
  // city
  {
    name: "City",
    placeholder: "Tehran",
  },
];

function PaymentForm({ register, errors }) {
  return (
    <div className="grid gap-y-12 lg:gap-x-6 lg:grid-cols-6 lg:grid-rows-3 mb-16">
      {inputsOptions.map((input, index) => (
        <TextInput
          label={input.name.replace("_", " ")}
          key={index}
          id={input.name}
          placeholder={input.placeholder}
          register={{
            ...register(input.name, {
              ...input.validation,
              required: { value: true, message: "This Field Is Required" },
            }),
          }}
          error={errors[input.name]?.message}
          style={`w-full [&>input]:bg-gray-50 [&>p]:text-sm ${
            input.cols === 3 ? "lg:col-span-3" : "lg:col-span-2 lg:mt-1"
          }`}
        />
      ))}
    </div>
  );
}

export default PaymentForm;
