// sign up input validation & info
export const signUpInputs = {
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

// personal detail form inputs validation & info
export const personalFormInputs = [
  {
    name: "first_name",
    validation: {
      required: "First Name Is Required",
      minLength: {
        value: 3,
        message: "Minimum Length Is 4 Characters",
      },
    },
  },
  {
    name: "last_name",
    validation: {
      required: "Last Name Is Required",
      minLength: {
        value: 3,
        message: "Minimum Length Is 3 Characters",
      },
    },
  },
  {
    name: "address",
    placeholder: "Enter Your Address",
    validation: {
      required: "Address Is Required",
      minLength: {
        value: 10,
        message: "Minimum Length Is 10 Characters",
      },
    },
  },
];
