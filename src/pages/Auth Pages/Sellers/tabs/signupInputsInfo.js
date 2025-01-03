export default [
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
        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[^\s]{8,}$/,
        message:
          "Password needs at least one uppercase letter, lowercase letter and number",
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
