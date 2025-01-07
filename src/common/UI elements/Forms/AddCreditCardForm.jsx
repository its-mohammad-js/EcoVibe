import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { generateId } from "helpers";
import { updateUserData } from "authActions/updateUserData";
import TextInput from "UI/Forms/TextInput";
import { TbX } from "react-icons/tb";

// input conditions
const inputOptions = [
  {
    validation: {
      minLength: {
        value: 19,
        message: "Code Card Must Be 19 Character At Least.",
      },
      pattern: {
        value: /^[0-9-]+$/,
        message: "Invalid Card Code Format",
      },
    },
  },
  {
    name: "name",
    placeholder: "John Doe",
    validation: {
      minLength: {
        value: 4,
        message: "min length is 4 character",
      },
    },
  },
  { name: "ex_date", type: "date", cols: 2 },
  {
    name: "cvv",
    placeholder: "NN-NN",
    cols: 2,
  },
];

// provider platforms
const providers = [
  {
    label: "PayPal",
    value: {
      name: "payPal",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fpaypal%20card.jpg?alt=media&token=c64bb846-38b9-4ecc-abaf-86f5236a5c0c",
    },
  },
  {
    label: "visa card",
    value: {
      name: "visa card",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fvisa%20card.jpg?alt=media&token=4c4d17b7-00c0-4c2d-b845-c0c7583030b0",
    },
  },
];

function AddCreditCardForm({ onModalClose }) {
  // form data & hook
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();
  // necessary data & hooks
  const { personalInformation } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const { creditCards } = personalInformation;

  // add credit card to user info
  function AddCreditCard(formData) {
    // generate id for card
    const cardData = {
      ...formData,
      cardId: generateId(),
    };
    // merge it to user data
    const updatedUserData = {
      ...personalInformation,
      creditCards: creditCards?.length
        ? [...creditCards, cardData]
        : [cardData],
    };
    // update user information with new credit card
    dispatch(
      updateUserData({ data: updatedUserData, field: "personalInformation" })
    );
    // close modal
    onModalClose();
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center lg:py-8 max-h-[45rem]">
      {/* modal bg */}
      <div
        onClick={onModalClose}
        className="fixed inset-0 bg-gray-800/80 backdrop-blur-sm -z-10"
      ></div>
      {/* add credit card form */}
      <div className="bg-gray-50 rounded-md px-4 py-2 w-full h-full flex flex-col gap-y-4 lg:w-1/3 max-w-[40rem]">
        {/* header */}
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold">
            Add Card
            <p className="text-xs text-gray-500 font-medium">
              Add your debit/credit card
            </p>
          </h4>

          <button
            type="button"
            onClick={onModalClose}
            className="p-2.5 bg-gray-300 rounded-full text-xl hover:bg-gray-800 hover:text-gray-50 transition-all"
          >
            <TbX />
          </button>
        </div>
        {/* main form */}
        <form
          onSubmit={handleSubmit((e) => AddCreditCard(e))}
          className="flex flex-col justify-stretch w-full flex-1 relative"
        >
          <div className="grid grid-cols-4 grid-rows-4 gap-14 -mb-8 xl:-mb-12 [&>div>p]:text-sm">
            {/* code number */}
            <TextInput
              label="card code"
              register={register("code_number", {
                ...inputOptions[0].validation,
                required: `code number Is Required`,
              })}
              placeholder={"NNNN-NNNN-NNNN-NNNN"}
              style={`col-span-4`}
              error={errors["code_number"]?.message}
              onChange={(e) => {
                sliceCode(e, 4, "-", 20);
              }}
            />

            {inputOptions.map(
              (input, i) =>
                i > 0 && (
                  <TextInput
                    label={input.name.replace("_", " ")}
                    key={i}
                    register={register(input.name, {
                      ...input.validation,
                      required: `${input.name.replace("_", " ")} Is Required`,
                    })}
                    onChange={(e) =>
                      input?.name === "cvv" && sliceCode(e, 2, "/", 4)
                    }
                    placeholder={input.placeholder}
                    type={input.name === "ex_date" ? input.type : "text"}
                    style={`${input.cols === 2 ? "col-span-2" : "col-span-4"}`}
                    error={errors[input.name]?.message}
                  />
                )
            )}
          </div>

          {/* provider selector */}
          <div className="">
            <h6 className="text-lg font-medium mb-1">Provider :</h6>
            <Select
              {...register("provider", {
                required: "please select a provider",
              })}
              className="[&>div]:bg-transparent"
              options={providers}
              isSearchable={false}
              placeholder="Select a Provider"
              onChange={({ value }) => setValue("provider", value)}
            />

            <p className="text-sm mt-1 text-red-500 font-semibold">
              {errors?.provider?.message}
            </p>
          </div>

          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg bottom-0 absolute w-full">
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCreditCardForm;

// slice card code to XXXX-XXXX-XXXX format
function sliceCode(e, groupSize = 4, separator = "-", maxLength = 19) {
  // Remove existing separators and limit input length
  const value = e.target.value
    .replace(new RegExp(`\\${separator}`, "g"), "")
    .slice(0, maxLength);
  const regex = new RegExp(`.{1,${groupSize}}`, "g"); // Match groups of specified size
  const slicedCode = value.match(regex)?.join(separator) || ""; // Split into groups and join with separator

  e.target.value = slicedCode;
}
