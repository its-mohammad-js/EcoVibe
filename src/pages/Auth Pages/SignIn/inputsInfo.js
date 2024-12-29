export const inputsOptions = [
  {
    name: "email",
    placeholder: "Please Enter Your Email",
    validation: {
      required: "Enter you email",
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
  {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    validation: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Minimum Length Is 8 Characters",
      },
    },
  },
];
