import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { generateId } from "constants";
import { updateUserData } from "src/reducers/auth/userDataSlice";
import TextInput from "UI/Forms/TextInput";
import toast from "react-hot-toast";

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
    validation: {
      maxLength: {
        value: 4,
        message: "max length is 4 character",
      },
    },
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

  function AddCreditCard(formData) {
    const cardData = {
      ...formData,
      cardId: generateId(),
    };
    const updatedUserData = {
      ...personalInformation,
      creditCards: creditCards?.length
        ? [...creditCards, cardData]
        : [cardData],
    };

    dispatch(
      updateUserData({ data: updatedUserData, field: "personalInformation" })
    );

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
            <CgClose />
          </button>
        </div>
        {/* main form */}
        <form
          onSubmit={handleSubmit((e) => AddCreditCard(e))}
          className="flex flex-col justify-stretch w-full flex-1 relative"
        >
          <div className="grid grid-cols-4 grid-rows-4 gap-14 -mb-8 xl:-mb-12 [&>div>p]:text-sm">
            <TextInput
              label="card code"
              register={register("code_number", {
                ...inputOptions[0].validation,
                required: `code number Is Required`,
              })}
              placeholder={"NNNN-NNNN-NNNN-NNNN"}
              style={`col-span-4`}
              error={errors["code_number"]?.message}
              onChange={(e) => sliceCode(e)}
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
function sliceCode(e) {
  const value = e.target.value;
  const slicedCode = value
    .slice(0, 19) // Limit input length
    .replace(/([0-9]{4})([0-9]{4})([0-9]{4})()/, "$1-$2-$3-$4");

  e.target.value = slicedCode;
}
